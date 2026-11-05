---
title: "Le canvas"
description: "Se déplacer, utiliser les outils, organiser les frames et les sections, sélectionner, aligner et rechercher sur le canvas."
order: 3
group: "Concevoir"
---

Le canvas est le plan de travail infini de chaque projet. Vous y posez vos frames, les regroupez en sections et les organisez comme sur une table. Ce chapitre décrit la navigation, les outils et toutes les manipulations des frames.

## L'espace de travail

Un projet ouvert se compose de quatre zones :

- **l'en-tête**, en haut : nom du projet, zoom, et tout à droite les personnes présentes, **Inviter** et **Démarrer l'appel** ;
- **le panneau de gauche** : onglets **Calques** et **Ressources** ;
- **le canvas**, au centre, avec la barre d'outils verticale à gauche et la barre de demande à l'IA en bas ;
- **le panneau de droite** : onglets **Design**, **Timeline**, **Versions**, **Commentaires** et **Personnes**.

<div class="capture">Capture : éditeur complet avec l'en-tête, le panneau de gauche (Calques), la barre d'outils verticale, le canvas et ses frames, la barre de demande en bas et le panneau de droite (Design)</div>

## Se déplacer et zoomer

### Se déplacer

- Glissez sur le fond avec l'outil **Main (H)**.
- Maintenez **Espace** et glissez, quel que soit l'outil actif.
- Utilisez la molette, ou glissez avec le bouton du milieu de la souris.

> **À savoir** Avec l'outil **Sélection**, glisser sur le fond trace un rectangle de sélection : il ne déplace pas la vue.

### Zoomer

- Pincez sur le trackpad, ou utilisez **Ctrl + molette**.
- Dans l'en-tête : boutons **−**, pourcentage, **+** et « tout afficher ».
- Au clavier :

| Raccourci | Effet |
|---|---|
| Maj + 1 | Tout afficher |
| Maj + 2 | Zoomer sur la sélection (frames, section ou élément) |
| Ctrl/⌘ + 0 | Zoom à 100 % |
| Ctrl/⌘ + + / Ctrl/⌘ + − | Zoomer, dézoomer |

Un double-clic sur une frame ou une section dans le panneau **Calques** la fait remplir la vue. Sur un élément (un texte, un bloc), la vue zoome directement dessus et le sélectionne.

### La minimap

La minimap montre l'ensemble du canvas et la zone affichée. Elle s'efface après quelques secondes sans mouvement et revient dès que la vue bouge.

## La barre d'outils

La barre verticale, au bord gauche du canvas, regroupe cinq outils.

| Outil | Raccourci | Usage |
|---|---|---|
| **Sélection** | V | Sélectionner et déplacer des frames ; glisser sur le fond pour tracer un rectangle de sélection. |
| **Main** | H | Se déplacer dans le canvas. |
| **Frame** | F | Glisser pour dessiner une page, ou cliquer pour poser une page de taille standard. |
| **Section** | Maj + S | Glisser pour entourer des frames : elles font alors partie de la section. |
| **Commentaire** | C | Poser un commentaire sur un élément ou une page (voir [Collaborer](/docs/collaborer)). |

Le curseur prend l'icône de l'outil actif : une flèche pour la Sélection, une main ouverte qui se ferme pendant le glisser, un viseur pour Frame et Section, une bulle pour Commentaire.

Après avoir dessiné une frame ou une section, l'outil revient à la Sélection. **Échap** annule l'outil en cours.

## Les frames

Une frame est une page web montrée en entier, de l'en-tête au pied de page. Sa hauteur suit le contenu ; seule la largeur se règle.

### Manipuler une frame

| Action | Comment |
|---|---|
| **Déplacer** | Glissez la frame. Au clavier : flèches (Maj : ×10). |
| **Redimensionner** | Tirez sur ses bords pour changer la largeur. La hauteur suit le contenu. |
| **Renommer** | Double-cliquez sur son nom. |
| **Dupliquer** | Ctrl/⌘ + D, ou **Dupliquer la frame** dans le panneau **Design**. |
| **Archiver** | Suppr ou Retour arrière, ou **Archiver** dans le panneau **Design**. |
| **Désarchiver** | Cochez **Archives** dans le panneau de gauche pour afficher les frames archivées, puis cliquez sur **Désarchiver**. |

> **À savoir** Une frame n'est jamais supprimée. Supprimer, couper ou archiver une frame la range dans les archives, d'où vous pouvez toujours la récupérer.

<div class="capture">Capture : panneau de gauche avec la case « Archives » cochée, une frame archivée en pointillés gris sur le canvas et le bouton « Désarchiver »</div>

### Sélectionner plusieurs frames

- **Maj + clic** ou **Ctrl/⌘ + clic** : ajouter ou retirer une frame de la sélection. Cela fonctionne aussi dans la liste des frames du panneau de gauche.
- **Rectangle de sélection** : avec l'outil Sélection, glissez sur le fond autour des frames.
- **Ctrl/⌘ + A** : tout sélectionner.

Les frames sélectionnées se déplacent ensemble. Le panneau de droite propose alors de :

- **créer une section** autour d'elles ;
- **créer une hypothèse** de toutes ces pages ;
- les **officialiser** ;
- les **archiver**.

Une sélection de plusieurs frames devient aussi la cible de la barre de demande (« Sur 3 frames ») : l'IA ne modifie que celles-ci. Voir [Travailler avec l'IA](/docs/travailler-avec-l-ia).

