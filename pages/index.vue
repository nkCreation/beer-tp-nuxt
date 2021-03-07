<template>
  <div class="container is-fluid">
    <BeerList :beers="beers" />
  </div>
</template>

<script>
import BeerList from '@/components/BeerList';
import { mapState } from 'vuex';

export default {
  name: 'Home',
  components: {
    BeerList,
  },
  async asyncData({ store, payload }) {
    await store.dispatch('fetchBeers');
  },
  computed: {
    ...mapState(['beers']),
  },
};
</script>
