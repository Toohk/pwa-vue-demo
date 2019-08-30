<template>
  
    <v-container class="list-folder">

        <v-flex class="list-folder" row >

            <v-expansion-panels popout>
                
                <v-expansion-panel  v-for="folder in library.folders" v-bind:key="folder.name"  >
                    
                    <v-expansion-panel-header v-slot="{ open }" class="header-folder" @click="target(folder)" >
           
                        <v-row no-gutters>
                       
                            <v-col cols="1"><v-icon color="orange">mdi-folder</v-icon></v-col>
                            <v-col class="title-card item-col" cols="7">{{folder.name}}</v-col>
                            <v-col cols="1">
                            
                                <v-fade-transition leave-absolute  >
                                   
                                    <EditFolder v-show="open"/>
                                   
                                </v-fade-transition>
                            </v-col>
                            <v-col cols="1" class="item-col" >
                                <v-fade-transition leave-absolute >
                                   
                                        <DeleteFolder v-show="open"/>
                                
                                </v-fade-transition>
                            </v-col>
                        </v-row>
            
                    </v-expansion-panel-header>

                    <v-expansion-panel-content>
                        <v-divider></v-divider>
            
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        
        </v-flex>
    </v-container>
        
</template>

<script>
import { mapState, mapActions } from 'vuex';
import DeleteFolder from './DeleteFolder'
import EditFolder from './EditFolder'
export default {
    components:{
        DeleteFolder,
        EditFolder
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
}
.item-col{
margin-left: 15px;
}
</style>