import { computed, ref, watch } from 'vue'
import { defineStore } from 'pinia'
import type { Task } from '../types/Task'

export const useTaskStore = defineStore('tasks', () => {
  const tasks = ref<Task[]>([])

  const saved = localStorage.getItem('tasks')
  if (saved) {
    try {
      const parsed = JSON.parse(saved)
      if (Array.isArray(parsed)) tasks.value = parsed
    } catch {
      localStorage.removeItem('tasks')
    }
  }

  watch(
    tasks,
    (newTasks) => {
      localStorage.setItem('tasks', JSON.stringify(newTasks))
    },
    { deep: true },
  )

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

  function getTask(id: number): Task | undefined {
    return tasks.value.find((t) => t.id === id)
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
