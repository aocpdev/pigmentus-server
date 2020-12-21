<template>
  <home/>
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
