export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    en: {
      homepage: "Homepage",
      about: "About",
      localStorageUsage: "Local storage usage",
    },
    fr: {
      homepage: "Page d'accueil",
      about: "A propos",
      localStorageUsage: "Utilisation du local storage",
    },
  },
}));
