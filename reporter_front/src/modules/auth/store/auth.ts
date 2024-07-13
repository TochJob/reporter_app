import { defineStore } from "pinia";
import axios from "axios";
import type { loginData } from "../typos/types";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isUserAuth: Boolean,
  }),
  actions: {
    async loginAccount(data: loginData) {
      try {
        localStorage.setItem('token', 'true')
        // const {data} = await axios(data);
        // return data;
      } catch (error) {
        console.error(error);
      }
    },
  },
});
