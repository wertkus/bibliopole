<template>
  <!-- Header -->
  <header id="header" class="bg-teal-900">
    <nav class="flex justify-between items-center w-full py-2 px-4">
      <!-- App Name -->
      <a class="text-white font-serif uppercase text-5xl space-x-0" href="#"
        >BiblioPole 🕮</a
      >

      <div class="flex flex-row items-center">
        <!-- Primary Navigation -->
        <ul class="flex flex-row text-xl m-4 px-2">
          <!-- Navigation Links -->
          <li class="px-8">
            <a
              class="px-4 text-white p-4 rounded-full hover:bg-white hover:text-black"
              href="#"
              @click.prevent="toggleAuthModal"
              >Login / Register</a
            >
          </li>
          <li class="px-8">
            <a
              class="px-4 text-white p-4 rounded-full hover:bg-white hover:text-black"
              href="#"
              >Profile</a
            >
          </li>
          <li class="px-8">
            <a
              class="px-4 text-white p-4 rounded-full hover:bg-white hover:text-black"
              href="#"
              >My Orders</a
            >
          </li>
          <li class="px-8">
            <a
              class="px-4 text-white p-4 rounded-full hover:bg-white hover:text-black"
              href="#"
              >Manage</a
            >
          </li>
        </ul>
      </div>
      <!-- Shopping Cart-->
      <div class="relative inline-block">
        <a
          href="#"
          class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full"
        >
          <i class="fas fa-shopping-cart text-gray-500"></i>
        </a>
        <div
          class="absolute top-0 right-0 w-4 h-4 bg-black text-white rounded-full text-xs flex items-center justify-center"
        >
          0
        </div>
      </div>
    </nav>
  </header>
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
