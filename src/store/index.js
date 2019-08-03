import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        windowWidth: 0,
        windowHeight: 0
    },
    mutations: {
        width(state, res) {
            let { windowWidth, windowHeight } = res;
            state.windowHeight = windowHeight;
            state.windowWidth = windowWidth;
            console.log(windowHeight, windowWidth)
        },
    }
})
export default store