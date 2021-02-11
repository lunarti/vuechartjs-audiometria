<template>
  <div>
    <form class="col s12">
      <div class="row">
        <div class="input-field col s4">
          <input id="input1" v-model.number="newDotsx" type="number" class="validate" />
        </div>
        <div class="input-field col s4">
          <input id="input2" v-model.number="newDotsy" type="number" class="validate" />
        </div>
        <a class="waves-effect waves-light btn-large" @click="insertData">button</a>
      </div>
    </form>
    <div class="list-group">
        <li v-for="(dataaudio,index) in auxData0" :key="dataaudio.id">
          {{ dataaudio }} <button @click="removeData(index)">remove</button>
        </li>
    </div>
    <Linechart ref="linechartjs" :chart-data='datacollection' :options="options" ></Linechart>
  </div>
</template>

<script>
import Linechart from './linechart_v2.js'
export default {
    name: 'vuelinechart',
    components:{
        Linechart
    },
    props: ['dataChart'],
    data(){ 
        return{
            newDotsx: null,
            newDotsy: null,
            datacollection: {},
            loaded: false,
            auxData0: this.dataChart.datasets[0].data,
            
            options: {
              responsive:true,
              maintainAspectRatio:false,
              legend: {
                display:false
              },
              scales:{
                yAxes:[{
                  ticks:{
                     reverse: true,
                     beginAtZero: true,
                  }
                }]
              },
              animation: false, 
              bezierCurve : false
            }
        }
        
    },
    mounted(){
      this.datacollection = this.dataChart
    },
      

    methods:{
        generateImage(){
          return{
           image: this.$refs.linechartjs.base64Export()
          }
        },
        insertData() {
          this.datacollection.datasets[0].data.push({x: this.newDotsx, y: this.newDotsy})
          this.$refs.linechartjs.renderChart(this.datacollection, this.options)
          
          
        },
        removeData(index){
          this.datacollection.datasets[0].data.splice(index,1)
          this.$refs.linechartjs.renderChart(this.datacollection, this.options)
        }
      },


}
</script>
