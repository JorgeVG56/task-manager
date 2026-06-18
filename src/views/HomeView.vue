<template>
  <h1>Tasks</h1>
  <ul>
    <li v-for="task in store.tasks" :key="task.id">
      <RouterLink :to="`/task/${task.id}`">{{ task.title }}</RouterLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useTaskStore } from '../stores/taskStore'

const store = useTaskStore()
</script>
