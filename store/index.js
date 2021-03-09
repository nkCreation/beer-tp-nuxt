export const state = () => ({
  beers: [],
  favoriteBeers: [],
});

export const getters = {
  getABeer: (state) => (id) =>
    state.beers.find((beer) => beer.id === parseInt(id)),
};
export const mutations = {
  setBeers(state, beers) {
    state.beers = beers;
  },
  toggleFavoriteBeers(state, beer) {
    const foundIndex = state.favoriteBeers.findIndex((b) => b.id === beer.id);

    if (foundIndex >= 0) {
      state.favoriteBeers.splice(foundIndex, 1);
      return;
    }

    state.favoriteBeers.push(beer);
  },
};
export const actions = {
  async fetchBeers({ commit }) {
    const { data } = await this.$axios.get('https://api.punkapi.com/v2/beers', {
      params: {
        per_page: 40,
      },
    });

    commit('setBeers', data);
  },
};
