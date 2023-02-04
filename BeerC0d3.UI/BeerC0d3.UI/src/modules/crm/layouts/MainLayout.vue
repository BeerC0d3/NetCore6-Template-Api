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

        <q-toolbar-title> Quasar App Sucursal</q-toolbar-title>

        <div><q-btn flat color="primary" label="Flat" /></div>
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
          <MenuRecursive
            v-for="item in MenuArray"
            :key="item.id"
            v-bind="item"
          />
        </q-list>
        <!-- <MenuRecursive :MenuJson="MenuArray" /> -->

        <!-- <q-list>
          <q-item-label header class="text-grey-8">
            Essential Links
          </q-item-label>
          <EssentialLink
            v-for="link in essentialLinks"
            :key="link.title"
            v-bind="link"
          >
          </EssentialLink>
        </q-list> -->
        <!-- <q-list>
         <q-item to="/Cards" active-class="q-item-no-link-highlighting">
            <q-item-section avatar>
              <q-icon name="card_giftcard" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Cards</q-item-label>
            </q-item-section>
          </q-item>

          <q-expansion-item
            icon="menu_open"
            label="Catalogos"
            :active="active"
            active-class="bg-teal-1 text-grey-8"
          >
            <q-item
              to="/error"
              class="q-ml-xl"
              active-class="q-item-no-link-highlighting"
            >
              <q-item-section avatar>
                <q-icon color="primary" name="bluetooth" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Marcas</q-item-label>
              </q-item-section>
            </q-item>

            <q-item
              to="/error"
              class="q-ml-xl"
              active-class="q-item-no-link-highlighting"
            >
              <q-item-section avatar>
                <q-icon color="primary" name="bluetooth" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Categorias</q-item-label>
              </q-item-section>
            </q-item>
          </q-expansion-item>
        </q-list> -->
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
          <div class="text-weight-bold">Razvan Stoenescu</div>
          <div>@rstoenescu</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import MenuRecursive from "src/components/MenuRecursive.vue";

const linksList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

const menu = [
  {
    id: 1,
    icono: "bluetooth",
    titulo: "Inicio",
    url: "/",
    menuHijos: [
      {
        id: 2,
        icono: "Contact",
        titulo: "Catalogos",
        url: "",
        menuHijos: [
          {
            id: 3,
            icono: "Icon1",
            titulo: "Marcas",
            url: "Marca",
            menuHijos: [],
          },
          {
            id: 4,
            icono: "Icon1",
            titulo: "Categorias",
            url: "Categoria",
            menuHijos: [],
          },
        ],
      },
      {
        id: 5,
        icono: null,
        titulo: "Usuarios",
        url: "",
        menuHijos: [
          {
            id: 6,
            icono: null,
            titulo: "Listado",
            url: "",
            menuHijos: [],
          },
        ],
      },
    ],
  },
];

export default defineComponent({
  name: "MainLayout",
  // components: {
  //   EssentialLink,
  // },
  setup() {
    const leftDrawerOpen = ref(false);
    return {
      essentialLinks: [
        {
          title: "Search",
          caption: "quasar.dev",
          icon: "school",
          link: "https://quasar.dev",
          level: 0,
          children: [
            {
              title: "Documents",
              caption: "quasar.dev",
              icon: "school",
              link: "https://quasar.dev",
              level: 1,
              children: [
                {
                  title: "Search (level 3)",
                  caption: "quasar.dev",
                  icon: "school",
                  link: "https://quasar.dev",
                  level: 2,
                  children: [],
                },
              ],
            },
          ],
        },
        {
          title: "Github",
          caption: "github.com/quasarframework",
          icon: "code",
          link: "https://github.com/quasarframework",
          level: 0,
          children: [
            {
              title: "Github Level 2",
              caption: "quasar.dev",
              icon: "school",
              link: "https://quasar.dev",
              level: 1,
              children: [],
            },
          ],
        },
        {
          title: "Forum",
          caption: "forum.quasar.dev",
          icon: "record_voice_over",
          link: "https://forum.quasar.dev",
          level: 0,
          children: [
            {
              title: "Forum Level 2",
              caption: "quasar.dev",
              icon: "school",
              link: "https://quasar.dev",
              level: 1,
              children: [],
            },
          ],
        },
      ],
      leftDrawerOpen,
      MenuArray: menu,

      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
  components: { MenuRecursive },
});
</script>
