<script setup lang="ts">
import { ref, watch } from 'vue'

interface Props {
  placeholder?: string
  modelValue: string | undefined
}

const { modelValue, placeholder } = defineProps<Props>()
const emit = defineEmits(['update:modelValue'])

const inputValue = ref(modelValue)

watch(
  () => modelValue,
  (newValue) => {
    inputValue.value = newValue
  },
)

watch(inputValue, (newValue) => {
  emit('update:modelValue', newValue)
})
</script>
<template>
  <input
    :placeholder="placeholder"
    v-model="inputValue"
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
