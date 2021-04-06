<template>
    <v-bottom-navigation
        style="background-color: rgb(252, 249, 237)"
        horizontal
        dense
    >
        <v-btn small to="/"
        color="rgb(187, 162, 87)"
        text
        x-small>
        Home
        </v-btn>

        <v-btn small to="/"
        color="rgb(187, 162, 87)"
        text
        x-small>
        Blog
        </v-btn>

        <!-- <v-menu open-on-hover offset-y>
        <template v-slot:activator="{ on }">
            <v-btn to="/shop" v-on="on" color="rgb(187, 162, 87)" text x-small>
            <span>Shop</span>
            </v-btn>
        </template>
        <v-card
            class="mx-auto"
            max-width="344"
            outlined
        >

            <v-list-item
            v-for="(item, index) in items"
            :key="index"
            @click=""
            color="rgb(187, 162, 87)"
            to="/collections"

            >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>

        </v-card>
        </v-menu> -->
    </v-bottom-navigation>
</template>

<script>
export default {
    name: 'BottomNavigation',
    data() {
        return {
            items: [
                    { title: 'T-Shirts' },
                    { title: 'Jackets' },
                    { title: 'Shirts' },
                    { title: 'Jeans' },
                    { title: 'Shoes' },
                ],
        }
    },
}
</script>

