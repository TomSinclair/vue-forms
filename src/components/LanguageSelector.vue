<!-- LanguageSelector is a simple locale switcher using Vue i18n -->
<template>
  <div class="flex gap-4 p-4">
    <button
      class="transition-colors hover:text-green-600"
      @click="setLanguage('en')"
    >
      English
    </button>

    <button
      class="transition-colors hover:text-green-600"
      @click="setLanguage('es')"
    >
      Español
    </button>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const setLanguage = (lang) => {
  locale.value = lang;
};
</script>
