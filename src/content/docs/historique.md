---
title: "Historique"
description: "La timeline garde chaque étape du projet, les versions permettent de revoir et de restaurer le canvas tel qu'il était."
order: 13
group: "Collaborer"
---

Dans Coall, rien n'est perdu. Deux outils gardent la mémoire du projet, dans le panneau de droite :

- la **Timeline** (ou note-timeline) : le journal de tout ce qui s'est passé, étape par étape ;
- les **Versions** : des copies du canvas, que l'on peut consulter et restaurer.

## La timeline

L'onglet **Timeline** liste chaque **étape** du projet :

- les demandes faites à l'IA, à l'écrit ou à la voix ;
- les hypothèses créées ;
- les décisions (une hypothèse promue, une section officialisée, une proposition validée) ;
- les modifications faites à la main ;
- les imports.

Chaque étape indique son **auteur**, l'**heure**, et pour une demande à l'IA le **modèle utilisé** et la **durée** de traitement.

<div class="capture">Capture : onglet Timeline, avec une demande à l'IA (auteur, heure, modèle, durée) et une décision</div>

### Revoir le canvas à une étape

Cliquez sur une étape : le canvas s'affiche tel qu'il était à ce moment, en lecture seule. Vous pouvez alors le **restaurer** (voir plus bas).

### Ce que la timeline signale aussi

- **Vos retouches gardées** : si vous avez modifié une page pendant que l'IA travaillait dessus, l'étape le précise, par exemple « (retouches faites pendant la génération gardées : 2) ». Voir [Travailler avec l'IA](/docs/travailler-avec-l-ia).
- **Le lien avec la transcription** : une étape née d'une phrase dite pendant l'appel porte un lien **Transcription**, qui mène à ces phrases.
- **Annuler** : une modification de l'IA s'annule depuis la timeline.

### La transcription

L'onglet **Timeline › Transcription** montre ce qui a été dit pendant l'appel, par prise de parole (qui, à quelle heure), pour les personnes qui ont accepté sa conservation.

- Une phrase **soulignée** a créé une étape. Au survol, une carte montre l'étape et un aperçu de la version créée à ce moment. Au clic, cette version s'ouvre.
- Une autre phrase ouvre le canvas tel qu'il était quand elle a été dite.

Le détail (accords, désactivation par l'hôte) est dans [Appel, écoute de l'IA et transcription](/docs/appel-et-ecoute).

## Les versions

L'onglet **Versions** liste les copies du canvas.

### Quand une version est créée

- **Automatiquement** : après chaque série de modifications, à chaque import et à chaque restauration.
- **À la main** : bouton **Enregistrer**. Une version enregistrée ainsi est **épinglée** d'office.

### Consulter une version

Cliquez sur une version : elle s'affiche en **lecture seule**, avec un bandeau qui le rappelle. Vous pouvez la parcourir sans rien changer au projet.

### Restaurer

**Restaurer** remet le canvas dans l'état de cette version. La restauration **crée un nouvel état** : l'historique n'est pas effacé, et l'état d'avant la restauration reste lui-même consultable.

> **Astuce** Vous pouvez aussi revenir en arrière en le demandant à l'IA, à l'écrit ou à la voix : « rétablis la version jaune », « remets en hypothèse la version d'avant », « la page contact comme ce matin ». Voir [Travailler avec l'IA](/docs/travailler-avec-l-ia).

<div class="capture">Capture : onglet Versions, avec le compteur « 18 / 30 versions · 2 épinglées », le filtre Épinglées et une punaise au survol</div>

## 30 versions en roulement, plus les épinglées

Chaque projet garde ses **30 dernières versions**. À la 31e, la plus ancienne laisse sa place, puis la suivante, et ainsi de suite. La place prise par un projet reste ainsi bornée.

### Épingler une version

Survolez une version et cliquez sur la **punaise**. Une version **épinglée** est gardée quel que soit son âge, en plus des 30.

- En haut de la liste : le compteur (par exemple « 18 / 30 versions · 2 épinglées ») et un filtre **Épinglées**.
- La version qui partira à la prochaine modification est signalée « prochaine à sortir ».
- Désépingler une version plus ancienne que les 30 dernières la retire de l'historique. Une confirmation le rappelle. C'est réservé à l'hôte.

> **Astuce** Épinglez les versions qui comptent : celle présentée au client, celle validée en fin de réunion. Plus on épingle, plus le projet pèse : gardez les épingles pour les moments importants.

### Quand une version sort de l'historique

Une étape de la timeline dont la version est sortie de l'historique reste lisible, avec la mention « Version sortie de l'historique ». On ne peut plus la consulter ni la restaurer.

> **À savoir** Seules les copies du canvas sortent de l'historique. Les **frames**, elles, ne sont jamais supprimées : une frame retirée est archivée, et reste récupérable (case **Archives** du panneau de gauche).
