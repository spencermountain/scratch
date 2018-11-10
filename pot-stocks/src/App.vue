<template>
  <div>
    <h2 class="underline h5">
      <!-- Pot stocks -->
      vuejs
    </h2>
    <div class="flex w40 outline h15" style="width:40rem">
      <div>
        <div>aphria</div>
        <div>{{stocks.aphria}}</div>
        <div class="blueback" v-bind:style="{ width:'2rem', height: yScale(stocks.aphria) + 'px' }">
          {{yScale(stocks.aphria)}}
        </div>
      </div>
      <div>
        <div>cronos</div>
        <div>{{stocks.cronos}}</div>
        <div class="blueback" v-bind:style="{ width:'2rem', height: yScale(stocks.aphria) + 'px' }">
          {{yScale(stocks.cronos)}}
        </div>
      </div>
      <div>
        <div>tweed</div>
        <div>{{stocks.tweed}}</div>
        <div class="blueback" v-bind:style="{ width:'2rem', height: yScale(stocks.aphria) + 'px' }">
          {{yScale(stocks.tweed)}}
        </div>
      </div>
      <div>
        <div>tmp</div>
        <div>{{stocks.tmp}}</div>
        <div class="blueback" v-bind:style="{ width:'2rem', height: yScale(stocks.aphria) + 'px' }">
          {{yScale(stocks.tmp)}}
        </div>
      </div>
    </div>
    <!-- svg -->
    <svg width="500" height="75">
      <g style="transform: translate(0, 10px)">
        <path :d="line" />
      </g>
    </svg>
    <input type="button" value="reload" v-on:click="update"/>
  </div>
</template>

<script>
import * as d3 from "d3";

export default {
  name: 'app',
  data: function () {
    var xScale = d3.scaleTime().rangeRound([0, 200]);
    xScale.domain([new Date('2015-01-02'), new Date()]);
    var yScale = d3.scaleTime().rangeRound([0, 200]);
    yScale.domain([0,500]);

    return {
      xScale:xScale,
      yScale:yScale,
      line:'',
      stocks:{
        tweed:493,
        aphria:293,
        tmp:193,
        cronos:193,
      }
    }
  },
  methods:{
    getScales() {
     const x = d3.scaleTime().range([0, 430]);
     const y = d3.scaleLinear().range([210, 0]);
     d3.axisLeft().scale(x);
     d3.axisBottom().scale(y);
     x.domain(d3.extent(this.data, (d, i) => i));
     y.domain([0, d3.max(this.data, d => d)]);
     return { x, y };
   },
   calculatePath() {
     const scale = this.getScales();
     // const path = d3.line()
     //   .x((d, i) => scale.x(i))
     //   .y(d => scale.y(d));
     // this.line = path(this.data);
   },
    update:function(){
      Object.keys(this.stocks).forEach((k) => {
        this.stocks[k]=parseInt(Math.random()*200)
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
