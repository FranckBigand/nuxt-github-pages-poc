<template>
  <div>
    <NuxtRouteAnnouncer />
    <header>
      <select v-model="language">
        <option value="en">English</option>
        <option value="fr">Français</option>
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
const language = defineModel<string>({ default: "en" });

const { setLocale } = useI18n();

watch(language, (newLanguage, _) => setLocale(newLanguage));
</script>
