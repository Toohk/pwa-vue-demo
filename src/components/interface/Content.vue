<template>
  
      <v-content class="block-content">
      
        <v-card outlined class="sub-nav">
        <p class="text-center">
        
            <v-chip outlined class="text-capitalize" @click="clearData(), setComponent('Folders')" color="grey" text> <v-icon class="icon-nav">mdi-home</v-icon> Index </v-chip>
            <v-chip outlined class="text-capitalize" @click="setComponent('Folders'), keepFolder(targetFolder)" v-if="targetFolder !== ''" color="orange" text> <v-icon class="icon-nav">mdi-folder</v-icon> {{targetFolder.name}} </v-chip>  
            <v-chip outlined class="text-capitalize" @click="setComponent('Tables'), keepBinder(targetBinder)" v-if="targetBinder !== ''" color="blue" text> <v-icon class="icon-nav">mdi-notebook</v-icon> {{targetBinder.name}}</v-chip>
           <v-chip  outlined class="text-capitalize" @click="setComponent('Tabs'),keepTabs(targetTab)" v-if="targetTabs !== ''" color="green" text> <v-icon class="icon-nav">mdi-file</v-icon> {{targetTabs[0].market_id.name}}</v-chip>
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
      'targetTabs'
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

methods: {
    
}
}

</script>

<style>
   main .v-content{
        padding: 0px !important;
    }
    .sub-nav{
       
        height: 60px;
    }
    .icon-nav{
        margin-right: 10px;
    }
    .container{
        padding: 12px;
    }
</style>