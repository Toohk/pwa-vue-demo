<template>
  <v-app>
    <v-content class="app-content">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
   
  },
   methods: {
    ...mapActions([
      'fetchAccessToken',
      'fetchLibrary',
      'updateLibrary'
    ]),
  },
  created() {
    this.fetchAccessToken();
    this.fetchLibrary();
    this.updateLibrary();
  },
  data: () => ({
    //
  }),
};
</script>
<style>
.app-content{
  height: 100vh!important;
}
</style>