<template>
  <div>Reproduction</div>
</template>

<script setup lang="ts">
const { findOne } = useContentQuery().where({ id: 'content:footer.md' })
findOne() // Will crash Nuxt when saving multiple times a plugin fast
</script>
