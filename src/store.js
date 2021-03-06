import Vue from 'vue';
import Vuex from 'vuex';
import actions from './store/actions';
import mutations from './store/mutations';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accessToken: null,
    loggingIn: false,
    loginError: null,

    chest:'',

    targetFolder: '',
    targetBinder: '',
    targetTabs:'',
    
    drawer: true,
    component:'Folders',
    minInterface:false,

    
  },
  
  mutations,

  actions,

});
