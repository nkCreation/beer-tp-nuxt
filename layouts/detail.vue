<template>
  <div>
    <section class="hero is-medium is-bold">
      <div class="hero-head">
        <Navigation />
      </div>
    </section>

    <section class="wrapper-content">
      <Nuxt />
    </section>

    <footer class="footer">
      <div class="container">
        <p class="has-text-centered">&copy; MyBeer 2021</p>
      </div>
    </footer>
  </div>
</template>

<script>
import Navigation from '@/components/ui/Navigation';

export default {
  components: {
    Navigation,
  },
};
</script>

<style scoped>
.wrapper-content {
  margin: 4rem 0;
}
</style>
