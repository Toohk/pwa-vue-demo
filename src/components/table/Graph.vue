<template>

  <v-card class="ma-1 card-graph"  outlined>
        <EditGraph v-bind:forecast="forecast" v-bind:achieve="achieve"/>
    <v-toolbar dark color="green lighten-1">
      <div class="text-center title ma-2">
        {{forecast.market_id.name}}
      </div>
      
       
      
    </v-toolbar>
        
    <div class="pa-2 ">

      <div class="graph">
        <apexcharts :type="forecast.chart" :options="chartOptions"  :series="series"></apexcharts>
      </div>
    
      <div class="list-graph">
        <v-simple-table dense>
          <thead>
            <tr>
              <th class="text-left">Prévision</th>
              <th class="text-left">%</th>
              <th class="text-left">Réalisé</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for= "(line, i) in forecast.lines" v-bind:key="line.volume">
              <td>{{line.volume*line.price}}</td>
              <td>
                <span v-if="pourcents[i]!==null"> 
                  {{pourcents[i]}} % 
                  <v-icon v-if="pourcents[i]>0" color="green">mdi-trending-up</v-icon>
                  <v-icon v-if="pourcents[i]<0" color="red">mdi-trending-down</v-icon>
                  <v-icon v-if="pourcents[i]==0" color="yellow">mdi-trending-neutral</v-icon>
                </span>
              </td>
              <td>{{achieve.lines[i].volume*achieve.lines[i].price}}</td>
            </tr>
          </tbody>
        </v-simple-table>
       
      </div>
       
    </div>
     
  </v-card>

</template>

<script>

  import VueApexCharts from 'vue-apexcharts';
  import { mapState, mapActions} from 'vuex';
  import EditGraph from './EditGraph';
  
  export default {
    name: 'Chart',
    components: {
      apexcharts: VueApexCharts,
      EditGraph,
    },

    props: ['achieve', 'forecast'],

    data: function() {
      return {
        
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
        
        pourcents:[],
        totals:[],
      }
    },

    

  created() {
    this.chartOptions.theme.palette = this.forecast.colors
    const resultForecast = [];
    this.forecast.lines.forEach(function(line){
      resultForecast.push(line.volume*line.price)
    })
    this.series[0].data = resultForecast;
    const resultAchieve = [];
    this.achieve.lines.forEach(function(line){
      resultAchieve.push(line.volume*line.price)
    })
    this.series[1].data = resultAchieve;
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
    this.chartOptions.theme.palette = this.forecast.colors
    const resultForecast = [];
    this.forecast.lines.forEach(function(line){
      resultForecast.push(line.volume*line.price)
    })
    this.series[0].data = resultForecast;
    const resultAchieve = [];
    this.achieve.lines.forEach(function(line){
      resultAchieve.push(line.volume*line.price)
    })
    this.series[1].data = resultAchieve;
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
            'minInterface'
        ]),
        chartOptions() {
          const option = {
            theme:{
              palette: this.forecast.colors
            },
            xaxis: {
              categories: ['jan', 'fév', 'mar', 'avr', 'mai', 'juin', 'juil', 'aou','sep','oct','nov','déc'],
            },
          }
          return option
        },
 
    },
    methods: {
        ...mapActions([
            'keepTabs',
            'setComponent'
            
        ]),
     
      
    }
}
</script>

<style scoped>

  .card-graph{
    max-width: 450px;
  }
  .g{
    min-width: 300px;
  }
  .list-graph{
    min-width: 300px;;
  }
  #create .v-speed-dial {
    position: absolute;
  }

  #create .v-btn--floating {
    position: relative;
  }

</style>