import Vue from 'vue'
import VueRouter from 'vue-router'
import Entrada from './components/Entrada'
import Home from './components/Home'
import AnimeInfo from './components/AnimeInfo'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path:'/',
            name: 'entrada',
            component: Entrada
        },{
            path:'/home',
            name: 'home',
            component: Home
        },{
            path:'/animeInfo/:id',
            name:'animeInfo',
            component: AnimeInfo
        }
    ]
})