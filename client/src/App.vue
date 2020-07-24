<template>
  <v-app>
    <v-app-bar app color="black" dark>
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
        ></v-text-field>

      <v-spacer></v-spacer>

      <v-btn class="ma-2" tile large color="white" icon to="/cart">
        <v-icon>mdi-cart</v-icon>
      </v-btn>
      <v-btn
        to="/signup"
        class="ma-2"
        color="black"
      >
        Sign Up
      </v-btn>
        <v-btn
        to="/signin"
        class="ma-2"
        color="black"
      >
        Sign In
      </v-btn>
    </v-app-bar>

    

    <v-main>
      <router-view/>
    </v-main>


  <v-footer
    dark
    padless
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
          :key="icon"
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


export default {
  name: 'App',

  components: {
    
  },

  data: () => ({
    icons: [{icon:'mdi-facebook', color: "rgb(66 103 178)"}, {icon:'mdi-linkedin', color:"rgb(66 103 178)"}, {icon:'mdi-instagram', color:"rgb(66 103 178)"}
      
    ],
  }),
};
</script>

<style>
  .goldColor {
    background-color: rgb(187, 162, 87);
  }
</style>
