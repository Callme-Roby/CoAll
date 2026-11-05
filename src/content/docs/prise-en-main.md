---
title: "Prise en main en 5 minutes"
description: "Découvrir l'accueil, créer un projet, poser une première page, faire une demande à l'IA, puis créer, comparer et promouvoir une hypothèse."
order: 2
group: "Démarrer"
---

Ce chapitre vous fait parcourir l'essentiel de Coall en quelques minutes : la page d'accueil et vos projets, puis un premier tour complet sur le canvas, de la page de départ jusqu'à la décision.

## La page d'accueil

En ouvrant Coall, vous arrivez sur la page d'accueil. Une barre latérale donne accès à tout ce qui concerne votre compte.

| Entrée | Contenu |
|---|---|
| **Projets** | La liste de vos projets, avec recherche, filtres, tri et une miniature de chaque canvas. |
| **Collaborateurs** | Les personnes avec qui vous partagez des projets. |
| **Skills et règles** | Votre bibliothèque de skills et de règles pour orienter l'IA (voir [Skills et règles](/docs/skills-et-regles)). |
| **Compte** | Votre prénom et votre couleur, utilisés pour la présence, les commentaires et la timeline. |
| **Plan et facturation** | Votre formule et l'usage de l'IA du mois. |
| **Préférences** | Thème, langue, micro et caméra par défaut, raccourcis, code de connexion Figma (voir [Compte et réglages](/docs/compte-et-reglages)). |

<div class="capture">Capture : page d'accueil avec la barre latérale (Projets, Collaborateurs, Skills et règles, Compte, Plan et facturation, Préférences) et la grille des projets avec leurs miniatures</div>

### La liste des projets

- **Recherche** : retrouvez un projet par son nom.
- **Filtres** : tous les projets, ceux que vous avez créés, ceux qui sont partagés avec vous.
- **Tri** : changez l'ordre d'affichage de la liste.
- **Miniature** : chaque projet montre un aperçu de son canvas (pages officielles en bleu, hypothèses en vert), avec le nombre de pages et de membres.

> **À savoir** Sur téléphone, la barre latérale devient un menu (icône ☰ en haut à gauche) qui s'ouvre en tiroir. Voir [Sur téléphone et tablette](/docs/mobile-et-tablette).

### Créer et renommer un projet

Créez un projet avec le bouton **Nouveau projet**. Vous pouvez le renommer à tout moment [à confirmer : emplacement exact de la commande de renommage].

Chaque projet est **sauvegardé en continu** : il n'y a pas de bouton d'enregistrement à penser.

### Importer un projet

**Importer un projet** crée directement un nouveau projet à partir d'un fichier `.zip`. Glissez le `.zip` sur la page d'accueil, ou choisissez-le dans vos fichiers.

Le `.zip` peut venir d'un export de Coall, de Claude Design ou du plugin Figma. Le détail des formats acceptés est dans [Importer et exporter](/docs/importer-et-exporter).

## Votre premier tour complet

Voici le parcours type : une page, une demande à l'IA, une hypothèse, une comparaison, une décision.

### 1. Ouvrir un projet

1. Sur l'accueil, cliquez sur **Nouveau projet**, ou ouvrez un projet existant.
2. Le canvas s'ouvre. Il est vide si le projet est neuf.

### 2. Poser une première page

Vous avez trois façons de démarrer.

**Importer une maquette existante**

1. Glissez un fichier HTML, plusieurs fichiers, un dossier ou un `.zip` sur le canvas, ou utilisez le bouton **Importer**.
2. Coall indique la largeur des pages trouvées (par exemple « 3 pages à 1440 px »).
3. Choisissez **Importer à ces tailles**, ou **Une même largeur pour toutes les pages** puis **Importer à … px**.
4. Chaque page HTML devient une frame officielle.

**Partir d'une feuille blanche**

1. Cliquez sur **Nouvelle frame**, ou choisissez l'outil **Frame (F)** dans la barre d'outils de gauche.
2. Avec l'outil Frame, cliquez sur le canvas pour poser une page de taille standard, ou glissez pour en dessiner une à la taille voulue.

**Demander à l'IA de créer la page**

1. Appuyez sur **/** pour ouvrir la barre de demande, en bas du canvas.
2. Écrivez par exemple « crée une page d'accueil pour un studio de yoga », puis validez avec Entrée.

<div class="capture">Capture : fenêtre d'import montrant « 3 pages à 1440 px » avec les choix « Importer à ces tailles » et « Une même largeur pour toutes les pages »</div>

### 3. Faire une première demande à l'IA

1. Cliquez sur une frame pour la sélectionner. La cible s'affiche au-dessus de la barre de demande.
2. Appuyez sur **/** et écrivez une demande simple : « passe le titre en vert ».
3. Validez avec Entrée. L'IA répond tout de suite (« Compris, je modifie… »), puis le résultat arrive.

Votre frame est officielle : l'IA ne la modifie pas directement. Elle crée à côté une **hypothèse**, une copie verte qui contient la modification. Vous gardez la main sur la décision.

> **Astuce** Le bouton **Annuler** affiché avec le résultat revient en arrière en un clic.

### 4. Créer une hypothèse à la main

Vous pouvez aussi créer une hypothèse vous-même, sans passer par l'IA.

1. Sélectionnez une frame officielle.
2. Dans le panneau **Design**, à droite, cliquez sur **Créer une hypothèse**.
3. Une copie verte se place à côté, avec un libellé (par exemple « Version Alice »).
4. Modifiez cette copie librement, à la main ou avec l'IA.

### 5. Comparer avec l'officielle

1. Sélectionnez l'hypothèse. Le panneau **Design** liste ses différences avec l'officielle : **Modifié**, **Ajouté**, **Retiré**, **Déplacé**.
2. Survolez une différence : elle s'éclaire sur les deux pages.
3. Cliquez sur **Comparer**, au-dessus de l'hypothèse sur le canvas, pour voir toutes les différences numérotées sur les deux pages.

<div class="capture">Capture : une hypothèse sélectionnée à côté de son officielle, avec le bouton « Comparer » activé, les différences numérotées sur les deux pages et la liste des différences dans le panneau Design</div>

### 6. Promouvoir l'hypothèse

1. Si l'hypothèse vous convient, cliquez sur **✓ Promouvoir**, au-dessus de l'hypothèse.
2. L'hypothèse prend la place de l'officielle. L'ancienne officielle est archivée, jamais supprimée.
3. La décision s'inscrit dans la timeline.

Vous venez de faire le cycle complet de Coall : proposer, comparer, décider, sans rien perdre.

## Pour aller plus loin

- Se déplacer et organiser le canvas : [Le canvas](/docs/canvas).
- Retoucher une page élément par élément : [Modifier une page à la main](/docs/modifier-a-la-main).
- Tout ce que l'IA sait faire : [Travailler avec l'IA](/docs/travailler-avec-l-ia).
- Concevoir en appel, à la voix : [Appel, écoute de l'IA et transcription](/docs/appel-et-ecoute).
- Inviter votre équipe : [Collaborer](/docs/collaborer).
