import { createStore } from 'vuex'

export default createStore({
    state: {
        stage: 0,
        playOption: null,
        houseOption: null,
        optionsList: ['rock', 'paper', 'scissors', 'lizard', 'spock'],
    },
    mutations: {},
    actions: {},
    modules: {}
})