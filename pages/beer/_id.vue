<template>
  <div v-if="beer" class="container">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li class="is-active">
          <a>
            {{ beer.name }}
          </a>
        </li>
      </ul>
    </nav>

    <BeerItem :beer="beer" />
  </div>
</template>

<script>
import BeerItem from '@/components/BeerItem.vue';

export default {
  name: 'BeerDetail',
  components: { BeerItem },
  layout: 'detail',
  async asyncData({ store, payload, params }) {
    if (payload) {
      await store.commit('setBeers', payload);
    } else if (!store.getters.getABeer(params.id)) {
      await store.dispatch('fetchBeers');
    }
  },
  computed: {
    beer() {
      return this.$store.getters.getABeer(this.$route.params.id);
    },
  },
};
</script>
