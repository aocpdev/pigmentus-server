<template>

  <v-app>
    <loading></loading>
    
    <v-app-bar app color="black" dark v-if="!$store.state.isLoading">
      <div class="d-flex align-center">
        <v-img
          alt="Pigmentus Logo"
          class="shrink mr-2"
          contain
          src="./assets/pigmentus-logo.png"
          transition="scale-transition"
          width="80"
        />
      </div>

      <v-spacer></v-spacer>
        <v-btn
          to="/categories"
          class="ma-2"
          color="black"
        >
        Categories
        </v-btn>
        <v-text-field
          style="margin-top: 30px"
          outlined
          label="Search"
          filled
          append-icon="mdi-card-search-outline"
          color="rgb(187, 162, 87)"
        ></v-text-field>

      <v-spacer></v-spacer>

      <v-btn class="ma-2" tile large color="white" icon to="/cart">
        <v-icon>mdi-cart</v-icon>
      </v-btn>
      <v-btn
        to="/signup"
        class="ma-2"
        color="black"
        v-if="!$store.state.isLogin"
      >
        Sign Up
      </v-btn>
        <v-btn
        to="/auth/signin"
        class="ma-2"
        color="black"
        v-if="!$store.state.isLogin"
      >
        Sign In
      </v-btn>

      <v-btn
        to="/courses"
        class="ma-2"
        color="black"
        v-if="$store.state.isLogin"
      >
        My Course
      </v-btn>
      
      
      
      <div class="d-flex justify-center align-center" v-if="$store.state.isLogin">
        <v-menu
          offset-y
        >
          <template v-slot:activator="{ attrs, on }">
            <v-btn class="mx-2" fab v-bind="attrs" v-on="on" outlined color="rgb(187, 162, 87)">
              <v-badge overlap color="red">
                <template v-slot:badge>
                  <span>3</span>
                </template>

                <v-avatar>
                  <img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                    alt="John"
                  >
                </v-avatar>
              </v-badge>
          </v-btn>
            
          </template>
          <v-card
            class="mx-auto"
            width="280"
            tile
          >
          <v-list>
            <v-list-item>
              <v-list-item-avatar>
                <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
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
                :to="item.to"
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
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-main>


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
      <v-card-title class="goldColor">
        <strong class="subheading">Get connected with us on social networks!</strong>

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

      <v-card-text class="py-2 white--text text-center">
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
  name: 'App',

  components: {
    Loading
  },

  data: () => ({
    icons: [{icon:'mdi-facebook', color: "rgb(66 103 178)"}, {icon:'mdi-linkedin', color:"rgb(66 103 178)"}, {icon:'mdi-instagram', color:"rgb(66 103 178)"}
    ],
    items: [
      {name: "Profile", to: '/profile', icon: "mdi-account"},
      {name: "My Courses", to: '', icon: "mdi-school"},
      {name: "My Cart", to: '', icon: "mdi-cart"},
      {name: "Wishlist", to: '', icon: "mdi-view-list"},
      {name: "Help", to: '', icon: "mdi-help-box"},
      {name: "Log Out", to: '', icon: "mdi-logout"},
    ],
  }),
  methods: {
    ...mapActions(['isAuth'])
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
