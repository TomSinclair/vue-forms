<template>
  <form class="space-y-4" @submit="onSubmit">
    <FormField
      v-for="field in filteredFormFields"
      :key="field.name"
      :field="field"
      :errors="errors"
    />

    <FormAlert v-if="isSubmitted" message="Thanks! We'll be in touch soon" />

    <div v-else class="flex justify-end">
      <button
        type="submit"
        :disabled="hasErrors"
        class="rounded-md w-full bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm lg:w-auto hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:bg-gray-500 transition-colors"
      >
        {{ $t("form.submit") }}
      </button>
    </div>
  </form>
</template>

<script setup>
import FormAlert from "@/components/Form/FormAlert.vue";
import FormField from "@/components/Form/FormField.vue";

import { formFields } from "@/data/formFields";
import { filterFields } from "@/helpers/formUtils";
import { schema } from "@/schemas/validationSchema";
import { useForm } from "vee-validate";
import { computed, ref } from "vue";

// Form Setup
const { values, errors, handleSubmit, resetForm } = useForm({
  validationSchema: schema(),
});

// Filtered Fields
const filteredFormFields = computed(() => filterFields(formFields, values));

// Error Checking
const hasErrors = computed(() => {
  return Object.values(errors.value).some((error) => error && error.length > 0);
});

// Submit Handler
const hasSubmitted = ref(false);

const isSubmitted = computed(() => hasSubmitted.value);

const onSubmit = handleSubmit((values, { resetForm }) => {
  // Send values to API/database etc
  console.log(values);

  hasSubmitted.value = true;
  resetForm();
});
</script>
