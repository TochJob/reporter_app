<script setup lang="ts">
import { ref } from "vue";
interface Props {
  placeholder: string;
  modelValue: string | undefined;
}

const { placeholder, modelValue } = defineProps<Props>();
const emit = defineEmits();
const inputValue = ref(modelValue);
const updateValue = (event: Event) => {
  inputValue.value = (event.target as HTMLInputElement).value;
  emit("update:modelValue", inputValue);
};
</script>

<template>
  <input
    :placeholder="placeholder"
    :value="modelValue"
    @input="updateValue"
    class="input"
    type="text"
  />
</template>

<style lang="scss" scoped>
.input {
  width: 100%;
  border-radius: 5px;
  background: #d9d9d9;
  color: #000;
  font-size: 20px;
  font-weight: 400;
  outline: none;
  box-sizing: border-box;
  padding: 8px 20px;
  border: 1px solid transparent;
  transition: all 0.3s;
  outline: none;
  &:hover {
    border: 1px solid #575757;
  }
  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }
}
</style>
