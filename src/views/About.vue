<template>
  <div class="about">
    <h1>This is an about page</h1>
    <AboutPage></AboutPage>
  </div>
</template>

<script>
import AboutPage from "@/components/AboutPage.vue";

export default {
  name: About,
  components: {
    AboutPage,
  },
};
</script>
