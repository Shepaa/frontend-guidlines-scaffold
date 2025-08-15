interface IUseCounterOptions {
  min?: number
  max?: number
}

export function useCounter (initialValue = 0, options: IUseCounterOptions = {}) {
  const count = ref(initialValue)
  const { min, max } = options

  const inc = () => {
    if (typeof max === 'number' && count.value >= max) return true
    count.value++
  }
  const dec = () => {
    if (typeof min === 'number' && count.value <= min) return true
    count.value--
  }

  const reset = () => {
    count.value = initialValue
  }

  return {
    count,
    inc,
    dec,
    reset
  }
}
