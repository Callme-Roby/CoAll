---
title: "Glossaire"
description: "Les mots de Coall, définis en une ou deux phrases, et toujours employés dans le même sens."
order: 20
group: "Référence"
---

La documentation et l'interface emploient toujours les mêmes mots. Les termes sont regroupés par thème, dans l'ordre où on les rencontre en travaillant.

## Le canvas et les pages

### Canvas

Le plan de travail infini d'un projet, sur lequel sont posées les frames et les sections. On s'y déplace et on y zoome librement.

### Frame

Une page web posée sur le canvas, montrée en entier, de l'en-tête au pied de page. Sa hauteur suit le contenu ; seule sa largeur se règle.

### Officielle

L'état d'une frame qui est la version validée d'un écran. Elle a un contour bleu.

### Hypothèse

Une proposition : copie d'une frame officielle, ou nouvelle page à l'essai. Elle a un contour vert, une étiquette « Hypothèse » et un libellé, par exemple « Version Jean ».

### Archivée

L'état d'une frame retirée du canvas : elle n'est jamais supprimée et reste récupérable. Elle a un contour en pointillés gris et est masquée par défaut (case **Archives** du panneau de gauche).

### Section

Un cadre nommé qui regroupe des frames. Déplacer une section déplace ses frames.

### Écran et format

Un écran est une page du produit (l'accueil, les tarifs…) ; un format est sa déclinaison pour une taille d'appareil : ordinateur, tablette (768 px) ou mobile (390 px). Les formats d'un même écran sont rangés dans une section à son nom, par exemple « Accueil · tablette », « Accueil · mobile ».

## Décider

### Comparer

Afficher les différences entre une hypothèse et l'officielle (ou la page dont elle est issue) : éléments modifiés, ajoutés, retirés ou déplacés. La liste est dans le panneau Design ; le bouton **Comparer** les numérote sur le canvas.

### Promouvoir

Faire d'une hypothèse la nouvelle version officielle. L'ancienne officielle est archivée, et une décision s'inscrit dans la timeline.

### Officialiser

Promouvoir en un clic toutes les hypothèses d'une section, ou une sélection de frames. Chaque hypothèse remplace sa page officielle.

### Proposer

Ce que fait un invité sans le droit de valider : il propose une version (**Proposer cette version**), qu'une personne autorisée confirme.

### Mode Play

Le mode prototype : une frame s'ouvre en plein écran, la page défile et ses liens mènent aux autres écrans du projet. Il sert à parcourir un parcours en réunion ou avec un client.

## Travailler avec l'IA

### Barre de demande

La barre en bas du canvas (touche **/**) où l'on écrit une demande à l'IA. La demande s'applique à la cible affichée au-dessus : frame, élément, section, plusieurs frames ou projet.

### Modes Auto / Officielle / Hypothèse

Les trois modes de la barre de demande. **Auto** : l'IA choisit, et crée une hypothèse sur un écran officiel existant. **Officielle** : elle modifie directement l'écran officiel, sur choix explicite. **Hypothèse** : elle fait toujours une copie à côté.

### Règles de base (socle)

Les règles que l'IA suit toujours, non visibles et non désactivables : ne jamais modifier directement un écran officiel existant (hors mode Officielle), une section par écran, et un ensemble de bonnes pratiques de design. Elles passent avant toute autre consigne.

### Skill

Une façon de faire apprise à l'IA : une charte graphique, « toujours concevoir en mobile d'abord », des composants maison. Un skill est un dossier avec un fichier `SKILL.md`, appliqué aux projets que vous choisissez.

### Règle (Toujours / Jamais)

Une consigne d'une phrase pour l'IA, au niveau **Toujours** ou **Jamais** (« Jamais de dégradés »). Elle s'applique, comme les skills, à tous vos projets ou à une sélection.

## Composants

### Composant

Un élément d'interface réutilisable (bouton, carte, en-tête…), marqué avec **Faire un composant**. Tous les éléments qui portent le même nom de composant, dans n'importe quelle page, en sont des occurrences.

### Variante

Une déclinaison d'un composant, écrite dans la syntaxe de Figma : « Type=Primaire, État=Survol ».

### Ressources

L'onglet du panneau de gauche qui liste les composants du projet, leurs variantes et leurs occurrences, ainsi que les variables.

### Variables

Les valeurs du projet, lues dans les frames officielles : couleurs, tailles de texte, interlignages, polices, arrondis, espacements. Elles portent les mêmes noms dans Coall et dans Figma.

## Historique

### Timeline (note-timeline)

Le journal du projet : chaque demande, hypothèse, décision, modification et import, avec son auteur et l'heure. Un clic sur une étape montre le canvas à ce moment.

### Étape

Une ligne de la timeline : une action précise, signée et datée, et pour une demande à l'IA, le modèle utilisé et la durée.

### Décision

Une étape qui valide un choix : une hypothèse promue, une section officialisée, une proposition de l'IA validée.

### Version

Une copie du canvas, créée automatiquement après chaque série de modifications, à chaque import et à chaque restauration, ou à la main avec **Enregistrer**. Chaque projet en garde 30 en roulement, plus les épinglées.

### Épingler

Protéger une version avec la punaise : elle est gardée quel que soit son âge, en plus des 30 versions en roulement.

### Restaurer

Remettre le canvas dans l'état d'une version ou d'une étape. La restauration crée un nouvel état, sans effacer l'historique.

## Collaborer et appel

### Hôte

La personne qui possède le projet. Elle peut tout faire : inviter, régler les droits, restaurer, exporter, retirer un invité.

### Invité

Une personne invitée dans le projet par un lien à usage unique, valable 12 heures. Elle donne son prénom, sans créer de compte.

### Droits (modifier, valider, modifier l'officiel)

Ce que l'hôte autorise : **modifier** (barre de demande, édition directe), **valider** (propositions de l'IA, choix d'une hypothèse), **modifier l'officiel** (toucher directement aux frames officielles, désactivé par défaut).

### Écoute de l'IA

Pendant l'appel, l'IA écoute la conversation et en tire des modifications, en hypothèse sur un écran officiel. Elle n'écoute que lorsque l'indicateur **L'IA écoute** est allumé, et seulement les personnes qui ont donné leur accord.

### Sous-titres

Le texte affiché pendant l'appel, qui montre exactement ce que l'IA entend.

### Transcription

Ce qui a été dit pendant l'écoute, conservé dans le projet par prise de parole, pour les personnes qui l'ont accepté. On la trouve dans **Timeline › Transcription**.

## Figma

### Plugin Figma

Le plugin **Coall ⇄ Figma**, qui envoie les frames officielles dans Figma en calques modifiables, avec variables et composants, et qui transforme des frames Figma en pages pour Coall.

### Code de connexion

Le code créé dans **Préférences › Figma**, à coller une fois dans le plugin pour relier Figma à Coall. Il se révoque au même endroit.

### Au pixel près

Une option d'export HTML/CSS (**Au pixel près, pour Figma**) qui fige chaque page à sa largeur. Dans Figma, les calques gardent alors leur position exacte, sans auto layout.
