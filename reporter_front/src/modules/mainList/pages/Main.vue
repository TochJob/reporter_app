<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import MCreate from "../components/MCreate.vue";
import MHistory from "../components/MHistory.vue";


const router = useRouter()

</script>

<template>
  <section class="main">
    <MCreate class="main__create"/>
    <MHistory class="main__history"/>
  </section>
</template>

<style lang="scss" scoped>
.main {
  display: flex;
  align-items: stretch;
  gap: 15px;
  &__create{
    flex:4
  }
  &__history{
    flex:1
  }
}
</style>
