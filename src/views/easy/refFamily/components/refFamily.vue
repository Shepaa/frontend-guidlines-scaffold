<script setup lang="ts">
import { ref, Ref, reactive } from 'vue'

const initial = ref(10)
const count = ref(0)

function update (value) {
  count.value = value
}

console.log(isRef(count))

function initialCount (value: number | Ref<number>) {
  console.log(unref(value) === 10)
}

initialCount(initial)

const state = reactive({
  foo: 1,
  bar: 2
})
const fooRef = toRef(state, 'foo')

console.log('fooRef ' + fooRef.value)
fooRef.value++
console.log(state.foo === 2)

state.foo++
console.log(fooRef.value === 3)

</script>

<template>
  <div>
    <h1>msg</h1>
    <p>
      <span @click="update(count-1)">-</span>
      {{ count }}
      <span @click="update(count+1)">+</span>
    </p>
  </div>
</template>
