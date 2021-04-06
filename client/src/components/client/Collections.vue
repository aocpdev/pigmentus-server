<template>
        <div
        class="col-md-9 col-sm-9 col-xs-12"
        v-if="!isProductInfo"
        >

            <v-breadcrumbs class="pb-0"></v-breadcrumbs>

            <v-row dense>
                <v-col cols="12" sm="8" class="pl-6 pt-6">
                <small>Showing 1-12 of 200 products</small>
                </v-col>
                <v-col cols="12" sm="4">
                <v-select class="pa-0" v-model="select" :items="options" style="margin-bottom: -20px;" outlined dense></v-select>
                </v-col>
            </v-row>

            <v-divider></v-divider>
            <div class="row text-center">
                <div class="col-md-3 col-sm-6 col-xs-12" :key="i.id" v-for="(item, i) in products">
                    <v-hover v-slot="{ hover }">
                    <v-card
                        :elevation="hover ? 12 : 2"
                        class="mx-auto"
                        color="grey lighten-4"
                        max-width="600"
                        >

                            <v-hover v-slot:default="{ hover }">
                            <v-img
                                content
                                class="white--text align-end"
                                :aspect-ratio="16/9"
                                height="200px"
                                :src='item.image'
                            >
                            <v-expand-transition>
                                <div
                                    v-if="hover"
                                    class="d-flex transition-fast-in-fast-out primary darken-2 v-card--reveal display-3 white--text"
                                    style="height: 100%;"
                                >
                                    <v-btn v-if="hover" :to="`/shop/${collectionsId}/product/${item.id}`" color="white" outlined>VIEW</v-btn>
                                </div>

                                </v-expand-transition>
                            </v-img>
                            </v-hover>
                            <v-card-text class="text--primary" style="background-color: rgb(252, 249, 237)">
                                <!-- <v-btn text x-small :to="`/shop/${collectionsId}/product/${item.id}`">
                                    <span style="text-decoration: none">{{item.name}}</span>
                                </v-btn> -->
                                <div><a :to="`/shop/${collectionsId}/product/${item.id}`" style="text-decoration: none">{{item.name}}</a></div>
                                <div>${{item.customerPrice}}</div>
                            </v-card-text>

                    </v-card>
                    </v-hover>

                </div>
            </div>
        </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Collections',
    props: {
        collectionsId: {
            type: String
        },
    },

    data() {
        return {
            products: [],
            dialog: false,
            isProductInfo: false,
        }
    },
    methods: {
        getProducts: async function (collectionId) {
            if (collectionId == 1) {
                axios.get('api/v1.0/products/inventory')
                .then(res => {
                    this.products = res.data.inventory.rows;

                }).catch(err => console.log(err))
            } else {
                axios.get('api/v1.0/products', { params: { collectionId: collectionId } })
                .then(res => {
                    this.products = res.data.products.rows;
                }).catch(err => console.log(err))
            }

        }
    },
    created() {
        this.getProducts(this.collectionsId);
    },

}
</script>

<style>

    .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .5;
    position: absolute;
    width: 100%;
    }

</style>
