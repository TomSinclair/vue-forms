<!-- FormSelect utilises VeeValidate built-in Field Component to assign validation and track validity state -->
<template>
  <div class="space-y-2">
    <label
      :for="name"
      class="block text-sm/6 font-medium text-gray-900"
      v-if="label"
    >
      {{ label }}
    </label>

    <div class="grid grid-cols-1">
      <Field
        :name="name"
        :type="type"
        :class="{
          'outline-red-500': error,
          'col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6': true,
        }"
        :as="type === 'select' ? 'select' : 'input'"
      >
        <template v-if="type === 'select'">
          <option disabled value="">Please select…</option>
          <option v-for="(option, idx) in options" :key="idx" :value="option">
            {{ option }}
          </option>
        </template>
      </Field>

      <ChevronDownIcon
        class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
        aria-hidden="true"
      />
    </div>
  </div>
</template>

<script setup>
import { ChevronDownIcon } from "@heroicons/vue/16/solid";
import { Field } from "vee-validate";

defineProps({
  name: { type: String, required: true },
  type: { type: String, default: "select" },
  label: { type: String, required: true },
  error: { type: String, default: "" },
  options: { type: Array, default: () => [] },
});
</script>
