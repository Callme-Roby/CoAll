---
title: "Importer et exporter"
description: "Faire entrer vos maquettes existantes dans Coall, et en sortir des images, des PDF, du HTML/CSS ou un compte rendu."
order: 14
group: "Aller plus loin"
---

Les maquettes de Coall sont de vraies pages HTML/CSS. Vous pouvez donc importer des pages existantes, et exporter vos frames dans les formats dont votre équipe a besoin : images, PDF, HTML/CSS pour Figma, ou un compte rendu de réunion.

## Importer

### Ce que l'on peut importer

- Un fichier `.zip` : un export de Claude Design, un export de Coall, ou un export du [plugin Figma](/docs/plugin-figma).
- Un fichier HTML.
- Plusieurs fichiers à la fois.
- Un dossier entier.

Chaque page HTML devient une **frame**. Les feuilles de style CSS, les images et les polices suivent.

### Où importer

- **Dans un projet ouvert** : bouton **Importer**, ou glissez les fichiers sur le canvas.
- **Dans un nouveau projet** : sur la page d'accueil, **Importer un projet**, ou glissez le `.zip` sur la page. Un nouveau projet est créé directement.

### Choisir la largeur des pages

Avant l'import, Coall montre la largeur des pages du fichier, par exemple « 3 pages à 1440 px, 1 page à 390 px ». Sans indication dans le fichier, la largeur est de 1440 px. Deux choix :

- **Garder ces tailles**, puis **Importer à ces tailles** ;
- **Une même largeur pour toutes les pages**, puis **Importer à … px**.

Seule la largeur se règle : la hauteur de chaque frame suit son contenu, de l'en-tête au pied de page.

<div class="capture" data-shot="import-tailles">Avant l'import : la largeur des pages trouvées, puis <strong>Garder ces tailles</strong> ou <strong>Une même largeur pour toutes les pages</strong>.</div>

### Maquettes qui dépendent de JavaScript

Une maquette dont l'affichage dépend de JavaScript est **figée** en HTML/CSS statique à l'import. Un avertissement le signale. La page garde son apparence, mais plus son comportement scripté.

### Sites à plusieurs pages

À l'import d'un site à plusieurs pages, les liens entre les pages (par exemple `tarifs.html`) sont reliés aux écrans importés. Ils fonctionnent aussitôt dans le [mode Play](/docs/mode-play).

### Quand un import ne passe pas

Coall explique pourquoi :

- **le fichier ne peut pas être lu** sur votre ordinateur (par exemple un fichier OneDrive « disponible en ligne uniquement », un téléchargement pas terminé, un fichier déplacé) : le message donne la marche à suivre ;
- **le serveur ne répond pas** : le message le dit ;
- **un fichier de l'archive est compressé dans un format non pris en charge** : il est ignoré, avec un avertissement, et le reste est importé ;
- **l'archive reste illisible** : le message l'explique et propose d'importer le dossier décompressé.

Les `.zip` créés sous Windows, avec des noms de fichiers accentués, sont lus correctement.

> **À savoir** Chaque import crée une version et une étape dans la timeline. Vous pouvez donc revenir à l'état d'avant. Voir [Historique](/docs/historique).

## Exporter les frames

L'export des frames est **réservé à l'hôte**.

Pour l'ouvrir :

- bouton **Exporter** (icône de téléchargement), en haut de l'éditeur ;
- ou bouton **Exporter**, en bas du panneau Design ;
- ou **Ctrl/⌘ + Maj + E**.

### Quoi exporter

- la sélection ;
- la section sélectionnée ;
- les frames officielles ;
- tout le projet.

### Dans quel format

| Format | Contenu | Usage |
|---|---|---|
| **PNG**, en 1× ou 2× | Une image par frame. Plusieurs frames donnent un `.zip` d'images. | Une présentation, un tableau blanc, un document. |
| **PDF** | Une page par frame, à sa taille, avec des textes sélectionnables. | Envoyer une revue à un client. |
| **HTML/CSS** (`.zip`) | Des pages autonomes, avec leurs images et leurs polices. | Réimporter dans Coall (noms, hypothèses et tailles gardés), ou ouvrir dans Figma avec le plugin. |

<div class="capture" data-shot="export">La fenêtre <strong>Exporter des frames</strong>, ici en HTML/CSS à largeur fixe, avec <strong>Au pixel près, pour Figma</strong>.</div>

### Largeur

- **Largeur de chaque frame** (par défaut) : la largeur actuelle est indiquée à droite, par exemple « 1440 px » ou « 390 à 1440 px ».
- **Largeur fixe** : 1440, 1280, 1024, 768, 390 px, ou une valeur libre de 240 à 3840 px. Toutes les frames sont rendues à cette largeur, en PNG, en PDF et en HTML/CSS. La hauteur suit le contenu, comme sur le canvas.

Le réglage est gardé pour l'export suivant.

### Au pixel près, pour Figma

L'option **Au pixel près, pour Figma** (HTML/CSS) est cochée d'office avec une largeur fixe. Chaque page est figée à sa largeur : elle s'affiche de la même façon dans n'importe quel navigateur ou outil. Dans le plugin Figma, chaque calque garde alors sa position exacte, sans réorganisation.

Les frames élargies ou rétrécies gardent leurs écarts, sections comprises.

> **Astuce** Pour envoyer vos écrans dans Figma, la [connexion directe du plugin](/docs/plugin-figma) évite de passer par un `.zip`. L'export HTML/CSS reste utile pour un transfert ponctuel ou au pixel près.

## Exporter le compte rendu

Le **compte rendu** garde une trace écrite du travail : les étapes de la timeline [à confirmer]. Comme l'export des frames, il est **réservé à l'hôte**. Il s'exporte depuis le haut de l'onglet **Timeline** :

- en **Markdown** (`.md`) ;
- en **PDF**, avec les captures des frames officielles.

Lorsque la transcription a été conservée, elle y figure, chaque phrase avec l'étape qu'elle a créée.
