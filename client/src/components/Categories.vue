<template>
    <v-container fluid>
        <div style="text-align: center"><h1><b>Categories</b></h1></div>

        <v-row>
            <v-card
            :loading="loading"
            class="mx-auto my-12"
            max-width="300"
            >
        <template slot="progress">
            <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
            ></v-progress-linear>
        </template>

        <v-img
            height="200"
            src="https://www.missbrowbeauty.com/wp-content/uploads/2020/04/eyelash.png"
        ></v-img>

        <v-card-title>Eyelashes Products</v-card-title>




        <v-card-actions>
            <v-btn
            color="deep-purple lighten-2"
            text
            to='/shop/eyelashes-products'
            >
            Ver
            </v-btn>
        </v-card-actions>
            </v-card>
            <v-card
            :loading="loading"
            class="mx-auto my-12"
            max-width="300"
            >
        <template slot="progress">
            <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
            ></v-progress-linear>
        </template>

        <v-img
            height="200"
            src="https://www.beausynergy.co.uk/wp-content/uploads/2018/06/microblading-image-e1556275219584.jpg"
        ></v-img>

        <v-card-title>Eyebrows Products</v-card-title>




        <v-card-actions>
            <v-btn
            color="deep-purple lighten-2"
            text
            @click="reserve"
            >
            Ver
            </v-btn>
        </v-card-actions>
            </v-card>

            <v-card
            :loading="loading"
            class="mx-auto my-12"
            max-width="300"
            >
        <template slot="progress">
            <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
            ></v-progress-linear>
        </template>

        <v-img
            height="200"
            src="https://us.123rf.com/450wm/burdun/burdun2001/burdun200100993/138793459-permanent-makeup-for-eyebrows-microblading-brow-beautician-doing-eyebrow-tattooing-for-female-face-b.jpg?ver=6"
        ></v-img>

        <v-card-title>Lips Products</v-card-title>




        <v-card-actions>
            <v-btn
            color="deep-purple lighten-2"
            text
            @click="reserve"
            >
            Ver
            </v-btn>
        </v-card-actions>
            </v-card>

        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'Categories',
    data() {
        return {

        }
    },
}
</script>