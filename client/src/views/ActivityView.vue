<template>

    <v-card class="mx-auto" tile>
        <v-img height="200" src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"></v-img>
            <v-row style="margin:2.5%;position:absolute; top: 130px">
            <v-list-item>
                <v-list-item-avatar size="100">
                <img
                    src="https://cdn.vuetifyjs.com/images/john.png"
                    alt="John"
                >
                </v-list-item-avatar>
                <v-list-item-content>
                <v-list-item-title class="title" style="margin-top:20px;">{{$store.state.user.name}} {{$store.state.user.lastName}}</v-list-item-title>
                <v-list-item-subtitle> email: {{$store.state.user.email}}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-col >
            <v-row>
            <v-tabs
                color="rgb(187, 162, 87)"
                right
            >

                <v-tab :to="`/profile/${$store.state.user.id}/account`">Account</v-tab>

                <v-tab :to="`/profile/${$store.state.user.id}/messages`">
                <v-badge
                    color="red"
                    content="6"
                >
                    Messages
                </v-badge>
                </v-tab>
                <v-tab :to="`/profile/${$store.state.user.id}/activity`" >Activity</v-tab>

                <v-tab-item
                >
                <v-divider class="mt-0 mb-0 pb-0"></v-divider>
                <v-container class="mt-0 pt-0">
                    <v-row>
                    <v-tabs vertical color="rgb(187, 162, 87)">
                        <v-tab>
                        <v-icon left>
                            mdi-account
                        </v-icon>
                        Purchase History
                        </v-tab>

                        <v-tab>
                        <v-icon left>
                            mdi-mail
                        </v-icon>
                        Watchlist
                        </v-tab>

                        <v-tab-item>
                        <v-container>
                            <p>
                                Compra Compra.
                            </p>
                        </v-container>
                        </v-tab-item>

                        <v-tab-item>
                        <v-container>
                            <p>
                                Ay bendito la lista de deseos.
                            </p>
                        </v-container>
                        </v-tab-item>

                    </v-tabs>
                    </v-row>
                </v-container>
                </v-tab-item>
            </v-tabs>
            </v-row>
        </v-col>
        </v-row>


    </v-card>

</template>
<script>
// @ is an alias to /src
import Activity from '@/components/Activity.vue'
import Profile from '@/components/Profile.vue'

import {mapState} from 'vuex'

export default {
    name: 'ActivityView',
    components: {
        Activity,
        Profile
    },
    data: () => ({
        items: [
            { title: 'Account', icon: 'mdi-account' },
            { title: 'Purchase History', icon: 'mdi-history' },
            { title: 'Wishlist', icon: 'mdi-view-list' },
            { title: 'Settings', icon: 'mdi-view-list' },
            ],
            links: [{name: 'Account', to: '/account'}, {name: 'Purchase History', to: '/purchase-history'}, {name: 'Wishlist' }, {name: 'Settings' }],
            mini: true,
    }),
}
</script>
