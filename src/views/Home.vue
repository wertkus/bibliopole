<template>
  <div>
    <main-banner></main-banner>
    <product-list></product-list>
  </div>
</template>

<script>
import MainBanner from "@/components/MainBanner.vue";
import ProductList from "@/components/ProductList.vue";

export default {
  name: "Home",
  components: {
    MainBanner,
    ProductList,
  },
};
</script>
