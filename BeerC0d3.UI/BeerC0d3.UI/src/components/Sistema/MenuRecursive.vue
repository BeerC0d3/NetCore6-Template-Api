<template>
  <div>
    <div v-if="menuHijos.length == 0">
      <q-item :to="url" clickable v-ripple class="q-item-active">
        <q-item-section avatar class="item-bt">
          <q-avatar>
            <q-icon :name="icono" class="icon-color" />
          </q-avatar>
        </q-item-section>
        <q-item-section>{{ titulo }}</q-item-section>
      </q-item>
    </div>
    <div v-else>
      <div v-if="menuHijos.length > 0">
        <q-expansion-item
          :hide-expand-icon="id == 1"
          :disable="id == 1"
          :icon="icono"
          :label="titulo"
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
        <q-item clickable v-ripple>
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
    type: Number,
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

  icono: {
    type: String,
    required: false,
  },

  menuHijos: [],
});
</script>

<style scoped>
.q-expansion-item {
  border-bottom: 1px dashed #5dc697;
}
.icon-color {
  color: #5dc697;
}

.q-focusable .q-hoverable .q-item-active {
  background-color: #5dc697;
  color: #fff;
}
</style>
