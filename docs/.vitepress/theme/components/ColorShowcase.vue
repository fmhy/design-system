<template>
  <div class="flex flex-col space-y-12">
    <div v-for="name in colorNames" :key="name">
      <h3 class="capitalize">{{ name.replaceAll('-', ' ') }}</h3>
      <div class="grid grid-cols-5 md:grid-cols-10 mt-2">
        <div v-for="color in colors[name]" :key="color">
          <div
            class="h-12 transition-all"
            :style="`background: ${color}`"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { colors } from '@fmhy/colors'

const colorNames = Object.keys(colors)
</script>
