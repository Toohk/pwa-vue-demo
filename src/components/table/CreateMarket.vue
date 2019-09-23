<template>
  
    <v-layout>
   
        <v-btn  v-on:click=" dialogCreate = true" text>
            
            <v-icon color="green lighten-1">mdi-file-chart-outline</v-icon>
            <p class="text-none">Ajouter un marché</p>
            
        </v-btn>
      
        <v-dialog v-model="dialogCreate" max-width="490">
            <v-card>
                <v-toolbar dark color="blue">
                    <v-toolbar-title>
                        Ajouter un marché
                    </v-toolbar-title>
                </v-toolbar>
                <v-container>

                    <v-form
                        lazy-validation
                        @submit.prevent="createMarketSubmit"
                    >
      
                        <v-text-field
                        v-model="name"
                        label="Nom"
                        required
                        prepend-icon="mdi-book"
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
      'createMarket',
    ]),
   
    createMarketSubmit(){
      this.createMarket(this.name)
      .then(() => { 
        this.dialogCreate = false;
        this.name='';
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