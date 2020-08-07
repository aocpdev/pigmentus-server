<template>
    <v-row justify="center">
      <h1>Oye {{$store.state.user.name}} {{$store.state.user.lastName}} Categorizame este.</h1>
  </v-row>
</template>

<script>
import {mapState} from 'vuex'
export default {
  
}
</script>

<style>
  
</style>