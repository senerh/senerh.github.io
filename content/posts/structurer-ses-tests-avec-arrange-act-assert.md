---
date: '2025-01-03'
title: 'Structurer ses tests avec Arrange-Act-Assert'
tags: ["java", "test"]
---
[Dans mon précédent article]({{<ref "posts/nommer-ses-tests-avec-should_when">}}), j'ai expliqué comment nommer les tests avec *should_when*. Aujourd'hui, je vais vous présenter **Arrange-Act-Assert**, un pattern très répandu qui permet, quant à lui, d'implémenter des tests de façon structurée.

## Le pattern Arrange-Act-Assert

Le pattern consiste à découper le test en trois parties : Arrange, Act et Assert. Chacune des parties ayant sa propre responsabilité.

### 1. Arrange

> Préparer le contexte nécessaire à l'exécution du test.

C'est, à mon avis, la partie la plus difficile à écrire. Selon le scénario testé, il faut mettre en place des mocks[^1] ou démarrer des composants techniques.

Privilégier les scénarios simples permet de maîtriser cette difficulté et de garder ainsi des tests compréhensibles.

[^1]: Les mocks sont des objets utilisés dans les tests pour simuler un comportement.

### 2. Act

> Démarrer le test

Étant donné que le contexte a été préparé dans la partie **Arrange**, nous pouvons maintenant lancer le test. Pour cela un appel simple vers une méthode suffit la plupart du temps.

### 3. Assert

> Vérifier que le test s'est exécuté comme prévu.

Enfin, la partie la plus importante de notre test, à ne surtout pas négliger ! Si un test ne s'est pas comporté comme prévu il faut explicitement le terminer en erreur à l'aide d'une assertion.

Les assertions sont nativement supportées en Java avec le mot-clé `assert`. Cependant celles-ci sont trop rudimentaires et ne donnent aucune information en cas d'erreur. À la place, je vous recommande vivement d'utiliser une bibliothèque[^2] comme [assertj](https://assertj.github.io/doc/) qui propose des assertions plus avancées et intuitives.

[^2]: En français, on dit bien «bibliothèque» et non «librarie» :student:.

### Exemples

Voici quelques exemples qui illustrent comment écrire des tests avec le pattern **Arrange-Act-Assert**.

```java
@Test
void should_calculate_total_price() {
    // Arrange
    Cart cart = new Cart();
    cart.addItem(new Item("Item1", 50.0));
    cart.addItem(new Item("Item2", 30.0));

    // Act
    double totalPrice = cart.getTotalPrice();

    // Assert
    assertThat(totalPrice).isEqualTo(80.0);
}

@Test
void should_throw_exception_when_password_is_incorrect() {
    // Arrange
    AuthService authService = new AuthService();
    String username = "user";
    String incorrectPassword = "wrongPassword";

    // Act & Assert
    assertThatThrownBy(() -> authService.login(username, incorrectPassword))
        .isInstanceOf(InvalidPasswordException.class)
        .hasMessageContaining("Invalid password");
}
```
:information_source: On remarque que les trois parties sont clairement identifiées à l'aide des commentaires. Parfois, il arrive que les parties `Act & Assert` soient fusionnées comme dans le deuxième exemple.

:information_source: Dans la pratique, je commence toujours par écrire la partie **Act** en premier. Cela me permet de générer la partie **Arrange** à l'aide de mon IDE.

## Conclusion

Le pattern **Arrange-Act-Assert** permet d'écrire des tests lisibles et bien structurés. C'est un pattern très répandu que l'on retrouve aussi sous le nom de **Given-When-Then**. Si vous ne connaissiez pas déjà, vous devriez vraiment l'essayer !
