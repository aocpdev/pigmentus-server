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
    theme: {
      themes: {
        light: {
          primary: '#bba257', // #E53935
          secondary: '#FFCDD2', // #FFCDD2
          accent: '#3F51B5', // #3F51B5
        },
      },
    },

});
