<template>

        <!-- <v-row
        class="mb-6"
        no-gutters
        >
        <v-col
            cols="2"
            md="2"
        > -->
        <v-row no-gutters>

            <!-- <v-col
            cols="6"
            md="2"
            class="hidden-md-and-down"
            >


            <v-list rounded class="ma-0 pa-0"
            width="300px"
            height="100vh">
            <v-subheader>Admin</v-subheader>
            <v-list-item-group
                v-model="selectedItem"
                color="rgb(187, 162, 87)"
            >
                <v-list-item
                v-for="(item, i) in items"
                :key="i"
                :to="item.route"
                >
                <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
            </v-list>

            </v-col> -->

            <v-toolbar
            dense
            style="background-color: rgb(252, 249, 237)"
            >
            <v-toolbar-title>Admin</v-toolbar-title>
            <v-spacer></v-spacer>

            <v-btn
                v-for="(item, i) in items"
                :key="i"
                :to="item.route"
                text
                x-small
                color="black"
                style="color: rgb(252, 249, 237);"
            >
                {{item.text}}
            </v-btn>
            </v-toolbar>
            <v-col cols="12"

            >
            <v-main class="pt-0">
                <router-view></router-view>
            </v-main>
            </v-col>

        </v-row>



        <!-- </v-col> -->
        <!-- <v-col
        cols="12"
        sm="6"
        md="10"
        >
        <v-card
        elevation="2"
        max-width="100"
        >
        <v-card-text>
            <div>New Users</div>
        </v-card-text>
        </v-card>
        </v-col> -->




</template>

<script>
export default {
    data: () => ({
    selectedItem: 1,
    items: [
    { text: 'Dashboard', icon: 'mdi-view-dashboard', route: '/admin/dashboard'},
    { text: 'Customers', icon: 'mdi-account', route: '/admin/customers'},
    { text: 'Revenue', icon: 'mdi-currency-usd', route: '' },
    { text: 'Inventory', icon: 'mdi-view-list', route: '/admin/inventory' },
    { text: 'Orders', icon: 'mdi-history', route: '' },
    { text: 'Courses', icon: 'mdi-history', route: '' },
    { text: 'Purchases', icon: 'mdi-history', route: '' },
    { text: 'Expenses', icon: 'mdi-history', route: '' },
    ],
    })
}
</script>

<style>



</style>
