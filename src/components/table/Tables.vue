<template>
<div>
<CreateMarket/>

<div class="d-flex flex-column-reverse flex-wrap">

    <div v-for="(market, i) in targetBinder.markets" v-bind:key="i">  
        <Graph v-bind:achieve="targetBinder.tables.quantitative_sales.achieve.tabs[i]" v-bind:forecast="targetBinder.tables.quantitative_sales.forecast.tabs[i]" />    
    </div>
</div>
</div>
</template>

<script>

import Graph from './Graph'
import CreateMarket from './CreateMarket'
import {mapState } from 'vuex';


export default {
    components:{
        Graph,
        CreateMarket
    },
    computed: {
        ...mapState([
            'targetBinder'
        ])
    },
}
</script>
<style>
    
</style>