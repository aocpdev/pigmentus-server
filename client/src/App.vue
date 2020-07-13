<template>
  <v-app>
    <v-app-bar
      app
      color="black"
      dark
    >
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
      <div>
        <v-btn
        to="/signin"
        class="ma-2"
        color="black"
      >
        Sign In
        
      </v-btn>
      </div>
      
    </v-app-bar>

    

    <v-main>
      <router-view/>
    </v-main>
    
  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {
    
  },

  data: () => ({
    //
  }),
};
</script>
