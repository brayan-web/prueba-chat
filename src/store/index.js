import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    name: ''
}
const mutations = {
    setName(state, name){
        state.name = name
    }
}
const getters = {
    getNameSelected(state){
        return state.name
    }
}

const actions = {
    getName(context, name){
        context.commit('setName', name)
    }
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});