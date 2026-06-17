<template>
  <h1>Tasks</h1>
  <ul>
    <li v-for="task in tasks" :key="task.id">
      <RouterLink :to="`/task/${task.id}`">{{ task.title }}</RouterLink>
    </li>
  </ul>
  <button @click="router.push('/newTask')">Add Task</button>
</template>

<script setup lang="ts">
import { useTaskStore } from '../stores/taskStore'
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useTaskStore()
const tasks = store.tasks
</script>
