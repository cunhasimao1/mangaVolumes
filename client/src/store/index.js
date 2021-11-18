import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sagas: [],
    manga: {},
    stats: {},
  },
  getters: {
    sagas: (state) => state.sagas,
    manga: (state) => state.manga,
    stats: (state) => state.stats,
  },
  actions: {
    async fetchSagas({ commit, dispatch }) {
      let { data } = await axios.get("/api/sagas");

      commit("setSagas", data);
    },
    getManga({ state, commit }, id) {
      let manga = state.sagas.find((saga) => saga._id == id);

      commit("setManga", manga);
    },
    async addNew({ state, dispatch }, obj) {
      console.log(obj, state.sagas);
      if (!obj.newSaga) {
        let selected_saga = state.sagas.find((saga) => saga.name == obj.name);

        let { data } = await axios.post(`/api/sagas/${selected_saga._id}/volumes`, obj.volumes[0]);

        dispatch("fetchSagas");
      } else {
        let newSaga = {
          name: obj.name,
          volumes: obj.volumes,
        };

        await axios.post(`/api/sagas`, newSaga);

        dispatch("fetchSagas");
      }
    },
    async getStats({ state }) {
      let sagas = state.sagas;
      const stats = {
        volumes: {
          total: sagas.reduce((prev, cur) => prev + cur.volumes.length, 0),
          saga: {},
        },
      };
      sagas.forEach((s) => {
        stats.volumes.saga[s.name] = s.volumes.length;
      });
      console.log(stats.volumes);
    },
  },
  mutations: {
    setSagas: (state, sagas) => (state.sagas = sagas),
    setManga: (state, manga) => (state.manga = manga),
    setStats: (state, stats) => (state.stats = stats),
  },
});
