<template>
  <v-app id="inspire">
    <loading></loading>

    <v-app-bar app color="black" :clipped-left="$vuetify.breakpoint.lgAndUp" dark v-if="!$store.state.isLoading">
      <v-toolbar-title
        style="width: 350px"
      >
        <v-img
          alt="Pigmentus Logo"
          class="shrink mr-2"
          contain
          src="../assets/pigmentus-logo.png"
          transition="scale-transition"
          width="80"
        />
      </v-toolbar-title>





      <v-spacer></v-spacer>
      <v-tooltip bottom color="black">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          tile
          large
          v-bind="attrs"
          v-on="on"
          color="white"
          class="ma-2"
          icon to="/"
          >
          <v-icon small>mdi-school</v-icon>
        </v-btn>
      </template>
      <span style="color: rgb(187, 162, 87)">Academy</span>
      </v-tooltip>


      <v-tooltip bottom color="black">
      <template v-slot:activator="{ on, attrs }">
      <v-btn
        tile
        large
        v-bind="attrs"
        v-on="on"
        color="white"
        class="ma-2"
        icon to="/shop/1"
        >
        <v-icon small>mdi-shopping</v-icon>
      </v-btn>
      </template>
      <span style="color: rgb(187, 162, 87)">Shop</span>
      </v-tooltip>

      <v-tooltip bottom color="black">
      <template v-slot:activator="{ on, attrs }">
      <v-btn
        tile
        large
        v-bind="attrs"
        v-on="on"
        color="white"
        icon to="/admin"
        class="ma-2"
        >
        <v-icon small>mdi-account-cog</v-icon>
      </v-btn>
      </template>
      <span style="color: rgb(187, 162, 87)">Admin</span>
      </v-tooltip>




      <v-tooltip bottom color="black">
      <template v-slot:activator="{ on, attrs }" >
      <v-btn
        class="ma-2"
        tile
        v-bind="attrs"
        v-on="on"
        large
        color="white"
        icon to="/cart"
        >
        <v-badge
        color="rgb(187, 162, 87)"
        overlap
        small
        :content="$store.state.cart.length"
        :value="$store.state.cart.length"
      >
        <v-icon small>mdi-cart</v-icon>
        </v-badge>
      </v-btn>

      </template>
      <span style="color: rgb(187, 162, 87)">Cart</span>
      </v-tooltip>




      <v-tooltip bottom color="black">
      <template v-slot:activator="{ on, attrs }">
      <v-btn
        class="ma-2"
        tile
        v-bind="attrs"
        v-on="on"
        large
        color="white"
        icon to="/auth/signin"
        v-if="!$store.state.isLogin"
        >
        <v-icon small>mdi-login</v-icon>
      </v-btn>
      </template>
      <span style="color: rgb(187, 162, 87)">Login</span>
      </v-tooltip>








      <div class="d-flex justify-center align-center" v-if="$store.state.isLogin">
        <v-menu
          offset-y
        >
          <template v-slot:activator="{ attrs, on }">
            <v-btn icon v-bind="attrs" v-on="on" >

                <v-avatar rounded size="36">
                  <!-- <img
                    src="https://i1.sndcdn.com/avatars-000143584345-3qxowr-t500x500.jpg"
                    alt="John"
                  > -->



                      <v-icon small>
                        mdi-account
                      </v-icon>

                    <!-- <v-col class="mt-0 pt-0">
                      <span style="font-size: 10px;">{{$store.state.user.name.charAt(0)}} {{$store.state.user.lastName.charAt(0)}}</span>
                    </v-col> -->



                </v-avatar>

          </v-btn>

          </template>
          <v-card
            class="mx-auto mt-2"
            width="280"
            tile
          >
          <v-list>
            <v-list-item>
              <v-list-item-avatar>
                <v-img src="https://i1.sndcdn.com/avatars-000143584345-3qxowr-t500x500.jpg"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="title">{{$store.state.user.name}} {{$store.state.user.lastName}}</v-list-item-title>
                <v-list-item-subtitle>{{$store.state.user.email}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-divider></v-divider>
          <v-list
            nav
            dense
          >
            <v-list-item-group  color="rgb(187, 162, 87)">
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
                color="rgb(187, 162, 87)"
                :to="`${item.to}/${$store.state.user.id}/account`"

              >
                <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title v-text="item.name"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
          </v-card>
        </v-menu>
      </div>
    </v-app-bar>

    <v-main>
        <router-view/>
    </v-main>


    <v-card flat tile class=" primary" >
      <v-container>
        <v-row>
          <v-col class="col-12 col-md-4 col-sm-12">
            <v-row >
              <v-col class="col-12 col-sm-3 pr-4 hidden-sm-only" align="right">
                <v-icon class="display-2" style="color: white">mdi-truck</v-icon>
              </v-col>
              <v-col class="col-12 col-sm-9 pr-4">
                <h3 class="font-weight-light" style="color: white">FREE SHIPPING & RETURN</h3>
                <p class="font-weight-thin" style="color: white">Free Shipping over $300</p>
              </v-col>
            </v-row>
          </v-col>
          <v-col class="col-12 col-md-4 col-sm-12">
            <v-row >
              <v-col class="col-12 col-sm-3 pr-4" align="right">
                <v-icon class="display-2" style="color: white">mdi-cash-usd</v-icon>
              </v-col>
              <v-col  class="col-12 col-sm-9 pr-4">
                <h3 class="font-weight-light" style="color: white">MONEY BACK GUARANTEE</h3>
                <p class="font-weight-thin" style="color: white">30 Days Money Back Guarantee</p>
              </v-col>
            </v-row>
          </v-col>
          <v-col class="col-12 col-md-4 col-sm-12">
            <v-row>
              <v-col class="col-12 col-sm-3 pr-4" align="right">
                <v-icon class="display-2" style="color: white">mdi-headset</v-icon>
              </v-col>
              <v-col  class="col-12 col-sm-9 pr-4">
                <h3 class="font-weight-light" style="color: white">(787)-210-6953</h3>
                <p class="font-weight-thin" style="color: white">Monday to Friday 8:00 AM - 6:00 PM</p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>



  <v-footer
    dark
    padless
    v-if="!$store.state.isLoading"
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title style="color: black">
        <strong class="subheading"><span style="color: #bba257">connected with us on social networks!</span></strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon.icon"
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">{{ icon.icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class=" goldColor py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Pigmentus</strong>
      </v-card-text>
    </v-card>
  </v-footer>



  </v-app>





</template>

<script>
import Loading from '@/components/Loading.vue'
import {mapState, mapActions} from 'vuex'
export default {
  name: 'Layout',

  components: {
    Loading
  },

  data: () => ({
    icons: [{icon:'mdi-facebook', color: "rgb(66 103 178)"}, {icon:'mdi-linkedin', color:"rgb(66 103 178)"}, {icon:'mdi-instagram', color:"rgb(66 103 178)"}
    ],
    items: [
      {name: "Profile", to: '/profile', icon: "mdi-account"},
      {name: "My Courses", to: '/courses', icon: "mdi-school"},
      {name: "My Cart", to: '/cart', icon: "mdi-cart"},
      {name: "Wishlist", to: '', icon: "mdi-view-list"},
      {name: "Help", to: '', icon: "mdi-help-box"},
      {name: "Log Out", to: '', icon: "mdi-logout"},
    ],
    drawer: false,
  }),
  methods: {
    ...mapActions(['isAuth']),
    goCollection() {
      router.push({ path: 'shop', query: { collection: 1 } });
    },
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    },
    isMediumOrhigher() {
      return this.$$vuetify.breakpoint.smAndUp
    }
  },
  created() {
    this.isAuth();
  },
};
</script>

<style>
  .goldColor {
    background-color: rgb(187, 162, 87);
  }

  .v-btn--active .v-btn__content {
    color: rgb(187, 162, 87);
  }

</style>
