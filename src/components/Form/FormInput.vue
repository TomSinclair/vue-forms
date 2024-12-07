<!-- FormInput utilises VeeValidate built-in Field Component to assign validation and track validity state -->
<template>
  <div class="space-y-2">
    <label
      :for="name"
      class="block text-sm/6 font-medium text-gray-900"
      v-if="label"
    >
      {{ label }}
    </label>

    <Field
      :name="name"
      :type="type"
      :class="{
        'outline-red-500': error,
        'col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 px-3 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6': true,
      }"
    />
  </div>
</template>

<script setup>
import { Field } from "vee-validate";

defineProps({
  name: { type: String, required: true },
  type: { type: String, default: "text" },
  label: { type: String, required: true },
  error: { type: String, default: "" },
});
</script>
