// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import Vuex from 'vuex'

export default function (Vue, { router, head, isClient, appOptions }) {
  Vue.use(Vuex)
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  head.link.push({
    rel: 'stylesheet',
    href: '"https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700&display=swap'
  })

  appOptions.store = new Vuex.Store({
    state: {
      dishes: []
    },
    mutations: {
      selectOrRemoveDish(state, dish) {

        const index = state.dishes.findIndex(_dish => _dish.id === dish.id)

        if (index >= 0) {
          return state.dishes.splice(index, 1)
        }

        state.dishes.push(dish)
      }
    }
  })

}
