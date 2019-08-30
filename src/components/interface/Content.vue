<template>
  
      <v-content class="block-content">
      
        <div>
            Dossiers
        </div>
        
        <v-container>

        <Folders v-if="display === 'Folders' " />
        
        </v-container>

      </v-content>
   
</template>

<script>
import Folders from '../folder/Folders'
export default {

    components:{
        Folders
    },
   data() {
       return {
           display:"Folders"
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
</style>