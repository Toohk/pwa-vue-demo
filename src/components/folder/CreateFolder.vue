<template>
  
    <v-layout>
   
        <v-btn  v-on:click=" dialogCreate = true" icon>
            
            <v-icon>mdi-folder-plus</v-icon>
            
        </v-btn>
      
        <v-dialog v-model="dialogCreate" max-width="490">
            <v-card>
                <v-toolbar dark color="orange">
                    <v-toolbar-title>
                        Ajouter un dossier
                    </v-toolbar-title>
                </v-toolbar>
                <v-container>

                    <v-form
                        lazy-validation
                        @submit.prevent="createFolderSubmit"
                    >
      
                        <v-text-field
                        v-model="name"
                        label="Nom"
                        required
                        prepend-icon="mdi-folder"
                        ></v-text-field>

                        <v-card-actions>
                            <v-spacer></v-spacer>

                            <v-btn
                                color="success"
                                type="submit"
                            >
                                Valider
                            </v-btn>
                        </v-card-actions>
          
                    </v-form>

                </v-container>

            </v-card>
        
        </v-dialog>
        
    </v-layout>

</template>

<script>
import { mapActions } from 'vuex';

export default {
    data: () => {  
    return {
      dialogCreate: false,
      name:"",
    }
  },
  methods: {
    ...mapActions([
      'createFolder',
    ]),
   
    createFolderSubmit(){
      this.createFolder(this.name)
      .then(() => { 
        this.dialogCreate = false,
        this.name='';
      })
    },
  }
    
}
</script>