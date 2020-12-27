<template>
        <v-row no-gutters>
            <h1 style="text-align: center;"> Pigmentus Dashboard</h1>

            <v-col cols="12"
                sm="6"
                md="8"
            >
                <v-row no-gutters class="ml-5">

                    <!-- New Customers -->
                    <v-col>
                        <v-hover v-slot="{ hover }">
                        <v-card
                        :elevation="hover ? 12 : 2"
                        max-width="290"
                        shaped
                        to="/admin/customers"
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

                    <!-- Daily Revenue -->
                    <v-col>
                        <v-hover v-slot="{ hover }">
                            <v-card
                            :elevation="hover ? 12 : 2"
                            max-width="290"
                            shaped
                            to="/collections/1/products"
                            >
                            <v-card-text>
                                <v-row>
                                    <v-col class="pt-0 pb-0">
                                        <p class="display-1 text--primary mb-0">
                                            $0.00
                                        </p>
                                        <div class="mt-0 pt-0">Daily revenue</div>
                                    </v-col>
                                    <v-col class="pb-0 pt-0 mt-2" style="text-align: center;">
                                        <v-icon x-large color="rgb(187, 162, 87)">mdi-currency-usd</v-icon>
                                    </v-col>
                                </v-row>


                            </v-card-text>
                            </v-card>
                        </v-hover>
                    </v-col>

                    <!-- Total Customers -->
                    <v-col>
                        <v-hover v-slot="{ hover }">
                            <v-card
                            :elevation="hover ? 12 : 2"
                            max-width="290"
                            height="94"
                            shaped
                            to="/admin/customers"
                            :loading="isLoading"
                            >
                            <template slot="progress">
                                <v-progress-linear color="rgb(187, 162, 87)" indeterminate></v-progress-linear>
                            </template>


                            <v-card-text v-if="!isLoading">
                                <v-row>
                                    <v-col class="pt-0 pb-0">
                                        <p class="display-1 text--primary mb-0">
                                            {{totalUsers}}
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

                <v-row no-gutters class="ml-5 mt-6">

                    <!-- Total Courses -->
                    <v-col>
                        <v-hover v-slot="{ hover }">
                        <v-card
                        :elevation="hover ? 12 : 2"
                        max-width="290"
                        shaped
                        to="/admin/customers"
                        >
                        <v-card-text>
                            <v-row>
                                <v-col class="pt-0 pb-0">
                                    <p class="display-1 text--primary mb-0">
                                        0
                                    </p>
                                    <div class="mt-0 pt-0">Total Courses</div>
                                </v-col>
                                <v-col class="pb-0 pt-0 mt-2" style="text-align: center;">
                                    <v-icon x-large color="rgb(187, 162, 87)">mdi-book-open-page-variant</v-icon>
                                </v-col>
                            </v-row>


                        </v-card-text>
                        </v-card>
                        </v-hover>
                    </v-col>

                    <!-- Products Revenue -->
                    <v-col>
                        <v-hover v-slot="{ hover }">
                            <v-card
                            :elevation="hover ? 12 : 2"
                            max-width="290"
                            shaped
                            to="/collections/1/products"
                            >
                            <v-card-text>
                                <v-row>
                                    <v-col class="pt-0 pb-0">
                                        <p class="display-1 text--primary mb-0">
                                            $0.00
                                        </p>
                                        <div class="mt-0 pt-0">Products revenue</div>
                                    </v-col>
                                    <v-col class="pb-0 pt-0 mt-2" style="text-align: center;">
                                        <v-icon x-large color="rgb(187, 162, 87)">mdi-currency-usd</v-icon>
                                    </v-col>
                                </v-row>


                            </v-card-text>
                            </v-card>
                        </v-hover>
                    </v-col>

                    <!-- Courses Revenue -->
                    <v-col>
                        <v-hover v-slot="{ hover }">
                            <v-card
                            :elevation="hover ? 12 : 2"
                            max-width="290"
                            shaped
                            to="/collections/1/products"
                            >
                            <v-card-text>
                                <v-row>
                                    <v-col class="pt-0 pb-0">
                                        <p class="display-1 text--primary mb-0">
                                            $0.00
                                        </p>
                                        <div class="mt-0 pt-0">Courses revenue</div>
                                    </v-col>
                                    <v-col class="pb-0 pt-0 mt-2" style="text-align: center;">
                                        <v-icon x-large color="rgb(187, 162, 87)">mdi-currency-usd</v-icon>
                                    </v-col>
                                </v-row>


                            </v-card-text>
                            </v-card>
                        </v-hover>
                    </v-col>
                </v-row>
            </v-col>

            <!-- Customer Registrations -->
            <v-col
            cols="6"
            md="4"
            >
                <v-card
                class="mt-4 mx-auto"
                width="450px"
                >
                    <v-sheet
                    class="v-sheet--offset mx-auto"
                    color="rgb(187, 162, 87)"
                    elevation="12"
                    max-width="calc(100% - 32px)"
                    >
                    <v-sparkline
                        :labels="labels"
                        :value="value"
                        color="white"
                        line-width="2"
                        padding="16"
                    ></v-sparkline>
                    </v-sheet>

                    <v-card-text class="pt-0">
                    <div class="title font-weight-light mb-2">
                        Customer Registrations
                    </div>
                    <v-divider class="my-2"></v-divider>
                    <v-icon
                        class="mr-2"
                        small
                    >
                        mdi-clock
                    </v-icon>
                    <span class="caption grey--text font-weight-light">last registration 26 minutes ago</span>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Dashboard',
    data() {
        return {
            totalUsers: Number,
            isLoading: false,
            labels: [
                '12am',
                '3am',
                '6am',
                '9am',
                '12pm',
                '3pm',
                '6pm',
                '9pm',
            ],
            value: [
                200,
                675,
                410,
                390,
                310,
                460,
                250,
                240,
            ],
        }
    },
    methods: {
        getTotalUsers: async function () {
            this.isLoading = true;
            axios.get('api/v1.0/users')
            .then(res => {
                this.totalUsers = res.data.users.rows.length;
                this.isLoading = false;

            }).catch(err => console.log(err))
        },
    },
    created() {
        this.getTotalUsers();
    },
}
</script>

<style>

    .v-sheet--offset {
        top: -24px;
        position: relative;
    }

</style>