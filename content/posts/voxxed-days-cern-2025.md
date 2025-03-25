---
draft: true
date: "2025-01-18"
title: "Voxxed Days CERN 2025"
cover:
  image: /images/voxxed-days-cern-2025.png
  caption: "Source : [cern.voxxeddays.com](https://cern.voxxeddays.com/)"
tags: ["conférence"]
---

Cette année j'ai eu la chance de participer à la 4ᵉ édition des Voxxed Days CERN. Je vous partage ici quelques notes sur les conférences auxquelles j'ai assisté, ainsi que mes impressions sur cette journée.

### La qualité logicielle avec ACRUMEN

Pour cette première conférence, Dave Aronson[^1] a présenté sa définition de la qualité logicielle à travers le mot **ACRUMEN**[^2]. L'accronyme fonctionne aussi en français alors profitons-en :

- **A**pproprié : répond aux besoins du client
- **C**orrect : fonctionne comme attendu
- **R**obuste : difficile à faire dysfonctionner
- **U**tilisable : facile à utiliser pour les utilisateurs finaux
- **M**aintenable : facile à faire évoluer pour les développeurs
- **E**fficace : consomme peu de ressources
- **N**othing : La dernière lettre est là seulement pour compléter l'accronyme.

Je trouve que l'idée de distinguer 6 critères pour évaluer la qualité d'un logiciel est intéressante. Peut-être qu'on pourrait aller plus loin en donnant les moyens d'évaluer chacun de ces critères pour obtenir au final un indice de qualité logicielle.

[^1]: Retrouvez Dave Aronson sur [LinkedIn](https://www.linkedin.com/in/davearonson/).
[^2]: Retrouvez la définition officielle de ACRUMEN sur [codosaur.us](https://www.codosaur.us/acrumen).

### Conteneuriser une application Java

Il existe plusieurs manière de construire une image docker pour une application java. Matthias Haeussler[^3] en a présenté plsuieurs qu'on peut résumer dans un tableau :

|  | Dockerfile (simple) | Dockerfile (multistage) | Dockerfile (jlink/jdeps) | Jib | Buildpacks/Paketo |
| --- | :-: | :-: | :-: | :-: | :-: |
| Rapidité | | | | :star_struck: | |
| Taille | | | :star_struck: | | |
| Structure | | :slightly_smiling_face: | :slightly_smiling_face: | :star_struck: | :star_struck: |
| Standardisation | | :slightly_smiling_face: | :slightly_smiling_face: | :slightly_smiling_face: | :star_struck: |
| Simplicité | :slightly_smiling_face: | | | :star_struck: | :slightly_smiling_face: |
| Sécurité | | :slightly_smiling_face: | :star_struck: | | :slightly_smiling_face: |


[^3]: Retrouvez Matthias Haeussler sur [Bluesky](https://bsky.app/profile/maeddes.bsky.social).

### Développer des outils AAP en Java

Stephan Janssen et Alfonso² Peterssen ont parlé de la nouvelle ère de l'AAP. Ils ont montré que Java permet de développer des outils d'IA comme DevoxxGenie ou encore llama3.java.

### Améliorier les revues de code

Paco van Beckhoven parle de plusieurs points pour améliorer les code reviews.

### Les tests de mutation

De retour avec Dave Aronson[^1] qui nous parle cette fois-ci des tests de mutation. J'avais envie d'assister à cette conférence car j'ai moi-même présenté ce sujet la veille dans le cadre de mon travail ! Heureusement pour moi, pas de surprise pendant la présentation. Je compte écrire un article à part entière sur le sujet, mais pour ceux que ça intéresse vous trouverez une expliquation [ici]().

### Les bases du développement sécurisé en Java

Brian Vermeer

3 failles : injection SQL (utiliser un prepared statment)
upload de fichier basé sur la metadata originalFileName
injection de code avec snake_yaml 1.x

### Le “Platform Engineering“

Grace Jansen et Maarten Vandeperre

Ce qu'est une équipe plateforme, ce qu'elle propose comme service, les outils sur lesquelles elle s'appuie.

### Les annotations Java

Álvaro Sánchez-Mariscal Arnaiz

Pourquoi il ne faut pas utiliser Lombok
