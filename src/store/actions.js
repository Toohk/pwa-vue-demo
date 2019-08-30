import axios from 'axios';
import router from '../router';

/* eslint-disable */

export default {

    /** Authentication */

    signUp({ commit }, signUpData){
        axios.post('http://localhost:3000/api/user/signup', {
          'email': signUpData.email,
          'password': signUpData.password
            },{
            headers: {'Content-Type': 'application/json'}
        }).then(() => { 
                router.push("/login");
            }); 
        
    },
    doLogin({ commit }, loginData) {
        commit('loginStart');
        axios.post('http://localhost:3000/api/user/login', {
        ...loginData
        })
        .then(response => {
            localStorage.setItem('accessToken', response.data);
            commit('loginStop', null);
            commit('updateAccessToken', response.data);
            router.push('/');
        })
        .catch(error => {
            commit('loginStop', error.response.data.error);
            commit('updateAccessToken', null);
        })
    },
    fetchAccessToken({ commit }) {
        commit('updateAccessToken', localStorage.getItem('accessToken'));
    },
    logout({ commit }) {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('library');
        commit('logout');
        router.push('/login');
    },
    fetchLibrary({ commit }) {
        if (localStorage.getItem('library') == "null"){
            console.log('fetch')
            axios.get('http://localhost:3000/api/library/get',{
            headers:{
                'accessToken' : this.state.accessToken}})
             .then(response => {
                 commit('updateLibrary',response.data.library[0]);
            })
        }else{ 
        commit('updateLibrary', JSON.parse(localStorage.getItem('library')));}
    },
    updateLibrary() {
        if (localStorage.getItem('library') !== "null"){
            console.log('update')
            axios.put('http://localhost:3000/api/library/update',{
                
                'library' : JSON.parse(localStorage.getItem('library'))})
             
        };
    },




    /** Folder */

    createFolder({commit}, submitFolder){
        const library = this.state.library;
        library.folders.push({"name":submitFolder, "binders":[]});
        commit('updateLibrary', library);
    },
    editFolder({commit}, editedName){
        const library = this.state.library;
        library.folders.find(folder => folder == this.state.targetFolder).name = editedName;
        commit('updateLibrary', library);
    },
    deleteFolder({commit}){
        const library = this.state.library;
        const index = library.folders.indexOf(this.state.targetFolder);
        if (index > -1){
            library.folders.splice(index,1)
        }
        commit('updateLibrary', library);
    },
    keepFolder({commit}, dataTargetFolder){
        commit('updateTargetFolder', dataTargetFolder);
    },


    /** Binder */
    
    createBinder({commit}, submitBinder){
        const library = this.state.library;
        library.folders.find(folder => folder == this.state.targetFolder)
            .binders.push({
                "name": submitBinder.name,
                "description": submitBinder.description,
                "markets": [],
                "tables": {
                    "quantitative_sales":{
                        "forecast":{
                            "tabs":[]
                        },
                        "achieve":{
                            "tabs":[]
                        }
                    }
                }
            })
        commit('updateLibrary', library);
    },
    editBinder({commit}, editedBinder){
        const binder = this.state.targetFolder.binders
            .find(binder => binder == this.state.targetBinder);
        binder.name = editedBinder.name;
        binder.description = editedBinder.description
        commit('updateBinder', binder);
    },
    deleteBinder({commit}, binder){
        const folder = this.state.targetFolder;
        const index = folder.binders.indexOf(this.state.targetBinder);
        if (index > -1){
            folder.binders.splice(index,1)
        }
        commit('updateBinder', binder);
    },
    keepBinder({commit}, dataTargetBinder){
        commit('updateTargetBinder', dataTargetBinder)
    },
    

    /** Market */

    createMarket({commit}, submitMarket){
        const binder = this.state.targetFolder.binders
            .find(binder => binder == this.state.targetBinder);
        binder.markets.push({"name": submitMarket});
        const market = binder.markets[binder.markets.length-1]
        const lines = [];
        
        let a;
        for (let a = 0; a < 12; a++){
            lines.push({"volume": null,"price": null})
        }
        binder.tables.quantitative_sales.forecast.tabs.push(
            {"market_id":market, "lines":lines});
        const lines2 = []
        let b;
        for (let b = 0; b < 12; b++){
            lines2.push({"volume": null,"price": null})
        }
        binder.tables.quantitative_sales.achieve.tabs.push(
            {"market_id":market, "lines":lines2});
        commit('updateBinder', binder);
    },
    /** editMarket({commit}, market){
        
    },*/
    deleteMarket({commit}, market){
        const binder = this.state.targetFolder.binders
            .find(binder => binder == this.state.targetBinder);
        const index = binder.markets.indexOf(market);
        if (index > -1){
            binder.markets.splice(index,1)
        }
        const forecast_tabs = binder.tables.quantitative_sales.forecast.tabs.find( tab => tab.market_id === market);
        const index2 = binder.tables.quantitative_sales.forecast.tabs.indexOf(forecast_tabs);
        if (index2 > -1){
            binder.tables.quantitative_sales.forecast.tabs.splice(index2,1)
        }
        const achieve_tabs = binder.tables.quantitative_sales.achieve.tabs.find( tab => tab.market_id === market);
        const index3 = binder.tables.quantitative_sales.achieve.tabs.indexOf(achieve_tabs);
        if (index3 > -1){
            binder.tables.quantitative_sales.achieve.tabs.splice(index3,1)
        }
        commit('updateBinder', binder);
    },
    clearData({commit}){
        commit('clear');
    },
    setDrawer({commit}){
        if(this.state.drawer == true){
            commit('updateDrawer', false);
        }else{
            commit('updateDrawer', true);
        }
    },
};