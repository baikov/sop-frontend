<!-- <script lang="ts" setup>
useHead(() => ({
  title: "pages.404.title",
}));
interface error {
  statusCode: number;
  statusMessage: string;
}

defineProps<{
  error: error;
}>();

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <h1 class="mb-6 text-center leading-3">
      <span class="block text-8xl font-bold">{{ error.statusCode }}</span>
      <span class="block italic">{{ error.statusMessage }}</span>
    </h1>
    <button @click="handleError">Home</button>
  </div>
</template> -->
<script setup lang="ts">
import type { NuxtError } from '#app'

// prevent reactive update when clearing error

const { error } = defineProps<{
  error: Partial<NuxtError>
}>()

// add more custom status codes messages here
const errorCodes: Record<number, string> = {
  404: 'Page not found',
}

if (process.dev)
  console.error(error)

const defaultMessage = 'Something went wrong'

const message
  = error.message ?? errorCodes[error.statusCode!] ?? defaultMessage

const state = ref<'error' | 'reloading'>('error')
</script>

<template>
  <NuxtLoadingIndicator
    color="repeating-linear-gradient(to right,var(--c-primary) 0%,var(--c-primary-active) 100%)"
  />
  <NuxtLayout name="default">
    <template #title>
      <span timeline-title-style>Error</span>
    </template>
    <slot>
      <div text-lg>
        Something went wrong
      </div>
      <div text-secondary>
        {{ message }}
      </div>
      <button
        flex
        items-center
        gap-2
        justify-center
        btn-solid
        text-center
        :disabled="state === 'reloading'"
      >
        <span v-if="state === 'reloading'" block animate-spin preserve-3d>
          <span block i-ri:loader-2-fill />
        </span>
        {{ state === "reloading" ? "Reloading" : "Reload" }}
      </button>
    </slot>
  </NuxtLayout>
  <AriaAnnouncer />
</template>
