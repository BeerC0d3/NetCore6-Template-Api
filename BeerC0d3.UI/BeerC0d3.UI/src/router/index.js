import { route } from "quasar/wrappers";
import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import routes from "./routes";
import { addBeforeEach, addInterceptors } from "src/support/http";
import { useAuthStore } from "stores/all";

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === "history"
    ? createWebHistory
    : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  addBeforeEach(Router);
  addInterceptors(Router);
  // Router.beforeEach(async (to) => {
  //   //console.log(to)
  //   const publicPages = ["/login"];
  //   const authRequired = !publicPages.includes(to.path);
  //   const auth = useAuthStore();

  //   if (authRequired && !auth.user) {
  //     auth.returnUrl = to.fullPath;
  //     return "/login";
  //   }
  // });

  return Router;
});
