---
title: "FAQ et limites connues"
description: "Les réponses aux questions les plus fréquentes, et ce que Coall ne fait pas encore."
order: 21
group: "Référence"
---

Les questions qui reviennent le plus souvent, puis, honnêtement, ce que Coall ne sait pas encore faire.

## Questions fréquentes

### L'IA peut-elle casser ma maquette ?

Non. L'IA ne modifie **jamais directement un écran officiel existant** : elle crée une **hypothèse** à côté, que l'équipe compare et valide. Seul le mode **Officielle**, choisi explicitement dans la barre de demande, y échappe. De plus :

- chaque modification de l'IA peut être annulée (bouton **Annuler**) ;
- les frames ne sont jamais supprimées, seulement archivées ;
- chaque étape est dans la [timeline](/docs/historique), et une version passée se restaure à tout moment.

### Est-ce que l'IA m'écoute tout le temps ?

Non. Elle n'écoute que lorsque l'indicateur **L'IA écoute** est allumé, et seulement les personnes qui ont donné leur accord à l'entrée de l'appel. N'importe qui peut la mettre en pause, au bouton ou à la voix (« l'IA, pause »). Voir [Confidentialité et sécurité](/docs/confidentialite-et-securite).

### Ce qui est dit pendant l'appel est-il conservé ?

Seulement pour les personnes qui ont accepté la conservation de la transcription, par un accord distinct de celui de l'écoute, et seulement si l'hôte ne l'a pas désactivée. La transcription est supprimée avec le projet.

### Faut-il un compte pour participer ?

Non, pas pour les invités. Ils ouvrent un lien d'invitation et donnent leur prénom, sans créer de compte. Voir [Collaborer](/docs/collaborer).

### Puis-je importer mes maquettes existantes ?

Oui : un fichier HTML, plusieurs fichiers, un dossier, ou un `.zip` (export de Claude Design, de Coall ou du plugin Figma). Vos maquettes Figma passent par le [plugin Figma](/docs/plugin-figma), qui les exporte en `.zip` pour Coall. Voir [Importer et exporter](/docs/importer-et-exporter).

### Et Figma ?

Le plugin **Coall ⇄ Figma** envoie les écrans officiels dans Figma en **calques modifiables**, avec les **variables** du projet (couleurs, typographie, arrondis, espacements) et les **composants** et leurs variantes. Ensuite, il garde les deux synchronisés : il ne ramène que ce qui a changé, et garde par défaut les retouches faites dans Figma. Voir [Plugin Figma](/docs/plugin-figma).

### Coall remplace-t-il Figma ?

Non. On **conçoit et on décide ensemble** dans Coall, en réunion ; on **finit** dans Figma. Le plugin fait le lien entre les deux.

### Quels navigateurs ?

**Chrome** et **Edge** sont recommandés, notamment pour la transcription de l'appel, qui passe par la reconnaissance vocale du navigateur.

### Dois-je m'adresser à l'IA pour qu'elle agisse pendant l'appel ?

Non. Une idée claire devient une modification (en hypothèse sur un écran officiel), une idée incertaine ou une remarque implicite (« en plus sombre ça passerait peut-être mieux ») une hypothèse, un désaccord une hypothèse par personne, et « on garde ça » une proposition de décision à valider. Voir [Appel, écoute de l'IA et transcription](/docs/appel-et-ecoute).

### Que se passe-t-il si je modifie une page pendant que l'IA travaille dessus ?

Vos retouches sont gardées. À l'arrivée, l'IA adapte ses modifications : ce que personne n'a touché est modifié comme prévu ; sur le même texte, la même couleur ou la même règle CSS, votre retouche l'emporte. La timeline le signale.

### Comment appliquer notre charte graphique à toutes les demandes ?

Avec un **skill** ou des **règles**, dans **Skills et règles** sur la page d'accueil. Un assistant peut créer le skill à partir de votre charte en PDF. Voir [Skills et règles](/docs/skills-et-regles).

### Ma connexion a coupé : ai-je perdu mon travail ?

Non. Un badge **Hors ligne** s'affiche ; vos modifications restent dans l'onglet et partent au retour de la connexion. **Ne fermez pas l'onglet** en attendant.

### Puis-je changer la langue de l'interface ?

Oui, dans **Préférences** : anglais (par défaut) ou français. La reconnaissance vocale et les réponses de l'IA suivent la langue choisie. Voir [Compte et réglages](/docs/compte-et-reglages).

## Limites connues

- **Pas encore de version en ligne** ni de **connexion par e-mail**. [à mettre à jour au lancement]
- **Plugin Figma non publié** dans la communauté Figma : il s'installe en mode développement, et l'**application Figma pour ordinateur** est requise.
- **Sur téléphone**, pas d'édition fine des éléments : on consulte, on commente, on suit l'appel et on écrit à l'IA. Voir [Sur téléphone et tablette](/docs/mobile-et-tablette).
- **Le mode Play** ne fait ni transitions ni interactions programmées : c'est un outil pour parcourir un parcours, pas un outil de prototypage avancé.
- **Le contenu des maquettes n'est pas traduit** par le changement de langue.
- **Maquettes en JavaScript** : elles sont figées en HTML/CSS statique à l'import.

### Ce qui n'existe pas encore

Pour éviter tout malentendu, ces fonctions ne sont **pas disponibles** aujourd'hui :

- les bots et extensions (Slack, etc.) ;
- les comptes, la connexion par e-mail et le SSO ;
- l'inscription en ligne et le paiement ;
- la transformation automatique de la charte d'un skill en variables dans Figma.
