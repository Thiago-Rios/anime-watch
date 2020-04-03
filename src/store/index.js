import vue from 'vue'
import Vuex from 'vuex'
import animes from './modules/animes'

vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        animes
    }
})