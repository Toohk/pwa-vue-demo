<template>
    <v-layout>
        <v-btn  v-on:click=" dialogEdit = true" text>
              <v-icon color="orange">mdi-pencil</v-icon> <p class="text-capitalize">Modifier</p> 
        </v-btn>

        <v-dialog v-model="dialogEdit" max-width="490">

        <v-card>

            <v-toolbar dark color="orange">
            <v-toolbar-title>
                Modifier {{ name }}
            </v-toolbar-title>
            </v-toolbar>
            
            <v-container>

            <v-form
                lazy-validation
                @submit.prevent="editFolderSubmit"       
            >
                
                <v-text-field
                v-model="folder"
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
import { mapState, mapActions } from 'vuex';
export default {
  
  data: () => {
    return{
        folder:"",
        dialogEdit: false,
    }
  },
  
  computed: {
    ...mapState([
      'targetFolder'
    ]),
    name(){
        const data = this.folderName();
        return data
    }
  },
  
 
  
  methods: {
    ...mapActions([
      'editFolder',
    ]),
   
    editFolderSubmit(){ 
     this.dialogEdit= false
      this.editFolder(this.folder)
      
      .then(() => { 
        this.dialogEdit= false
      });
    },
    folderName(){
        this.folder = this.targetFolder.name
        return this.targetFolder.name
    }
    
  }
}
</script>
<style scoped>
    .text-capitalize{
    margin: 0px 0px 0px 10px;
}
</style>
