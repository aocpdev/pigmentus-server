<template>
  <v-row justify="center">
      <h1>Welcome to home {{$store.state.user.name}} {{$store.state.user.lastName}}.</h1>
  </v-row>
</template>
<script>
// @ is an alias to /src
import Home from '@/components/Home.vue'
import {mapState} from 'vuex'
export default {
  name: 'HomeView',
  components: {
    Home
  },
  data: () => ({

  }),
}
</script>
