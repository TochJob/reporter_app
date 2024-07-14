<script setup lang="ts">
import IPlus from "@/components/SVG/IPlus.vue";
import ITrash from "@/components/SVG/ITrash.vue";
import CInput from "@/components/UI/CInput.vue";
import CButton from "@/components/UI/CButton.vue";
import { ref, watch } from "vue";

interface Props {
  modelValue: any;
  lastElement: Boolean;
}

const { lastElement, modelValue } = defineProps<Props>();
const emit = defineEmits(["update:modelValue", "deleteItem", "createItem"]);

const localValue = ref(modelValue);

watch(
  () => modelValue,
  (newVal) => {
    console.log("modelValue");
    localValue.value = newVal;
  },
);
watch(localValue, (newVal) => {
  emit("update:modelValue", newVal);
});
</script>

<template>
  <div class="item">
    <CInput v-model="localValue" type="text" />
    <CButton class="item-button" @click="emit('deleteItem')"
      ><ITrash
    /></CButton>
    <CButton
      v-if="lastElement"
      @click="emit('createItem')"
      class="item-button add"
      ><IPlus
    /></CButton>
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
