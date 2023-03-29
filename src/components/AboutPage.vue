<template>
  <section class="mb-0 py-20 text-white text-center relative">
    <div
      class="absolute inset-0 w-full h-full introduction-bg background-header"
    ></div>
    <div class="container mx-auto">
      <div class="text-white main-header-content">
        <h1 class="font-serif text-5xl mb-5">Just Study Case (❤️)</h1>

        <p class="font-bold">Thanks for all..</p>
      </div>
    </div>
  </section>
</template>

<script>
import { mapStores } from "pinia";
import useModalStore from "@/stores/modal";

export default {
  name: "AboutPage",
  computed: {
    ...mapStores(useModalStore),
  },
  methods: {},
};
</script>