## Les sections

Une section est un cadre nommé qui regroupe des frames.

### Créer une section

- Sélectionnez des frames, puis **Ctrl/⌘ + Alt + G**, ou **Créer une section** dans le panneau de droite.
- Ou choisissez l'outil **Section (Maj + S)** et glissez autour des frames.

### Travailler avec une section

- **Déplacer** : glisser la section déplace toutes ses frames.
- **Ajouter une frame** : glissez une frame dans la section ; elle en fait partie.
- **Renommer** : double-cliquez sur le titre de la section.
- **Redimensionner** : utilisez ses poignées.
- **Retirer la section** : supprime le cadre et garde les frames.

Dans le panneau de gauche, la liste des frames les montre regroupées sous leur section.

> **Astuce** Une section sélectionnée devient la cible de la barre de demande (« Sur la section … »). L'IA connaît aussi les noms des sections : vous pouvez parler de « la section de Jean ».

Certaines sections sont créées automatiquement : les sections d'hypothèses sur plusieurs pages (voir [Hypothèses, comparaison et décisions](/docs/hypotheses-et-comparaison)) et les sections d'écran qui regroupent les formats ordinateur, tablette et mobile (voir [Écrans et formats](/docs/ecrans-et-formats)).

## Le magnétisme

En déplaçant une frame, elle se cale :

- sur les bords et les centres des autres frames ;
- sur l'écart d'une rangée : à côté de frames espacées de 120, elle se place à 120 de sa voisine, alignée ;
- au milieu de deux frames.

Des repères rouges montrent les alignements et les écarts. Le magnétisme est léger : au-delà de quelques pixels, la frame se déplace librement.

Maintenez **Ctrl/⌘** pendant le déplacement pour l'ignorer.

<div class="capture">Capture : une frame en cours de déplacement au bout d'une rangée, avec les repères rouges d'alignement et l'écart « 120 » affiché</div>

## Aligner et répartir

Avec plusieurs frames sélectionnées, une barre d'icônes apparaît en haut du panneau de droite.

- **Aligner** : à gauche, au centre, à droite, en haut, au milieu, en bas. Raccourcis : **Alt + A · H · D · W · V · S** [à confirmer : correspondance exacte entre chaque touche et chaque alignement].
- **Répartir** : à partir de 3 frames, écarts égaux à l'horizontale ou à la verticale. Raccourcis : **Alt + Maj + H** (horizontale) et **Alt + Maj + V** (verticale).

## Copier, couper, coller

| Raccourci | Sur des frames | Sur un élément |
|---|---|---|
| Ctrl/⌘ + C | Copie les frames. | Copie l'élément (titre, bouton, bloc…). |
| Ctrl/⌘ + X | Archive les frames (rien n'est supprimé). | Retire l'élément de sa page. |
| Ctrl/⌘ + V | La copie se place à droite des originales, sans chevaucher une autre frame, puis elle est sélectionnée. | L'élément se colle juste après l'élément sélectionné, ou à la fin de la page sélectionnée. |

Un élément copié peut être collé dans une autre frame, ou dans un autre projet ouvert dans le même navigateur.

Dans un champ de texte, ou avec du texte surligné, Ctrl/⌘ + C et Ctrl/⌘ + V gardent leur effet habituel.

## Rechercher

### Dans le panneau de gauche

Le champ en haut du panneau de gauche filtre les frames et les sections par leur nom. Il filtre aussi l'arbre des calques de la frame sélectionnée, en dépliant les branches utiles.

### Sur tout le canvas

**Ctrl/⌘ + F**, ou la loupe dans l'en-tête, ouvre la recherche sur tout le canvas : noms des frames et des sections, et textes de toutes les pages.

- **↑** / **↓** : parcourir les résultats.
- **Entrée** : aller au résultat (Entrée à nouveau : le suivant).
- **Échap** : fermer.

Depuis le panneau de gauche, « Chercher … dans les pages » ouvre cette recherche avec votre mot.

## Plier et déplier les panneaux

Les deux panneaux se replient pour laisser toute la place au canvas :

- avec le bouton situé dans le panneau lui-même (à côté de **Archives** à gauche, au bout des onglets à droite) ;
- avec **Ctrl/⌘ + \\**, qui masque ou affiche les panneaux.

Replié, un panneau laisse un bouton flottant au bord du canvas pour le rouvrir : **Écrans** à gauche (frames et calques), **Design · Timeline** à droite. La disposition est mémorisée.

> **À savoir** Sur tablette, ou dans une fenêtre de moins de 1 200 px de large, les panneaux sont repliés à l'ouverture d'un projet.

## L'état de la connexion

Quand tout va bien, rien ne s'affiche. Un badge apparaît dans l'en-tête seulement en cas de souci :

| Badge | Signification |
|---|---|
| **Connexion…** | Le projet s'ouvre et se connecte. |
| **Reconnexion…** | La connexion a été coupée ; Coall la rétablit. |
| **Hors ligne** (en rouge) | Le serveur ne répond plus. |

> **À savoir** Hors ligne, vos modifications restent dans l'onglet du navigateur et partent au retour de la connexion. Ne fermez pas l'onglet tant que le badge est affiché.

## Voir aussi

- [Modifier une page à la main](/docs/modifier-a-la-main)
- [Raccourcis clavier](/docs/raccourcis)
