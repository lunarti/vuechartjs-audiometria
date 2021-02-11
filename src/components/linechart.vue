<template>
  <div>
    <form class="col s12">
      <div class="row">
        <div class="input-field col s4">
          <input id="input1" v-model="newDotsx" type="number" class="validate" />
        </div>
        <div class="input-field col s4">
          <input id="input2" v-model="newDotsy" type="number" class="validate" />
        </div>
        <a class="waves-effect waves-light btn-large" @click="insertchart">button</a>
      </div>
    </form>
    <line-chart :data="chart" xtitle="Size" ytitle="Population" ></line-chart>
  </div>
</template>

<script>
export default {
    name: 'linechart',
    
    data(){
        return{
          newDotsx:null,
          newDotsy:null,
          chart : [[174.0, 80.0], [176.5, 82.3]]
        }
    },
    methods: {
        insertchart(){
              this.chart.push([this.newDotsx, this.newDotsy])
              this.chart.sort()
            }
      }
          
}

</script>

