<template>
  <q-card class="q-ma-xl">
    <div class="row">
      <div class="col-0 col-sm-5 bg-primary rounded-left-borders xs-hide">
        <div class="row q-ml-sm q-mt-sm">
          <div class="col-12 fredoka text-subtitle1">
            <!-- <router-link
              class="text-white"
              style="text-decoration: none"
              to="/"
            >
            </router-link> -->
          </div>
        </div>
        <div
          class="row full-width q-px-xl q-pb-xl full-height flex flex-center"
        >
          <div class="">
            <div
              class="text-h4 text-uppercase text-white fredoka"
              style="min-width: 220px"
            >
              Control de transporte
            </div>
            <div class="bg-transparent q-my-sm">
              <q-avatar size="150px" class="q-mb-sm">
                <img src="../../../assets/login/beer.png" />
              </q-avatar>
            </div>
            <!-- <div class="text-white q-my-sm text-subtitle1">
              Informe suas credenciais para xxxrealizar login!
            </div> -->
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-7">
        <div class="row q-ml-sm q-mt-sm sm-and-up-hide">
          <div class="col-12 fredoka text-subtitle1">
            <router-link
              class="text-primary"
              style="text-decoration: none"
              to="/"
            >
              BeerC0d3
            </router-link>
          </div>
        </div>
        <div class="row q-pa-sm-sm q-pa-md">
          <div class="col-12">
            <q-card-section>
              <div class="q-mb-xl">
                <div class="flex justify-center">
                  <div
                    class="text-h4 text-uppercase q-my-none text-weight-bold text-primary fredoka"
                  >
                    Login
                  </div>
                </div>
              </div>
              <q-form class="q-gutter-md" @submit="onSubmit">
                <q-input
                  v-model="user.username"
                  :rules="[rules.required]"
                  label="Usuario"
                  lazy-rules
                  name="username"
                  outlined
                  class="input"
                />
                <q-input
                  v-model="user.password"
                  :rules="[rules.required, rules.minLength(6)]"
                  label="Pasword"
                  lazy-rules
                  name="password"
                  type="password"
                  outlined
                  class="input"
                />
                <div>
                  <q-btn
                    class="full-width fredoka"
                    color="primary"
                    label="Entrar"
                    rounded
                    type="submit"
                  ></q-btn>
                  <div class="q-mt-lg">
                    <!-- <div class="q-mt-sm">
                      Ainda não possui uma conta?
                      <router-link class="text-primary" to="/login"
                        >Cadastrar-se</router-link
                      >
                    </div> -->
                    <!-- <div class="q-mt-sm">
                      Esqueceu a senha? Clique
                      <router-link class="text-primary" to="/forgot-password"
                        >aqui!</router-link
                      >
                    </div> -->
                  </div>
                </div>
              </q-form>
            </q-card-section>
          </div>
        </div>
      </div>
    </div>
  </q-card>
</template>
<script setup>
import { computed, reactive } from "vue";
import rules from "src/support/rules/fieldRules";
import { handleError } from "src/support/errors/handleErrors";
import { useAuthStore, useCommonStore } from "stores/all";
import { useRoute, useRouter } from "vue-router";
import { useQuasar } from "quasar";
// dotenv.config();
// console.log(process.env);

const $router = useRouter();
const $route = useRoute();
const $q = useQuasar();

const $commonStore = useCommonStore();
const user = reactive({});
const loading = computed(() => $commonStore.isLoading);

const onSubmit = async () => {
  try {
    const authStore = useAuthStore();
    $commonStore.Add_Request();
    await authStore.login(user.username, user.password);

    // const value = $q.cookies.get("refreshToken");
    const to = $route.query.to?.toString();
    // console.log("mycookie: " + value);
    $router.push(to || "/crm");
  } catch (error) {
    handleError(error);
    $commonStore.Remove_Request();
  }
};
</script>
<style scoped>
.input:focus-visible {
  border-radius: 4px !important;
  outline-offset: 3px !important;
  outline-width: 1px !important;
  outline-style: dashed !important;
  outline-color: gray !important;
}
</style>
