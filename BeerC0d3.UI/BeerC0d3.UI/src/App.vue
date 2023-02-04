<template>
  <router-view />
</template>

<script setup>
import { defineComponent, computed, watch } from "vue";
import { loader } from "src/support/utils/loader";
import { useCommonStore } from "stores/all";

const defComp = defineComponent({
  name: "App",
});

const store = useCommonStore();
const isLoading = computed(() => store.isLoading);

watch(
  () => isLoading.value,
  (newVal) => {
    if (newVal) loader.show();
    else loader.hide();
  }
);
</script>
