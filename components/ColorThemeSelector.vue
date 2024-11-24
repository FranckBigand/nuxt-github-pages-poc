<template>
  <select v-model="colorMode">
    <option v-for="colorOption in colorOptions" :value="colorOption.value">
      {{ t(colorOption.nameKey) }}
    </option>
  </select>
</template>

<script lang="ts" setup>
const { t } = useI18n({ useScope: "local" });

const colorMode = useColorMode();

type Color = typeof colorMode.value;
type ColorOption = {
  value: Color;
  nameKey: string;
};
const colorOptions: ColorOption[] = [
  {
    value: "auto",
    nameKey: "optSystem",
  },
  {
    value: "light",
    nameKey: "optLight",
  },
  {
    value: "dark",
    nameKey: "optDark",
  },
];
</script>

<i18n lang="yaml">
en:
  optSystem: System
  optLight: Light
  optDark: Dark

fr:
  optSystem: Système
  optLight: Clair
  optDark: Sombre
</i18n>
