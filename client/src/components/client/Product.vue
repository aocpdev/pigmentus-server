<template>
  <div class="row" no-gutters width="100vh">
    <v-container>
      <div class="row">
        <div class="col-md-5 col-sm-5 col-xs-12">
          <v-carousel height="400" hide-delimiters :show-arrows="false">
            <v-carousel-item
              aspect-ratio="1.4"
              contain
              v-for="(product,i) in product"
              :key="i"
              :src="product.image"
            >
            </v-carousel-item>

          </v-carousel>
        </div>
        <div class="col-md-7 col-sm-7 col-xs-12" v-for="(product,i) in product"
              :key="i">

          <v-btn :to="breadcrums.to"
          class="ml-2"
          color="white"
          text
          small
          >

            <v-icon small left style="color: rgb(187, 162, 87)">
              mdi-arrow-left
            </v-icon>
            {{breadcrums.text}}
          </v-btn>


          <div class="pl-6">
            <p class="display-1 mb-0">{{product.name}}</p>
            <v-card-actions class="pa-0">
              <p class="headline font-weight-light pt-3">${{product.customerPrice}} </p>
              <v-spacer></v-spacer>
            </v-card-actions>
            <p class="subtitle-1 font-weight-thin">
              {{product.description}}
            </p>

            <p class="title">ITEMS</p>

            <v-text-field
                outlined
                style="width:100px"
                :value="1"
                dense
            ></v-text-field>
            <v-btn class="primary white--text" outlined tile dense @click="addToCart(cart)"><v-icon>mdi-cart</v-icon> ADD TO CART</v-btn>
            <v-btn class="ml-4" outlined tile>ADD TO WISHLIST</v-btn>

          </div>


      </div>
      </div>
      <div class="row">
        <div class="col-sm-12 col-xs-12 col-md-12">

          <v-card-text
            class="pa-0 pt-4"
            tile
            outlined
          >
            <p class="subtitle-1 font-weight-light pt-3 text-center">YOU MIGHT ALSO LIKE</p>
            <v-divider></v-divider>
            <div class="row text-center">
              <div class="col-md-2 col-sm-4 col-xs-12 text-center">
                <v-hover
                  v-slot:default="{ hover }"
                  open-delay="200"
                >
                  <v-card
                    :elevation="hover ? 16 : 2"
                  >
                    <v-img
                      class="white--text align-end"
                      height="200px"

                    >
                      <v-card-title>Bags & Purses </v-card-title>
                    </v-img>

                    <v-card-text class="text--primary text-center">
                      <div>Upto 60% + Extra 10%</div>
                      <div>Baggit, Zara, Fossil</div>
                    </v-card-text>

                    <div class="text-center">
                      <v-btn
                        class="ma-2"
                        outlined
                        color="info"
                      >
                        Explore
                      </v-btn>
                    </div>
                  </v-card>
                </v-hover>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-12 text-center" >
                <v-hover
                  v-slot:default="{ hover }"
                  open-delay="200"
                >
                  <v-card
                    :elevation="hover ? 16 : 2"
                  >
                    <v-img
                      class="white--text align-end"
                      height="200px"

                    >
                      <v-card-title>T-Shirt </v-card-title>
                    </v-img>

                    <v-card-text class="text--primary text-center">
                      <div>Upto 50%</div>
                      <div>Zara, Selected, Celio</div>
                    </v-card-text>

                    <div class="text-center">
                      <v-btn
                        class="ma-2"
                        outlined
                        color="info"
                      >
                        Explore
                      </v-btn>
                    </div>
                  </v-card>
                </v-hover>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-12 text-center" >
                <v-hover
                  v-slot:default="{ hover }"
                  open-delay="200"
                >
                  <v-card
                    :elevation="hover ? 16 : 2"
                  >
                    <v-img
                      class="white--text align-end"
                      height="200px"

                    >
                      <v-card-title>Jeans </v-card-title>
                    </v-img>

                    <v-card-text class="text--primary text-center">
                      <div>Upto 60% + Extra 10%</div>
                      <div>Jack & Jones, Levis</div>
                    </v-card-text>

                    <div class="text-center">
                      <v-btn
                        class="ma-2"
                        outlined
                        color="info"
                      >
                        Explore
                      </v-btn>
                    </div>
                  </v-card>
                </v-hover>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-12 text-center" >
                <v-hover
                  v-slot:default="{ hover }"
                  open-delay="200"
                >
                  <v-card
                    :elevation="hover ? 16 : 2"
                  >
                    <v-img
                      class="white--text align-end"
                      height="200px"

                    >
                      <v-card-title>Shirts </v-card-title>
                    </v-img>

                    <v-card-text class="text--primary text-center">
                      <div>Upto 60% + Extra 10%</div>
                      <div>Nike, Adidas, Puma</div>
                    </v-card-text>

                    <div class="text-center">
                      <v-btn
                        class="ma-2"
                        outlined
                        color="info"
                      >
                        Explore
                      </v-btn>
                    </div>
                  </v-card>
                </v-hover>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-12 text-center" >
                <v-hover
                  v-slot:default="{ hover }"
                  open-delay="200"
                >
                  <v-card
                    :elevation="hover ? 16 : 2"
                  >
                    <v-img
                      class="white--text align-end"
                      height="200px"

                    >
                      <v-card-title>Shoes </v-card-title>
                    </v-img>

                    <v-card-text class="text--primary text-center">
                      <div>Upto 60% + Extra 10%</div>
                      <div>Nike, Adidas, Puma</div>
                    </v-card-text>

                    <div class="text-center">
                      <v-btn
                        class="ma-2"
                        outlined
                        color="info"
                      >
                        Explore
                      </v-btn>
                    </div>
                  </v-card>
                </v-hover>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-12 text-center" >
                <v-hover
                  v-slot:default="{ hover }"
                  open-delay="200"
                >
                  <v-card
                    :elevation="hover ? 16 : 2"
                  >
                    <v-img
                      class="white--text align-end"
                      height="200px"

                    >
                      <v-card-title>Jackets </v-card-title>
                    </v-img>

                    <v-card-text class="text--primary text-center">
                      <div>Upto 60% + Extra 10%</div>
                      <div>Nike, Adidas, Puma</div>
                    </v-card-text>

                    <div class="text-center">
                      <v-btn
                        class="ma-2"
                        outlined
                        color="info"
                      >
                        Explore
                      </v-btn>
                    </div>
                  </v-card>
                </v-hover>
              </div>
            </div>
          </v-card-text>
        </div>
      </div>
    </v-container>
  </div>
