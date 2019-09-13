<template>
  <div class="app">
    <br>
    <v-card light class="card-graph" outlined>

      <div class="text-center headline title-graph">Synthèse globale</div>
          
      <v-divider></v-divider>
      
      <div class="d-inline-flex justify-xl-space-around content-synth  pa-2 flex-wrap">
        <div class="block-graph">
          <div class="graph">   
            <apexcharts type="area" :options="chartOptions" :series="series"></apexcharts>
          </div>
          <div class="total text-center headline">
            <v-divider></v-divider>
            {{resultForecast[0].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2,style: "currency", currency: "EUR"})}}
            <span v-if="resultPourcent!=='-100.0'"> 
              {{resultPourcent}} % 
              <v-icon v-if="resultPourcent>0" color="green">mdi-trending-up</v-icon>
              <v-icon v-if="resultPourcent<0" color="red">mdi-trending-down</v-icon>
              <v-icon v-if="resultPourcent==0" color="yellow">mdi-trending-neutral</v-icon>
            </span>
            {{resultAchieve[0].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2,style: "currency", currency: "EUR"})}}
            <v-divider></v-divider>
          </div>
        </div>
        <div class="block-list">
          <div class="list-graph">
            <v-simple-table >
              <thead>
                  <tr>
                    <th class="text-left">Mois</th>
                    <th class="text-left">Prévision</th>
                    <th class="text-left">%</th>
                    <th class="text-left">Réalisé</th>
                  </tr>
              </thead>
              <tbody>
                <tr  v-for= "(somme, i) in forecast" v-bind:key="i">
                  <td>{{month[i]}}</td>
                  <td>{{somme.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2,style: "currency", currency: "EUR"})}}</td>
                  <td>
                    <span v-if="pourcents[i]!==null"> 
                      {{pourcents[i]}} % 
                      <v-icon v-if="pourcents[i]>0" color="green">mdi-trending-up</v-icon>
                      <v-icon v-if="pourcents[i]<0" color="red">mdi-trending-down</v-icon>
                      <v-icon v-if="pourcents[i]==0" color="yellow">mdi-trending-neutral</v-icon>
                    </span>
                  </td>
                  <td>{{achieve[i].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2,style: "currency", currency: "EUR"})}}</td>
                </tr>
              </tbody>
            </v-simple-table>
          </div>
        </div>

      </div>
                    
    </v-card>

    <v-divider></v-divider>

  </div>

</template>

<script>

import VueApexCharts from 'vue-apexcharts';
import { mapState} from 'vuex';

export default {
  name: 'Chart',
  components: {
    apexcharts: VueApexCharts,
  },
  data: function() {
      return {
        chartOptions: {
          chart: {
            id: 'vuechart-example',
          },
          xaxis: {
            categories: ['jan', 'fév', 'mar', 'avr', 'mai', 'juin', 'juil', 'aou','sep','oct','nov','déc'],
          },
        },
        series: [{
          name: 'Prévision',
          data: []
        },
        {
          name: 'Réalisé',
          data: []
        }],
        pourcents:[],
        totals:[],
        month:['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
      }
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
    
    computed: {
        ...mapState([
            'targetBinder',
        ]),
        achieve(){
            const tabs = this.targetBinder.tables.quantitative_sales.achieve.tabs
            const result = [0,0,0,0,0,0,0,0,0,0,0,0];
            for (let i=0; i<tabs.length; i++){
                for (let x=0; x<tabs[i].lines.length; x++){
                    result[x] = result[x] + +tabs[i].lines[x].volume * +tabs[i].lines[x].price
                }
            }
            return result
        },
        forecast(){
            const tabs = this.targetBinder.tables.quantitative_sales.forecast.tabs
            const result = [0,0,0,0,0,0,0,0,0,0,0,0];
            for (let i=0; i<tabs.length; i++){
                for (let x=0; x<tabs[i].lines.length; x++){
                    result[x] = result[x] + +tabs[i].lines[x].volume * +tabs[i].lines[x].price
                }
            }
            return result
        },
        resultAchieve(){
          const data = this.achieve
          const result = [0];
          for (let i=0; i<data.length; i++){
            result[0] = result[0]+ data[i];
          }
          
          return result
        },
        resultForecast(){
          const data = this.forecast
          const result = [0];
          for (let i=0; i<data.length; i++){
            result[0] = result[0]+ data[i];
          }
          return result
        },
        resultPourcent(){

          return (((this.resultAchieve-this.resultForecast)/this.resultForecast)*100).toFixed(1)
        }
    },
   
    
}
</script>
<style scoped>

.card-graph{
  padding-top: 8px;
  margin-bottom: 20px;
}
.graph{
  min-width: 300px;
}
.block-list{
  width: 600px;
  min-width: 300px;
}
.list-graph {
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;
  min-width: 280px;;
}
.title-graph{
  margin: 20px;
}
.content-synth{
  width: 100%;
}
.block-graph{
  display: flex;
  flex-direction: column;
  width: 50%;
}
.total{
  max-width: 400px;
  min-width: 300px;
  margin: 10px auto 10px auto;
}
</style>