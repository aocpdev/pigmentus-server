<template>
    <v-row no-gutters>
    <h1 style="text-align: center;"> Online Products</h1>
    <v-col  cols="12" class="pl-10 pr-10">
        <v-card>
            <v-card-title>
                All Products
                <v-divider
                class="mx-4"
                inset
                vertical
                ></v-divider>
                <v-spacer></v-spacer>
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details
                    color="rgb(187, 162, 87)"
                ></v-text-field>
                <v-spacer></v-spacer>

                <!-- Edit and Add Product Dialog -->
                <v-dialog
                v-model="dialog"
                persistent
                max-width="600px"
                transition="dialog-bottom-transition"
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                        color="rgb(187, 162, 87)"
                        dark
                        class="mb-2 mt-4"
                        v-bind="attrs"
                        v-on="on"
                        >
                        New Product
                        </v-btn>
                    </template>
                    <v-card>
                        <v-card-title style="background-color: black">
                        <span class="headline" style="color: rgb(187, 162, 87)">{{ formTitle }}</span>
                        </v-card-title>

                        <v-card-text>
                        <v-container>
                            <v-row>
                            <v-col
                                cols="12"
                                sm="6"
                                md="6"
                            >
                                <v-text-field
                                v-model="editedItem.name"
                                label="Product name"
                                color="rgb(187, 162, 87)"
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                sm="6"
                                md="6"
                                class="mt-4"
                            >
                                <v-select
                                label="Collections"
                                dense
                                v-model="editedItem.collectionId"
                                :items="collections"
                                item-text="name"
                                item-value="id"
                                color="rgb(187, 162, 87)"
                                >
                                </v-select>

                            </v-col>

                            <v-col
                                cols="12"
                                sm="4"
                                md="4"
                            >
                                <v-currency-field
                                label="Customer price"
                                prefix="$"
                                color="rgb(187, 162, 87)"
                                v-model="editedItem.customerPrice"/>

                                <!-- <v-text-field
                                v-model="editedItem.customerPrice"
                                label="Customer price"
                                prefix="$"
                                color="rgb(187, 162, 87)"
                                ></v-text-field> -->
                            </v-col>
                            <v-col
                                cols="12"
                                sm="4"
                                md="4"
                            >
                                <v-text-field
                                v-model="editedItem.purchasePrice"
                                label="Purchase price"
                                prefix="$"
                                color="rgb(187, 162, 87)"
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                sm="4"
                                md="4"
                            >
                                <v-text-field
                                v-model="editedItem.weight"
                                label="Weight"
                                color="rgb(187, 162, 87)"
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                sm="4"
                                md="4"
                            >
                                <v-text-field
                                v-model="editedItem.inStock"
                                label="In stock"
                                color="rgb(187, 162, 87)"
                                ></v-text-field>
                            </v-col>

                            <v-col cols="12">
                                <v-textarea
                                rows="3"
                                no-resize
                                v-model="editedItem.image"
                                label="Image URL"
                                color="rgb(187, 162, 87)"
                                ></v-textarea>
                            </v-col>

                            <v-col
                                cols="12"
                            >
                                <v-textarea
                                label="Desription"
                                v-model="editedItem.description"
                                color="rgb(187, 162, 87)"
                                ></v-textarea>
                            </v-col>



                            </v-row>
                        </v-container>
                        </v-card-text>

                        <v-card-actions>
                            <v-switch
                            v-model="editedItem.enabled"
                            label="Enabled"
                            color="success"
                            hide-details
                            ></v-switch>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="blue darken-1"
                            text
                            @click="close"
                        >
                            Cancel
                        </v-btn>
                        <v-btn
                            color="blue darken-1"
                            text
                            @click="save(editedItem)"
                        >
                            Save
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-card-title>
            <v-data-table
        :headers="headers"
        :items="inventory"
        item-key="name"
        :search="search"
        class="elevation-1 mb-2"
        :loading="isLoading"
        loading-text="Loading... Please wait"
        show-expand
        single-expand
        :expanded.sync="expanded"
        >
            <!-- Loading Linear -->
            <template slot="progress">
                <v-progress-linear color="rgb(187, 162, 87)" indeterminate></v-progress-linear>
            </template>

            <template v-slot:top>
            <v-toolbar
                flat
            >

                <!-- Image Dialog -->
                <v-dialog
                v-model="imageDialog"
                max-width="500px"
                transition="dialog-bottom-transition"
                >
                    <v-card>
                        <v-img v-bind:src="imageURL" :alt="productName" class="" style="width: 500px; height: 500px;">
                            <v-card class="imageNav" elevation="2" tile style="background-color: rgb(187, 162, 87)">
                                <v-card-title class="pt-2 pb-2">
                                <span class="headline textShadow" style="color: #000000;">{{ productName }}</span>
                                <v-spacer></v-spacer>
                                <v-btn icon color="red" @click="closeImageDialog">
                                    <v-icon class="textShadow">mdi-close</v-icon>
                                </v-btn>
                                </v-card-title>
                            </v-card>
                        </v-img>
                    </v-card>
                </v-dialog>

                <!-- Delete Dialog -->
                <v-dialog v-model="dialogDelete" max-width="500px">
                    <v-card>
                        <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                        <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                        <v-spacer></v-spacer>
                        </v-card-actions>
                    </v-card>
                </v-dialog>

            </v-toolbar>
            </template>

            <!-- Image Column -->
            <template v-slot:item.image="{ item }">
                <div class="pb-2 pt-2">
                    <v-img @click="openImageDialog(item)" v-bind:src="item.image" :alt="item.name" height="60px" width="60px" class="image" ></v-img>
                </div>
            </template>

            <!-- Purchase Price Column -->
            <template v-slot:item.purchasePrice="{ item }">
                <div>
                    $ {{item.purchasePrice}}
                </div>
            </template>

            <!-- Customer Price Column -->
            <template v-slot:item.customerPrice="{ item }">
                <div>
                    $ {{item.customerPrice}}
                </div>
            </template>

            <!-- Enabled Column -->
            <template v-slot:item.enabled="{ item }">
                    <v-icon v-if="item.enabled" style="color: green">
                        mdi-check
                    </v-icon>
                    <v-icon v-if="!item.enabled" style="color: red">
                        mdi-close
                    </v-icon>
            </template>

            <!-- Actions Column -->
            <template v-slot:item.actions="{ item }">
                <v-icon
                    small
                    class="mr-2"
                    color="orange"
                    @click="editItem(item)"
                >
                    mdi-pencil
                </v-icon>
                <v-icon
                    color="red"
                    small
                    @click="deleteItem(item)"
                >
                    mdi-delete
                </v-icon>
            </template>

            <!-- Description Expansion Panel -->
            <template v-slot:expanded-item="{ headers, item }">
            <td :colspan="headers.length">
                <v-row no-gutters>
                    <v-col
                        cols="12"
                        sm="4"
                    >
                        <b>Created date: </b> {{new Date(item.dateCreated).toLocaleString()}}
                    </v-col>
                    <v-col
                        cols="12"
                        sm="4"
                    >
                        <b>Modified date: </b> <span v-if="item.dateModified !== null " > {{new Date(item.dateModified).toLocaleString()}} </span>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="4"
                    >

                    </v-col>
                </v-row>
                <b>Description: </b> {{ item.description }}
            </td>
            </template>

        </v-data-table>
        </v-card>

    </v-col>

    <!-- Snackbar to represent added product successfully -->
    <template>
        <v-snackbar
        v-model="snackbar"
        :timeout="timeout"
        >
        {{ text }}

        <template v-slot:action="{ attrs }">
            <v-btn
            color="rgb(187, 162, 87)"
            text
            v-bind="attrs"
            @click="snackbar = false"
            >
            Close
            </v-btn>
        </template>
        </v-snackbar>
    </template>
