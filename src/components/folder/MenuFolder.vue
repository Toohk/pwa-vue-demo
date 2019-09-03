<template>

  <div class="text-center">
   
    <v-menu bottom left  :close-on-content-click=false>
      <template v-slot:activator="{ on }">
        <v-btn
          color="orange"
          icon
          dark
          v-on="on"
        >
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item>
        
         <EditFolder />
        </v-list-item>
      </v-list>

      <v-list>
        <v-list-item>
        <DeleteFolder />
         
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
<script>
import DeleteFolder from './DeleteFolder'
import EditFolder from './EditFolder'
  export default {
      props:['binder'],
    components:{
        DeleteFolder,
        EditFolder
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