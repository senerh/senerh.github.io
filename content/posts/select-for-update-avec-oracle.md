---
date: '2025-11-09'
title: 'select for update avec Oracle'
tags: ["oracle"]
---
Le **select for update** est une solution *normalement* simple à mettre en place. Ici je vais expliquer comment implémenter cette solution avec Oracle.
Nous allons expliquer comment implémenter cette solution avec Oracle.

## Comment ça fonctionne ?

schéma + explications

## Avec Oracle

On prend une requête classique avec ROWNUM < 1

Résultat avec 2 transactions

| Transaction 1 | Transaction 2 |
| ------------- | ------------- |
| Cell 1, Row 1 | Cell 2, Row 1 |
| Cell 1, Row 2 | Cell 1, Row 2 |

On ajoute le for update.
La fonctionnalité existe avec Oracle. Il suffit d'ajouter les mots-clés FOR UPDATE SKIP LOCKED à la fin de la requête.



### 1. Pourquoi ROWNUM ne fonctionne pas ?

> Le test doit commencer par *should*.

Cela permet d'exprimer comment le code *devrait* se comporter. Si le test échoue, on est alors capable d'identifier instantanément le comportement en erreur.

### 2. Charger la ligne côté client

### 3. Utiliser fetch size

### Exemple complet en Java

## Conclusion

Il est possible d'implémenter le **select for update** avec une base de données Oracle. Cependant on ne peut pas utiliser ROWNUM pour indiquer le nombre de ligne que l'on souhaite récupérer. Il faut gérer le chargement des lignes côté client.
