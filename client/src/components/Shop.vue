<template>
  <v-row no-gutters width="100vh" class="ml-0 mr-0 pr-0 pl-0 pt-0">
    <v-tabs width="100vh" background-color="rgb(252, 249, 237)" light color="rgb(187, 162, 87)" v-model="activeTab" absolute >
      <v-tab v-for="tab of tabs" :key="tab.id" :to="tab.route">
          {{ tab.name }}
      </v-tab>



      <v-tab-item
        v-for="tab of tabs" :key="tab.id" :value="tab.route"
        :transition="false" :reverse-transition="false"
      >

          <router-view></router-view>


      </v-tab-item>


    </v-tabs>
  </v-row>

</template>

<script>
export default {
    name: 'Shop',
    data() {
        return {
          activeTab: '/shop/categories',
          tabs: [
            { id: 1, name: "Alls", route: '/shop/categories' },
            { id: 2, name: "Eyelashes", route: '/shop/eyelashes-products' },
            { id: 3, name: "Eyebrows", route: '/shop/eyebrows-products' },
            { id: 4, name: "Lips", route: '/shop/lips-products' },
            { id: 5, name: "Courses kits", route: '/shop/kits-products' },
          ]
        }
    },
}
</script>

<style>

  .router-anim-enter-active {
    animation: coming .5s;
    animation-delay: .3s;
    opacity: 0;
  }

  .router-anim-leave-active {
    animation: going .5s;
  }

  @keyframes going {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50px);
      opacity: 0;
    }
  }

  @keyframes coming {
    from {
      transform: translateX(-50px);
      opacity: 0;
    }
    to {
      transform: translateX(0);

    }
  }
</style>