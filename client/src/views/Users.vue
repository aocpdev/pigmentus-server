<template>
    <div class="container">
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
    </div>
</template>

<script>
export default {
    data() {
        return {
            users: [],
            dismissSecs: 5,
            dismissCountDown: 0,
            message: {color: '', text: ''},
            user: {name: '', email: ''},
            add: true,
            updateUser: {},
        }
    }, 
    created() {
        this.listUsers();
    },
    methods: {
        alert(){
            this.message.color = 'success'
            this.message.text = 'Test Alert'
            this.showAlert();
        },
        listUsers(){
            this.axios.get('/users')
            .then((response) => {
                this.users = response.data
            })
            .catch((e) => {
                console.log('error' + e);
            })
        },
        addUser(item) {
            item.enable = true;
            this.axios.post('/addUser', item)
                .then(res => {
                    this.users.unshift(res.data);
                    this.showAlert();
                    this.message.text = 'User created!'
                    this.message.color = 'success';
                    this.listUsers();
                    
                })
                .catch(e => {
                    
                    this.showAlert();
                    this.message.color = 'danger';
                    this.message.text = 'error';
                    
                })
                this.user = {}
        },
        deleteUser(id){
        this.axios.delete(`/users/deleteUser/${id}`)
            .then(res => {
            let index = this.users.findIndex( item => item.id === res.data.id )
            this.users.splice(index, 1);

            this.showAlert();
            this.message.text = 'User Deleted!'
            this.message.color = 'danger'
            this.listUsers();
            })
            .catch( e => {
            console.log(e.response);
            })
        },
        activeEdit(id){
            this.add = false;
            this.axios.get(`users/${id}`)
                .then(res => {
                    console.log(res);
                    this.updateUser = res.data[0];
                })
                .catch(e => {
                    console.log(e.response);
                })
        },
        editUser(item){
            this.axios.put(`users/${item.id}`, item)
            .then(res => {
                this.updateUser = {}
                this.showAlert();
                this.listUsers();
                this.message.text = 'Edit Success'
                this.message.color = 'success'
            })
            .catch(e => {
                console.log(e);
                this.showAlert();
                    this.message.color = 'danger';
                    this.message.text = 'error';
            });
            this.add = true;
        },
        countDownChanged(dismissCountDown) {
            this.dismissCountDown = dismissCountDown
        },
        showAlert() {
            this.dismissCountDown = this.dismissSecs
        }
    }
}
</script>