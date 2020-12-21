<template>
    <v-container fluid>

    <v-card class="mx-auto" tile>
    <v-img height="200" src="https://www.missbrowbeauty.com/wp-content/uploads/2020/04/eyelash.png"></v-img>

    <v-row>
        <v-col>
            <h3 style="text-align: end" class="pr-2"><b><i>Eyelashes Products</i></b></h3>
            <v-divider class="mt-0 mb-0 pb-0"></v-divider>
            <v-tabs vertical color="rgb(187, 162, 87)">
            <v-tab @click="$router.push(`/profile/${$store.state.user.id}/account/personal`)">
                <v-icon left>
                    mdi-needle
                </v-icon>
                Needles
            </v-tab>
            <v-tab @click="$router.push(`/shop/eyelashes-products/inks`)">
                <v-icon left>
                    mdi-palette
                </v-icon>
                Colors
            </v-tab>

            <v-tab-item>

                <router-view></router-view>
            </v-tab-item>


            <v-tab-item>
                <router-view></router-view>
            </v-tab-item>

        </v-tabs>
        </v-col>

    </v-row>



    </v-card>

    </v-container>


</template>

<script>
export default {
    name: 'EyelashesProducts',
    data() {
        return {
        admins: [
        ['Management', 'mdi-account-multiple-outline'],
        ['Settings', 'mdi-cog-outline'],
      ],
      cruds: [
        ['Create', 'mdi-plus-outline'],
        ['Read', 'mdi-file-outline'],
        ['Update', 'mdi-update'],
        ['Delete', 'mdi-delete'],
      ],
        }
    },
}
</script>

<style>
    .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .5;
    position: absolute;
    width: 100%;
}
</style>