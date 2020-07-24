import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import '@fortawesome/fontawesome-free/css/all.css';


import 'vuetify/dist/vuetify.min.css'


Vue.use(Vuetify);

export default new Vuetify({
    icons: {
      iconfont: 'mdi' || 'fa', // default - only for display purposes
    },
    
});
