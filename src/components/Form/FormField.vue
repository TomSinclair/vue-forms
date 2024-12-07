<template>
  <div class="space-y-2">
    <template v-if="field.type === 'checkbox'">
      <FormCheckbox
        :name="field.name"
        :label="$t(field.label)"
        :value="field.value"
        :error="errors[field.name]"
      />
    </template>

    <template v-else-if="field.type === 'select'">
      <FormSelect
        :name="field.name"
        :label="$t(field.label)"
        :options="field.options"
        :error="errors[field.name]"
      />
    </template>

    <template v-else>
      <FormInput
        :name="field.name"
        :label="$t(field.label)"
        :type="field.type"
        :placeholder="field.placeholder"
        :error="errors[field.name]"
      />
    </template>

    <ErrorMessage :name="field.name" class="text-red-500 text-sm block" />
  </div>
</template>

<script setup>
import FormCheckbox from "@/components/Form/FormCheckbox.vue";
import FormInput from "@/components/Form/FormInput.vue";
import FormSelect from "@/components/Form/FormSelect.vue";

import { ErrorMessage } from "vee-validate";

defineProps({
  field: { type: Object, required: true },
  errors: { type: Object, required: true },
});
</script>
