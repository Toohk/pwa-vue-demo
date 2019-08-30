<template>
  
  <v-layout>
   
        <v-btn  v-on:click=" dialogDelete = true" icon>
            <v-icon color="red">mdi-delete</v-icon>
        </v-btn>
      
        <v-dialog v-model="dialogDelete" max-width="490">
            <v-card>

                <v-toolbar dark color="error">
                    <v-toolbar-title>
                        Supprimer {{ targetFolder.name }} ?
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
                        @click="deleteFolderSubmit"
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
import { mapState, mapActions } from 'vuex';
export default {
    data: () => {  
    return {
      dialogDelete: false,
      
    }
  },
 computed: {
    ...mapState([
      'targetFolder'
    ])
  },
  methods: {
    ...mapActions([
      'clearData',
      'deleteFolder',
    ]),
    
   
    deleteFolderSubmit(){
      this.deleteFolder()
      .then(() => { 
        this.clearData();
         this.dialogDelete= false;
      })
    },
  }
}
</script>