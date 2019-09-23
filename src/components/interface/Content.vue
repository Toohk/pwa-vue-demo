<template>
  
      <v-content class="block-content">
 
        <v-card  v-show="minInterface == false" outlined class="sub-nav">
        
        <p class="nav-line">
        
            
            <v-btn  class="ma-1" outlined small fab color="grey darken-2" @click="clearData(), setComponent('Folders')">
                <v-icon>mdi-home</v-icon>
            </v-btn>
            <v-chip  outlined class="text-capitalize ma-1" @click="setComponent('Folders'), keepFolder(targetFolder)" v-if="targetFolder !== ''" color="orange" text> <v-icon class="icon-nav">mdi-folder</v-icon> {{targetFolder.name}} </v-chip>  
            <v-chip outlined class="text-capitalize ma-1" @click="setComponent('Tables'), keepBinder(targetBinder)" v-if="targetBinder !== ''" color="blue" text> <v-icon class="icon-nav">mdi-notebook</v-icon> {{targetBinder.name}}</v-chip>
           <v-chip  outlined class="text-capitalize ma-1" @click="setComponent('Tabs'),keepTabs(targetTab)" v-if="targetTabs !== ''" color="green" text> <v-icon class="icon-nav">mdi-file-chart</v-icon> {{targetTabs[0].market_id.name}}</v-chip>
        </p>
 
        </v-card>
   
        <v-container>

        <Folders v-if="component === 'Folders'"/>
        
        <Tables v-if="component === 'Tables'"/>

        <Tabs v-if="component === 'Tabs'"/>
        
        </v-container>

      </v-content>
   
</template>

<script>
import Folders from '../folder/Folders'
import Tables from '../table/Tables'
import Tabs from '../table/Tabs'
import { mapState, mapActions } from 'vuex';
export default {
    computed:{
        ...mapState([
      'component',
      'targetFolder',
      'targetBinder',
      'targetTabs',
      'minInterface'
    ]),
    },
    components:{
        Folders,
        Tables,
        Tabs
    },
   data() {
       return {
        ...mapActions([
            'setComponent',
            'keepFolder',
            'keepBinder',
            'keepTabs',
            'clearData'
        ])
       }
   },


}

</script>

<style>
    main .v-content{
        padding: 0px !important;
    }
    .sub-nav{
        min-height: 60px;
    }
    .nav-line{
        margin: 10px 0px 5px 0px!important;
    }
    .icon-nav{
        margin-right: 10px;
    }
    .container{
        padding: 12px;
    }
</style>