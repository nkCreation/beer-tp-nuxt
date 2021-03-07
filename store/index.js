export const state = () => ({
  beers: [],
});

export const getters = {
  getABeer: (state) => (id) =>
    state.beers.find((beer) => beer.id === parseInt(id)),
};
export const mutations = {
  setBeers(state, beers) {
    state.beers = beers;
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
