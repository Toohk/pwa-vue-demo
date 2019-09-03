<template>
  
  <v-layout>
   
        <v-btn  v-on:click=" dialogDelete = true" text>
        
            <v-icon color="red">mdi-delete</v-icon><p class="text-capitalize">Supprimer</p> 
        </v-btn>
      
        <v-dialog v-model="dialogDelete" max-width="490">
            <v-card>

                <v-toolbar dark color="error">
                    <v-toolbar-title>
                        Supprimer {{ binder.name }} ?
                    </v-toolbar-title>
                </v-toolbar>
    
                <v-container>
                    <v-card-actions>
          
                        <v-btn
                        color="info"
                        @click=" dialogDelete = false"
                        >
                        Annuler
                        </v-btn>
                        
                        <v-btn
                        color="error"
                        @click="deleteBinderSubmit"
                        >
                        Supprimer
                        </v-btn>

                    </v-card-actions>

                </v-container>

            </v-card>
        </v-dialog>
        
    </v-layout>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    props:['binder'],
    data: () => {  
    return {
      dialogDelete: false,
      
    }
  },
 computed: {
   
  },
  methods: {
    ...mapActions([
      'deleteBinder',
    ]),
    
   
    deleteBinderSubmit(){
      this.deleteBinder(this.binder)
      .then(() => { 
         this.dialogDelete= false;
      })
    },
  }
}
</script>
<style scoped>
.text-capitalize{
    margin: 0px 0px 0px 10px;
}
</style>