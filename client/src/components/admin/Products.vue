<template>
    <v-row no-gutters>
    <h1 style="text-align: center;"> Online Products</h1>
    <v-col  cols="12" class="pl-10 pr-10">
        <v-data-table
        :headers="headers"
        :items="inventory"
        :search="search"
        class="elevation-1"
        >
            <template v-slot:top>
            <v-toolbar
                flat
            >
                <v-toolbar-title>My online products</v-toolbar-title>
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
                <v-dialog
                v-model="dialog"
                persistent
                max-width="500px"
                transition="dialog-bottom-transition"
                >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                    color="rgb(187, 162, 87)"
                    dark
                    class="mb-2"
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
                            md="4"
                        >
                            <v-text-field
                            v-model="editedItem.name"
                            label="Product name"
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                            <v-text-field
                            v-model="editedItem.description"
                            label="Description"
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                            <v-text-field
                            v-model="editedItem.image"
                            label="Image URL"
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                            <v-text-field
                            v-model="editedItem.price"
                            label="Price"
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                            <v-text-field
                            v-model="editedItem.inStock"
                            label="In stock"
                            ></v-text-field>
                        </v-col>
                        </v-row>
                    </v-container>
                    </v-card-text>

                    <v-card-actions>
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
                        @click="save"
                    >
                        Save
                    </v-btn>
                    </v-card-actions>
                </v-card>
                </v-dialog>
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
            <template v-slot:item.image="{ item }">
                    <div class="p-2">
                    <v-img @click="editItem(item)" v-bind:src="item.image" :alt="item.name" height="60px" width="60px" class="image" ></v-img>
                    </div>
                </template>
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

        </v-data-table>
    </v-col>
</v-row>
</template>

<script>
import axios from 'axios'
export default {
    name: "AdminProducts",
    data() {
        return {
            search: '',
            headers: [
            {
                text: 'Name',
                align: 'start',
                value: 'name',
            },
            { text: 'Description', value: 'description' },
            { text: 'In stock', value: 'inStock' },
            { text: 'Image', value: 'image', sortable: false },
            { text: 'Price', value: 'price' },
            { text: 'Actions', value: 'actions', sortable: false },
            ],
            inventory: [],
            dialog: false,
            dialogDelete: false,
            editedIndex: -1,
            editedItem: {
                name: '',
                description: '',
                inStock: 0,
                image: '',
                price: 0,
            },
            defaultItem: {
                name: '',
                description: '',
                inStock: 0,
                image: '',
                price: 0,
            },
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
    },
    methods: {
        getInventory: async function () {
            axios.get('api/v1.0/products/inventory')
            .then(res => {
                res.data.inventory.rows.forEach( item => {
                    let inventoryObject = {
                        name: item.name,
                        description: item.description,
                        image: item.image,
                        price: item.price,
                        inStock: item.in_stock
                    }
                    this.inventory.push(inventoryObject);
                });
                console.log(this.inventory);
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

        save () {
            if (this.editedIndex > -1) {
            Object.assign(this.inventory[this.editedIndex], this.editedItem)
            } else {
            this.inventory.push(this.editedItem)
            }
            this.close()
        },
    },
    created() {
        this.getInventory();
    },
}
</script>
<style>
    .image {
        border: 1px solid #ddd;
        border-radius: 4px;
        padding: 5px;
        width: 150px;
    }
    .image:hover {
        box-shadow: 0 0 2px 1px rgb(187, 162, 87,  0.5);
    }
</style>