<template>

    <v-row no-gutters width="100vh" class="ml-0 mr-0 pr-0 pl-0 pt-0" >
    <v-tabs width="100vh" background-color="rgb(252, 249, 237)" light color="rgb(187, 162, 87)" v-model="activeTab" absolute>
        <v-tab v-for="tab of tabs" :key="tab.id" :to="tab.route">
            {{ tab.name }}
        </v-tab>

        <v-tab-item
        :transition="false"
        :reverse-transition="false"
        v-for="tab of tabs"
        :key="tab.id"
        :value="tab.route"
        >
            <router-view></router-view>
        </v-tab-item>
    </v-tabs>
    </v-row>



    <!-- <v-row no-gutters>
            <h1 style="text-align: center;"> Inventory</h1>
            <v-col  cols="12" class="pl-10 pr-10">
                    <v-card>
                        <v-card-title>
                        All Products
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
                        :items="inventory"
                        :search="search"
                        ></v-data-table>
                    </v-card>

            </v-col>

    </v-row> -->
</template>

<script>
import axios from 'axios'
export default {
    name: "AdminInventory",
    data() {
        return {
            activeTab: 'admin/inventory',
            tabs: [
                { id: 1, name: "Inventory", route: '/' },
                { id: 2, name: "Online Collections", route: '/admin/inventory/collections' },
                { id: 3, name: "Online Products", route: '/admin/inventory/products' },

            ]
            }
            }

}
</script>

<style>

</style>