<template>
  <section class="mb-0 py-20 text-white text-center relative">
    <div
      class="absolute inset-0 w-full h-full introduction-bg background-header"
    ></div>
    <div class="container mx-auto">
      <div class="text-white main-header-content">
        <h1 class="font-serif text-5xl mb-5">Your Wishes come true (🐉)</h1>
        <p class="w-full md:w-8/12 mx-auto">
          If you're a book lover, then you know how important it is to have
          access to a wide variety of reading material. That's where Big Dragons
          Services book reader cargoship comes in. This fantastic service is
          designed to bring books directly to your doorstep, no matter where you
          are in the world..
        </p>
        <p class="font-bold">Thanks for all..</p>
      </div>
    </div>
  </section>
</template>

<script>
import { mapStores } from "pinia";
import useModalStore from "@/stores/modal";

export default {
  name: "OrderListBanner",
  computed: {
    ...mapStores(useModalStore),
  },
  methods: {
    toggleAuthModal() {
      this.modalStore.isOpen = !this.modalStore.isOpen;
      console.log(this.modalStore.isOpen);
    },
  },
};
</script>
