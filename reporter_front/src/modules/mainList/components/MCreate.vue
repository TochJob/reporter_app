<script setup lang="ts">
import type { InputList, InputItem } from '../typos/types'

import MListItem from '../components/MListItem.vue'

import { ref } from 'vue'
import type { Ref } from 'vue'
const rowElements: Ref<InputList> = ref([
  {
    id: 0,
    value: null,
  },
])

const deleteItem = (id: number): void => {
  rowElements.value = rowElements.value.filter(
    (item: InputItem) => item.id !== id,
  )
}
const createItem = (): void => {
  const lastId =
    rowElements.value.length > 0
      ? rowElements.value[rowElements.value.length - 1].id
      : 0

  const newId = lastId + 1

  rowElements.value.push({
    id: newId,
    value: null,
  })
}
</script>

<template>
  <div class="report">
    <h2 class="report__title">Create your own report here:</h2>
    <div class="report__list">
      <div
        class="report__list-wrapper"
        v-for="(item, index) of rowElements"
        :key="item.id"
      >
        <MListItem
          v-model="item.value"
          @createItem="createItem"
          @deleteItem="deleteItem(item.id)"
          :isLastElement="index === rowElements.length - 1"
          :isDisabled="rowElements.length === 1"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.report {
  background: #b54141;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  &__list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 90%;
    &-wrapper {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }
}
</style>
