<template>
  <h1>{{ task.title }}</h1>
  <p>{{ task.description }}</p>
  <button v-if="!task.done" @click="store.markDone(task.id)">Done</button>
  <button v-else @click="store.markUndone(task.id)">Undone</button>
  <button @click="deleteTask()">Delete</button>
  <button @click="router.push('/')">&lt;- Back</button>
</template>

<script setup lang="ts">
import { useTaskStore } from '@/stores/taskStore'
import { useRoute, useRouter } from 'vue-router'

const store = useTaskStore()
const route = useRoute()
const router = useRouter()
const taskId = Number(route.params.id)
const task = store.getTask(taskId)

function deleteTask() {
  store.removeTask(task.id)
  router.push('/')
}
</script>
