<template>
  <div>
    <NuxtRouteAnnouncer />
    <header>
      <select v-model="language">
        <option v-for="locale in locales" :value="locale.code">
          {{ locale.name }}
        </option>
      </select>
      <nav>
        <ul>
          <li>
            <NuxtLink to="/">{{ $t("homepage") }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">{{ $t("about") }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const { locale, locales, setLocale } = useI18n();

const language = ref(locale.value);

watch(language, (newLanguage, _) => setLocale(newLanguage));
</script>
