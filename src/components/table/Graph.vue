<template>
  <div class="app">
    <br>

      <v-card light class="card-graph" outlined>
      
       <v-btn text @click="keepTabs([forecast, achieve]), setComponent('Tabs')"><v-icon>mdi-arrow-right</v-icon></v-btn>
        <div class="text-center title title-graph">{{forecast.market_id.name}}</div>
        
        <div class="d-inline-flex pa-2 flex-wrap">
        
        
        <div class="graph"><apexcharts type="line" :options="chartOptions" :series="series"></apexcharts></div>
       
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
      <tr  v-for= "(line, i) in forecast.lines" v-bind:key="line.volume">
     
        <td>{{line.volume*line.price}}</td>
        <td><span v-if="pourcents[i]!==null"> 
                      {{pourcents[i]}} % 
                      <v-icon v-if="pourcents[i]>0" color="green">mdi-trending-up</v-icon>
                      <v-icon v-if="pourcents[i]<0" color="red">mdi-trending-down</v-icon>
                      <v-icon v-if="pourcents[i]==0" color="yellow">mdi-trending-neutral</v-icon>
                    </span></td>
        <td>{{achieve.lines[i].volume*achieve.lines[i].price}}</td>
      </tr>
    </tbody>
  </v-simple-table>
       
          </div>
      
        
        
          </div>
            
            
               
            
            
</v-card>
         
              
             
           
              
              
          
            
        
   
    </div>

</template>

<script>
import VueApexCharts from 'vue-apexcharts';
import { mapState, mapActions} from 'vuex';
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
      }
    },
    props: ['achieve', 'forecast'],
    created() {
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
        ]),
    },
    methods: {
        ...mapActions([
            'keepTabs',
            'setComponent'
        ]),
     test(){
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
     }
      
    }
}
</script>
<style scoped>
.card-graph{
    max-width: 800px;
    padding-top: 8px;
    
    

}

.graph{
    
    min-width: 310px;
}
.list-graph{
   margin: 20px;
    max-width: 300px;
    min-width: 300px;;
}
</style>