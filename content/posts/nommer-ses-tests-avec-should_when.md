---
date: '2024-12-28'
title: 'Nommer ses tests avec should_when'
tags: ["java", "test"]
---
Qui n'est jamais tombé sur un test incompréhensible ? Même si cela peut sembler simple, on peut rencontrer des difficultés à nommer pertinemment ses tests. Avec le temps, j'ai adopté une convention de nommage que je trouve efficace et que je souhaite vous partager dans cet article.

## La convention should_when

**should_when** est une convention permettant de nommer les tests. Bien que ce nom ne soit ni officiel ni répandu, je trouve qu'il est pertinent car il fait ressortir les trois points clés de la convention : *should*, *_* et *when*.

### 1. should

> Le test doit commencer par *should*.

Cela permet d'exprimer comment le code *devrait* se comporter. Si le test échoue, on est alors capable d'identifier instantanément le comportement en erreur.

### 2. _ (snake_case)

> Le test doit être écrit en *snake_case*.

Le *[snake_case](https://wikipedia.org/wiki/Snake_case)* améliore la lisibilité du test, surtout lorsque le nom de la méthode est long.

Étant donné qu'il s'agit uniquement de tests, qui ne devraient être appelés nulle part, nous pouvons déroger au *[camelCase](https://wikipedia.org/wiki/camel_case)*  (la convention en Java) sans impacter le reste du code.

### 3. when

> Le test peut contenir une partie *when*.

Cette dernière partie dans le nom du test est *optionnelle*. Elle permet d'indiquer dans quel cas le comportement décrit par le *should* doit être vérifié.

### Exemples

Voici quelques exemples qui illustrent comment nommer ses tests avec la convention **should_when**.

```java
@Test
void should_throw_exception_when_password_is_incorrect() {...}

@Test
void should_retry_connection_when_network_is_unavailable() {...}

@Test
void should_apply_discount_when_user_has_coupon() {...}

@Test
void should_calculate_total_price() {...}

@Test
void should_not_delete_record_from_database() {...}
```
:information_source: On remarque que les trois points clés sont bien respectés :
* les tests commencent par *should*,
* les tests sont écrits en *snake_case*,
* les tests ont parfois une partie *when*.

## Conclusion

La convention **should_when** permet donc de nommer efficacement les tests. Elle est facile à comprendre et s'adapte à tous les scénarios. Pour les adeptes du français, vous pouvez vous l'approprier en la traduisant par **devrait_lorsque**.
