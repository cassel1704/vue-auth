<template>
  <div class="block">
    <div class="label">{{ label }}</div>
    <slot></slot>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
  },
};
</script>
<style>
.block {
}
.label {
  font-weight: 500;
}
</style>
