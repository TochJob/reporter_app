<script setup lang="ts">
  import CInput from '@/components/UI/CInput.vue';
  import ITrash from '@/components/SVG/ITrash.vue';
  import type { InputList } from '../typos/types';
  import CButton from '@/components/UI/CButton.vue';
  import { ref } from 'vue';
  import type {Ref} from 'vue'
  const rowElements: Ref<InputList> = ref([{
    id:0,
    value: null
  }])

  const deleteItem = (id:number):void => {
    console.log('rowElements',rowElements.value, id);
    
  }
</script>

<template>
  <div class="report">
    <h2 class="report__title">Create your own report here:</h2>
    <div class="report__list">
      <div class="report__list-wrapper"  v-for="(item, index) of rowElements"  :key="item.id">
        <CInput v-model="item.value" type="text" class="report__list-item"/>
        <CButton class="report__list-button" @click="deleteItem(item.id)"><ITrash/></CButton>
        <CButton v-if="index === rowElements.length - 1" class="report__list- button"></CButton>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
    .report{
        background: #b54141;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
        &__list{

          gap: 10px;
          width: 90%;
          &-wrapper{
            display: flex;
            align-items: center;
            gap: 5px;
          }
          &-button{
            width: 42px;
            height: 42px;
            padding: 4px;
            border-radius:3px;
            border-color: transparent;
            svg{
              width: 100%;
              height: 100%;
            }
          }
        }
        
    }
</style>
