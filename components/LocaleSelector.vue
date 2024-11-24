<template>
  <select v-model="language">
    <option v-for="locale in locales" :key="locale.code" :value="locale.code">
      {{ locale.name }}
    </option>
  </select>
</template>

<script lang="ts" setup>
const { locale, locales, setLocale } = useI18n();

const language = ref(locale.value);

watch(language, (newLanguage, _) => setLocale(newLanguage));
</script>

<style></style>