</v-row>
</template>

<script>
import axios from 'axios'
import router from '../../router/index'
import xml2js from '../../../../node_modules/xml2js'
export default {
    name: "AdminProducts",
    data() {
        return {
            search: '',
            isLoading: false,
            expanded: [],
            headers: [
            { text: 'Product name', align: 'start', value: 'name' },
            { text: 'Collection', value: 'collectionName' },
            { text: 'Enabled', value: 'enabled', width:"125px" },
            { text: 'Customer price ($)', value: 'customerPrice', width:"160px" },
            { text: 'Purchase price ($)', value: 'purchasePrice', width:"150px" },
            {text: 'Weight oz', value: 'weight', width: "110px"},
            { text: 'In stock', value: 'inStock', width:"100px" },
            { text: 'Image', value: 'image', sortable: false, width:"150px" },
            { text: 'Actions', value: 'actions', sortable: false, width:"125px" },
            { text: '', value: 'data-table-expand' },
            ],
            inventory: [],
            collections: [],
            dialog: false,
            dialogDelete: false,
            imageDialog: false,
            editedIndex: -1,
            timeout: 2000,
            snackbar: false,
            text: '',
            editedItem: {
                id: 0,
                name: '',
                description: '',
                image: '',
                customerPrice: 0,
                collectionId: 0,
                dateCreated: null,
                dateModified: null,
                enabled: false,
                inStock: 0,
                purchasePrice: 0,
                weight: 0,
            },
            defaultItem: {
                id: 0,
                name: '',
                description: '',
                image: '',
                customerPrice: 0,
                collectionId: 0,
                dateCreated: null,
                dateModified: null,
                enabled: false,
                inStock: 0,
                purchasePrice: 0,
                weight: 0,
            },
            imageURL: '',
            productName: '',
        }
    },
    computed: {
        formTitle () {
            return this.editedIndex === -1 ? 'New Product' : 'Edit Product'
        },
    },

    watch: {
        dialog (val) {
            val || this.close()
        },
        dialogDelete (val) {
            val || this.closeDelete()
        },
        imageDialog (val) {
            val || this.closeImageDialog()
        },
    },
    methods: {
        getCollections: async function () {
            let collections = await axios.get('api/v1.0/collections');
            return collections;
        },
        getInventory: async function () {
            this.isLoading = true;
            this.getCollections().then(res => {
                res.data.collections.rows.forEach(item => {
                    if (item.id !== 1){
                        this.collections.push(item)
                    }
                })
                axios.get('api/v1.0/products/inventory')
                .then(res => {
                    this.inventory = res.data.inventory.rows;
                    this.isLoading = false;
                }).catch(err => console.log(err))
            });

        },
        postProduct: async function (product, option) {
            axios.post('api/v1.0/products', product).then(res => {
                console.log(product);
                this.getInventory();
                this.snackbar = true;
                this.text = option + ' Successfully'
            }).catch(err => console.log(err))
        },
        editItem (item) {
        this.editedIndex = this.inventory.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
        },

        deleteItem (item) {
            this.editedIndex = this.inventory.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialogDelete = true
        },

        deleteItemConfirm () {
            this.inventory.splice(this.editedIndex, 1)
            this.closeDelete()
        },

        close () {
            this.dialog = false
            this.$nextTick(() => {
            this.editedItem = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
            })
        },

        closeDelete () {
            this.dialogDelete = false
            this.$nextTick(() => {
            this.editedItem = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
            })
        },

        save (item) {
            if (this.editedIndex > -1) {


            } else {
                let product = {
                    name: item.name,
                    description: item.description,
                    image: item.image,
                    customerPrice: item.customerPrice,
                    collectionId: item.collectionId,
                    enabled: item.enabled,
                    inStock: item.inStock,
                    purchasePrice: item.purchasePrice,
                    weight: item.weight

                }
                axios.post('api/v1.0/products', product).then(res => {
                    this.getInventory();
                    this.snackbar = true;
                    console.log(res);
                    this.text = res.data.message;
                }).catch(err => console.log(err))
            }
            this.close()
        },
        openImageDialog (item) {
            this.imageDialog = true;
            this.imageURL = item.image;
            this.productName = item.name;
        },
        closeImageDialog () {
            this.imageDialog = false;
        }
    },
    created() {
        this.getInventory();
        let builder = new xml2js.Builder();
        let mono = {
        RateV4Request: {
            $: {
                "USERID": "890PIGME2253"
            },
            Revision: 2,
            Package: {
                $: {
                    "ID": 0
                },
                Service: "PRIORITY",
                ZipOrigination: "00777",
                ZipDestination: "00778",
                Pounds: "0",
                Ounces: "10",
                Container: "",
                Width: "",
                Length: "",
                Height: "",
                Girth: "",
                Machinable: "TRUE",

            },

        }

    };
    let monito = builder.buildObject(mono);
    axios.post('https://secure.shippingapis.com/ShippingAPI.dll?API=RateV4&XML=', null, { params: {XML: monito} } )
    .then(re => {
        console.log(re)
    })
    .catch(error => {
        console.error(error)
    })
    },
}
</script>
<style>
    .image {
        border: 1px solid #ddd;
        border-radius: 4px;
        width: 150px;
        cursor: pointer;
    }
    .image:hover {
        box-shadow: 0 0 2px 1px rgb(187, 162, 87,  0.5);
    }
    .imageNav {
        opacity: 0.6;
        width: 100vh;
        height: 45px;

    }
    .textShadow {
        text-shadow: 1px 1px rgb(187, 162, 87);

    }

</style>