<template>


    <v-navigation-drawer
      :value="drawer"
      app
      overflow
      dark
      type="temporary"
    >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">
          Application
        </v-list-item-title>
        <v-list-item-subtitle>
          subtext
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>

      <v-list-item link @click="setComponent('Folders')">
        <v-list-item-icon>
          <v-icon>mdi-view-dashboard</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-tools</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Paramètres</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    

    <v-list-item link @click="logout">
        <v-list-item-icon>
          <v-icon>mdi-logout</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Déconnexion</v-list-item-title>
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
     
    }
  },
  computed:{
        ...mapState([
      'drawer',
    ]),
    

    },
  methods: {
    ...mapActions([
      'logout',
      'setComponent'
    ])
  }
}
</script>