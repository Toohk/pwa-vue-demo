<template>
    <v-layout>
        <v-btn  v-on:click=" dialogEdit = true" text>
            <v-icon color="orange">mdi-pencil</v-icon> <p class="text-capitalize">Modifier</p> 
        </v-btn>

        <v-dialog v-model="dialogEdit" max-width="490">

        <v-card>

            <v-toolbar dark color="blue">
            <v-toolbar-title>
                Modifier {{ binderData.name }}
            </v-toolbar-title>
            </v-toolbar>
            
            <v-container>

            <v-form
                lazy-validation
                @submit.prevent="editBinderSubmit"       
            >
                
                <v-text-field
                        v-model="binderEdit.name"
                        label="Nom"
                        required
                        prepend-icon="mdi-book"
                        ></v-text-field>

                        <v-text-field
                        v-model="binderEdit.description"
                        label="Description"
                        required
                        prepend-icon="mdi-tag"
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
    props:['binder'],
  
  data: () => {
    return{
        binderEdit:{
          name:"",
          description:""
        },
        
        dialogEdit: false,
    }
  },
  
  computed: {
    binderData(){
        const data = this.binderFunct();
        return data
    }
  },
  
 
  
  methods: {
    ...mapActions([
      'editBinder',
    ]),
   
    editBinderSubmit(){ 
      this.editBinder(this.binderEdit)
      
      .then(() => { 
        this.dialogEdit= false
      });
    },
    binderFunct(){
        this.binderEdit.name = this.binder.name
        this.binderEdit.description = this.binder.description
        
        return this.binder
    }
  }
}
</script>
<style scoped>
.text-capitalize{
     margin: 0px 0px 0px 10px;
}
</style>