---
title: "Mode Play"
description: "Ouvrir une page en plein écran comme un prototype, naviguer d'un écran à l'autre et parcourir un parcours en réunion."
order: 8
group: "Concevoir"
---

Le mode Play ouvre une page en plein écran, comme un vrai site. Les liens et les boutons mènent aux autres écrans du projet : vous parcourez un parcours complet, sans rien préparer.

## Ouvrir le mode Play

1. Survolez une frame, ou sélectionnez-la.
2. Cliquez sur le bouton **▶**, en haut à droite de la frame.
3. La page s'ouvre en plein écran, à sa largeur.

<div class="capture" data-shot="play-survol">Au survol d'une frame, le bouton <strong>▶</strong> apparaît en haut à droite.</div>

## Ce que vous pouvez faire dans la page

- **Faire défiler** la page.
- **Survoler** les boutons et les liens : les survols réagissent.
- **Écrire** dans les champs de formulaire.
- **Cliquer** sur les liens et les boutons pour changer d'écran.

## Comment les liens mènent aux écrans

Un lien ou un bouton ouvre un autre écran du projet de trois façons :

| Par… | Exemple |
|---|---|
| **Son texte** | « Tarifs » ou « Voir les tarifs » ouvre l'écran « Tarifs » ; « Accueil » ouvre « Accueil Lumen ». |
| **Son adresse** | Un lien vers `tarifs.html` ouvre l'écran correspondant. |
| **Un lien posé par l'IA** | « relie le bouton Commencer à la page Inscription », quand le texte du bouton ne dit pas le nom de l'écran. |

Un lien vers une ancre (`#section`) fait défiler la page jusqu'à la partie visée.

À l'import d'un site à plusieurs pages, les liens entre les pages sont reliés automatiquement aux écrans importés.

> **Astuce** Pour qu'un lien de votre accueil mène quelque part, nommez simplement une page comme le lien (par exemple « Tarifs »).

### Repérer ce qui est cliquable

Cliquez **à côté** d'un lien : tout ce qui est cliquable s'affiche en violet.

- Un lien qui ne mène à aucun écran le dit (par exemple « Aucun écran ne correspond à « Contact » »).
- Un lien externe n'est pas suivi.

<div class="capture" data-shot="play-bar">Après un clic à côté d'un lien, tout ce qui se clique sur la page est entouré de violet.</div>

## La barre du haut

| Commande | Effet |
|---|---|
| **Retour** | Revient à l'écran précédent. |
| **Liste des écrans** | Ouvre directement un autre écran du projet. |
| **Formats** | Passe d'un format de l'écran à l'autre (ordinateur, tablette, mobile), quand il en a plusieurs. |
| **Recommencer** | Reprend le parcours depuis le début. |
| **Quitter** | Ferme le mode Play. **Échap** a le même effet. |

D'un format à l'autre, les liens restent dans le même format : depuis la version mobile de l'accueil, « Tarifs » ouvre la version mobile des tarifs si elle existe. Voir [Écrans et formats](/docs/ecrans-et-formats).

<div class="capture" data-shot="play-barre">La barre du mode Play : <strong>Quitter</strong>, retour, formats de l'écran, liste des écrans et <strong>Recommencer</strong>.</div>

## Lecture seule

Le prototype montre le canvas actuel, en lecture seule. Rien n'est modifié, et le clavier ne touche pas au canvas tant que le mode Play est ouvert.

## Usage conseillé

Le mode Play sert à **parcourir un parcours en réunion ou avec un client**, en partage d'écran pendant l'appel. La conception se fait dans Coall, la finition dans Figma : le mode Play reste volontairement léger.

> **À savoir** Le mode Play n'est pas un outil de prototypage avancé. Il ne gère ni transitions, ni interactions programmées.

## Voir aussi

- [Écrans et formats](/docs/ecrans-et-formats)
- [Appel, écoute de l'IA et transcription](/docs/appel-et-ecoute)
- [FAQ et limites connues](/docs/faq-et-limites)
