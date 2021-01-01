<template>
        <v-row no-gutters>
            <h1 style="text-align: center;"> Pigmentus Dashboard</h1>


                <v-row no-gutters>

                    <!-- New Customers -->
                        <v-hover v-slot="{ hover }">
                        <v-card
                        :elevation="hover ? 12 : 2"
                        width="260"
                        shaped
                        class="mx-auto my-12 mb-0 mt-5"
                        to="/admin/customers"
                        >
                        <v-card-text>
                            <v-row>
                                <v-col cols="8" class="pt-0 pb-0">
                                    <p class="display-1 text--primary mb-0">
                                        0
                                    </p>
                                    <div class="mt-0 pt-0">New Customers</div>
                                </v-col>
                                <v-col cols="4" class="pb-0 pt-0 mt-2" style="text-align: center;">
                                    <v-icon x-large color="rgb(187, 162, 87)">mdi-new-box</v-icon>
                                </v-col>
                            </v-row>


                        </v-card-text>
                        </v-card>
                        </v-hover>

                    <!-- Daily Revenue -->
                        <v-hover v-slot="{ hover }">
                            <v-card
                            :elevation="hover ? 12 : 2"
                            width="260"
                            shaped
                            class="mx-auto my-12 mb-0 mt-5"
                            to="/collections/1/products"
                            >
                            <v-card-text>
                                <v-row>
                                    <v-col cols="9" class="pt-0 pb-0">
                                        <p class="display-1 text--primary mb-0">
                                            $0.00
                                        </p>
                                        <div class="mt-0 pt-0">Daily revenue</div>
                                    </v-col>
                                    <v-col cols="3" class="pb-0 pt-0 mt-2" style="text-align: center;">
                                        <v-icon x-large color="rgb(187, 162, 87)">mdi-currency-usd</v-icon>
                                    </v-col>
                                </v-row>


                            </v-card-text>
                            </v-card>
                        </v-hover>

                    <!-- Total Customers -->
                        <v-hover v-slot="{ hover }">
                            <v-card
                            :elevation="hover ? 12 : 2"
                            width="260"
                            height="94"
                            shaped
                            class="mx-auto my-12 mb-0 mt-5"
                            to="/admin/customers"
                            :loading="isLoadingCustomers"
                            >
                            <template slot="progress">
                                <v-progress-linear color="rgb(187, 162, 87)" indeterminate></v-progress-linear>
                            </template>


                            <v-card-text v-if="!isLoadingCustomers">
                                <v-row>
                                    <v-col cols="9" class="pt-0 pb-0">
                                        <p class="display-1 text--primary mb-0">
                                            {{totalUsers}}
                                        </p>
                                        <div class="mt-0 pt-0">Total Customers</div>
                                    </v-col>
                                    <v-col cols="3" class="pb-0 pt-0 mt-2" style="text-align: center;">
                                        <v-icon x-large color="rgb(187, 162, 87)">mdi-account</v-icon>
                                    </v-col>
                                </v-row>


                            </v-card-text>
                            </v-card>
                        </v-hover>

                    <!-- Total Products -->
                    <v-hover v-slot="{ hover }">
                            <v-card
                            :elevation="hover ? 12 : 2"
                            width="260"
                            height="94"
                            shaped
                            class="mx-auto my-12 mb-0 mt-5"
                            to="/admin/inventory/products"
                            :loading="isLoadingProducts"
                            >
                            <template slot="progress">
                                <v-progress-linear color="rgb(187, 162, 87)" indeterminate></v-progress-linear>
                            </template>


                            <v-card-text v-if="!isLoadingProducts">
                                <v-row>
                                    <v-col cols="9" class="pt-0 pb-0">
                                        <p class="display-1 text--primary mb-0">
                                            {{totalProducts}}
                                        </p>
                                        <div class="mt-0 pt-0">Total Products</div>
                                    </v-col>
                                    <v-col cols="3" class="pb-0 pt-0 mt-2" style="text-align: center;">
                                        <v-icon x-large color="rgb(187, 162, 87)">mdi-shopping</v-icon>
                                    </v-col>
                                </v-row>


                            </v-card-text>
                            </v-card>
                        </v-hover>

                    <!-- Total Courses -->
                        <v-hover v-slot="{ hover }">
                        <v-card
                        :elevation="hover ? 12 : 2"
                        width="260"
                        shaped
                        class="mx-auto my-12 mb-0 mt-5"
                        to="/admin/customers"
                        >
                        <v-card-text>
                            <v-row>
                                <v-col cols="9" class="pt-0 pb-0">
                                    <p class="display-1 text--primary mb-0">
                                        0
                                    </p>
                                    <div class="mt-0 pt-0">Total Courses</div>
                                </v-col>
                                <v-col cols="3" class="pb-0 pt-0 mt-2" style="text-align: center;">
                                    <v-icon x-large color="rgb(187, 162, 87)">mdi-book-open-page-variant</v-icon>
                                </v-col>
                            </v-row>


                        </v-card-text>
                        </v-card>
                        </v-hover>

                    <!-- Total Students -->
                    <v-hover v-slot="{ hover }">
                    <v-card
                    :elevation="hover ? 12 : 2"
                    width="260"
                    shaped
                    class="mx-auto my-12 mb-0 mt-5"
                    to="/admin/customers"
                    >
                    <v-card-text>
                        <v-row>
                            <v-col cols="9" class="pt-0 pb-0">
                                <p class="display-1 text--primary mb-0">
                                    0
                                </p>
                                <div class="mt-0 pt-0">Total Students</div>
                            </v-col>
                            <v-col cols="3" class="pb-0 pt-0 mt-2" style="text-align: center;">
                                <v-icon x-large color="rgb(187, 162, 87)">mdi-school</v-icon>
                            </v-col>
                        </v-row>


                    </v-card-text>
                    </v-card>
                    </v-hover>

                    <!-- Total Revenue -->
                    <v-hover v-slot="{ hover }">
                    <v-card
                    :elevation="hover ? 12 : 2"
                    width="260"
                    shaped
                    class="mx-auto my-12 mb-0 mt-5"
                    to="/admin/customers"
                    >
                    <v-card-text>
                        <v-row>
                            <v-col cols="9" class="pt-0 pb-0">
                                <p class="display-1 text--primary mb-0">
                                    $0.00
                                </p>
                                <div class="mt-0 pt-0">Total Revenue</div>
                            </v-col>
                            <v-col cols="3" class="pb-0 pt-0 mt-2" style="text-align: center;">
                                <v-icon x-large color="rgb(187, 162, 87)">mdi-currency-usd</v-icon>
                            </v-col>
                        </v-row>


                    </v-card-text>
                    </v-card>
                    </v-hover>
                </v-row>



            <!-- Customer Registrations
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
            </v-col> -->
        </v-row>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Dashboard',
    data() {
        return {
            totalUsers: 0,
            totalProducts: 0,
            isLoadingCustomers: false,
            isLoadingProducts: false,
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
            this.isLoadingCustomers = true;
            axios.get('api/v1.0/users')
            .then(res => {
                this.totalUsers = res.data.users.rows.length;
                this.isLoadingCustomers = false;

            }).catch(err => console.log(err))
        },
        getTotalProducts: async function () {
            this.isLoadingProducts = true;
            axios.get('api/v1.0/products/inventory')
                .then(res => {
                    this.totalProducts = res.data.inventory.rows.length;
                    this.isLoadingProducts = false;
                }).catch(err => console.log(err))
        }
    },
    created() {
        this.getTotalUsers();
        this.getTotalProducts();
    },
    mounted () {
        console.log(this.$vuetify.breakpoint.width)
    }
}
</script>

<style>

    .v-sheet--offset {
        top: -24px;
        position: relative;
    }

</style>