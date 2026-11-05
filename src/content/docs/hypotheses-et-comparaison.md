---
title: "Hypothèses, comparaison et décisions"
description: "Créer une hypothèse, la comparer à l'officielle différence par différence, puis la promouvoir ou la proposer."
order: 6
group: "Concevoir"
---

Une hypothèse est une proposition : une copie verte d'un écran officiel, ou une nouvelle page à l'essai. On la compare à l'officielle, on en discute, puis on décide. L'écran validé ne change que lorsque quelqu'un le décide, et l'ancienne version est toujours gardée.

## Créer une hypothèse

### À la main

1. Sélectionnez une frame officielle.
2. Dans le panneau **Design**, cliquez sur **Créer une hypothèse**.
3. Une copie verte se place à côté, sans chevaucher les autres frames, avec un libellé (par exemple « Version Alice »).

Le libellé se modifie dans le panneau **Design** de l'hypothèse.

### Par l'IA

L'IA crée une hypothèse dans plusieurs cas :

- une demande en mode **Auto** sur un écran officiel ;
- toute demande en mode **Hypothèse** ;
- à la voix, pendant l'appel, dès qu'une modification vise un écran officiel, qu'une idée est incertaine ou qu'une remarque est implicite.

Voir [Travailler avec l'IA](/docs/travailler-avec-l-ia) et [Appel, écoute de l'IA et transcription](/docs/appel-et-ecoute).

### Sur plusieurs pages

Sélectionnez plusieurs frames, puis choisissez de créer une hypothèse de toutes ces pages dans le panneau de droite. Quand l'IA crée une hypothèse sur plusieurs pages, elle les range ensemble dans une section « Hypothèse — Version … », sous le reste du canvas.

<div class="capture">Capture : une section « Hypothèse — Version Jean » contenant trois hypothèses vertes, sous les frames officielles du projet</div>

## Comparer avec l'officielle

### La liste des différences

Sélectionnez une hypothèse : le panneau **Design** liste ses différences avec l'officielle, ou avec la page dont elle est issue. Elles sont numérotées dans l'ordre de la page.

| Type | Couleur | Ce qu'il signale |
|---|---|---|
| **Modifié** | Ambre | Un changement de texte, couleur, taille du texte, graisse, police, fond, bordure, arrondi, marges, ombre, mise en page…, avec l'avant → après (« Couleur du texte : #111111 → #16a34a »). |
| **Ajouté** | Vert | Un élément qui n'existait pas dans l'officielle. |
| **Retiré** | Rouge | Un élément de l'officielle qui n'est plus dans l'hypothèse. |
| **Déplacé** | — | Un élément qui a changé de place. |

Survolez une différence dans la liste : l'élément s'éclaire sur les deux pages, l'hypothèse et l'officielle, avec le détail sous l'élément.

<div class="capture">Capture : panneau Design d'une hypothèse avec la liste numérotée des différences (Modifié en ambre avec « Couleur du texte : #111111 → #16a34a », Ajouté en vert, Retiré en rouge) et une différence survolée éclairée sur les deux pages</div>

### Surligner sur le canvas

Pour voir toutes les différences d'un coup :

1. Cliquez sur **Comparer**, au-dessus de l'hypothèse sur le canvas, ou sur **Surligner sur le canvas** dans le panneau **Design**.
2. Toutes les différences sont surlignées et numérotées sur les deux pages.
3. Sur l'officielle, ce qui a été retiré apparaît en rouge, et l'ancienne place des éléments modifiés en pointillés.
4. Survolez un numéro pour le détail.

La comparaison reste affichée quand vous cliquez ailleurs. Un nouveau clic sur le bouton la masque. Elle se ferme d'elle-même quand l'hypothèse est promue.

<div class="capture">Capture : comparaison active sur le canvas, avec les numéros sur l'hypothèse et sur l'officielle, un élément retiré en rouge et l'ancienne place d'un élément modifié en pointillés</div>

### Comment les différences sont comptées

- La liste suit les modifications en direct, qu'elles soient faites à la main, par l'IA ou par un autre participant.
- La comparaison se fait sur le rendu réel des pages. Un changement de règle CSS qui touche dix boutons compte dix différences.
- Une couleur héritée n'est comptée qu'une fois, sur l'élément qui la change.

## Décider

### Promouvoir une hypothèse

Promouvoir, c'est faire de l'hypothèse la nouvelle version officielle.

1. Cliquez sur **✓ Promouvoir**, au-dessus de l'hypothèse sur le canvas, ou sur **Promouvoir : remplace l'officielle**.
2. L'hypothèse prend la place de l'officielle, y compris dans sa section d'écran.
3. L'ancienne officielle est archivée, jamais supprimée.
4. Une décision s'inscrit dans la timeline.

Vous pouvez aussi le dire à l'IA : « on part sur la version de Jean ». Elle affiche alors une carte « L'IA propose : … » à valider (voir [Travailler avec l'IA](/docs/travailler-avec-l-ia)).

### Officialiser une section

Une section d'hypothèses s'officialise en un clic : sélectionnez la section, puis **Officialiser la section**. Toutes ses hypothèses remplacent leurs pages officielles, avec une décision dans la timeline.

### Proposer cette version

Sans le droit **valider**, un invité ne peut pas promouvoir. Il peut en revanche **proposer** une version :

1. Il clique sur **Proposer cette version** [à confirmer : emplacement du bouton].
2. Une personne autorisée confirme la proposition.

De même, sans le droit de valider, le bouton d'officialisation d'une section envoie une proposition au lieu d'appliquer la décision.

> **À savoir** Les droits **modifier**, **valider** et **modifier l'officiel** sont accordés par l'hôte. Voir [Collaborer](/docs/collaborer).

## Les désaccords

Pendant un appel, quand deux personnes veulent des versions différentes, l'IA crée une hypothèse par personne, tout de suite : « Version Jean », « Version Arthur ». Il ne reste qu'à les comparer et à choisir.

> **Astuce** Pour départager deux versions devant un client, ouvrez-les en [Mode Play](/docs/mode-play) l'une après l'autre, en partage d'écran.

## Retrouver une ancienne officielle

Une officielle remplacée est archivée. Cochez **Archives** dans le panneau de gauche pour l'afficher, puis **Désarchiver** si besoin. La timeline et les versions gardent aussi chaque étape : voir [Historique](/docs/historique).

## Voir aussi

- [Écrans et formats](/docs/ecrans-et-formats)
- [Historique](/docs/historique)
