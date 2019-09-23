<template>
   
        
        
            <v-card link outlined class="market-card" @click="keepTabs([forecast, achieve]), setComponent('Tabs')" >
                
                <div class="text-center"><v-icon  class="m-2" large color="green">mdi-file-chart</v-icon>{{market_name}}</div>
                
            </v-card>
    
        
   
</template>

<script>
import {mapState, mapActions} from 'vuex';
export default {
    computed:{
        ...mapState([
            'targetBinder'
        ]),
    },
    methods:{
        ...mapActions([
            'keepTabs',
            'setComponent'
        ]),
    },
    props:['forecast', 'achieve', 'market_name' ],
   
    
}
</script>
<style>
.market-card{
    padding: 10px;
    height: 50px;
    margin: 10px;
    border-color: rgb(120, 228, 120)!important;
}
    
</style>