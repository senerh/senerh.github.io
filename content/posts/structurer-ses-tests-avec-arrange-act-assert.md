---
date: '2025-01-03T14:55:46+01:00'
title: 'Structurer ses tests avec Arrange-Act-Assert'
tags: ["java", "test"]
---
## Introduction

[Dans mon précédent article] ( {{< ref "posts/nommer-ses-tests-avec-should_when" >}}), j'ai expliqué comment nommer correctement ses tests. Ici, je vais expliquer comment écrire ses tests avec le pattern **Arrange-Act-Assert**, un pattern très répandu dans le monde du développement logiciel.

## Le pattern Arrange-Act-Assert

Le principe est simple : le test est séparé en trois parties (Arrange, Act et Assert) et chacune de ses parties a sa propre responsabilité. Cela permet au final d'avoir un test lisible et bien structuré. 

### 1. Arrange

> Prépare le contexte nécessaire à l'exécution du test.

S'il y a des mocks à mettre en place, des variables à initialiser, c'est ici que ça se passe. À la fin de cette partie, nous sommes prêt à lancer le test. C'est en théorie la partie la plus compliquée dans l'écriture du test.
On peut utiliser Mockito.

### 2. Act

> Lance le test

Normalement cette partie est la plus simple et tient la plupart du temps sur une seule ligne. Etant donné que le contexte nécessaire à l'exécution du test a été initialisé dans le Arrange, il faut maintenant lancer le test et cela devrait tenir sur une seule ligne la plupart du temps.

### 3. Assert

> Vérifie que le test s'est exécuté comme prévu.

Enfin dans cette dernire partie on vérifie le résultat des tests avec des asserts.
On peut utiliser assetj (cf. articles)
On peut vérifier l'galité stricte du résultat
On peut vérifier les exceptions.
On peut vérifier que le résultat contient un attendu.
On peut vérifier que nos mocks ont été appelés. avec les paramètres attendus.

### Exemples

Voici quelques exemples qui illustrent comment nommer ses tests avec la convention **should_when**.

```java
@Test
void should_throw_exception_when_password_is_incorrect() {
    // Arrange
    AuthService authService = new AuthService();
    String username = "user";
    String incorrectPassword = "wrongPassword";

    // Act & Assert
    Assertions.assertThrows(InvalidPasswordException.class, () -> {
        authService.login(username, incorrectPassword);
    });
}

@Test
void should_calculate_total_price() {
    // Arrange
    Cart cart = new Cart();
    cart.addItem(new Item("Item1", 50.0));
    cart.addItem(new Item("Item2", 30.0));

    // Act
    double totalPrice = cart.getTotalPrice();

    // Assert
    Assertions.assertEquals(80.0, totalPrice);
}
```
On remarque que les trois parties sont clairement identifiées à l'aide des commentaires. Parfois il arrive que les parties `Arrange & Act` ou `Act & Assert` soient fusionées comme c'est le cas dans premier exemple.

## Conclusion

Le pattern **Arrange-Act-Assert** permet donc d'écrire des test lisible et bien structurés. C'est un pattern très répandu que l'on retrouve aussi sous le nom de **Given-When-Then**. Si vous ne connaissiez pas déjà, vous devriez vraiment l'essayer !
