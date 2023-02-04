<template>
  <div>
    <div v-if="menuHijos.length == 0">
      <q-item :to="url" clickable v-ripple :inset-level="level">
        <q-item-section>{{ titulo }}</q-item-section>
      </q-item>
    </div>
    <div v-else>
      <div v-if="menuHijos.length > 0">
        <!-- {{ menuHijos }} -->

        <q-expansion-item
          :hide-expand-icon="id == 1"
          :disable="id == 1"
          icon="mail"
          :label="titulo"
          :header-inset-level="level"
          :default-opened="id == 1"
        >
          <menu-recursive
            v-for="child in menuHijos"
            :key="child.id"
            v-bind="child"
          >
          </menu-recursive>
        </q-expansion-item>
      </div>
      <div v-else>
        <q-item clickable v-ripple :inset-level="level">
          <q-item-section>{{ titulo }}</q-item-section>
        </q-item>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  //   MenuJson: {
  //     type: Array,
  //     required: true,
  //   },
  id: {
    type: String,
    required: true,
  },
  titulo: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },

  menuHijos: [],
});
</script>
