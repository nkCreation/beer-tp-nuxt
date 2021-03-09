<template>
  <div>
    <section class="hero is-medium is-bold">
      <div class="hero-head">
        <Navigation />
      </div>

      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-spaced">The best beer app in the world</h1>
          <h2 class="subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </h2>
        </div>
      </div>
    </section>

    <div class="box cta">
      <p class="has-text-centered">
        <span class="tag is-primary">New</span> Now built with VueJS 2 and will
        be with VueJS 3 soon !
      </p>
    </div>

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
