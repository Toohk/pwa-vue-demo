<template>
  <span>
  
    <v-fab-transition >
      <v-btn 
        absolute
        dark
        fab
        small
        right
        color="grey darken-2 ma-2"
        v-show="minInterface == false" 
        v-on:click=" dialogEdit = true" 
        text
      >
        <v-icon >mdi-settings</v-icon>
      </v-btn>
    </v-fab-transition>

    <v-dialog v-model="dialogEdit" max-width="490">

      <v-card outlined>
            
        <v-container>

          <apexcharts :type="targetBinder.synthese" :options="chartOptions"  :series="series"></apexcharts>

          <v-divider></v-divider>
          <br>

          <span class="mx-auto">

            <v-btn color="green" class="ma-1" v-if="targetBinder.synthese == 'line'" fab outlined>
              <v-icon>mdi-chart-line</v-icon>
            </v-btn>
            <v-btn  v-if="targetBinder.synthese !== 'line'" class="ma-1" fab outlined @click="targetBinder.synthese = 'line'">
              <v-icon>mdi-chart-line</v-icon>
            </v-btn>

            <v-btn color="green" v-if="targetBinder.synthese == 'area'" class="ma-1" fab outlined>
              <v-icon>mdi-chart-areaspline</v-icon>
            </v-btn>
            <v-btn  v-if="targetBinder.synthese !== 'area'" fab outlined class="ma-1" @click="targetBinder.synthese = 'area'">
              <v-icon>mdi-chart-areaspline</v-icon>
            </v-btn>

            <v-btn color="green" v-if="targetBinder.synthese == 'radar'" class="ma-1" fab outlined>
              <v-icon>mdi-spider-web</v-icon>
            </v-btn>
            <v-btn  v-if="targetBinder.synthese !== 'radar'" fab class="ma-1" outlined @click="targetBinder.synthese = 'radar'">
              <v-icon>mdi-spider-web</v-icon>
            </v-btn>

            <v-btn color="green" v-if="targetBinder.synthese == 'histogram'" fab class="ma-1" outlined>
              <v-icon>mdi-chart-bar</v-icon>
            </v-btn>
            <v-btn  v-if="targetBinder.synthese !== 'histogram'" fab outlined class="ma-1" @click="targetBinder.synthese = 'histogram'">
              <v-icon>mdi-chart-bar</v-icon>
            </v-btn>

          </span>

          <br>

          <v-btn color="white" small class="btn-1 ma-1 btn-select" v-if="targetBinder.colors == 'palette1'" fab outlined> 
          </v-btn>
          <v-btn small class="btn-1 ma-1"  v-if="targetBinder.colors !== 'palette1'" fab  @click="setColor('palette1')">
          </v-btn>

          <v-btn class="btn-2 btn-select ma-1" small color="white" v-if="targetBinder.colors == 'palette2'" fab outlined>
          </v-btn>
          <v-btn class="btn-2 ma-1" small  v-if="targetBinder.colors !== 'palette2'" fab @click="setColor('palette2')">
          </v-btn>

          <v-btn class="btn-3 ma-1 btn-select" small color="white" v-if="targetBinder.colors == 'palette3'" fab outlined>
          </v-btn>
          <v-btn class="btn-3 ma-1" small  v-if="targetBinder.colors !== 'palette3'" fab  @click="setColor('palette3')">
          </v-btn>
          
          <v-btn class="btn-4 ma-1 btn-select" small color="white" v-if="targetBinder.colors == 'palette4'" fab outlined>
          </v-btn>
          <v-btn class="btn-4 ma-1" small v-if="targetBinder.colors !== 'palette4'" fab @click="setColor('palette4')">
          </v-btn>

          <v-btn class="btn-5 ma-1 btn-select" small color="white" v-if="targetBinder.colors == 'palette5'" fab outlined>
          </v-btn>
          <v-btn class="btn-5 ma-1" small v-if="targetBinder.colors !== 'palette5'" fab @click="setColor('palette5')">
          </v-btn>

          <v-btn class="btn-6 ma-1 btn-select" small color="white" v-if="targetBinder.colors == 'palette6'" fab outlined>
          </v-btn>
          <v-btn class="btn-6 ma-1" small v-if="targetBinder.colors !== 'palette6'" fab @click="setColor('palette6')">
          </v-btn>

          <v-btn class="btn-7 ma-1 btn-select" small color="white" v-if="targetBinder.colors == 'palette7'" fab outlined>
          </v-btn>
          <v-btn class="btn-7 ma-1" small v-if="targetBinder.colors !== 'palette7'" fab @click="setColor('palette7')">
          </v-btn>
              
          <v-btn class="btn-8 ma-1 btn-select" small color="white" v-if="targetBinder.colors == 'palette8'" fab outlined>
          </v-btn>
          <v-btn class="btn-8 ma-1" small v-if="targetBinder.colors !== 'palette8'" fab @click="setColor('palette8')">
          </v-btn>

          <v-btn class="btn-9 ma-1 btn-select" small color="white" v-if="targetBinder.colors == 'palette9'" fab outlined>
          </v-btn>
          <v-btn class="btn-9 ma-1" small v-if="targetBinder.colors !== 'palette9'" fab @click="setColor('palette9')">
          </v-btn>

          <v-btn class="btn-10 ma-1 btn-select" small color="white" v-if="targetBinder.colors == 'palette10'" fab outlined>
          </v-btn>
          <v-btn class="btn-10 ma-1" small v-if="targetBinder.colors !== 'palette10'" fab @click="setColor('palette10')">
          </v-btn>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              color="success"
              type="submit"
            >
              Valider
            </v-btn>
          </v-card-actions>
                    
        </v-container>

      </v-card>
    </v-dialog>
  </span>
