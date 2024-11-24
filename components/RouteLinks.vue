<template>
  <nav>
    <ul>
      <li>
        <NuxtLink to="/">{{ $t("homepage") }}</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about">{{ $t("about") }}</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/localStorage">
          {{ $t("localStorageUsage") }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup></script>

<style></style>
