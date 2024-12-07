<!-- FormCheckbox utilises VeeValidate built-in Field Component to assign validation and track validity state -->
<template>
  <div class="space-y-2">
    <div class="flex">
      <Field
        :name="name"
        :id="name"
        :value="value"
        :unchecked-value="null"
        class="mr-2 accent-green-600"
        type="checkbox"
      />

      <label
        :for="name"
        class="block text-sm font-medium text-gray-900"
        v-if="label"
      >
        {{ label }}
      </label>
    </div>
  </div>
</template>

<script setup>
import { Field } from "vee-validate";

defineProps({
  name: { type: String, required: true },
  label: { type: String, required: true },
  value: { type: String, required: true },
});
</script>
