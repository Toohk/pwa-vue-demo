<template>
    <div class="tabs-table">
    
    
        <v-tabs
      
      color="cyan"
      
      slider-color="yellow"
    >
    
      <v-tab
        ripple
      >
        Prévision
      </v-tab>

      <v-tab-item>
        <v-card outlined>
            <v-simple-table>
    <thead>
      <tr>
        <th class="text-left">Mois</th>
        <th class="text-left">Volume</th>
        <th class="text-left">Prix</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(line, index) in targetTabs[0].lines" v-bind:key="line._id">
        <td>{{months[index]}}</td>
        <td><v-text-field type="number" v-bind:disabled="disabled" v-model="line.volume"></v-text-field ></td>
        <td><v-text-field type="number" v-bind:disabled="disabled" v-model="line.price"></v-text-field></td>
      </tr>
    </tbody>
  </v-simple-table>
                    
            </v-card>
      </v-tab-item>
      <v-tab
        ripple
      >
        Réalisé
      </v-tab>
      <v-tab-item>
        <v-card outlined>
                    <v-simple-table>
    <thead>
      <tr>
        <th class="text-left">Mois</th>
        <th class="text-left">Volume</th>
        <th class="text-left">Prix</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(line, index) in targetTabs[1].lines" v-bind:key="line._id">
        <td>{{months[index]}}</td>
        <td><v-text-field type="number" v-bind:disabled="disabled" v-model="line.volume"></v-text-field ></td>
        <td><v-text-field type="number" v-bind:disabled="disabled" v-model="line.price"></v-text-field></td>
      </tr>
    </tbody>
  </v-simple-table>
            </v-card>
      </v-tab-item>
      <v-btn flat icon @click="editMode(), updateStorage(), updateLibrary()"><v-icon>mdi-pencil</v-icon></v-btn>
    </v-tabs>

    </div>
</template>

<script>
import { mapState, mapActions} from 'vuex';
export default {
    computed: {
        ...mapState([
            'targetTabs',
        ]),
    },
    data: () => {
        return {
            months:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Décembre"],
            disabled: true,
        }
    },
    methods:{
        ...mapActions([
            'updateStorage',
            'updateLibrary'
        ]),
        editMode(){
            
            if(this.disabled == true){
                this.disabled = false
            }else{
                this.disabled = true
            }
        },
       
           
    }

}
</script>
<style>
    .tabs-table{
        max-width: 600px;
    }
</style>