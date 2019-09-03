<template>

    <v-list two-line subheader>
        <v-list-item @click="keepBinder(binder)" class="list-binders" v-for="binder in binders" v-bind:key="binder">

            
            <v-list-item-avatar>
            <v-icon color="blue lighten-2">mdi-book</v-icon>
            </v-list-item-avatar>

            <v-list-item-content  @click="keepBinder(binder) ,setComponent('Tables')">
            <v-list-item-title >{{binder.name}}</v-list-item-title>
            <v-list-item-subtitle>{{binder.description}}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
            <MenuBinder v-bind:binder="binder"/>
            </v-list-item-action>
      </v-list-item>
    </v-list>    
    
</template>

<script>
import { mapActions } from 'vuex';
import MenuBinder from '../binder/MenuBinder'
export default {
    components:{
        MenuBinder
    },
    props:['binders'],
    methods: {
        ...mapActions([
            'keepBinder',
            'setComponent'
        ])
    },
    
}
</script>
<style>
.list-binders{
    padding: 0px!important;
}
</style>