</template>

<script>

  import { mapActions, mapState } from 'vuex';
  import VueApexCharts from 'vue-apexcharts';

  export default {

    props:['forecast', 'achieve'],

    components: {
      apexcharts: VueApexCharts,
    },
  
    data: () => {
      return{
        series: [
          {
            name: 'Prévision',
            data: [],
          },
          {
            name: 'Réalisé',
            data: []
          }
        ],
        dialogEdit: false,
      }
    },
  
    computed: {

      binderData(){
          const data = this.binderFunct();
          return data
      },

      ...mapState([
            'targetBinder',
            'minInterface'
      ]),

      chartOptions() {
        const option = {
          theme:{
            palette: this.targetBinder.colors
          },
          xaxis: {
            categories: ['jan', 'fév', 'mar', 'avr', 'mai', 'juin', 'juil', 'aou','sep','oct','nov','déc'],
          },
        }
        return option
      },
    },

    created() {
      this.series[0].data = this.forecast;
      this.series[1].data = this.achieve;
      const results = [];
      const data2 = this.series[1].data
      this.series[0].data.forEach(function(data, i){
        if(data == 0 | data2[i] == 0){
          results.push(null)
        }else{
          results.push((((data2[i]-data)/data)*100).toFixed(1))
        }
      })
      this.pourcents = results
    },

    beforeUpdate() {
      this.series[0].data = this.forecast;
      this.series[1].data = this.achieve;
      const results = [];
      const data2 = this.series[1].data
      this.series[0].data.forEach(function(data, i){
        if(data == 0 | data2[i] == 0){
          results.push(null)
        }else{
          results.push((((data2[i]-data)/data)*100).toFixed(1))
        }
      })
      this.pourcents = results
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
      },

      setColor(palette){
        this.targetBinder.colors = palette
      }
    }
  }
</script>

<style scoped>

  .text-capitalize{
    margin: 0px 0px 0px 10px;
  }
  .btn-1{
    background: linear-gradient(to right top,#008FFB 0%,#008FFB 50%,#008FFB 50%,#00E396 50%,#00E396 100%);
  }
  .btn-2{
    background: linear-gradient(to right top,#3F51B5 0%,#3F51B5 50%,#3F51B5 50%,#03A9F4 50%,#03A9F4 100%);
  }
  .btn-3{
    background: linear-gradient(to right top,#33B2DF 0%,#33B2DF 50%,#33B2DF 50%,#546E7A 50%,#546E7A 100%);
  }
  .btn-4{
    background: linear-gradient(to right top,#4ECDC4 0%,#4ECDC4 50%,#4ECDC4 50%,#C7F464 50%,#C7F464 100%);
  }
  .btn-5{
    background: linear-gradient(to right top,#2B908F 0%,#2B908F 50%,#2B908F 50%,#F9A3A4 50%,#F9A3A4 100%);
  }
  .btn-6{
    background: linear-gradient(to right top,#449DD1 0%,#449DD1 50%,#449DD1 50%,#F86624 50%,#F86624 100%);
  }
  .btn-7{
    background: linear-gradient(to right top,#D7263D 0%,#D7263D 50%,#D7263D 50%,#1B998B 50%,#1B998B 100%);
  }
  .btn-8{
    background: linear-gradient(to right top,#662E9B 0%,#662E9B 50%,#662E9B 50%,#F86624 50%,#F86624 100%);
  }
  .btn-9{
    background: linear-gradient(to right top,#5C4742 0%,#5C4742 50%,#5C4742 50%,#A5978B 50%,#A5978B 100%);
  }
  .btn-10{
    background: linear-gradient(to right top,#A300D6 0%,#A300D6 50%,#A300D6 50%,#7D02EB 50%,#7D02EB 100%);
  }
  .btn-select{
    border: 4px rgb(255, 221, 29) solid;
  }

</style>