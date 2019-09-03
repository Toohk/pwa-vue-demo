<template>
    <v-container>

        <CreateFolder/>
        <ListFolder/>
        
    </v-container>

</template>

<script>

import CreateFolder from './CreateFolder'
import ListFolder from './ListFolder'
export default {
    components:{
            CreateFolder,
            ListFolder
    }
}
</script>
