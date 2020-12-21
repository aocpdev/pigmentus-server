<template>
    <v-container>
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
                        <v-hover v-slot:default="{ hover }">

                            <v-img
                                height="200"
                                src="https://static.wixstatic.com/media/59192f_d159e2f2077b41618e02b66de98ce172~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85/59192f_d159e2f2077b41618e02b66de98ce172~mv2.webp"
                            >
                            <v-expand-transition>
                                <div v-if="hover" class="d-flex transition-fast-in-fast-out darken-2 v-card--reveal display-3 white--text" style="height: 100%; background-color: rgb(187, 162, 87);"> $18.50 </div>
                            </v-expand-transition>
                            </v-img>
                        </v-hover>
                        <v-card-text style="position: relative;" class="pb-0">
                            <v-btn absolute color="red" class="white--text mt-n8" icon medium right top>
                                <v-icon>mdi-heart</v-icon>
                            </v-btn>
                        </v-card-text>
                        <v-card-title class="pt-0 pb-0">331 - BLACK ORCHID</v-card-title>

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

                            <div class="my-4 subtitle-1 mb-0" style="text-align: right">
                                $18.50
                            </div>
                        </v-card-text>

                        <v-divider class="mx-4 ml-0 mr-0 mt-0 mb-0"></v-divider>

                        <v-card-actions style="background-color:rgb(252, 249, 237)">
                            <v-btn
                            color="black"
                            >
                            Ver
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn
                            color="black"
                            >
                            Add to Cart
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
                        <v-hover v-slot:default="{ hover }">

                            <v-img
                                height="200"
                                src="https://static.wixstatic.com/media/59192f_9bb3a19b2b684b16a2b227f2de90fb4d~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85/59192f_9bb3a19b2b684b16a2b227f2de90fb4d~mv2.webp"
                            >
                            <v-expand-transition>
                                <div v-if="hover" class="d-flex transition-fast-in-fast-out darken-2 v-card--reveal display-3 white--text" style="height: 100%; background-color: rgb(187, 162, 87);"> $18.50 </div>
                            </v-expand-transition>
                            </v-img>
                        </v-hover>
                        <v-card-text style="position: relative;" class="pb-0">
                            <v-btn absolute color="red" class="white--text mt-n8" icon medium right top>
                                <v-icon>mdi-heart</v-icon>
                            </v-btn>
                        </v-card-text>
                        <v-card-title class="pt-0 pb-0">180 - CAFE' OLE'</v-card-title>

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

                            <div class="my-4 subtitle-1 mb-0" style="text-align: right">
                                $18.50
                            </div>
                        </v-card-text>

                        <v-divider class="mx-4 ml-0 mr-0 mt-0 mb-0"></v-divider>

                        <v-card-actions style="background-color:rgb(252, 249, 237)">
                            <v-btn
                            color="black"
                            to='/shop/eyelashes-products'
                            >
                            Ver
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn
                            color="black"
                            to='/shop/eyelashes-products'
                            >
                            Add to Cart
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
                        <v-hover v-slot:default="{ hover }">

                            <v-img
                                height="200"
                                src="https://static.wixstatic.com/media/59192f_56142cc68647487a8258248095237f57~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85/59192f_56142cc68647487a8258248095237f57~mv2.webp"
                            >
                            <v-expand-transition>
                                <div v-if="hover" class="d-flex transition-fast-in-fast-out darken-2 v-card--reveal display-3 white--text" style="height: 100%; background-color: rgb(187, 162, 87);"> $18.50 </div>
                            </v-expand-transition>
                            </v-img>
                        </v-hover>
                        <v-card-text style="position: relative;" class="pb-0">
                            <v-btn absolute color="red" class="white--text mt-n8" icon medium right top>
                                <v-icon>mdi-heart</v-icon>
                            </v-btn>
                        </v-card-text>
                        <v-card-title class="pt-0 pb-0">170 - GERMAN CHOCOLATE</v-card-title>

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

                            <div class="my-4 subtitle-1 mb-0" style="text-align: right">
                                $18.50
                            </div>
                        </v-card-text>

                        <v-divider class="mx-4 ml-0 mr-0 mt-0 mb-0"></v-divider>

                        <v-card-actions style="background-color:rgb(252, 249, 237)">
                            <v-btn
                            color="black"
                            to='/shop/eyelashes-products'
                            >
                            Ver
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn
                            color="black"
                            to='/shop/eyelashes-products'
                            >
                            Add to Cart
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
                        <v-hover v-slot:default="{ hover }">

                            <v-img
                                height="200"
                                src="https://static.wixstatic.com/media/59192f_9f7bb73965d14bba9b694cc10abc4662~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85/59192f_9f7bb73965d14bba9b694cc10abc4662~mv2.webp"
                            >
                            <v-expand-transition>
                                <div v-if="hover" class="d-flex transition-fast-in-fast-out darken-2 v-card--reveal display-3 white--text" style="height: 100%; background-color: rgb(187, 162, 87);"> $18.50 </div>
                            </v-expand-transition>
                            </v-img>
                        </v-hover>
                        <v-card-text style="position: relative;" class="pb-0">
                            <v-btn absolute color="red" class="white--text mt-n8" icon medium right top>
                                <v-icon>mdi-heart</v-icon>
                            </v-btn>
                        </v-card-text>
                        <v-card-title class="pt-0 pb-0">160 - ROYAL FUDGE</v-card-title>

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

                            <div class="my-4 subtitle-1 mb-0" style="text-align: right">
                                $18.50
                            </div>
                        </v-card-text>

                        <v-divider class="mx-4 ml-0 mr-0 mt-0 mb-0"></v-divider>

                        <v-card-actions style="background-color:rgb(252, 249, 237)">
                            <v-btn
                            color="black"
                            to='/shop/eyelashes-products'
                            >
                            Ver
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn
                            color="black"
                            to='/shop/eyelashes-products'
                            >
                            Add to Cart
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
                        <v-hover v-slot:default="{ hover }">

                            <v-img
                                height="200"
                                src="https://static.wixstatic.com/media/59192f_aa39574d960242a39e517d93c34c3667~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85/59192f_aa39574d960242a39e517d93c34c3667~mv2.webp"
                            >
                            <v-expand-transition>
                                <div v-if="hover" class="d-flex transition-fast-in-fast-out darken-2 v-card--reveal display-3 white--text" style="height: 100%; background-color: rgb(187, 162, 87);"> $18.50 </div>
                            </v-expand-transition>
                            </v-img>
                        </v-hover>
                        <v-card-text style="position: relative;" class="pb-0">
                            <v-btn absolute color="red" class="white--text mt-n8" icon medium right top>
                                <v-icon>mdi-heart</v-icon>
                            </v-btn>
                        </v-card-text>
                        <v-card-title class="pt-0 pb-0">150 - CHOCOLATE TRUFFLE</v-card-title>

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

                            <div class="my-4 subtitle-1 mb-0" style="text-align: right">
                                $18.50
                            </div>
                        </v-card-text>

                        <v-divider class="mx-4 ml-0 mr-0 mt-0 mb-0"></v-divider>

                        <v-card-actions style="background-color:rgb(252, 249, 237)">
                            <v-btn
                            color="black"
                            to='/shop/eyelashes-products'
                            >
                            Ver
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn
                            color="black"
                            to='/shop/eyelashes-products'
                            >
                            Add to Cart
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
                        <v-hover v-slot:default="{ hover }">

                            <v-img
                                height="200"
                                src="https://static.wixstatic.com/media/59192f_56f1e31f87834762b7f7d2d60198c688~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85/59192f_56f1e31f87834762b7f7d2d60198c688~mv2.webp"
                            >
                            <v-expand-transition>
                                <div v-if="hover" class="d-flex transition-fast-in-fast-out darken-2 v-card--reveal display-3 white--text" style="height: 100%; background-color: rgb(187, 162, 87);"> $18.50 </div>
                            </v-expand-transition>
                            </v-img>
                        </v-hover>
                        <v-card-text style="position: relative;" class="pb-0">
                            <v-btn absolute color="red" class="white--text mt-n8" icon medium right top>
                                <v-icon>mdi-heart</v-icon>
                            </v-btn>
                        </v-card-text>
                        <v-card-title class="pt-0 pb-0">130 - Cooper</v-card-title>

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

                            <div class="my-4 subtitle-1 mb-0" style="text-align: right">
                                $18.50
                            </div>
                        </v-card-text>

                        <v-divider class="mx-4 ml-0 mr-0 mt-0 mb-0"></v-divider>

                        <v-card-actions style="background-color:rgb(252, 249, 237)">
                            <v-btn
                            color="black"
                            to='/shop/eyelashes-products'
                            >
                            Ver
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn
                            color="black"
                            to='/shop/eyelashes-products'
                            >
                            Add to Cart
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
                        <v-hover v-slot:default="{ hover }">

                            <v-img
                                height="200"
                                src="https://static.wixstatic.com/media/59192f_357a2c8f78a24deda42114a7f5ccce2b~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85/59192f_357a2c8f78a24deda42114a7f5ccce2b~mv2.webp"
                            >
                            <v-expand-transition>
                                <div v-if="hover" class="d-flex transition-fast-in-fast-out darken-2 v-card--reveal display-3 white--text" style="height: 100%; background-color: rgb(187, 162, 87);"> $18.50 </div>
                            </v-expand-transition>
                            </v-img>
                        </v-hover>
                        <v-card-text style="position: relative;" class="pb-0">
                            <v-btn absolute color="red" class="white--text mt-n8" icon medium right top>
                                <v-icon>mdi-heart</v-icon>
                            </v-btn>
                        </v-card-text>
                        <v-card-title class="pt-0 pb-0">110 - MILK CHOCOLATE</v-card-title>

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

                            <div class="my-4 subtitle-1 mb-0" style="text-align: right">
                                $18.50
                            </div>
                        </v-card-text>

                        <v-divider class="mx-4 ml-0 mr-0 mt-0 mb-0"></v-divider>

                        <v-card-actions style="background-color:rgb(252, 249, 237)">
                            <v-btn
                            color="black"
                            to='/shop/eyelashes-products'
                            >
                            Ver
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn
                            color="black"
                            to='/shop/eyelashes-products'
                            >
                            Add to Cart
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
                        <v-hover v-slot:default="{ hover }">

                            <v-img
                                height="200"
                                src="https://static.wixstatic.com/media/59192f_8307f74d59374e268ad9ae06ec4d29b6~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85/59192f_8307f74d59374e268ad9ae06ec4d29b6~mv2.webp"
                            >
                            <v-expand-transition>
                                <div v-if="hover" class="d-flex transition-fast-in-fast-out darken-2 v-card--reveal display-3 white--text" style="height: 100%; background-color: rgb(187, 162, 87);"> $18.50 </div>
                            </v-expand-transition>
                            </v-img>
                        </v-hover>
                        <v-card-text style="position: relative;" class="pb-0">
                            <v-btn absolute color="red" class="white--text mt-n8" icon medium right top>
                                <v-icon>mdi-heart</v-icon>
                            </v-btn>
                        </v-card-text>
                        <v-card-title class="pt-0 pb-0">100 - CARAMEL</v-card-title>

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

                            <div class="my-4 subtitle-1 mb-0" style="text-align: right">
                                $18.50
                            </div>
                        </v-card-text>

                        <v-divider class="mx-4 ml-0 mr-0 mt-0 mb-0"></v-divider>

                        <v-card-actions style="background-color:rgb(252, 249, 237)">
                            <v-btn
                            color="black"
                            to='/shop/eyelashes-products'
                            >
                            Ver
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn
                            color="black"
                            to='/shop/eyelashes-products'
                            >
                            Add to Cart
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
                        <v-hover v-slot:default="{ hover }">

                            <v-img
                                height="200"
                                src="https://static.wixstatic.com/media/59192f_69af9f70aa1748e7bc8c65148cfb2d40~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85/59192f_69af9f70aa1748e7bc8c65148cfb2d40~mv2.webp"
                            >
                            <v-expand-transition>
                                <div v-if="hover" class="d-flex transition-fast-in-fast-out darken-2 v-card--reveal display-3 white--text" style="height: 100%; background-color: rgb(187, 162, 87);"> $18.50 </div>
                            </v-expand-transition>
                            </v-img>
                        </v-hover>
                        <v-card-text style="position: relative;" class="pb-0">
                            <v-btn absolute color="red" class="white--text mt-n8" icon medium right top>
                                <v-icon>mdi-heart</v-icon>
                            </v-btn>
                        </v-card-text>
                        <v-card-title class="pt-0 pb-0">015 - AMBER</v-card-title>

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

                            <div class="my-4 subtitle-1 mb-0" style="text-align: right">
                                $18.50
                            </div>
                        </v-card-text>

                        <v-divider class="mx-4 ml-0 mr-0 mt-0 mb-0"></v-divider>

                        <v-card-actions style="background-color:rgb(252, 249, 237)">
                            <v-btn
                            color="black"
                            to='/shop/eyelashes-products'
                            >
                            Ver
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn
                            color="black"
                            to='/shop/eyelashes-products'
                            >
                            Add to Cart
                            </v-btn>
                        </v-card-actions>
                    </v-card>

                </v-row>
            </v-container>
</template>

<script>
export default {
    name: 'Inks',
    data() {
        return {

        }
    },
}
</script>