<template>

  <div class="text-center">
   
    <v-menu bottom left  :close-on-content-click=false>
      <template v-slot:activator="{ on }">
        <v-btn
          color="primary"
          icon
          dark
          v-on="on"
        >
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item>
        
         <EditBinder v-bind:binder="binder"/>
        </v-list-item>
      </v-list>

      <v-list>
        <v-list-item>
        <DeleteBinder v-bind:binder="binder"/>
         
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
<script>
import DeleteBinder from './DeleteBinder'
import EditBinder from './EditBinder'
  export default {
      props:['binder'],
    components:{
        DeleteBinder,
        EditBinder
    },
    data: () => ({
      closeOnClick: true,
    }),
  }
</script>
<style scoped>
    .v-list-item{
        padding: 0px;
    }
    .v-list.v-sheet {
    padding: 0px;
}
</style>