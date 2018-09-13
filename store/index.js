import Vuex from 'vuex'

const appStore = () => {
  return new Vuex.Store({
    state: {
      post_list: {},
    },
    mutations: {
      post_list_update(state,payload){
        state.post_list = {...payload}
      },
    }
  })
};

export default appStore;