---
title: "Plugin Figma"
description: "Envoyer les écrans validés dans Figma en calques modifiables, avec variables et composants, et les garder synchronisés."
order: 15
group: "Aller plus loin"
---

On conçoit et on décide ensemble dans Coall ; la finition se fait dans Figma. Le plugin **Coall ⇄ Figma** fait le lien, dans les deux sens :

- **Depuis Coall** : les frames officielles d'un projet arrivent dans Figma sous forme de frames **modifiables** (calques, textes, auto layout ou positions fixes), avec variables et composants. Ensuite, le plugin ne ramène que ce qui a changé.
- **Vers Coall** : des frames Figma deviennent des pages HTML/CSS, à importer dans Coall.

## Avant de commencer

- Il faut l'**application Figma pour ordinateur**. Les plugins en développement ne s'installent pas depuis Figma dans le navigateur.
- Le plugin **n'est pas encore publié** dans la communauté Figma. Il s'installe pour l'instant en mode développement, à partir d'un fichier fourni avec Coall.
- Avec la version actuelle de Coall, Coall doit tourner sur le même ordinateur que Figma. [à mettre à jour au lancement de la version en ligne]

### Installer le plugin (une seule fois)

1. Dans Figma, menu **Plugins › Development › Import plugin from manifest…**
2. Choisissez le fichier `manifest.json` du plugin, fourni avec Coall. [à confirmer : emplacement du fichier pour les utilisateurs]

Le plugin apparaît ensuite dans **Plugins › Development › Coall ⇄ Figma**. Quand Coall est mis à jour, rechargez simplement le plugin : il n'y a rien à réinstaller.

## Envoyer un projet dans Figma (connexion directe)

### Se connecter (une seule fois)

1. Dans Coall : **Préférences › Figma › Créer un code de connexion**, puis **Copier**. Le code n'est affiché qu'une fois.
2. Dans Figma, lancez le plugin. Dans l'onglet **Depuis Coall**, collez le code, puis **Se connecter**.

Figma garde la connexion pour les fois suivantes. Le code se révoque au même endroit, dans **Préférences › Figma**.

<div class="capture">Capture : Préférences › Figma dans Coall, avec le bouton Créer un code de connexion</div>

### Lire puis appliquer

1. Choisissez le **projet** (ceux dont vous êtes l'hôte). Le bouton **↻** à côté actualise la liste, par exemple pour un projet créé pendant que le plugin est ouvert.
2. Cliquez sur **Lire le projet**. Le plugin compare Coall et le fichier Figma.
3. Vérifiez la liste, puis cliquez sur **Appliquer dans Figma**.

Seules les frames **officielles** partent. Les hypothèses restent dans Coall.

### Ce que la lecture signale

| Dans la liste | Ce que ça veut dire | Par défaut |
|---|---|---|
| **Nouvelle** | Frame officielle pas encore dans Figma (par exemple une version mobile créée depuis le dernier envoi). | Ajoutée. |
| **Différence** | Modifiée dans Coall, retouchée dans Figma, ou les deux. La raison est indiquée. | **Coall remplace** si elle n'a changé que dans Coall ; **Garder Figma** si elle a été retouchée dans Figma. |
| **Archivée** | N'est plus officielle dans Coall. | Rangée dans la page « Archives Coall ». |
| **Supprimée** | Supprimée à la main dans Figma, toujours officielle dans Coall. | Pas remise, sauf si vous cochez **La remettre**. |

Pour chaque différence, vous choisissez **Coall remplace** ou **Garder Figma**. Déplacer une frame dans Figma ne compte pas comme une retouche.

<div class="capture">Capture : plugin Coall ⇄ Figma après « Lire le projet », avec une frame Nouvelle et une Différence (choix Coall remplace / Garder Figma)</div>

### Comment le fichier Figma est rangé

- Une page **Écrans** reçoit les frames, rangées par section comme dans Coall.
- Une frame ajoutée plus tard se place selon la disposition de Coall, à côté des autres, même si vous les avez déplacées dans Figma.
- Une page **Composants** reçoit les composants (voir plus bas).
- Une page **Archives Coall** reçoit les frames remplacées ou archivées, avec la date.

> **À savoir** — **Rien n'est supprimé dans Figma.** Une frame remplacée part dans la page « Archives Coall ». Une retouche faite dans Figma est gardée par défaut.

### Variables

À chaque envoi, le plugin crée ou complète une **collection de variables** au nom du projet, et **lie les calques** à ces variables au lieu de valeurs écrites en dur :

- **Couleurs** : remplissages, bordures, couleurs de texte ;
- **Typographie** : tailles, interlignages et polices ;
- **Arrondis** ;
- **Espacements** d'auto layout (seulement sans l'option au pixel près, qui n'utilise pas l'auto layout).

Nommage :

- si la maquette utilise des variables CSS (par exemple `--color-primary`), la variable Figma garde ce nom (« Couleurs/color-primary ») ;
- sinon, elle est nommée d'après son usage (« Couleurs/Texte 1 ») ou sa valeur (« Espacements/16 ») ; une couleur utilisée une seule fois reste sur son calque.

