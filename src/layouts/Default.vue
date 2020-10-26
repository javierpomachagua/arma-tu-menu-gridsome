<template>
  <div class="py-10 px-4 h-screen max-w-6xl mx-auto">
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: 'Nunito Sans', sans-serif;
  @apply bg-yellow-400;
}
</style>
