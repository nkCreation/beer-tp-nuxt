<template>
  <div class="container is-fluid">
    <BeerList :beers="favoriteBeers" />
  </div>
</template>

<script>
import BeerList from '@/components/BeerList';
import { mapState } from 'vuex';

export default {
  name: 'Favorite',
  components: {
    BeerList,
  },
  layout: 'detail',
  async asyncData({ store }) {
    await store.dispatch('fetchBeers');
  },
  computed: {
    ...mapState(['favoriteBeers']),
  },
};
</script>