D'un envoi à l'autre, les variables sont réutilisées, même renommées dans Figma. Une valeur changée dans Coall met la variable à jour ; une valeur changée seulement dans Figma est gardée.

Ces variables sont les mêmes que celles de l'onglet **Ressources** de Coall, avec les mêmes noms. Voir [Composants et ressources](/docs/composants-et-ressources).

### Composants

Les éléments marqués comme composants dans Coall (panneau Design › **Faire un composant**) arrivent dans Figma :

- le **composant principal** est placé sur la page **Composants** ; s'il existe une frame **Composants** dans Coall (la planche du design system), les composants principaux en viennent ;
- un composant à **variantes** devient un **jeu de composants**, une variante par composant, rangées en grille ;
- dans les écrans, chaque occurrence devient une **instance** de sa variante, avec **son propre texte** (le libellé d'un bouton, par exemple).

Aux envois suivants, les composants déjà dans Figma sont réutilisés : les nouvelles instances s'y relient, et une nouvelle variante s'ajoute au jeu existant. Un composant modifié dans Figma reste tel quel.

Le message du plugin indique, à la fin de l'envoi, les composants créés, les instances placées et les variables.

## Importer un .zip exporté de Coall

Pour un transfert ponctuel, sans connexion :

1. Dans Coall, exportez en **HTML/CSS (.zip)**. Choisissez la largeur et, si besoin, **Au pixel près, pour Figma**. Voir [Importer et exporter](/docs/importer-et-exporter).
2. Dans Figma, lancez le plugin, onglet **Depuis Coall**, et déposez le `.zip`.
3. Le plugin indique les pages et leur largeur (« 3 pages à 1440 px »). Choisissez la mise en page :
   - **Positions fixes, au pixel près** (cochée d'office pour un export au pixel près) : chaque calque garde sa position mesurée, sans auto layout ; rien ne se réorganise ;
   - case décochée : les mises en page flexibles de la maquette deviennent de l'**auto layout** quand c'est possible.
4. Cliquez sur **Importer dans Figma** : les frames apparaissent à droite du contenu de la page, sélectionnées.

### Ce qui est repris

- les frames, à la même taille, nommées comme dans Coall (« Accueil — Version Jean » pour une hypothèse) ;
- les sections (vert pâle pour une section d'hypothèse), avec la même disposition ;
- les textes, en **vrais calques texte**, avec leurs styles (gras, italique, couleurs, soulignés, liens) ;
- les boutons et pastilles, en auto layout autour de leur texte, qui reste modifiable ;
- les fonds, dégradés et images de fond ;
- les bordures, coins arrondis, ombres et flous ;
- les images ;
- les icônes et SVG, en **vecteurs** modifiables.

Chaque calque porte le nom de sa balise et de sa classe, comme dans le panneau Calques de Coall.

**Polices** : le plugin prend la police de la maquette si Figma la connaît (les Google Fonts y sont toutes), sinon Inter, en gardant la graisse.

## De Figma vers Coall

1. Dans Figma, sélectionnez les frames à exporter, ou rien pour exporter toutes les frames de la page. Harmonisez d'abord la taille de vos écrans si besoin : chaque page garde la largeur de sa frame.
2. Lancez le plugin, puis **Exporter en .zip pour Coall**. Le fichier se télécharge.
3. Dans Coall :
   - **nouveau projet** : page d'accueil › **Importer un projet**, ou glissez le `.zip` sur la page ;
   - **projet existant** : glissez le `.zip` sur le canvas.
4. Coall montre la largeur des pages : **Importer à ces tailles**, ou une même largeur pour toutes.

Chaque frame de premier niveau devient une page. L'auto layout devient une mise en page flexible ; les textes, couleurs, dégradés, contours, ombres, images et icônes sont repris. Chaque élément reçoit un nom tiré du nom du calque (« Bouton principal »), repère utile pour l'édition et pour l'IA.

## Limites

Dans Figma :

- certaines mises en page (grilles CSS, marges entre éléments, ordre modifié) n'ont pas d'équivalent en auto layout : ces conteneurs gardent des positions libres, aux bonnes coordonnées ;
- les décorations ajoutées en CSS (`::before`, `::after`), les rotations et transformations, et les animations ne sont pas reprises ;
- les images externes à l'export (liens vers un site) sont remplacées par un aplat gris ;
- si une police manque dans Figma, le texte passe en Inter et sa largeur peut changer un peu.

Vers Coall :

- les composants et variantes Figma deviennent de simples éléments, sans lien avec la bibliothèque Figma ;
- les prototypes Figma (interactions, animations) ne sont pas exportés ;
- les contraintes de redimensionnement ne sont pas reprises : la page a la taille de la frame.

> **À savoir** — La transformation automatique de la charte d'un skill en variables Figma n'existe pas encore. Les variables envoyées viennent des frames officielles du projet.
