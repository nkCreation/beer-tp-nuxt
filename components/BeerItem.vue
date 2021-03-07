<template>
  <div class="columns">
    <div class="column is-one-third">
      <div class="card">
        <figure class="image is-3by4">
          <img :src="beer.image_url" :alt="beer.name" />
        </figure>
      </div>
    </div>

    <div class="column content">
      <h2 class="title is-1">{{ beer.name }}</h2>
      <h3 class="subtitle is-4">{{ beer.tagline }}</h3>

      <p>
        First brewed: {{ beer.first_brewed }} - IBU: {{ beer.ibu }} - EBC:
        {{ beer.ebc }} - ABV: {{ beer.abv }}
      </p>

      <p>{{ beer.description }}</p>

      <h4 class="title is-3">Food pairing</h4>

      <ul>
        <li v-for="food in beer.food_pairing" :key="food">{{ food }}</li>
      </ul>

      <h4 class="title is-3">Brewer tips</h4>
      <p>{{ beer.brewers_tips }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BeerItem',
  props: {
    beer: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
img {
  object-fit: contain;
  object-position: center;
  padding: 2em;
}
</style>
