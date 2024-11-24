<template>
  <div>
    <NuxtRouteAnnouncer />
    <header>
      <LocaleSelector />
      <ColorThemeSelector />
      <RouteLinks />
    </header>
    <main>
      <NuxtPage />
    </main>
  </div>
</template>

<style lang="css">
:root {
  --base: white;
  --text: #212121;
}

html {
  color-scheme: light dark;
}

html.light {
  color-scheme: light;
}

html.dark {
  color-scheme: dark;
  --base: #252526;
  --text: #cccccc;
}

body {
  color: var(--text);
  background-color: var(--base);
}
</style>
