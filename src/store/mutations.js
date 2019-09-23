
export default {
    loginStart: state => state.loggingIn = true,
    loginStop: (state, errorMessage) => {
      state.loggingIn = false;
      state.loginError = errorMessage;
    },
    updateAccessToken: (state, accessToken) => {
      state.accessToken = accessToken;
    },
    logout: (state) => {
      state.accessToken = null;
    },
    updateDrawer:(state, data) => {
      state.drawer = data
    },
    updateComponent:(state, data) => {
      state.component = data
    },
    updateInterface:(state) => {
      if (state.minInterface === true){
        state.minInterface = false
      } else{
        state.minInterface = true
      }
      
    },
    updateChest:(state, data) => {
      state.chest = data;
      localStorage.setItem('chest', JSON.stringify(state.chest));
        //const fusion = Object.assign({}, state.library, data);
    },
    updateLocalStorage:(state) => {
      localStorage.setItem('chest', JSON.stringify(state.chest));
    },
    updateBinder:(state, data) => {
      const binder=  state.library.folders.find(folder => folder == state.targetFolder)
        .binders.find(binder => binder == state.targetBinder);
      state.library.folders.find(folder => folder == state.targetFolder)
        .binders[binder] = data;
      localStorage.setItem('library', JSON.stringify(state.library));
    },
    updateTable:(state, data) => {
      state.library.folders.find(folder => folder == state.targetFolder)
        .binders.find(binder => binder == state.targetBinder)
          .tables.quantitative_sales.tabs.find(tab => tab == state.targetTab)
            .tab = data
    },
    updateTargetFolder:(state, dataTargetFolder) => {
      state.targetFolder = dataTargetFolder;
      state.targetBinder = "";
      state.targetTabs = "";
    },
    updateTargetBinder:(state, dataTargetBinder) => {
      state.targetBinder = dataTargetBinder;
      state.targetTabs = "";
    },
    updateTargetTabs:(state, dataTargetTabs) => {
      state.targetTabs = dataTargetTabs;
    },
    clear:(state) =>{
      state.targetFolder= '';
      state.targetBinder= '';
      state.targetTabs= '';
    },
  
  };