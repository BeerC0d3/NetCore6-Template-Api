import { defineStore } from "pinia";
import { fetchWrapper } from "@/helpers";

const baseUrl = `${process.env.API}/api/usuarios`;

//const baseUrl = "https://localhost:5001/api/usuarios";

//localhost:5001

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    user: JSON.parse(localStorage.getItem("user")),
    authenticated: false,
    blocked: false,
    // token: "",
    returnUrl: null,
  }),
  getters: {
    // getUser: (state) => state.user,
    // getUserToken: (state) => state.token,
    isAuthenticated: (state) => state.authenticated,
    // isAuthenticated: (state) => true,
  },
  actions: {
    async login(username, password) {
      const user = await fetchWrapper.post(`${baseUrl}/token`, {
        username,
        password,
      });

      this.user = user;
      this.authenticated = true;
      //this.token = JSON.stringify(user);
      localStorage.setItem("user", JSON.stringify(user));
      // const cookeiValue = Cookies.get("refreshToken");
      // console.log("mycookie" + cookeiValue);

      // const $q = useQuasar();
      // const hasIt = $q.cookies.has("cookie_name");

      //console.log(hasIt);
    },
    async Check_Token() {
      if (this.token) return Promise.resolve(this.token);
      //const token = storage.getLocalToken();
      // if (!token) return Promise.reject(new Error("Token inválido!"));
      // this.SET_TOKEN(token);
      // return this.LOAD_SESSION();
    },
    async RefreshToken() {
      const userRefresh = await fetchWrapper.post(
        `${baseUrl}/refresh-token`,
        {}
      );

      //localStorage.removeItem("user");

      this.user = userRefresh;
      this.authenticated = true;
      this.token = JSON.stringify(userRefresh);
      localStorage.setItem("user", JSON.stringify(userRefresh));
    },
    logout() {
      this.user = null;
      localStorage.removeItem("user");
      this.authenticated = false;

      //$router.push("/login");
    },
  },
});
