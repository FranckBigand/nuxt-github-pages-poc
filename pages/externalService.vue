<template>
  <h1>{{ tGlobal("externalService") }}</h1>
  <i18n-t keypath="description" tag="p">
    <a :href="apiUrl" target="_blank">JSONPlaceholder</a>
    <a :href="requestUrl" target="_blank">{{ requestUrl }}</a>
  </i18n-t>
  <p v-if="isFetching">{{ $t("loading") }}</p>
  <pre v-else>{{ todo }}</pre>
</template>

<script lang="ts" setup>
import { useFetch } from "@vueuse/core";

useI18n({ useScope: "local" });
const { t: tGlobal } = useI18n({ useScope: "global" });

useHeadSafe({
  title: () => tGlobal("externalService"),
});

const apiUrl = "https://jsonplaceholder.typicode.com";
const requestUrl = `${apiUrl}/todos/1`;

type Todo = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

const { isFetching, data: todo } = useFetch<Todo>(requestUrl);
</script>

<i18n lang="yaml">
en:
  title: External service
  description: >-
    This page calls the {0} public API, then displays the response.
    URL used for the example is: {1}
  loading: Loading…

fr:
  title: Service externe
  description: >-
    Cette page appelle l'API publique {0}, puis affiche la réponse.
    L'URL utilisée pour l'exemple est : {1}
  loading: Chargement…
</i18n>
