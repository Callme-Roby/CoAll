---
title: "Bienvenue dans Coall"
description: "Ce qu'est Coall, à quoi il sert, et le vocabulaire de base pour bien démarrer."
order: 1
group: "Démarrer"
---

Coall est une application web de conception collaborative pilotée par la voix : une visio intégrée à un canvas infini. Pendant l'appel, une IA écoute la conversation, avec l'accord de chacun, et applique les modifications de la maquette au fil de la discussion. Tout est non destructif : les propositions arrivent en hypothèses à valider, et une timeline garde chaque étape.

## Le nom

« Co » de collaboratif et coopérer, « all » pour tous, ensemble. Accolés, on entend *call* : l'appel.

## Pour qui

Coall s'adresse aux designers, aux équipes produit, aux agences et à leurs clients, qui conçoivent ensemble des écrans (sites, applications) en réunion.

## Sa place dans votre flux de travail

Coall sert à **concevoir et décider ensemble**. La finition se fait ensuite dans **Figma** : un plugin y envoie les écrans validés sous forme de calques modifiables, avec variables et composants (voir [Plugin Figma](/docs/plugin-figma)).

Les maquettes sont de vraies pages **HTML/CSS**, affichées telles quelles. Elles peuvent être importées, dessinées à la main ou générées par l'IA.

<div class="capture">Capture : vue d'ensemble d'un projet ouvert, avec le canvas au centre, quelques frames officielles (contour bleu) et une hypothèse (contour vert), le panneau d'appel à droite et la barre de demande en bas</div>

## Ce que Coall vous permet de faire

- **Parler, et laisser l'IA dessiner** : pendant l'appel, une idée dite à voix haute devient une proposition sur le canvas. Des sous-titres montrent ce que l'IA entend.
- **Ne rien perdre, ne rien imposer** : l'IA ne touche jamais directement à un écran validé. Elle propose une hypothèse, que l'équipe compare et valide. Les frames ne sont jamais supprimées, seulement archivées. Chaque étape est dans la timeline, avec qui, quand et pourquoi.
- **Voir ce qui a bougé** : chaque hypothèse se compare à l'officielle, différence par différence.
- **Appliquer votre charte et vos règles** : des skills et des règles s'appliquent à toutes les demandes. Un assistant aide à les créer à partir de votre charte en PDF.
- **Aller jusqu'à Figma** : les écrans officiels partent dans Figma en calques modifiables, avec variables, composants et variantes, et restent synchronisés.
- **Travailler à plusieurs** : présence en temps réel, commentaires, suivi du point de vue d'un participant, droits par personne, invités sans compte.

## Le vocabulaire de base

### Projet et canvas

Un **projet** contient un **canvas** infini. Sur ce canvas sont posées des **frames**.

### Frame

Une **frame** est une page web, montrée en entier, de l'en-tête au pied de page. Sa hauteur suit le contenu ; seule sa largeur se règle.

### Les trois états d'une frame

Chaque frame a un état, reconnaissable à sa couleur.

| État | Apparence | Rôle |
|---|---|---|
| **Officielle** | Contour bleu | La version validée d'un écran. |
| **Hypothèse** | Contour vert, étiquette « Hypothèse », libellé (ex. « Version Jean ») | Une proposition : copie d'une officielle, ou nouvelle page à l'essai. |
| **Archivée** | Pointillés gris, masquée par défaut | Jamais supprimée, toujours récupérable. |

<div class="capture">Capture : trois frames côte à côte, une officielle (contour bleu), une hypothèse (contour vert avec l'étiquette « Hypothèse » et le libellé « Version Jean ») et une archivée (pointillés gris)</div>

### Section

Une **section** est un cadre nommé qui regroupe des frames.

### Timeline et versions

La **timeline** est le journal de tout ce qui s'est passé dans le projet. Les **versions** sont des copies du canvas qu'on peut consulter et restaurer (voir [Historique](/docs/historique)).

### Hôte et invités

L'**hôte** est la personne qui possède le projet. Les **invités** sont les personnes qu'il invite (voir [Collaborer](/docs/collaborer)).

> **À savoir** — Coall n'est pas encore hébergé en ligne. L'accès à l'application se fera depuis `[URL de l'app]` [à confirmer].

## Et ensuite

- Pour une première prise en main guidée : [Prise en main en 5 minutes](/docs/prise-en-main).
- Pour tous les termes employés dans cette documentation : [Glossaire](/docs/glossaire).
