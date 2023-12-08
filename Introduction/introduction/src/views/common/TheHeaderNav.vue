<template>
    <div>
        <RouterLink :to="{name: 'home'}">Home</RouterLink>
        <RouterLink :to="{name: 'about'}">About</RouterLink>
        <RouterLink :to="{name: 'project'}">Project</RouterLink>
        <RouterLink :to="{name: 'contact'}">Contact</RouterLink>
        <RouterLink :to="{name: 'github'}">Github</RouterLink>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>

</style>