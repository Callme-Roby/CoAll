/** Réglages du site. Tout ce qui est marqué [à confirmer] attend une décision. */
export const SITE = {
  name: "Coall",
  tagline: "Exprimez-vous. Coall met en forme.",
  description:
    "Coall est une application web de conception collaborative pilotée par la voix : une visio intégrée à un canvas infini, où une IA applique les idées de la réunion sur la maquette.",
  /** [à confirmer] URL de l'application — Coall n'est pas encore hébergé. */
  appUrl: "",
  /** [à confirmer] Adresse de contact. */
  contactEmail: "",
  /**
   * [à confirmer] Point d'envoi de la liste d'attente (Formspree, Tally, Brevo, API maison…).
   * Vide : le formulaire reste affiché mais n'envoie rien et le dit.
   */
  waitlistEndpoint: "",
};

export const NAV = [
  { href: "/fonctionnalites", label: "Fonctionnalités" },
  { href: "/cas-d-usage", label: "Cas d'usage" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/docs", label: "Documentation" },
];
