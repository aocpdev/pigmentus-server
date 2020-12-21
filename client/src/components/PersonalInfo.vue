<template>
    <v-container>
        <div class="title"><h3>Personal information</h3></div>
            <v-divider></v-divider>
            <v-row class="ml-5">
                <v-col><span><b>Name</b></span></v-col>
                <v-col><span>{{$store.state.user.name}}</span></v-col>
                <v-col>
                    <v-btn
                    text
                    color="primary"
                    >
                    Edit
                    </v-btn>
                </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row class="ml-5">
                <v-col><span><b>Last Name</b></span></v-col>
                <v-col><span>{{$store.state.user.lastName}}</span></v-col>
                <v-col>
                    <v-btn
                    text
                    color="primary"
                    >
                    Edit
                    </v-btn>
                </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row class="ml-5">
                <v-col><span><b>Email</b></span></v-col>
                <v-col><span>{{$store.state.user.email}}</span></v-col>
                <v-col>
                    <v-btn
                    text
                    color="primary"
                    >
                    Edit
                    </v-btn>
                </v-col>
            </v-row>
    </v-container>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: 'PersonalInfo',

        data: () => ({

        }),
    }
</script>