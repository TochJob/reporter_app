<script setup lang="ts"></script>

<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.button {
  border-radius: 15px;
  background: #d9d9d9;
  color: #000;
  font-size: 20px;
  cursor: pointer;
  outline: none;
  font-weight: 400;
  transition: all 0.3s;
  border: none;
  &:hover {
    background: #b9b9b9;
  }
}
</style>
