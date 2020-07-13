<template>
    
    <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
        <v-row justify="center">
            <h1>Sign Up: estamos trabajando en esto</h1>
        </v-row>
        
      <v-card ref="form">
        <v-card-text>
          <v-text-field
            ref="name"
            v-model="user.name"
            :rules="nameRules"
            label="Name"
            required
          ></v-text-field>

          <v-text-field
            ref="lastName"
            v-model="user.lastName"
            :rules="lastNameRules"
            label="Last Name"
            required
          ></v-text-field>

          <v-text-field
            ref="email"
            v-model="user.email"
            :rules="emailRules"
            label="Email"
            required
          ></v-text-field>

          <v-text-field
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            ref="password"
            :type="show1 ? 'text' : 'password'"
            v-model="user.password1"
            :rules="passwordRules"
            label="Password"
            required
            @click:append="show1 = !show1"
          ></v-text-field>

          <v-text-field
            ref="password2"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show2 ? 'text' : 'password'"
            v-model="user.password2"
            @click:append="show2 = !show2"
            :rules="confirmPasswordRules.concat(passwordConfirmationRule)"
            label="Confirm Password"
            required
          ></v-text-field>
          
        
          
        </v-card-text>
        <v-divider class="mt-12"></v-divider>
        <v-card-actions>
          <v-btn to="/" text>Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-slide-x-reverse-transition>
            <v-tooltip
              v-if="formHasErrors"
              left
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  class="my-0"
                  v-bind="attrs"
                  @click="resetForm"
                  v-on="on"
                >
                  <v-icon>mdi-refresh</v-icon>
                </v-btn>
              </template>
              <span>Refresh form</span>
            </v-tooltip>
          </v-slide-x-reverse-transition>
          <v-btn color="primary" text @click="submit">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
    <!-- <div class="container">
        <h1>Users</h1>
        <b-alert
            :show="dismissCountDown"
            dismissible
            :variant="message.color"
            @dismissed="dismissCountDown=0"
            @dismiss-count-down="countDownChanged"
            >
            {{message.text}}
        </b-alert>
        <form @submit.prevent="addUser(user)" v-if="add">
            <h3>Add new user</h3>
            <input type="text" class="form-control my-2" placeholder="Name" v-model="user.name" required>
            <input type="text" class="form-control my-2" placeholder="Last Name" v-model="user.lastname" required>
            <input type="text" class="form-control my-2" placeholder="Email" v-model="user.email" required>
            <b-button class="btn-sm btn-block btn-success" type="submit">Add</b-button>
        </form>
        <form @submit.prevent="editUser(updateUser)" v-else>
            <h3 class="text-center">Editar Nota</h3>
            <input type="text" placeholder="Name" class="form-control my-2" v-model="updateUser.name" required>
            <input type="text" placeholder="Last Name" 
            class="form-control my-2"  v-model="updateUser.lastname" required>
            <input type="text" class="form-control my-2" placeholder="Email" v-model="updateUser.email" required>
            <b-button class="btn-sm btn-block mb-1 btn-warning" type="submit">Edit</b-button>
            <b-button class="btn-sm btn-block" @click="add = true">Cancel</b-button>
        </form>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in users" :key="index">
                <th scope="row">{{item.id}}</th>
                <td>{{item.name}}</td>
                <td>{{item.lastname}}</td>
                <td>{{item.email}}</td>
                <td>
                    <b-button class="btn-warning btn-sm mx-2" @click="activeEdit(item.id)">Edit</b-button>
                    <b-button class="btn-danger btn-sm mx-2" @click="deleteUser(item.id)">Delete</b-button>
                </td>
                </tr>
            </tbody>
        </table>
    </div> -->
</template>

<script>
export default {
    data: () => ({
            user: {}, 
            password2: '',
            show1: false,
            show2: false,
            formHasErrors: false,
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
            ],
            confirmPasswordRules: [
                v => !!v || "Confirm Password is required"
            ]
    }), 
    methods: {
        addUser() {
            this.user.enable = true
            console.log(this.user)
            // item.enable = true;
            // this.axios.post('/addUser', item)
            //     .then(res => {
            //         this.users.unshift(res.data);
            //     })
            //     .catch(e => {
                    
            //         console.log("Error: ", e);
            //     })
            //     this.user = {}
            // router.push({ name: "signin"})
        }, 
        resetForm () {
        this.errorMessages = []
        this.formHasErrors = false

        Object.keys(this.form).forEach(f => {
          this.$refs[f].reset()
        })
      },
        submit(){
            this.formHasErrors = false

        Object.keys(this.form).forEach(f => {
          if (!this.form[f]) this.formHasErrors = true
            
          this.$refs[f].validate(true)
        })


        // if (this.formHasErrors = false) {
        //     this.addUser();
        // }
            
            
        }  
    },
    computed: {
        form () {
            return {
                name: this.name,
                lastName: this.lastName,
                email: this.email, 
                password: this.password,
                password2: this.password2
            }
        },
        passwordConfirmationRule() {
            return () => (this.user.password1 === this.user.password2) || 'Password must match'
        }
    },
}
</script>