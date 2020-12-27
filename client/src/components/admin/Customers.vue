<template>
    <v-row no-gutters>
            <h1 style="text-align: center;"> Customers</h1>
            <v-col  cols="12" class="pl-10 pr-10">
                    <v-card>
                        <v-card-title>
                        All Customers
                        <v-spacer></v-spacer>
                        <v-text-field
                            v-model="search"
                            append-icon="mdi-magnify"
                            label="Search"
                            single-line
                            hide-details
                        ></v-text-field>
                        </v-card-title>
                        <v-data-table
                        :headers="headers"
                        :items="users"
                        :search="search"
                        ></v-data-table>
                    </v-card>

            </v-col>

    </v-row>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Customers',
    data() {
        return {
            search: '',
            headers: [
            {
                text: 'Name',
                align: 'start',
                value: 'name',
            },
            { text: 'Email', value: 'email' },
            { text: 'Phone', value: 'phone' },
            { text: 'Date Created', value: 'dateCreated' },
            { text: 'Last Seen', value: 'lastSeen' },
            { text: 'Shipping Address', value: 'shippingAddress' },
            ],
            users: [],
        }
    },
    methods: {
        getUsers: async function () {
            axios.get('api/v1.0/users')
            .then(res => {
                res.data.users.rows.forEach( item => {
                    let userObject = {
                        name: item.name + ' ' + item.last_name,
                        email: item.email,
                        dateCreated: new Date(item.created_date).toLocaleString(),
                        lastSeen: new Date(item.last_seen).toLocaleString()
                    }
                    this.users.push(userObject);
                });
                console.log(this.users);
            }).catch(err => console.log(err))
        },
    },
    created() {
        this.getUsers();
    },
}
</script>

<style>

</style>