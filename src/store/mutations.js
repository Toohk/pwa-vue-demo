
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
    updateLibrary:(state, data) => {
      state.library = data;
      localStorage.setItem('library', JSON.stringify(state.library));
        //const fusion = Object.assign({}, state.library, data);
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
    },
    updateTargetBinder:(state, dataTargetBinder) => {
      state.targetBinder = dataTargetBinder;
    },
    clear:(state) =>{
      state.targetFolder= '';
    },
  
  };