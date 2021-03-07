<template>
  <div class="beer-list">
    <BeerListItem v-for="beer in beers" :key="beer.id" :beer="beer" />
  </div>
</template>

<script>
import BeerListItem from './BeerListItem.vue';
export default {
  components: { BeerListItem },
  name: 'BeerList',
  props: {
    beers: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.beer-list {
  margin: 4em 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 3em;
}
</style>
