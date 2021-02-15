<template>
  <div>
    <form class="col s12">
      <div class="row">
        <div class="input-field col s3">
          <input id="input1" v-model.number="newDotsx" type="number" class="validate" />
        </div>
        <div class="input-field col s3">
          <input id="input2" v-model.number="newDotsy" type="number" class="validate" />
        </div>
        <div class="input-field col s3">
          <p>
            <label>
              <input name="pointstyle" type="radio" v-model="pointOption" :value="0"  />
              <span>Ponto 1</span>
            </label>
            <label>
              <input name="pointstyle" type="radio" v-model="pointOption" :value="1"/>
              <span>Ponto 2</span>
            </label>
          </p>
        </div>
        <div class="col s3 ">
          <a class="waves-effect waves-light btn-large" @click="insertData">button</a>
        </div>

      </div>
    </form>
    <div class="list-group">
        <li v-for="(dataaudio,index) in auxData0" :key="dataaudio.id">
          {{ dataaudio }} <button @click="removeData(index,0)">remove</button>
        </li>
    </div>
        <div class="list-group">
        <li v-for="(dataaudio,index) in auxData1" :key="dataaudio.id">
          {{ dataaudio }} <button @click="removeData(index,1)">remove</button>
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
            pointOption: 0,
            newDotsx: null,
            newDotsy: null,
            datacollection: {},
            loaded: false,
            auxData0: this.dataChart.datasets[0].data,
            auxData1: this.dataChart.datasets[1].data,
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
        updateChart(){
          this.$refs.linechartjs.renderChart(this.datacollection, this.options)
        },
        generateImage(){
          return{
           image: this.$refs.linechartjs.base64Export()
          }
        },
        insertData() {
          this.datacollection.datasets[this.pointOption].data.push({x: this.newDotsx, y: this.newDotsy})
          this.updateChart()

        },
        removeData(index,pointOption){
          this.datacollection.datasets[pointOption].data.splice(index,1)
          this.updateChart()
        }
      },


}
</script>
