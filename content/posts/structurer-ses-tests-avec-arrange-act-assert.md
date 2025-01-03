---
date: '2025-01-03'
draft: true
title: 'Structurer ses tests avec Arrange-Act-Assert'
tags: ["java", "test"]
---
## Introduction

[Dans mon précédent article]({{<ref "posts/nommer-ses-tests-avec-should_when">}}), j'ai expliqué comment nommer correctement ses tests. Ici, je vais vous présenter **Arrange-Act-Assert**, un pattern cette fois ci très répandu qui permet de structurer ses tests.

## Le pattern Arrange-Act-Assert

Le principe consiste à découper le test en trois parties (Arrange, Act et Assert). Chacunes des parties ayant sa propre responsabilité, cela permet d'obtenir un code lisible et bien structuré. 

### 1. Arrange

> Prépare le contexte nécessaire à l'exécution du test.

C'est à mon avis la partie la plus difficile à écrire. Il faut initialiser l'ensemble des variables nécessaires à l'exécution du test. Parfois cela peut nesséciter la mise en place de mocks ou le démarrage de composants techniques selon la compléxité du scénario testé. On privilégie donc les "petits" scénarios car ils sont logiquement plus simples à tester que les scénarios évolués.

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

Le pattern **Arrange-Act-Assert** permet donc d'écrire des tests lisibles et bien structurés. C'est un pattern très répandu que l'on retrouve aussi sous le nom de **Given-When-Then**. Si vous ne connaissiez pas déjà, vous devriez vraiment l'essayer !
