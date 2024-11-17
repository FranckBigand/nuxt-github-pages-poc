<template>
  <div>
    <NuxtRouteAnnouncer />
    <header>
      <nav>
        <ul>
          <li><NuxtLink to="/">Page d'accueil</NuxtLink></li>
          <li><NuxtLink to="/about">A propos</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <NuxtPage />
  </div>
</template>