</template>
<script>
    import axios from 'axios'
    import BottomNavigation from '../BottomNavigation.vue'
    import {mapState} from 'vuex'
    export default {
        components: { 'bottom': BottomNavigation },
        props: {
        productId: {
            type:  String
          }
        },
        name: 'Product',
        data: () => ({
            rating:4.5,
            product: [],
            breadcrums: {},
            item: 5,
            items: [
                {
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                    title: 'Lorem ipsum dolor?',
                    subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Tincidunt arcu non sodales neque sodales ut etiam. Lectus arcu bibendum at varius vel pharetra. Morbi tristique senectus et netus et malesuada.\n" +
                        "\n",
                },

            ],
            cart: {},
        }),
        methods: {
          getProduct: async function (productId) {
            let pathArray = this.$route.path.split("/")
            pathArray.shift()
            let collectionId = pathArray[1];
            axios.get('api/v1.0/collections/collection', {params: { id: collectionId }}).then(res1 => {
              this.breadcrums =
                {
                  text: 'Back to ' + res1.data.collection.rows[0].name,
                  disabled: false,
                  exact: true,
                  to: '/shop/' + res1.data.collection.rows[0].id
                }


            }).catch(err => console.log(err))
            axios.get('api/v1.0/products/prod', { params: { id: productId } })
                .then(res => {
                    this.product = res.data.product.rows;
                    this.cart.productId = this.product[0].id;
                    this.cart.userId = this.$store.state.user.id;
                }).catch(err => console.log(err))
          },

          addToCart: async function (cart) {
            axios.post('api/v1.0/cart', cart).then(res => {
                this.getCart(this.$store.state.user.id);
            }).catch(err => console.log(err))
          },
          getCart: async function (userId) {
            axios.get('api/v1.0/cart', { params: { userId: userId} }).then(res => {
              this.$store.state.cart = res.data.cart.rows;
            }).catch(err => console.log(err))
          }
        },

        created() {
        this.getProduct(this.productId, this.collectionsId);
    },
    }
</script>
