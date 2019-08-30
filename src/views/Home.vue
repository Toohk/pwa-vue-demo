<template>
  <v-app>

    <NavigationBar/>

    <NavigationDrawer/>

    <Content/>
   
  </v-app>
</template>

<script>
import NavigationBar from '../components/interface/NavigationBar'
import NavigationDrawer from '../components/interface/NavigationDrawer'
import Content from '../components/interface/Content'

export default {
components: {
   NavigationDrawer,
   NavigationBar,
   Content,
  },

};
</script>
