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
            <v-col
            cols="6"
            md="2"
            >
                <v-card
            class="ma-0 pa-0"
            width="100vh"
            tile
            height="100vh"
        >

            <v-list rounded>
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
            </v-card>
            </v-col>

            <v-col cols="12"
            sm="8"
            md="10"
            style="background-color: #F5F5F5">
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
    { text: 'Products', icon: 'mdi-view-list', route: '' },
    ],
    })
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Fredericka+the+Great&display=swap');
    div.my-tabs [role="tab"] {
        justify-content: flex-start;
    }
    .v-tab {
        text-transform: none !important;
    }

    .shopTitle {
        text-align: center;

    }
    h1{
        font-family: 'Fredericka the Great', cursive;
        width: 100%;
    }
</style>
