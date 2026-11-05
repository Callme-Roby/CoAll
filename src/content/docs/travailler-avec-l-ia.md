---
title: "Travailler avec l'IA"
description: "Écrire une demande, choisir un mode, comprendre ce que l'IA sait faire, suivre son travail, valider ses propositions et revenir en arrière."
order: 5
group: "IA et voix"
---

L'IA de Coall modifie vos maquettes à partir d'une demande écrite, ou de ce qui se dit pendant l'appel. Elle propose, vous décidez : un écran validé n'est jamais modifié sans votre accord. Ce chapitre couvre la demande écrite ; pour la voix, voir [Appel, écoute de l'IA et transcription](/docs/appel-et-ecoute).

## La barre de demande

La barre de demande se trouve en bas du canvas. Appuyez sur **/** pour y écrire directement.

1. Sélectionnez ce que vous voulez modifier (ou rien, pour viser le projet).
2. Appuyez sur **/**.
3. Écrivez votre demande, en langage courant.
4. Validez avec **Entrée**.

Exemples de demandes :

- « passe le titre en vert » ;
- « ajoute une section témoignages » ;
- « crée une page tarifs » ;
- « fais la version mobile de l'accueil ».

<div class="capture" data-shot="barre-demande">Trois frames sélectionnées : la barre indique « Sur 3 frames », le mode <strong>Auto</strong> est choisi et la demande est en cours de saisie.</div>

### La cible de la demande

La demande s'applique à la cible affichée au-dessus de la barre :

| Ce qui est sélectionné | Cible |
|---|---|
| Une frame | Cette frame. |
| Un élément dans une frame | Cet élément. |
| Une section | La section et ses frames (« Sur la section … »). |
| Plusieurs frames | Ces frames uniquement (« Sur 3 frames »). |
| Rien | Le projet. |

Vous pouvez aussi désigner des pages par leur nom dans la demande (« la page contact »), même en abrégé (« la page doc » pour « Documentation »), ou une section par son nom (« la section de Jean »).

> **Astuce** Une demande générale, comme « les pages en bleu », s'applique à toutes les pages concernées. Une couleur imprécise est choisie dans le style existant.

## Les modes

Un sélecteur dans la barre de demande fixe ce que l'IA a le droit de faire.

| Mode | Effet |
|---|---|
| **Auto** | L'IA choisit. Sur un écran officiel, elle crée une hypothèse. |
| **Officielle** | L'IA modifie directement l'écran officiel. C'est un choix explicite. |
| **Hypothèse** | L'IA travaille toujours sur une copie, placée à côté. |

> **À savoir** Sans le droit **modifier l'officiel**, la barre n'affiche que le mode **Hypothèse**. Sans le droit **modifier**, la barre est remplacée par un bouton **Demander l'accès**. Voir [Collaborer](/docs/collaborer).

### La règle de base : une hypothèse d'abord

L'IA ne modifie **jamais directement un écran officiel existant**. En mode **Auto**, comme à la voix, une demande sur un écran officiel crée une **hypothèse** à valider : une copie verte, placée à côté.

Seul le mode **Officielle**, choisi explicitement, modifie l'écran en place.

Les **nouvelles pages** et les **nouveaux formats** d'un écran (tablette, mobile) sont créés directement, puisqu'ils ne remplacent rien.

Cette règle fait partie du socle de l'outil : elle ne se désactive pas.

## Le retour de l'IA

1. Dès l'envoi, l'IA répond : « Compris, je modifie… ».
2. Le résultat arrive ensuite, avec un bouton **Annuler** pour revenir en arrière en un clic.
3. L'étape s'inscrit dans la timeline.

## Ce que l'IA sait faire

- **Retouches** : couleurs, textes, tailles.
- **Blocs** : ajouter, réorganiser des blocs et des sections.
- **Pages entières et refontes**.
- **Formats** : versions tablette et mobile d'un écran. La page est copiée, puis adaptée (voir [Écrans et formats](/docs/ecrans-et-formats)).
- **Composants** : créer et unifier des composants et leurs variantes (voir [Composants et ressources](/docs/composants-et-ressources)).
- **Liens du prototype** : relier un bouton à un écran (« relie le bouton Commencer à la page Inscription »), voir [Mode Play](/docs/mode-play).
- **Ranger le canvas** : en ligne, en colonne, en grille, par familles.
- **Revenir à une version passée** (voir plus bas).
- **Demandes générales** : « les pages en bleu » s'applique à toutes les pages concernées.

## Le bon modèle pour chaque demande

Coall choisit le modèle d'IA selon l'ampleur de la demande.

| Type de demande | Exemple | Modèle |
|---|---|---|
| Retouche simple | « passe le titre en vert », « change le texte du bouton » | Le plus rapide : quelques secondes. |
| Changement de structure | « ajoute une section témoignages » | Intermédiaire. |
| Page entière ou refonte | « crée une page tarifs » | Le plus puissant. |

Ces modèles sont les modèles Claude d'Anthropic (Haiku, Sonnet, Opus) [à confirmer : noms à citer].

La timeline affiche, pour chaque demande, le modèle utilisé et la durée.

## Pendant que l'IA travaille

Une demande peut prendre de quelques secondes à une minute ou plus. Pendant ce temps, le canvas montre ce que l'IA prépare, et où. Tous les participants le voient, avec le temps écoulé.

| Situation | Ce que vous voyez |
|---|---|
| **Nouvelle hypothèse, nouvelle page ou nouveau format** | La future page apparaît en pointillés violets, à l'endroit exact où elle sera créée. Une esquisse se remplit de vagues. L'écran d'origine est balayé d'une ligne : l'IA le lit. |
| **Modification sur place** (mode **Officielle**, ou sur une hypothèse) | La page reste visible, voilée de vagues légères, avec la pastille « L'IA modifie cette page… ». |
| **Demande sur tout le projet** (« unifie les boutons ») | Toutes les pages officielles ondulent. |
| **À l'arrivée** | La nouvelle page passe du flou au net. Une page modifiée est traversée d'un reflet. |

Si le réglage « réduire les animations » de votre système est activé, les vagues restent immobiles.

<div class="capture" data-shot="hypothese-en-cours">La future hypothèse se dessine en pointillés violets, avec son chronomètre, pendant que l'écran d'origine est lu.</div>

### Vos retouches sont gardées

Vous pouvez continuer à travailler pendant l'attente, y compris sur la page concernée. Vous ou un autre participant pouvez changer un texte, une couleur, ajouter ou supprimer un bloc.

À l'arrivée, l'IA adapte ses modifications à la page actuelle :

- ce que personne n'a touché est modifié comme prévu ;
- sur le même texte, la même couleur ou la même règle CSS, **la retouche humaine l'emporte** ;
- dans un bloc réécrit par l'IA, vos retouches sont reportées ;
- un élément ajouté par l'IA se place à côté du même voisin, même si vous avez ajouté des éléments entre-temps.

Quand une retouche a été gardée à la place de la version de l'IA, la timeline le signale (par exemple « retouches faites pendant la génération gardées : 2 »).

Cela vaut aussi quand l'IA crée une hypothèse à partir d'un écran officiel : la copie part de l'écran avec vos retouches.

### La vue suit les créations de l'IA

Quand l'IA crée une frame, la vue s'y déplace toute seule si vous ne faites rien sur le canvas.

Si vous êtes en train de regarder autre chose (souris qui bouge, zoom ou déplacement récent, frame sélectionnée), la vue ne bouge pas. Un bouton **Voir la nouvelle frame** apparaît au-dessus de la barre de demande ; un clic vous y emmène.

## L'IA propose, vous validez

Certaines actions ne s'appliquent pas d'office :

- **ranger le canvas** (en ligne, en colonne, en grille, par familles avec les hypothèses sous leur page) ;
- **placer une frame à côté d'une autre** (« mets la page contact à droite de l'accueil ») ;
- **choisir une hypothèse** (« on part sur la version de Jean »).

