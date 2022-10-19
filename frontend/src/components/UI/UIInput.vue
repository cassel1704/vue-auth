<template>
  <input class="input" :value="modelValue" @input="handleInput" />
</template>
<script lang="ts">
export default {
  name: "ui-input",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    handleInput(event: Event) {
      const target = event.target as HTMLInputElement;

      this.$emit("update:modelValue", target.value);
    },
  },
};
</script>
<style scoped>
.input {
  outline: none;
  border: 1px solid var(--primary-color);
  border-radius: 8px;
  padding: 10px 15px;
}
</style>
