import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sagas: [],
    manga: {},
  },
  getters: {
    sagas: (state) => state.sagas,
    manga: (state) => state.manga,
  },
  actions: {
    async fetchSagas({ commit }) {
      let { data } = await axios.get("/api/sagas");

      commit("setSagas", data);
    },
    getManga({ state, commit }, id) {
      let manga = state.sagas.find((saga) => saga._id == id);

      commit("setManga", manga);
    },
    async addNew({ state, dispatch }, obj) {
      console.log(obj, state.sagas)
      if (!obj.newSaga) {
        let selected_saga = state.sagas.find((saga) => saga.name == obj.name);

        console.log(selected_saga)

        let {data} = await axios.post(`/api/sagas/${selected_saga._id}/volumes`, obj.volumes[0]);

        console.log(data)

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
  },
  mutations: {
    setSagas: (state, sagas) => (state.sagas = sagas),
    setManga: (state, manga) => (state.manga = manga),
  },
});
