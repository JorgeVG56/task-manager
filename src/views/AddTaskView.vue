<template>
  <input v-model="title" placeholder="New Task" />
  <input v-model="description" placeholder="Task Description" />
  <p v-if="error" style="color: red">{{ error }}</p>
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
const error = ref<string>('')

function addTask(): void {
  if (title.value.trim() === '' || description.value.trim() === '') {
    error.value = 'Please fill in both fields'
    return
  }
  store.addTask(title.value.trim(), description.value.trim())
  router.push('/')
}
</script>
