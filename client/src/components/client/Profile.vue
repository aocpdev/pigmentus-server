<template>
    <v-container>
        <v-card class="mx-auto" tile>
        <v-img height="200" src="https://img.bekiabelleza.com/articulos/portada/86000/86345.jpg"></v-img>
        <v-row style="margin:2.5%;position:absolute; top: 130px">
            <v-col>
                <v-list-item>
                    <v-list-item-avatar size="100">
                    <img
                        src="https://i1.sndcdn.com/avatars-000143584345-3qxowr-t500x500.jpg"
                        alt="John"
                    >
                    </v-list-item-avatar>
                    <v-list-item-content>
                    <v-list-item-title class="title" style="margin-top:20px;">{{$store.state.user.name}} {{$store.state.user.lastName}}</v-list-item-title>
                    <v-list-item-subtitle> email | {{$store.state.user.email}}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-col>
        </v-row>

        <v-row class="pt-8 mt-8">
            <v-col>
                <v-tabs
                    color="rgb(187, 162, 87)"
                    right
                >

                    <v-tab @click="$router.push(`/profile/${$store.state.user.id}/account/personal`)">Account</v-tab>

                    <v-tab @click="$router.push(`/profile/${$store.state.user.id}/messages`)">

                    <v-badge
                        color="red"
                        content="6"
                    >
                        Messages
                    </v-badge>
                    </v-tab>
                    <v-tab @click="$router.push(`/profile/${$store.state.user.id}/activity`)">Activity</v-tab>

                    <v-tab-item
                        v-for="i in 3"
                        :key="i"
                    >
                    <v-divider class="mt-0 mb-0 pb-0"></v-divider>
                        <v-container class="mt-0 pt-0">
                            <transition>
                                <keep-alive>
                                    <router-view></router-view>
                                </keep-alive>
                            </transition>
                        </v-container>
                    </v-tab-item>

                </v-tabs>
            </v-col>
        </v-row>


    </v-card>
    </v-container>


</template>

<script>
    import Profile from '@/components/client/Profile.vue'
    import {mapState} from 'vuex'

    export default {
        name: 'Profile',
        components: {
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
