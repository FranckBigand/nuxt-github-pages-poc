<template>
  <h1>{{ $t("localStorageUsage") }}</h1>
  <p>{{ t("description") }}</p>
  <p>{{ t("pLocalStorage", { value: localStorageValue }) }}</p>
  <form @submit.prevent="updateLocalStorageValue">
    <label for="localStorageNewValue">{{ t("lNewValue") }}</label>
    <input
      v-model="formValue"
      id="localStorageNewValue"
      name="value"
      type="text"
      maxlength="10"
      required
    />
    <button type="submit">{{ t("update") }}</button>
  </form>
</template>

<script lang="ts" setup>
const { t } = useI18n({ useScope: "local" });

const LOCAL_STORAGE_KEY = "localStorageValue";
const localStorageValue = useLocalStorage(LOCAL_STORAGE_KEY, "");

const formValue = ref("");

useHeadSafe({
  title: () => `Local storage | ${localStorageValue.value}`,
});

function updateLocalStorageValue() {
  localStorageValue.value = formValue.value;
}
</script>

<style></style>

<i18n lang="yaml">
en:
  description: >-
    The page is used to test local storage usage.
    Filling the form and validating it updates the value in the
    next paragraph. The value is being saved, it is conserved
    when refreshing the page.
    This functionality is implemented using useLocalStorage from
    VueUse.
  pLocalStorage: Currently, value in local storage is "{value}".
  lNewValue: New value
  update: Update

fr:
  description: >-
    Cette page est utilisée pour tester l'utilisation du local storage.
    Remplir le formulaire et le valider met à jour la valeur dans le
    paragraphe suivant. La valeur étant sauvegardée, elle est conservée
    en raffraichissant la page. 
    Cette fonctionnalité est implémentée en utilisant useLocalStorage de
    VueUse.
  pLocalStorage: Actuellement, la valeur dans le local storage est "{value}"
  lNewValue: Nouvelle valeur
  update: Mettre à jour
</i18n>
