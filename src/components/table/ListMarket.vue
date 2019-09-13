<template>
    <div class="d-flex  flex-wrap">
        {{value}}
        <v-card outlined class="market-card" v-for="market in targetBinder.markets" v-bind:key="market">
            
            <div class="text-center">{{market.name}}</div>
            
            <v-divider></v-divider>

            <v-sheet color="blue">
                <v-sparkline
                    :labels="labels"
                    :value="value"
                    color="white"
                    line-width="6"
                    padding="16"
                ></v-sparkline>
            </v-sheet>

        </v-card>
        
    </div>
</template>

<script>
import {mapState } from 'vuex';
export default {
    computed:{
        ...mapState([
            'targetBinder'
        ]),
        value(){
            const volume = [3,20,10,34,12,]
            
            
            return volume
        }
    },
    props:[ ],
   
    
}
</script>
<style>
.market-card{
    width: 200px;
    height: 100px;
    margin: 10px;
    border-color: rgb(78, 196, 78)!important;
}
    
</style>