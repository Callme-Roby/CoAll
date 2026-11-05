---
title: "Modifier une page à la main"
description: "Entrer dans une frame, éditer ses éléments, utiliser le panneau Design et le panneau Calques, annuler et rétablir."
order: 4
group: "Concevoir"
---

Vous n'êtes pas obligé de passer par l'IA. Chaque page se retouche directement, élément par élément, à la manière d'un outil de design simplifié. Ce chapitre décrit l'édition des éléments, le panneau **Design** et le panneau **Calques**.

## Entrer dans une frame

Une frame sélectionnée se manipule en bloc. Pour travailler sur ses éléments, il faut entrer dedans.

1. Double-cliquez dans la frame, ou sélectionnez-la et appuyez sur **Entrée**.
2. Survolez la page : l'élément sous le pointeur est mis en évidence.
3. Cliquez sur un élément (un titre, un bouton, un bloc) pour le sélectionner.
4. Appuyez sur **Échap** pour remonter à l'élément parent. Appuyez à nouveau pour sortir de la frame.

<div class="capture" data-shot="edition-frame">Frame ouverte en édition : le bouton survolé est entouré de pointillés, le titre sélectionné d'un trait plein avec sa balise, et le panneau <strong>Design</strong> montre ses propriétés.</div>

> **À savoir** Sans le droit **modifier l'officiel**, les frames officielles ne se modifient pas à la main. Vous pouvez toujours en créer une hypothèse et travailler sur la copie. Voir [Collaborer](/docs/collaborer).

## Modifier un texte

1. Double-cliquez sur un texte : il devient modifiable directement sur la page.
2. Écrivez.
3. Appuyez sur **Entrée** pour valider, ou sur **Échap** pour annuler.

## Le panneau Design d'un élément

Quand un élément est sélectionné, le panneau **Design**, à droite, affiche ses propriétés.

| Groupe | Ce que vous réglez |
|---|---|
| **Texte** | Le contenu du texte. |
| **Typographie** | Police, taille, graisse, interligne… |
| **Couleurs** | Couleur du texte. |
| **Fond** | Couleur de fond de l'élément. |
| **Dimensions** | Largeur et hauteur. |
| **Marges** | Espacements intérieurs et extérieurs. |
| **Bordures** | Épaisseur, couleur, arrondi. |
| **Décalage** | Position de l'élément par rapport à sa place normale. |
| **Classe et style CSS** | La classe de l'élément et son style CSS, pour un réglage précis. |

[à confirmer : intitulés exacts des groupes et des champs dans le panneau]

### Ajuster une valeur au clavier

Dans les champs numériques (taille, marges, largeur…) :

- **↑** / **↓** augmentent ou diminuent la valeur d'une unité ;
- avec **Maj**, le pas est de 10.

Le champ garde le focus : l'élément ne se déplace pas. Les valeurs sans unité (graisse, opacité, interligne, X/Y) restent sans « px ».

> **Astuce** En haut du panneau **Design** d'un élément, **Faire un composant** le marque comme composant réutilisable. Voir [Composants et ressources](/docs/composants-et-ressources).

## Insérer, déplacer, dupliquer, supprimer

### Insérer un élément

Vous pouvez insérer dans la page :

- un **titre** ;
- un **texte** ;
- un **bouton** ;
- un **bloc** ;
- une **image**.

[à confirmer : emplacement exact des commandes d'insertion dans l'interface]

### Réorganiser et gérer les éléments

| Action | Comment |
|---|---|
| **Déplacer dans l'ordre** | Faites monter ou descendre l'élément dans l'ordre de la page. |
| **Décaler** | Flèches du clavier (Maj : ×10). |
| **Dupliquer** | Ctrl/⌘ + D. |
| **Supprimer** | Suppr ou Retour arrière. |
| **Copier, couper, coller** | Ctrl/⌘ + C, X, V. L'élément se colle juste après l'élément sélectionné, y compris dans une autre frame ou un autre projet ouvert dans le même navigateur. |

## Le panneau Calques

L'onglet **Calques**, dans le panneau de gauche, montre l'arbre des éléments de la frame sélectionnée : chaque bloc, titre, bouton et image, dans l'ordre de la page.

- Cliquez sur un calque pour sélectionner l'élément.
- Double-cliquez sur un calque : la vue zoome dessus et le sélectionne.
- Le champ de recherche en haut du panneau filtre aussi cet arbre.
- Un composant est signalé par une icône violette.

<div class="capture" data-shot="calques">Onglet <strong>Calques</strong> : les frames, puis l'arbre des éléments de la frame sélectionnée. Le bouton, marqué comme composant, porte l'icône violette.</div>

## Le panneau Design d'une frame

Quand c'est une frame entière qui est sélectionnée, et non un élément, le panneau **Design** affiche ses réglages :

| Réglage | Rôle |
|---|---|
| **Nom** | Le nom de la frame, affiché au-dessus d'elle sur le canvas. |
| **Libellé** | Pour une hypothèse : le nom de la version (« Version Alice »). |
| **Position** | Les coordonnées de la frame sur le canvas. |
| **Largeur** | La largeur de la page. La hauteur suit le contenu. |
| **Statut** | Officielle, hypothèse ou archivée. |
| **Origine** | D'où vient la frame (par exemple la page dont une hypothèse est issue) [à confirmer]. |

Il propose aussi quatre boutons :

- **Créer une hypothèse** : une copie verte de la frame, placée à côté (voir [Hypothèses, comparaison et décisions](/docs/hypotheses-et-comparaison)) ;
- **Dupliquer la frame** ;
- **Archiver** ;
- **Exporter** (voir [Importer et exporter](/docs/importer-et-exporter)).

<div class="capture" data-shot="design-frame">Panneau <strong>Design</strong> d'une frame officielle : nom, position et taille, <strong>Créer une hypothèse</strong>, <strong>Dupliquer la frame</strong>, <strong>Archiver</strong>, statut, origine et <strong>Exporter</strong>.</div>

## Annuler et rétablir

- **Ctrl/⌘ + Z** : annuler.
- **Ctrl/⌘ + Maj + Z** : rétablir.

Pour revenir plus loin en arrière, utilisez la timeline et les versions : voir [Historique](/docs/historique).

## Voir aussi

- [Le canvas](/docs/canvas)
- [Travailler avec l'IA](/docs/travailler-avec-l-ia)
- [Raccourcis clavier](/docs/raccourcis)
