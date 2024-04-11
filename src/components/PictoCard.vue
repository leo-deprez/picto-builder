<template>
  <div class="divide-y divide-gray-200 rounded-lg bg-white shadow w-40">
    <div class="p-4">
      <div class="outline-1 outline outline-gray-200 text-center">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
          width="128"
          height="128"
          class="h-[104px] object-contain"
        />

        <p class="font-medium">test</p>
      </div>
    </div>

    <div class="flex items-center justify-evenly p-2">
      <button class="shrink-0 h-4 w-4 hover:text-gray-700 transition-colors">
        <PencilSquareIcon />
      </button>

      <button class="shrink-0 h-4 w-4 hover:text-gray-700 transition-colors">
        <ArrowPathIcon />
      </button>

      <button class="shrink-0 h-4 w-4 hover:text-red-700 transition-colors">
        <TrashIcon />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PencilSquareIcon, ArrowPathIcon, TrashIcon } from '@heroicons/vue/24/outline'
</script>
