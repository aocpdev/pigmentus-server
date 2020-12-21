<template>

        <!-- <v-row
        class="mb-6"
        no-gutters
        >
        <v-col
            cols="2"
            md="2"
        > -->
        <v-row>
            <v-card
            class="ma-0 pa-0"
            width="320"
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
            <v-content class="pt-0" style="background-color: #F5F5F5">
            <v-container fluid >
                <!-- <router-view></router-view> -->
                <div style="text-align: center;"><h1> Pigmentus Dashboard</h1></div>

                <v-row>
                    <v-col>
                        <v-hover v-slot="{ hover }">
                        <v-card
                        :elevation="hover ? 12 : 2"
                        max-width="280"
                        shaped
                        to="/collections/1/products"
                        >
                        <v-card-text>
                            <v-row>
                                <v-col class="pt-0 pb-0">
                                    <p class="display-1 text--primary mb-0">
                                        0
                                    </p>
                                    <div class="mt-0 pt-0">New Customers</div>
                                </v-col>
                                <v-col class="pb-0 pt-0 mt-2" style="text-align: center;">
                                    <v-icon x-large color="rgb(187, 162, 87)">mdi-account</v-icon>
                                </v-col>
                            </v-row>


                        </v-card-text>
                        </v-card>
                        </v-hover>
                    </v-col>
                <v-col>
                    <v-hover v-slot="{ hover }">
                <v-card
                :elevation="hover ? 12 : 2"
                max-width="280"
                shaped
                to="/collections/1/products"
                >
                <v-card-text>
                    <v-row>
                        <v-col class="pt-0 pb-0">
                            <p class="display-1 text--primary mb-0">
                                $0.00
                            </p>
                            <div class="mt-0 pt-0">Today Sales</div>
                        </v-col>
                        <v-col class="pb-0 pt-0 mt-2" style="text-align: center;">
                            <v-icon x-large color="rgb(187, 162, 87)">mdi-currency-usd</v-icon>
                        </v-col>
                    </v-row>


                </v-card-text>
                </v-card>
                </v-hover>
                </v-col>

                <v-col>
                    <v-hover v-slot="{ hover }">
                <v-card
                :elevation="hover ? 12 : 2"
                max-width="280"
                shaped
                to="/collections/1/products"
                >
                <v-card-text>
                    <v-row>
                        <v-col class="pt-0 pb-0">
                            <p class="display-1 text--primary mb-0">
                                0
                            </p>
                            <div class="mt-0 pt-0">Total Customers</div>
                        </v-col>
                        <v-col class="pb-0 pt-0 mt-2" style="text-align: center;">
                            <v-icon x-large color="rgb(187, 162, 87)">mdi-account</v-icon>
                        </v-col>
                    </v-row>


                </v-card-text>
                </v-card>
                </v-hover>
                </v-col>
                </v-row>





            </v-container>
            </v-content>
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
    { text: 'Dashboard', icon: 'mdi-view-dashboard' },
    { text: 'Customers', icon: 'mdi-account' },
    { text: 'Revenue', icon: 'mdi-currency-usd' },
    { text: 'Products', icon: 'mdi-view-list' },
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
