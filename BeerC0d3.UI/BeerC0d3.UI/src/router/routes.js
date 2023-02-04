import { routes as authRoutes } from "src/modules/auth";
import { routes as adminRoutes } from "src/modules/crm";

const routes = [
  {
    path: "/crm",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        name: "Admin Dashboard",
        path: "",
        component: () => import("pages/IndexPage.vue"),
        meta: { requireLogin: true },
      },
      {
        path: "Marca",
        component: () => import("pages/Catalogos/Marca.vue"),
      },
      {
        path: "Listado",
        component: () => import("pages/Archivos/Listado.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

// export default [...routes, ...authRoutes, adminRoutes];
export default [...routes, ...authRoutes];
