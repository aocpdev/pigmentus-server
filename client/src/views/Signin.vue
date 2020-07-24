<template>
  <v-app>
    <v-content class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="8">
          <v-card class='elevation-12'>
            <v-window v-model="step">
              <v-window-item :value="1">
                <v-row>
                  <v-col cols="12" md="8">
                    <v-card-text class="mt-12">
                      <h1 class="text-center display-2 textColor--text text--accent-3">Sign in to Pigmentus</h1>
                      <div class=text-center>
                        <v-btn class="mx-2" fab color="black" outlined>
                          <v-icon>mdi-facebook</v-icon>
                        </v-btn>
                        <v-btn class="mx-2" fab color="black" outlined>
                          <v-icon>mdi-instagram</v-icon>
                        </v-btn>
                        <v-btn class="mx-2" fab color="black" outlined>
                          <v-icon>mdi-linkedin</v-icon>
                        </v-btn>
                      </div>
                      <h4 class="text-center mlt-4">Ensure your email for registration</h4>
                      <v-form>
                        <v-text-field
                        label="Email"
                        name="Email"
                        prepend-icon="mdi-email"
                        color="rgb(187, 162, 87)"
                        />
                        <v-text-field
                        id="Password"
                        label="Password"
                        name="Password"
                        prepend-icon="mdi-lock"
                        type="password"
                        color="rgb(187, 162, 87)"
                        />
                      </v-form>
                      <h3 class="text-center mt-3">Forget your password?</h3>
                    </v-card-text>
                    <div class="text-center mt-3">
                      <v-btn rounded color="rgb(187, 162, 87) acent-3">SING IN</v-btn>
                    </div>
                  </v-col>
                  <v-col cols="12" md="4" class="goldColor accent-3">
                    <v-card-text class="white--text mt-12">
                      <h1 class="text-center display-1">Hello, Amigos !</h1>
                      <h5>Enter your personnel detail and start journey with us</h5>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn rounded outlined="" dark @click="step++">SIGN UP</v-btn>
                    </div>
                  </v-col>
                </v-row>
              </v-window-item>
              <v-window-item :value="2">
                <v-row class="fill-height">
                  <v-col cols="12" md="4" class="goldColor accent-3">
                    <v-card-text class="white--text mt-12">
                      <h1 class="text-center display-1">Welcome Back !</h1>
                      <h5>To keep connected us please login with your personnel info</h5>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn rounded outlined dark @click="step--">SIGN IN</v-btn>
                    </div>
                  </v-col>
                </v-row>
              </v-window-item>
            </v-window>
          </v-card>
        </v-col>
      </v-row>
    </v-content>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    step: 1
  })
}
</script>

<style>
  .goldColor {
    background-color: rgb(187, 162, 87);
  }
  .textColor {
    color: rgb(187, 162, 87);
  }
  .my-text-style >>> .v-text-field__slot input {
    color: rgb(187, 162, 87);
  }
</style>