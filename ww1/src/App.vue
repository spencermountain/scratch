<template>
  <div>
    hello {{foo}}
    <br/>
    <input type="button" value="reload" v-on:click="click"/>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      foo:493
    }
  },
  methods:{
    click:function(){
      this.foo+=1
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
