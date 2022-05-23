import { createStore } from 'vuex'
import movie from './moive'
import about from './about'

export default createStore({
  modules: {
    movie,
    about
  }
})