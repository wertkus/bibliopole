<template>
  <section class="mb-0 py-20 text-white text-center relative">
    <div
      class="absolute inset-0 w-full h-full introduction-bg background-header"
    ></div>
    <div class="container mx-auto">
      <div class="text-white main-header-content">
        <h1 class="font-serif text-5xl mb-5">You (❤️)</h1>
        <p class="w-full md:w-8/12 mx-auto">
          Let me start by saying that I admire your passion for reading. In a
          world that is constantly changing, it's wonderful to see that there
          are still people like you who appreciate the value of books and the
          knowledge they contain..
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
  name: "AppHeader",
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
