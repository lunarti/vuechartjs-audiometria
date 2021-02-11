<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Linechart :dataChart='dataorelhaesq'></Linechart>
    <Linechart :dataChart='dataorelhadir'></Linechart>
  </div>
</template>

<script>

import Linechart from './components/linechart_v2.vue'
var img1 = new Image();
img1.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent('<svg width="32px" height="32px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M 6 6 L 6 8.15625 L 22.53125 16 L 6 23.84375 L 6 26 L 26 16.78125 L 26 15.21875 Z"/></svg>');

export default {
  name: 'App',
  components: {
    Linechart
  },
  data: function() {
    return{
    dataorelhaesq: { 
              datasets: [
                    {   
                      label:'Orelha Esquerda',
                      pointStyle: 'crossRot',
                      showLine: true,
                      backgroundColor: 'blue',
                      borderColor: 'rgba(0,0,255,0.2)',
                      pointBorderColor: 'blue',
                      radius: 15,
                      fill: false,
                      borderWidth: 5,
                      data: [{x:1,y:2},{x:3,y:2}]
                    },
                    {   
                      label:'Orelha Esquerda',
                      pointStyle: img1,
                      showLine: false,
                      backgroundColor: 'black',
                      borderColor: 'black',
                      pointBorderColor: 'black',
                      radius: 15,
                      fill: false,
                      borderWidth: 5,
                      data: [{x:2,y:3}]
                    }

              ]
            },
      dataorelhadir: {
        datasets:[
                    {   
                      label:'Orelha Direita',
                      pointStyle: 'circle',
                      showLine: true,
                      borderColor: 'rgba(255,0,0,0.2)',
                      pointBorderColor: 'red',
                      radius: 15,
                      fill: false,
                      borderWidth: 5,
                      data: [{x:1,y:2}]
                    }
        ]
      }
      }
  }
  
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
