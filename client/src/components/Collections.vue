<template>
    <v-container fluid>
        <v-card class="mx-auto" tile>
    <v-col style="height: 140px; text-align: center" class="pt-0"><v-row><h1 style="color: rgb(187, 162, 87); background-color: black; height: 140px" class="pa-0 pt-8 pb-n6 mb-n16">Pigmentus Shop</h1></v-row></v-col>

    <v-row>
        <v-col class="pt-0 pb-0">
            <v-tabs vertical background-color="rgb(252, 249, 237)" color="rgb(187, 162, 87)" v-model="activeTab" absolute class="my-tabs">

            <v-tab
                v-for="tab in collections"
                :key="tab.id"
                :to="tab.route"
            >
                {{tab.name}}
            </v-tab>

            <v-tab-item v-for="tab in collections" :key="tab.id" :value="tab.route">
                <products :collections="tab"></products>
            </v-tab-item>

        </v-tabs>
        </v-col>

    </v-row>




        </v-card>


    </v-container>


</template>

<script>
import axios from 'axios'
import Products from './Products.vue'
export default {
    components: { Products },
    name: 'Collections',
    data() {
        return {
            collections: [],
            activeTab: String
        }
    },
    methods: {
        getCollections: async function () {
            axios.get('api/v1.0/collections')
            .then(res => {
                res.data.collections.rows.forEach( item => {
                    this.activeTab = `/collections/${res.data.collections.rows[0].id}/products`;
                    let collectionsObj = {
                        id: item.id,
                        name: item.name,
                        disabled: item.disabled,
                        route: `/collections/${item.id}/products`
                    }
                    this.collections.push(collectionsObj);
                });
            }).catch(err => console.log(err))
        },
        getProducts: async function () {
            router.push('/');
        }
    },
    created() {
        this.getCollections();
    },
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