<template>

    <v-row min-height="300px">
    <v-tabs vertical color="rgb(187, 162, 87)">
        <v-tab>
        <v-icon left cla>
            mdi-account
        </v-icon>
        Option 1
        </v-tab>
        <v-tab>
        <v-icon left>
            mdi-lock
        </v-icon>
        Option 2
        </v-tab>
        <v-tab>
        <v-icon left>
            mdi-access-point
        </v-icon>
        Option 3
        </v-tab>

        <v-tab-item>

        <v-container>
                <vue-core-video-player src="https://www.youtube.com/watch?v=bS5m8oTQQT8"></vue-core-video-player>
        </v-container>
        </v-tab-item>
        <v-tab-item>
        <v-container>
            <iframe src="https://iframe.dacast.com/vod/e01769c6-6250-e4d9-d65c-30ec7785bd98/13a49ad4-7a75-46a6-d059-27278b767277" width="560" height="315" frameborder="0" scrolling="no" allow="autoplay" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>

        </v-container>
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
// @ is an alias to /src
import {mapState} from 'vuex'
import router from '../../router/index'
import VueCoreVideoPlayer from '../../../node_modules/vue-core-video-player';

export default {
    name: 'Activity',
    data: () => ({

    }),
}
</script>
