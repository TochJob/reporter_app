<script setup lang="ts">
import CForm from "@/components/Auth/CForm.vue";
import CFlipCard from "@/components/CFlipCard.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../store/auth";
import type { loginData } from "../typos/types";

const router = useRouter()

const authStore = useAuthStore();
const isLogin = ref(true);
const inputSignIn = ref([
  {
    placeholder: "Name",
    modelValue: "",
    type: "text",
  },
  {
    placeholder: "Password",
    modelValue: "",
    type: "password",
  },
]);
const inputSignUp = ref([
  {
    placeholder: "Name",
    modelValue: "",
    type: "text",
  },
  {
    placeholder: "Password",
    modelValue: "",
    type: "password",
  },
  {
    placeholder: "Role",
    modelValue: "",
    type: "text",
  },
]);

function flipCard() {
  isLogin.value = !isLogin.value;
}
const submitForm = async () => {
  if (isLogin.value) {
    const data:loginData = {
      login: inputSignIn.value[0].modelValue,
      password: inputSignIn.value[1].modelValue,
    };
    try {
      await authStore.loginAccount(data);
      router.push('/')
    } catch (error) {
      
    }
    console.log(1);
  } else {
    console.log(2);
  }
};
</script>

<template>
  <section class="auth">
    <CFlipCard :class="{ flip: !isLogin }">
      <template v-slot:front>
        <CForm
          :inputList="inputSignIn"
          title="Sign In"
          @flip="flipCard"
          @submitForm="submitForm"
        />
      </template>
      <template v-slot:back>
        <CForm
          :inputList="inputSignUp"
          title="Sign Up"
          @flip="flipCard"
          @submitForm="submitForm"
        />
      </template>
    </CFlipCard>
  </section>
</template>

<style lang="scss" scoped>
.auth {
  display: flex;
  flex-direction: column;
  align-items: center;

}
</style>
