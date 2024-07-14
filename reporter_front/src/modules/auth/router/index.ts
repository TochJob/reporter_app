export const authRoutes = [
  {
    path: "/auth",
    name: "auth",
    component: () => import("@/modules/auth/pages/Auth.vue"),
  },
];
