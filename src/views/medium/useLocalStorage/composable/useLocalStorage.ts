
import { ref, watch } from 'vue'

export function useLocalStorage (key: string, initialValue: any) {
  const storedItem = localStorage.getItem(key)
  const value = ref(storedItem ? JSON.parse(storedItem) : initialValue)

  watch(value, (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue))
  })

  return value
}

