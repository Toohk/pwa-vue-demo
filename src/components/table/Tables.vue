<template>
<div>

    <br>

    <v-card outlined v-show="minInterface == false">

    
    <CreateMarket/>
    <v-divider>
    </v-divider>
    <div class="d-flex grey lighten-3 flex-wrap">
        <span v-for="(market, i) in targetBinder.markets" v-bind:key="i"> 
        <listMarket v-bind:market_name="targetBinder.tables.forecast.tabs[i].market_id.name" v-bind:achieve="targetBinder.tables.achieve.tabs[i]" v-bind:forecast="targetBinder.tables.forecast.tabs[i]"/>
        </span>
    </div>
    </v-card>

    <br>

<div v-if="targetBinder.markets.length>1">

<Synthese/>
</div>
    <div class="d-flex flex-row flex-wrap">

        <span v-for="(market, i) in targetBinder.markets" v-bind:key="i">  
            <Graph v-bind:achieve="targetBinder.tables.achieve.tabs[i]" v-bind:forecast="targetBinder.tables.forecast.tabs[i]" />    
        </span>

    </div>
</div>
</template>

<script>

import Graph from './Graph'
import Synthese from './Synthese'
import CreateMarket from './CreateMarket'
import ListMarket from './ListMarket'
import {mapState } from 'vuex';


export default {
    components:{
        Graph,
        CreateMarket,
        Synthese,
        ListMarket
    },
    computed: {
        ...mapState([
            'targetBinder',
            'minInterface'
        ])
    },
}
</script>
<style>
    
</style>