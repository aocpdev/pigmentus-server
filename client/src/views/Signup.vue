<template>
  <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="8">
        <v-card class='elevation-12'>
          <v-window>
            <v-window-item>
              <v-row class="fill-height">
                <v-col cols="12" md="4" class="goldColor accent-3">
                  <v-card-text class="mt-12">
                    <h1 class="text-center display-1">Welcome Back !</h1>
                    <h5>To keep connected us please login with your personnel info</h5>
                  </v-card-text>
                  <div class="text-center">
                    <v-btn rounded  dark @click="goLogin()">SIGN IN</v-btn>
                  </div>
                </v-col>
                <v-col cols="12" md="8">
                  <v-card-text class="mt-12">
                    <h1 class="text-center display-2 textColor text--accent-3"> Create Account</h1>
                    <div class="text-center ">
                      <v-btn class="mx-2 facebook" fab color="rgb(66 103 178)" 
                      href="https://www.facebook.com/Pigmentus"
                      >
                        <v-icon color="white">mdi-facebook</v-icon>
                      </v-btn>
                      <v-btn class="mx-2 instagram" fab color="black" 
                      href="https://www.instagram.com/pigmentus_pr/"
                      >
                        <v-icon color="white">mdi-instagram</v-icon>
                      </v-btn>
                      <v-btn class="mx-2" fab color="rgb(40,103,178)"
                      href="https://www.linkedin.com/in/axelcastro/"
                      >
                        <v-icon color="white">mdi-linkedin</v-icon>
                      </v-btn>
                    </div>
                    <div style="padding-top: 20px" v-if="error">
                      <v-alert
                      text
                      v-model="error"
                      dismissible
                      close-icon="mdi-close"
                      icon="mdi-email"
                      type="error"
                    >
                       {{errorMessage}}
                    </v-alert>
                    </div>
                    <v-form v-model="valid">
                      <v-text-field
                      v-model="user.name"
                      label="Name"
                      name="Name"
                      prepend-icon="mdi-account"
                      color="rgb(187, 162, 87)"
                      :rules="nameRules"
                      />
                      <v-text-field
                      v-model="user.last_name"
                      label="Last Name"
                      name="LastName"
                      prepend-icon="mdi-account"
                      color="rgb(187, 162, 87)"
                      :rules="lastNameRules"
                      />
                      <v-text-field
                      v-model="user.email"
                      label="Email"
                      name="Email"
                      prepend-icon="mdi-email"
                      color="rgb(187, 162, 87)"
                      :rules="emailRules"
                      />
                      <v-text-field
                      v-model="user.password1"
                      id="Password"
                      label="Password"
                      name="Password"
                      prepend-icon="mdi-lock"
                      type="password"
                      color="rgb(187, 162, 87)"
                      :rules="passwordRules"
                      />
                      <v-text-field
                      v-model="user.password2"
                      id="ConfirmPassword"
                      label="Confirm Password"
                      name="ConfirmPassword"
                      prepend-icon="mdi-lock"
                      type="password"
                      color="rgb(187, 162, 87)"
                      :rules="passwordConfirmationRules"
                      />
                      <div class="text-center mt-3">
                        <v-btn rounded color="rgb(187, 162, 87) " @click="createUser()" :disabled="!valid">SING UP</v-btn>
                      </div>
                    </v-form>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>    
  </v-row>
</template>

<script>
import router from '../router/index'
export default {
    data: () => ({
            error: false,
            valid: false,
            errorMessage: "",
            user: {}, 
            password2: '',
            nameRules: [
                v => !!v || 'Name is required'
            ],
            lastNameRules: [
                v => !!v || 'Last Name is required'
            ],
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+.com+/.test(v) || 'E-mail must be valid',
            ],
            passwordRules: [
                v => !!v || 'Password is required',
                v => (v && v.length > 5) || 'Passwrd must be at least 6 characters',
            ]
    }), 
    methods: {
        goLogin () {
          router.push({ name: "Signin"});
        },
        createUser() {
            this.user.enable = true;
            console.log(this.user);
            this.axios.post('/auth/signup', this.user)
                .then(res => {
                    if (res.data.message === "User added succesfully"){
                      let userLogin = {email: this.user.email, password: this.user.password1}
                      this.axios.post('/auth/login', userLogin)
                        .then(res => {
                          console.log(res)
                          // router.push({name: "Home"})
                        })
                        .catch(err => {
                          router.push({ name: "Signin"});
                        });
                    }
                })
                .catch(err => {  
                  this.error = false;
                    if (err.response.data.message === "User exist"){
                      this.user.email = "";
                      this.error = true;
                      this.errorMessage = "This email is already registered, please choose another one."
                    }
                })
            
        }
    },
    computed: {
        passwordConfirmationRules() {
          return [
            () => (this.user.password1 === this.user.password2) || 'Password must match',
            v => !!v || 'Confirmation Password is required'
          ];
        }
    },
}
</script>

<style>
.instagram {
  background-image: -webkit-gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22) );  
  background-image: gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22) );
  color:transparent; 
  -webkit-background-clip: text;
  background-clip: text;color: transparent;
  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%); 
  background: -webkit-radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);    
}
.facebook{
  background-color: rgb(66 103 178);
}
</style>