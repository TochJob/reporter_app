<script setup lang="ts">
import IRevers from "@/components/SVG/IRevers.vue";
import CInput from "@/components/UI/CInput.vue";
import CButton from "@/components/UI/CButton.vue";

interface InputItem {
  placeholder: string;
  modelValue: string;
  type: string;
}
interface Props {
  title: string;
  inputList: InputItem[];
}

defineProps<Props>();
</script>

<template>
  <div class="form">
    <header class="form__header">
      <h2 class="form__title">{{ title }}</h2>
      <button class="form__reverse" @click="$emit('flip')">
        <IRevers />
      </button>
    </header>
    <form @submit.prevent="$emit('submitForm')" class="form__form">
      <CInput
        v-for="(item, index) of inputList"
        :key="index"
        :placeholder="item.placeholder"
        :type="item.type"
        v-model="item.modelValue"
      />
      <CButton class="form__button">{{ title }}</CButton>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.form {
  width: 545px;
  background: #ababab;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 15px;

  &__header {
    border-radius: 15px 15px 0 0;
    background: #939393;
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
  }
  &__title {
    color: #fff;
    font-size: 40px;
    font-weight: 700;
    text-transform: uppercase;
  }
  &__reverse {
    background: #d9d9d9;
    outline: none;
    border: transparent;
    border-radius: 50%;
    width: 43px;
    height: 43px;
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: center;
  }
  &__form {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    gap: 15px;
    padding: 25px 25px 35px 25px;
  }
  &__button {
    padding: 5px 40px;
    align-self: flex-end;
  }
}
</style>
