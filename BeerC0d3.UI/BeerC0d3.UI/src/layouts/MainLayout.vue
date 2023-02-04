<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div><q-btn flat label="Salir" @click="Salir" /></div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-scroll-area
        style="
          height: calc(100% - 150px);
          margin-top: 150px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list>
          <!-- <MenuRecursive :MenuJson="MenuArray" /> -->

          <MenuRecursive v-for="item in result" :key="item.id" v-bind="item" />
        </q-list>
      </q-scroll-area>
      <q-img
        class="absolute-top"
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 150px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
          <div class="text-weight-bold">Diego luna</div>
          <div>@rstoenescu</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <main class="q-page q-pa-md">
        <router-view />
      </main>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { defineComponent, ref, onMounted, reactive } from "vue";
import { handleError } from "src/support/errors/handleErrors";
import EssentialLink from "components/EssentialLink.vue";
import MenuRecursive from "src/components/Sistema/MenuRecursive.vue";
import { useAuthStore, useCommonStore } from "stores/all";
import { useRoute, useRouter } from "vue-router";
import { useMenu } from "src/services/Sistema/menu";

const $store = useAuthStore();
const $commonStore = useCommonStore();
const $router = useRouter();

const { result, Get } = useMenu();

const isAuthenticated = $store.isAuthenticated;
const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

const Salir = () => {
  $store.logout();
  $router.push("/login");
};
onMounted(() => {
  Get();
});
</script>
