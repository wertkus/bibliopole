<template>
  <app-header />

  <!-- Introduction -->
  <section class="mb-0 py-20 text-white text-center relative">
    <div
      class="absolute inset-0 w-full h-full introduction-bg background-header"
    ></div>
    <div class="container mx-auto">
      <div class="text-white main-header-content">
        <h1 class="font-serif text-5xl mb-5">Bibliophile (🧙🏼‍♂️/🧙🏼‍♀️)</h1>
        <p class="w-full md:w-8/12 mx-auto">
          A bibliophile is someone who loves books and reading. The word
          "bibliophile" comes from the Greek words "biblion" (book) and "philos"
          (loving). Bibliophiles are often avid collectors of books and enjoy
          spending time browsing and reading in bookstores, libraries, or their
          personal collections ...
        </p>
        <p class="font-bold">
          We Are Here for you, as a bibliophers; trying to serve most rarely
          books!
        </p>
      </div>
    </div>
  </section>

  <!-- Main Content -->
  <product-list></product-list>

  <auth />
</template>

<script>
import AppHeader from "@/components/Header.vue";
import Auth from "@/components/Auth.vue";
import ProductList from "@/components/ProductList.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    Auth,
    ProductList,
  },
};
</script>
