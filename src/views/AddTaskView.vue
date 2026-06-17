<template>
  <input v-model="title" placeholder="New Task" />
  <input v-model="description" placeholder="Task Description" />
  <button @click="addTask()">Add Task</button>
  <button @click="router.push('/')">Cancel</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useTaskStore } from '@/stores/taskStore'

const router = useRouter()
const store = useTaskStore()
const title = ref<string>('')
const description = ref<string>('')

function addTask(): void {
  if (title.value.trim() === '' || description.value.trim() === '') {
    alert('Add a valid title and description')
  } else {
    store.addTask(title.value.trim(), description.value.trim())
    router.push('/')
  }
}
</script>
