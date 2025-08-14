<script setup lang="ts">

const click1 = () => {
  console.log('click1')
}

const click2 = (e: MouseEvent) => {
  console.log('click2')
  e.stopPropagation()
}

</script>

<template>
  <div @click="click1">
    <div @click="click2">
      click me
    </div>
  </div>
</template>
