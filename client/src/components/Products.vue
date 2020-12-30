<template>
    <v-container fluid>
        <v-col>
            <v-row class="ml-0 mr-0 productTitle"><h1>{{this.collections.name}}</h1></v-row>
            <v-row>
                <v-card
            v-for="(item, i) in products"
            :key="i"
            :loading="loading"
            class="mx-auto mt-2 mb-2 my-12"
            max-width="250"
            >
                <template slot="progress">
                    <v-progress-linear
                    color="deep-purple"
                    height="10"
                    indeterminate
                    ></v-progress-linear>
                </template>
                <!-- <v-hover v-slot:default="{ hover }"> -->

                    <v-img
                        height="250"
                        v-bind:src='item.image'
                    >
                    <!-- <v-expand-x-transition>
                        <div v-if="hover" height="100" width="100" class="d-flex transition-fast-in-fast-out darken-2 v-card--reveal display-3 white--text" style="height: 100%; background-color: rgb(187, 162, 87);"> ${{item.price}} </div>
                    </v-expand-x-transition> -->
                    </v-img>
                <!-- </v-hover> -->
                <v-card-text style="position: relative;" class="pb-0">
                    <v-btn absolute color="red" class="white--text mt-n8" icon medium right top>
                        <v-icon>mdi-heart</v-icon>
                    </v-btn>
                </v-card-text>
                <v-card-subtitle class="pt-0 pb-0"><b>{{item.name}}</b></v-card-subtitle>

                <v-card-text class="pb-0">
                    <v-row
                        align="center"
                        class="mx-0"
                    >
                        <v-rating
                        :value="4.5"
                        color="amber"
                        dense
                        half-increments
                        size="14"
                        readonly
                        class="mt-0"
                        ></v-rating>

                        <div class="grey--text ml-4">
                        4.5 (413)
                        </div>
                    </v-row>
                    <v-row>
                    <v-col class="my-4 subtitle-1 mb-0" style="text-align: left">
                        in stock: {{item.in_stock}}
                    </v-col>

                    <v-col class="my-4 subtitle-1 mb-0" style="text-align: right">
                        ${{item.customer_price}}
                    </v-col>
                    </v-row>

                </v-card-text>

                <v-divider class="mx-4 ml-0 mr-0 mt-0 mb-0"></v-divider>

                <v-card-actions style="background-color:rgb(252, 249, 237)">
                    <v-btn
                    color="black"
                    to='/shop/eyelashes-products'
                    style="color: rgb(187, 162, 87)"
                    >
                    Ver
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn
                    color="black"
                    to='/shop/eyelashes-products'
                    style="color: rgb(187, 162, 87)"
                    >
                    Add to Cart
                    </v-btn>
                </v-card-actions>
            </v-card>
            </v-row>


        </v-col>
    </v-container>
</template>

<script>
import axios from 'axios'
export default {
    props: {
        collections: {
            type: Object
        }
    },
    name: 'Products',
    data() {
        return {
            products: [],
        }
    },
    methods: {
        getProducts: async function (collectionId) {
            axios.get('api/v1.0/products', { params: { collectionId: collectionId } })
            .then(res => {
                this.products = res.data.products.rows;
                console.log(res);
            }).catch(err => console.log(err))
        }
    },
    created() {
        this.getProducts(this.collections.id);
    },

}
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
    .productTitle {
        text-align: center;
    }
    h1{
        font-family: 'Great Vibes', cursive;
    }
</style>