<script setup lang="ts">
import IPlus from '@/components/SVG/IPlus.vue'
import ITrash from '@/components/SVG/ITrash.vue'
import CInput from '@/components/UI/CInput.vue'
import CButton from '@/components/UI/CButton.vue'

import type { InputButton } from '../typos/types'

import { ref, watch, shallowRef, computed } from 'vue'

interface Props {
  modelValue: string | number | null
  isLastElement: boolean
  isDisabled: boolean
}

const props = defineProps<Props>()
const emit = defineEmits(['update:modelValue', 'deleteItem', 'createItem'])

const localValue = ref(props.modelValue)

const inputsButtons = computed(() => {
  const buttons: InputButton[] = [
    {
      icon: ITrash,
      action: () => emit('deleteItem'),
      id: 0,
      isButtonVisible: true,
      disabled: props.isDisabled,
    },
    {
      icon: IPlus,
      action: () => emit('createItem'),
      isButtonVisible: props.isLastElement,
      id: 1,
      extraClass: 'add',
      disabled: false,
    },
  ]

  return buttons
})

watch(
  () => props.modelValue,
  (newVal) => {
    localValue.value = newVal
  },
)
watch(localValue, (newVal) => {
  emit('update:modelValue', newVal)
})
</script>

<template>
  <div class="item">
    <CInput v-model="localValue" type="text" />

    <template v-for="item of inputsButtons" :key="item.id">
      <CButton
        v-if="item.isButtonVisible"
        class="item-button"
        :class="item.extraClass"
        :disabled="item.disabled"
        @click="item.action"
        ><component :is="item.icon"
      /></CButton>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.item {
  display: flex;
  width: 100%;
  gap: 5px;
  position: relative;
  &-button {
    width: 42px;
    height: 42px;
    padding: 4px;
    border-radius: 3px;
    border-color: transparent;
    svg {
      width: 100%;
      height: 100%;
    }
    &.add {
      position: absolute;
      right: 0;

      transform: translate(110%, 0);
    }
  }
}
</style>
