<template>
  <div id="app">
    <div style="font-size:30px;">{{count}}</div>
    <p>
      <button @click="$store.commit('add')">add</button>
      <button @click="$store.commit('reduce')">reduce</button>
    </p>
    <header-nav></header-nav>
    <shop></shop>
  </div>
</template>

<script>
import headerNav from '@/components/header-nav';
import shop from '@/view/shop';
import {mapState} from 'vuex';
export default {
  name: 'App',
  computed:mapState({
     count:state=>state.count
  }),
  components:{
     headerNav,
     shop
  },
  methods:{
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
