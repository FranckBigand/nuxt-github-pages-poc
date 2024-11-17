<template>
  <main>
    <h1>{{ $t("homepage") }}</h1>
    <p>{{ t("description") }}</p>
  </main>
</template>

<script lang="ts" setup>
const { t } = useI18n({ useScope: "local" });
</script>

<style></style>

<i18n lang="yaml">
en:
  description: This is the homepage

fr:
  description: Ceci est la page d'accueil
</i18n>
