<template>
  <button class="button"><slot></slot></button>
</template>
<script lang="ts">
export default {
  name: "ui-button",
};
</script>
<style scoped>
.button {
  font-weight: bold;
  outline: none;
  border: none;
  background: var(--primary-color);
  padding: 10px 15px;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
}
.button.disabled {
  background: var(--secondary-color);
  cursor: not-allowed;
}
</style>
