<template>
  
    <v-layout>
   
        <v-btn  v-on:click=" dialogCreate = true" text>
            
            <v-icon color="green lighten-1">mdi-notebook-outline</v-icon>
            <p class="text-none">Nouveau Classeur</p>
            
        </v-btn>
      
        <v-dialog v-model="dialogCreate" max-width="490">
            <v-card>
                <v-toolbar dark color="blue">
                    <v-toolbar-title>
                        Ajouter un classeur
                    </v-toolbar-title>
                </v-toolbar>
                <v-container>

                    <v-form
                        lazy-validation
                        @submit.prevent="createBinderSubmit"
                    >
      
                        <v-text-field
                        v-model="binder.name"
                        label="Nom"
                        required
                        prepend-icon="mdi-book"
                        ></v-text-field>

                        <v-text-field
                        v-model="binder.description"
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
    data: () => {  
    return {
      dialogCreate: false,
      binder:{
        name:"",
        description:""
      }
    }
  },
  methods: {
    ...mapActions([
      'createBinder',
    ]),
   
    createBinderSubmit(){
      this.createBinder(this.binder)
      .then(() => { 
        this.dialogCreate = false;
        this.binder.name='';
        this.binder.description="";
      })
    },
  }
    
}
</script>
<style scoped>
.text-none{
    margin: 0px 0px 0px 10px;
}
    
</style>