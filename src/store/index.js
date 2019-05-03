import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
      userName: 'PJW',
        menuData: {
            0: {
                name: 'Home',
                src: '/'
            },
            1: {
                name: '뭐넣지',
                src: '/'
            }
        }
    }
})

export default store
