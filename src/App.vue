<template>
  <!--NavBar-->
  <app-header />

  <!-- Introduction -->
  <main-banner></main-banner>

  <!-- Main Content -->
  <product-list></product-list>

  <auth />
</template>

<script>
import AppHeader from "@/components/Header.vue";
import Auth from "@/components/Auth.vue";
import ProductList from "@/components/ProductList.vue";
import MainBanner from "./components/MainBanner.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    Auth,
    ProductList,
    MainBanner,
  },
};
</script>
