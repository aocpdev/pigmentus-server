<template>
<transition>
    <div class="preload" id="preload" v-if="show">
        <div class="logo">
            <img src="../assets/pigmentus-logo.png" alt="logo">
        </div>
        <div class="loader-frame">
            <div class="loader1" id="loader1"></div>
            <div class="loader2" id="loader2"></div>
        </div>
    </div>
</transition>
    
</template>

<script>
import {mapMutations, mapState} from 'vuex'
import router from '../router/index'
export default {
    name: "Loading",
    data: () => ({
        show: true
    }),
    mounted(){
        this.getLoading()
    },
    methods: {
        ...mapMutations(['loading']),
        getLoading: function() {
            const fadeOut = document.getElementById('preload')
			setTimeout(() => {
                this.show = false;
                this.loading(true);
                fadeOut.style.animation = 'fadeout 1.5s ease'
                
			}, 4000)
        }
  },
  
}
</script>

<style>
    * {box-sizing: border-box;}
    body {
        margin: 0;
        padding: 0;
    }
    .preload {
        width: 100%;
        height: 100%;
        background: #000;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
        text-align: center;
    }
    .logo {
        width: 300px;
        height: 70px;
        margin: 150px auto 50px auto;
        text-align: center;
        margin-bottom: 80px;
    }
    .loader-frame {
        width: 70px;
        height: 70px;
        margin: auto;
        position: relative;
    }
    .loader1, .loader2 {
        position: absolute;
        border: 5px solid transparent;
        border-radius: 50%;
    }
    .loader1 {
        width: 70px;
        height: 70px;
        border-top: 5px solid rgb(187, 162, 87);
        border-bottom: 5px solid rgb(187, 162, 87);
        animation: clockwisespin 2s linear 3;
    }
    .loader2{
        width: 60px;
        height: 60px;
        border-left: 5px solid azure;
        border-right: 5px solid azure;
        top: 5px; left: 5px;
        animation: anticlockwisespin 2s linear 3;
    }

    @keyframes clockwisespin {
        from {transform: rotate(0deg);}
        to {transform: rotate(360deg);}
    }
    @keyframes anticlockwisespin {
        from {transform: rotate(0deg);}
        to {transform: rotate(-360deg);}
    }
    @keyframes fadeout {
      from {opacity: 1;}
      to {opacity: 0;}
    }
</style>