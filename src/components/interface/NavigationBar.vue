<template>
    <v-app-bar
      dark
      color="grey darken-2"
     
      scrolling-techniques-2
     
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="setDrawer"></v-app-bar-nav-icon>
      
    </v-app-bar>

</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods:{
    ...mapActions([
      'setDrawer'
    ]),
  
  }
}
</script>

<style>
  
  .v-application--wrap{
    min-height: 20px!important;
    background-color: rgba(255, 0, 0, 0)
  }
</style>