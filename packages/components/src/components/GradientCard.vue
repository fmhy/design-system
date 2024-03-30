<script setup lang="ts">
defineProps<{
  title: string
  tag: string
  description: string
  theme: string
}>()
</script>

<template>
  <div
    style="box-shadow: 0 10px 40px -12px rgba(16, 24, 40, 0.1)"
    :class="`rounded-2xl h-96 border border-amber overflow-hidden flex flex-col relative text-color bg-zinc-900`"
  >
    <div class="p-4 sticky top-0 z-10">
      <div class="flex items-center gap-1.5">
        <div :class="`font-medium text-${theme}-100`">
          {{ title }}
        </div>
      </div>
    </div>
    <div
      :class="`bg-${theme}-800 absolute top-1/3 -left-32 -translate-y-1/2 rounded-full w-80 h-80 blur-3xl mix-blend`"
    ></div>
    <div
      :class="`bg-${theme}-700 absolute -top-56 left-1/2 -translate-x-1/2 rounded-full w-96 h-96 blur-3xl mix-blend`"
    ></div>
    <div class="absolute top-36 left-6">
      <div class="flex items-start">
        <div class="text-6xl font-normal tracking-tighter text-color-50">
          {{ tag }}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          :class="`text-${theme}-300 w-8 h-8 ml-3`"
        >
          <path
            fill-rule="evenodd"
            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
      <div :class="`mt-4 text-color-muted text-${theme}-100`">
        {{ description }}
      </div>
    </div>
  </div>
</template>
