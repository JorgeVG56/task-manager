import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type Task from '../types/Task'

export const useTaskStore = defineStore('tasks', () => {
  const tasks = ref<Task[]>([])

  const totalCount = computed<number>(() => tasks.value.length)

  const completedCount = computed<number>(() => tasks.value.filter((t) => t.done).length)

  const remainingCount = computed<number>(() => tasks.value.filter((t) => !t.done).length)

  function addTask(title: string, description: string): void {
    tasks.value.push({
      id: Date.now(),
      title,
      description,
      done: false,
    })
  }

  function getTask(id: number): Task {
    const task = tasks.value.find((t) => t.id === id)
    if (task) return task
    return { id: -1, title: 'notFound', description: 'notFound', done: false }
  }

  function markDone(id: number): void {
    const task = tasks.value.find((t) => t.id === id)
    if (task) task.done = true
  }

  function markUndone(id: number): void {
    const task = tasks.value.find((t) => t.id === id)
    if (task) task.done = false
  }

  function removeTask(id: number): void {
    tasks.value = tasks.value.filter((t) => t.id !== id)
  }

  return {
    tasks,
    totalCount,
    completedCount,
    remainingCount,
    addTask,
    getTask,
    markDone,
    markUndone,
    removeTask,
  }
})
