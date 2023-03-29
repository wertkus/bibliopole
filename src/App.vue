<template>
  <!--NavBar-->
  <app-header />
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
  <!-- Introduction -->
  <!-- <main-banner></main-banner> -->
  <!-- <profile-banner></profile-banner> -->
  <!-- <order-list-banner></order-list-banner> -->

  <!-- Main Content -->
  <!-- <product-list></product-list> -->

  <auth />
</template>

<script>
import AppHeader from "@/components/Header.vue";
import Auth from "@/components/Auth.vue";
import ProductList from "@/components/ProductList.vue";
import MainBanner from "./components/MainBanner.vue";
import ProfileBanner from "./components/ProfileBanner.vue";
import OrderListBanner from "./components/OrderListBanner.vue";
import AboutPage from "./components/AboutPage.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    Auth,
    ProductList,
    MainBanner,
    ProfileBanner,
    OrderListBanner,
    AboutPage,
  },
};
</script>
