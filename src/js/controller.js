import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import router from '@/router';

import VuexPersistence from 'vuex-persist'

Vue.use(Vuex);
console.log("essa porra ta funcionando?");
axios.defaults.baseURL = process.env.API_URL || 'http://localhost:3000/api/'

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    store.commit('LOADER', true);
    return config;
}, function (error) {
    store.commit('LOADER', false);
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    store.commit('LOADER', false);
    return response;
}, function (error) {
    return Promise.reject(error);
});


export default new Vuex.Store({
    state: {
        vagas: [],
        loader : false
    },

    plugins: [new VuexPersistence().plugin],
    mutations: {
        setData(state, payload){
            state.vagas = payload;
        },
        LOADER(state, payload){
            state.loader = payload;
        }
    },
    actions: {
        getProdutos({ commit }){
            const baseURI = 'http://localhost:3000/api/Vaga'
            axios.get(baseURI)
                .then(response => {
                    commit('setData', response.data)
                    console.log(response.data);
                
                })
                .catch(function(error){
                    console.log('Erro:', error);
                })
            
        }
    },
    getters: {
    
    }
});