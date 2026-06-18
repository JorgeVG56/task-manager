<template>
  <nav>
    <span>Task Manager</span>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/newTask">New Task</RouterLink>
    <span>Remaining Tasks: {{ store.remainingCount }}</span>
  </nav>
</template>

<script setup lang="ts">
import { useTaskStore } from '@/stores/taskStore'

const store = useTaskStore()
</script>
