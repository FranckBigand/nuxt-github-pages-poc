<template>
  <h1>{{ $t("about") }}</h1>
  <p>
    {{ t("pDescription") }}
  </p>
  <p>
    {{ t("pGoal") }}
  </p>
  <p>{{ t("pCurrentFunctionalities") }}</p>
  <ul>
    <li>{{ t("liFuncRouting") }}</li>
    <li>{{ t("liFuncI18n") }}</li>
    <li>Local storage</li>
    <li>{{ t("liFuncPageTitle") }}</li>
  </ul>
</template>

<script lang="ts" setup>
const { t } = useI18n({ useScope: "local" });
const { t: $t } = useI18n({ useScope: "global" });

useHeadSafe({
  title: () => $t("about"),
});
</script>

<style></style>

<i18n lang="yaml">
en:
  pDescription: >-
    This project is a Proof of Concept to deplay a Nuxt 3 app with GitHub Pages
    and GitHubActions. Deployment is automated when pushing on branch main.
  pGoal: >-
    This project is inteded to evolve to test in isolation diffent
    functionalities of Nuxt 3 on GitHub Pages.
  pCurrentFunctionalities: "Currently tested functionalities:"
  liFuncRouting: Routing
  liFuncI18n: Internationalization (i18n)
  liFuncPageTitle: Page title

fr:
  pDescription: >-
    Ce projet un est Proof of Concept pour déployer une application Nuxt 3
    avec GitHub Pages et GitHub Actions. Le déploiement est automatique lors
    d'un push la branche main.
  pGoal: >-
    Ce projet a pour but d'évoluer pour tester de manière isolée différentes
    fonctionnalités de Nuxt 3 sur GitHub Pages.
  pCurrentFunctionalities: "Les fonctionnalités actuellement testées :"
  liFuncRouting: Navigation (routing)
  liFuncI18n: Internationalisation (i18n)
  liFuncPageTitle: Titre de page
</i18n>
