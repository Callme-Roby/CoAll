---
title: "Écrans et formats"
description: "Décliner un écran en versions ordinateur, tablette et mobile, et comprendre comment Coall les range."
order: 7
group: "Concevoir"
---

Un même écran existe souvent en plusieurs formats : ordinateur, tablette, mobile. Coall crée ces versions à partir de l'écran existant et les range automatiquement, côte à côte, dans une section au nom de l'écran.

## Demander une version tablette ou mobile

1. Sélectionnez la frame de l'écran (par exemple « Accueil »).
2. Appuyez sur **/** et demandez « la version tablette » ou « la version mobile ».
3. La page est **copiée**, puis **adaptée** à la nouvelle largeur.

| Format | Largeur | Nom de la frame créée |
|---|---|---|
| Tablette | 768 px | « Accueil · tablette » |
| Mobile | 390 px | « Accueil · mobile » |

<div class="capture" data-shot="section-formats">La section « Accueil » : la frame ordinateur, puis « Accueil · tablette » et « Accueil · mobile », du plus large au plus étroit.</div>

### Comment l'adaptation se fait

- Coall copie la page à la nouvelle largeur, avec le même contenu et les mêmes composants.
- L'IA écrit seulement les adaptations : grilles en une colonne, tailles, espacements, navigation.
- Les règles responsives déjà présentes dans la page (media queries) s'appliquent d'elles-mêmes à la nouvelle largeur : l'IA ne corrige que ce qui reste.
- La copie est une page indépendante. L'écran d'origine ne change pas.

Un nouveau format est créé directement, sans passer par une hypothèse, puisqu'il ne remplace rien.

> **Astuce** Pendant la préparation, la future page apparaît en pointillés violets, à la largeur du format, à côté de l'écran. Voir [Travailler avec l'IA](/docs/travailler-avec-l-ia).

## Une section par écran

C'est une règle de base de l'outil. Dès qu'un écran officiel a plusieurs formats, ils sont rangés **automatiquement** dans une section au nom de l'écran. Pour l'accueil, c'est une section « Accueil ».

- Les formats sont **en ligne, du plus large à gauche au plus étroit à droite**.
- Il y a une section par écran. Ce qui gênait (une autre page, une autre section) passe en dessous.
- Les sections d'écrans s'empilent les unes sous les autres.
- Un format ajouté plus tard (un grand écran, par exemple) prend sa place dans la ligne.

Cette règle fait partie du socle de l'outil : elle ne se désactive pas.

<div class="capture" data-shot="sections-ecrans">Une section par écran, empilées les unes sous les autres ; dans chacune, les formats vont du plus large au plus étroit.</div>

## Hypothèses et formats

Une demande sur un format officiel existant suit la règle habituelle : elle crée une hypothèse à valider. Une hypothèse promue prend la place de l'écran dans sa section d'écran. Voir [Hypothèses, comparaison et décisions](/docs/hypotheses-et-comparaison).

## Parcourir les formats en mode Play

En [Mode Play](/docs/mode-play), les formats d'un écran sont proposés en haut de l'écran (ordinateur, tablette, mobile). D'un format à l'autre, les liens restent dans le même format : depuis la version mobile de l'accueil, « Tarifs » ouvre la version mobile des tarifs si elle existe.

## Exporter à une largeur donnée

À l'export, vous pouvez garder la largeur de chaque frame ou choisir une largeur fixe (1440, 1280, 1024, 768, 390 px ou une valeur libre). Voir [Importer et exporter](/docs/importer-et-exporter).

## Voir aussi

- [Le canvas](/docs/canvas) : sections et rangement
- [Plugin Figma](/docs/plugin-figma) : les sections d'écrans arrivent rangées dans Figma
