<template>


    <v-navigation-drawer
      :value="drawer"
      app dark
      overflow
      type="temporary"
    >
    <v-list-item>
      <v-list-item-content>
     <v-img 
      max-height="100" aspect-ratio="1" src="../../assets/logo.png">

     
     </v-img>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">
          Application Demo
        </v-list-item-title>
        <v-list-item-subtitle>
          PWA - Vue
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>

      <v-list-item link @click="setComponent('Folders')">
        <v-list-item-icon>
          <v-icon color="cyan lighten-1">mdi-view-dashboard</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Index</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item link>
        <v-list-item-icon>
          <v-icon color="teal lighten-1">mdi-tools</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Paramètres</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      
          <v-switch v-model="switch1" @change="switchInterface" class="ma-2" color="orange lighten-1" label="Interface reduite"></v-switch>
       
    
    
        <v-divider></v-divider>

    <v-list-item  link @click="logout">
        <v-list-item-icon>
          <v-icon color="red lighten-1">mdi-logout</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title> Déconnexion </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      
      
    </v-list>

    
  </v-navigation-drawer>

  
</template>
<script>
import { mapActions, mapState } from 'vuex';
    
export default{
  data() {
    return {
     switch1:false
    }
  },
  computed:{
        ...mapState([
      'drawer'
    ]),
    },
  methods: {
    ...mapActions([
      'logout',
      'setComponent',
      'setInterface'
    ]),
    switchInterface(){
      if(this.switch1 == true){
        this.setInterface(false)
      }else{
        this.setInterface(true)
      }
    }
  }
}
</script>
<style>
.v-image__image--cover{
  background-size: 60% auto !important; 
}
</style>