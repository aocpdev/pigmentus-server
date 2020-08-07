<template>
  <v-row justify="center">
      <h1>Welcome to your profile {{$store.state.user.name}} {{$store.state.user.lastName}}. I'm working on this part right now, I know, I know, it looks ugly, but I'm just getting started</h1>
  </v-row>
</template>
<script>
// @ is an alias to /src
import Profile from '@/components/Profile.vue'
import {mapState} from 'vuex'
export default {
  name: 'ProfileView',
  components: {
    Profile
  },
  data: () => ({

  }),
}
</script>
