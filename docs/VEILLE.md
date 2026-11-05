# Veille : sites de référence

Base de travail du site vitrine de Coall. Sites demandés : interfere.com, linear.app, miro.com/fr, comfy.org, figma.com.

> **Limite de la veille.** L'environnement de travail n'avait pas accès direct à ces cinq domaines (réseau bloqué).
> Linear, Figma et Miro ont été analysés à partir d'extractions publiques de leurs design systems (couleurs, typographies,
> composants relevés sur les sites). **Comfy** est décrit de mémoire, sans vérification sur le site actuel.
> **Interfere** n'a pas pu être consulté du tout : aucun élément de ce site n'a été repris. À compléter dès que possible.

## Linear — la précision du sombre

- Fond quasi noir (`#08090a`), surfaces par paliers (`#0f1011`, `#191a1b`), bordures blanches très transparentes (5 à 8 %).
- Une seule couleur d'accent, réservée aux actions et aux états actifs. La hiérarchie du texte vient de l'opacité du blanc, pas de la couleur.
- Inter à des graisses intermédiaires (510), titres très serrés (−1,5 px à 72 px), étiquettes en monospace.
- Rythme section par section : un titre court, une phrase, une démonstration du produit. La force est dans le *pacing*, pas dans les halos.

**Repris pour Coall** : fond sombre natif, bordures à 7–12 %, titres serrés (Inter Tight), étiquettes en JetBrains Mono majuscules, sections espacées avec un titre court et une démonstration.

## Figma — la couleur appartient au produit

- Le chrome du site est strictement noir et blanc ; toute la couleur vient du contenu produit.
- Boutons en pilule ou en cercle ; **contour de focus en pointillés** qui rappelle les poignées de sélection de l'éditeur : l'interface du site parle la langue du produit.
- Étiquettes techniques en mono majuscules, interlettrage positif.

**Repris pour Coall** : chrome neutre, la couleur réservée aux trois couleurs de l'outil (bleu officielle, vert hypothèse, violet IA) ; boutons pilule ; focus en pointillés ; le titre du hero est « sélectionné » comme une frame (poignées, étiquette « Titre · Officielle »).

## Miro — le canvas infini

- Fond clair et grandes respirations, palette pastel par contexte de collaboration, accent bleu.
- Le canvas, les post-its et les curseurs des collaborateurs comme signature visuelle.

**Repris pour Coall** : grille de points du canvas en fond de section, curseurs multijoueurs nommés (dont le vôtre, « Vous », qui suit la souris dans le hero), présence et commentaires mis en scène.

## Comfy (de mémoire, à vérifier)

- Produit à base de graphe de nœuds reliés ; le site montre des nœuds et des connexions comme langage visuel.

**Repris pour Coall** : la section « Comment ça marche » est un graphe de six nœuds reliés (Voix → Compris → Hypothèse → Comparer → Décision → Figma), avec des ports et un flux animé sur les liens.

## Interfere

Non consulté (domaine inaccessible depuis l'environnement). Rien n'en est repris.

## Ce qui vient de l'outil lui-même

Le site reprend directement l'interface de Coall (dépôt `co-design`, lecture seule) :

- les couleurs d'identité et leurs valeurs du thème sombre (`apps/web/app/globals.css`) ;
- le signe de marque (deux cadres qui se chevauchent : l'officiel et l'hypothèse, `BrandMark.tsx`) ;
- les animations d'attente de l'IA : fantôme en pointillés violets, vagues qui remplissent la page, ligne de lecture, arrivée floue puis nette, reflet (`AiWorking.tsx`) ;
- les libellés exacts : « L'IA écoute », « Compris : … », « L'IA propose : … », **Valider**, **✓ Promouvoir**, modes **Auto / Officielle / Hypothèse**.

La démo du hero rejoue, en HTML/CSS, une réunion complète : une phrase dite en appel → hypothèse → comparaison → « on garde ça » → promotion. Ce n'est pas une capture : à remplacer ou compléter par une vraie vidéo si souhaité.