À la place, une carte « L'IA propose : … » apparaît au-dessus de la barre de demande, avec **Valider** et **Annuler**. Survolez la carte pour voir l'aperçu sur le canvas : emplacements en pointillés violets, ou version qui deviendrait officielle.

> **À savoir** Valider une proposition demande le droit **valider**. Sans lui, la carte indique « En attente de validation ».

<div class="capture" data-shot="proposition-ia">Au survol de la carte « L'IA propose : … », les emplacements prévus s'affichent en pointillés violets. Rien ne bouge avant <strong>Valider</strong>.</div>

## Revenir à une version passée

L'IA connaît l'historique du canvas. Vous pouvez lui demander, à l'écrit ou à la voix, de revenir à un état antérieur.

| Demande | Effet |
|---|---|
| « rétablis la version jaune » | Les pages officielles reprennent leur contenu d'alors. Leur contenu actuel est gardé en hypothèse (« Remplacée à 18:36 »). |
| « remets en hypothèse la version d'avant », « c'était mieux en jaune » | L'ancienne version apparaît à côté, en copie verte (« Version de 18:20 »), sans toucher à l'officielle. |
| « la page contact comme ce matin » | Seule la page visée revient à cet état. |

Rien n'est perdu, et le bouton **Annuler** de la timeline fonctionne. Les pages qui n'ont pas changé depuis la version visée ne sont pas copiées pour rien.

Pour consulter et restaurer les versions vous-même, voir [Historique](/docs/historique).

## Les règles de design de base

L'IA évite d'elle-même un ensemble de mauvaises pratiques d'interface : navigation, mise en page, typographie, couleur, formulaires, états, fenêtres, animation, mobile, tableaux de bord, tromperies (*dark patterns*), et les tics des interfaces générées par IA. Ces règles touchent à l'accessibilité, à la lisibilité et à l'ergonomie. [à confirmer : publier ou non le nombre de règles (94)]

Elles ont deux niveaux :

| Niveau | Comportement |
|---|---|
| **Interdit** | Jamais appliqué, même sur demande. L'IA fait l'alternative et le dit dans sa réponse. |
| **À éviter** | Appliqué seulement sur demande explicite, en le signalant. |

Exemple : à « ajoute un carrousel automatique de témoignages », l'IA propose un carrousel manuel et explique pourquoi.

Ces règles valent pour les frames officielles comme pour les hypothèses. L'IA les applique à ce qu'elle crée ou modifie, sans réécrire le reste d'une page de sa propre initiative ; elle peut signaler un problème grave. Elles ne sont ni visibles, ni désactivables.

## Les composants par défaut

L'IA travaille en composants. Quand elle crée une page ou ajoute un élément, elle réutilise les composants du projet (même HTML, même style), marque les nouveaux éléments d'interface comme composants et harmonise les occurrences qui diffèrent sans raison. Voir [Composants et ressources](/docs/composants-et-ressources).

## Vos skills et règles

Les skills et règles de votre bibliothèque s'appliquent à toutes les demandes faites dans vos projets, sans qu'il faille les redemander. Si une demande explicite contredit un skill, l'IA suit la demande et le signale. Voir [Skills et règles](/docs/skills-et-regles).

## Voir aussi

- [Hypothèses, comparaison et décisions](/docs/hypotheses-et-comparaison)
- [Appel, écoute de l'IA et transcription](/docs/appel-et-ecoute)
- [Historique](/docs/historique)
