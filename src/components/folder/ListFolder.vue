<template>
  
    <v-container class="list-folder">

        

            <v-expansion-panels  popout>
                <v-flex row wrap >
                <v-expansion-panel class="test"  v-for="folder in library.folders" v-bind:key="folder.name"  >
                    
                    <v-expansion-panel-header v-slot="{ open }" class="header-folder" @click="target(folder)" >
           
                        <v-row no-gutters>
                       
                            <v-col cols="1"><v-icon color="orange">mdi-folder</v-icon></v-col>
                            <v-col class="title-card item-col" cols="7">{{folder.name}}</v-col>
                            
                            <v-col cols="1"></v-col>
                            <v-col cols="1" class="item-col" >
                                <v-fade-transition leave-absolute >
                                   
                                        <MenuFolder v-show="open"/>
                                
                                </v-fade-transition>
                            </v-col>
                        </v-row>
            
                    </v-expansion-panel-header>

                    <v-expansion-panel-content>
                        <v-divider></v-divider>
                            <CreateBinder/>
                            <Binders v-bind:binders="folder.binders" />
                    </v-expansion-panel-content>
                </v-expansion-panel>
                </v-flex>
            </v-expansion-panels>
        
        
    </v-container>
        
</template>

<script>
import { mapState, mapActions } from 'vuex';
import MenuFolder from './MenuFolder'

import Binders from '../binder/Binders'
import CreateBinder from '../binder/CreateBinder'
export default {
    components:{
        MenuFolder,
        Binders,
        CreateBinder
    },
    computed:{
        ...mapState([
      'library',
    ]),
    },
    methods:{
        ...mapActions([
    
      'keepFolder'
    ]),
        target(folder){
            this.keepFolder(folder);
        }
    }
}
</script>

<style>
.v-expansion-panels{
    width: 500px!important;
    height: 80px;
    margin: 2px;
}
.test{
  margin: 5px; 
  border-radius: 5px;
}

    .card-folder{
        margin: 20px!important;
        width: 50px!important;
    }
    .title-card{
        margin-top: 7px
    }
    .btn-more{
  position: absolute;
  right : 0px;
  top: 0px;
}
.list-folder{
    padding: 2px!important;
    display: flex;
    flex-direction: row;
    flex-flow: wrap;
    

}
.item-col{
margin-left: 15px;

}
</style>