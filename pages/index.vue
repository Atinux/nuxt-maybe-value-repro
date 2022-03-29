<script setup lang="ts">
await $fetch('/api/get')

// Will crash Nuxt when saving multiple times ~/plugins/foo.ts
</script>

<template>
  <div>
    <div>Reproduction: please go to <code>~/plugins/foo.ts</code> and save multiple times the file</div>
  </div>
</template>
