import axios from "axios";

const state = {
    animes:[]
}
  
const getters = {
    allAnimes: state => state.animes,
    animeById: (state) => (id) => (state.animes = state.animes.filter(a => a.id == id))[0],
}

const actions = {
    getAnimes({ commit }) {
        axios.get("static/animes.json").then((response) => {
            commit('getAnimes', response.data)
        })
    },
    addAnime({commit} , new_anime){
      commit('addAnime', new_anime)
    },
    deleteAnime({ commit }, id) {
        commit("removeAnime", id)
    }
}

const mutations = {
    getAnimes: (state, animes) => (state.animes = animes),
    addAnime: (state, new_anime) => state.animes.push(new_anime),
    removeAnime: (state, id) => (state.animes = state.animes.filter(a => a.id !== id))
}
 
export default {
    state,
    getters,
    actions,
    mutations,
}