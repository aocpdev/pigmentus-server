<template>
  <v-row justify="center">
      <h1>Welcome to Pigmentus Home.</h1>
  </v-row>
</template>
<script>
// @ is an alias to /src
import Home from '@/components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  },
  data: () => ({

  }),
  mounted(){
    
  },
  methods: {
    verifyAuth: function() {
      this.axios.get('/home')
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        })

    }
  },
}
</script>
