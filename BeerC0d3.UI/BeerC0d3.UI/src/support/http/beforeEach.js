import router from "src/router";
import { useAuthStore } from "stores/all";

export const addBeforeEach = (Router) => {
  const store = useAuthStore();
  Router.beforeEach(async (to, from, next) => {
    //await store.Check_Token().catch(() => {});
    //Router.app.config.globalProperties;
    const destination = to.name;
    const requiresLogin = to.meta.requireLogin;
    const isAuthenticated = store.isAuthenticated;
    const isBlocked = store.isBlocked;

    // console.log("destination: " + destination);
    // console.log("isAuthenticated: " + isAuthenticated);
    // console.log("to: " + to.name);
    if (destination === "Login Page") {
      if (isAuthenticated) next({ name: "Admin Dashboard" });
      else next();
    } else if (destination === "Lock Screen") {
      if (isBlocked) next();
      else if (isAuthenticated) next({ name: "Admin Dashboard" });
      else next({ path: "/login" });
    } else {
      if (requiresLogin) {
        console.log("entre aqui requires Login");
        if (isAuthenticated) next();
        else next({ path: "/login", query: { to: to.path } });
      } else next();
    }
  });
};
