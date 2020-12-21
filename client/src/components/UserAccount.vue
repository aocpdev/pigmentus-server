<template>
        <v-row>
            <v-tabs vertical color="rgb(187, 162, 87)">
                <v-tab @click="$router.push(`/profile/${$store.state.user.id}/account/personal`)">
                    <v-icon left>
                        mdi-account
                    </v-icon>
                    Personal Info
                </v-tab>
                <v-tab>
                    <v-icon left class="ml-n5">
                        mdi-mail
                    </v-icon>
                    Billing Info
                </v-tab>

                <v-tab-item>

                    <router-view></router-view>
                </v-tab-item>


                <v-tab-item>
                <v-container>
                    <p>
                        Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
                    </p>
                </v-container>
                </v-tab-item>

            </v-tabs>
        </v-row>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: 'UserAccount',

        data: () => ({

        }),
    }
</script>