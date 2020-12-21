<template>

  <profile/>

</template>
<script>
// @ is an alias to /src
import {mapState} from 'vuex'
import Profile from '../components/Profile.vue'

export default {
  name: 'ProfileView',
  components: {
    Profile
  },
  data: () => ({
    items: [
          { title: 'Account', icon: 'mdi-account' },
          { title: 'Purchase History', icon: 'mdi-history' },
          { title: 'Wishlist', icon: 'mdi-view-list' },
          { title: 'Settings', icon: 'mdi-view-list' },
        ],
        links: [{name: 'Account', to: '/account'}, {name: 'Purchase History', to: '/purchase-history'}, {name: 'Wishlist' }, {name: 'Settings' }],
        mini: true,
  }),
}
</script>
