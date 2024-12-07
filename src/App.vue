<template>
  <div class="mx-auto max-w-screen-sm px-4 space-y-8 py-8">
    <header>
      <h1 class="text-2xl/6 font-medium text-gray-900">{{ $t("title") }}</h1>
    </header>

    <Form />

    <div class="absolute bottom-0 right-0">
      <LanguageSelector />
    </div>
  </div>
</template>

<script setup>
import Form from "@/components/Form/Form.vue";
import LanguageSelector from "@/components/LanguageSelector.vue";
</script>
