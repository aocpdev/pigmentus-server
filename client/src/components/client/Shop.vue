<template>

        <div>
            <bottom-navigation></bottom-navigation>
            <v-container>
            <div class="row">
                <div
                class="col-md-3 col-sm-3 col-xs-12"
                v-if="!isProduct"
                >
                        <v-card outlined>
                            <v-card-title>Shop</v-card-title>
                            <v-divider></v-divider>
                            <v-list rounded>
                                <v-list-item to="/shop/1" color="rgb(187, 162, 87)">
                                    <v-list-item-content>
                                    <v-list-item-title>All</v-list-item-title>
                                </v-list-item-content>
                                </v-list-item>

                                <v-list-group
                                    v-for="item in collectionTest"
                                    :key="item.name"
                                    v-model="item.active"
                                    color="rgb(187, 162, 87)"
                                >
                                    <template v-slot:activator>
                                    <v-list-item-content>
                                        <v-list-item-title v-text="item.name"></v-list-item-title>
                                    </v-list-item-content>
                                    </template>

                                    <v-list-item
                                    v-for="child in item.children"
                                    :key="child.name"
                                    :to="child.to"

                                    >
                                    <v-list-item-content>
                                        <v-list-item-title v-text="child.name"></v-list-item-title>
                                    </v-list-item-content>
                                    </v-list-item>
                                </v-list-group>
                            </v-list>
                        </v-card>
                </div>

                <component v-bind:is="changeComponent" v-bind="currentProperties" :key="$route.params.id"></component>


            </div>
        </v-container>
        </div>





</template>

<script>
import axios from 'axios'
import Collections from './Collections.vue'
import router from '../../router/index'
import BottomNavigation from '../BottomNavigation.vue'
import Product from './Product.vue'
export default {
    components: { 'collections': Collections, BottomNavigation, 'products': Product },
    name: 'Shop',
    data() {
        return {
            collections: [],
            collectionTest: [],
            activeTab: String,
            component: 'collections',
            isProduct: false,
            collectionsId: String,
            collectionId: String,
        }
    },
    computed: {
        changeComponent: function () {
            if (this.$route.name === "collections") {
                this.collectionId = this.$route.params.id;
                this.isProduct = false;
                return 'collections'
            }else {
                this.isProduct = true;
                return 'products'
            }
        },
        currentProperties: function() {
            if (this.$route.name === 'collections') {

                return { collectionsId: this.$route.params.id }
            }else {
                return { productId: this.$route.params.id}
            }
        }
    },
    methods: {
        getCollections: async function () {
            let categories = [];
            axios.get('api/v1.0/products/inventory').then( inventoryResponse => {
                let inventory = inventoryResponse.data.inventory.rows;
                let list = [];
                inventory.map((inventoryValue, inventoryIndex) => {
                    if (!list.includes(inventoryValue.collectionId)) {
                        list.push(inventoryValue.collectionId);
                    }
                });
                axios.get('api/v1.0/categories').then(categoriesResponse => {
                    axios.get('api/v1.0/collections/all').then(collectionsResponse => {
                        categoriesResponse.data.categories.rows.map((categorieValue, categorieIndex) => {
                            categorieValue.children = [];
                            list.map((compareCollectionId, compareIndex) => {
                                collectionsResponse.data.collections.rows.map((collectionValue, collectionIndex) => {
                                if (compareCollectionId === collectionValue.id) {
                                    if (collectionValue.categoriesId === categorieValue.id && collectionValue.name !== 'All') {
                                        collectionValue.to = `/shop/${collectionValue.id}`;
                                        categorieValue.children.push(collectionValue);
                                    }
                                }
                            })
                            });
                        })
                    }).catch(err => console.log(err));
                categoriesResponse.data.categories.rows.map((value, index) => {
                    if (value.enabled === true) {
                        this.collectionTest.push(value);
                    }
                })
            }).catch(err => console.log(err));
            }).catch(err => console.log(err));

        },
        getProducts: async function () {
            router.push('/');
        },
        productsView (collectionId) {
            router.push({ path: `/shop/${collectionId}`});
            this.collectionId = collectionId;
        }
    },

    created() {

        this.collectionsId = this.$route.params.id;
        this.getCollections(this.collectionsId, this.collectionId);

    },
}
</script>