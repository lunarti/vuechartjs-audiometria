import { Scatter, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins
export default {
    extends: Scatter,
    mixins: [reactiveProp],
    props: {
        chartData: {
            type: Object, 
            default: null
        },
        options: {
            type: Object,
            default: null,

        },
        
    },
    mounted(){
        this.renderChart(this.chartData, this.options)
    },
    methods: {
        base64Export(){
            return{
            base64: this.$refs.canvas.toDataURL('image/png'),
            }
          }
    }
    
}
