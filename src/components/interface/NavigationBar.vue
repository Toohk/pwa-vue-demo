<template>
    <v-app-bar
      color="#fcb69f"
      dark
      src="https://picsum.photos/1920/1080?random"
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
  }
</style>