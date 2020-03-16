<template>
  <div id="app">
    <p>Yeah</p>
    <DecisionTable :decisionTableId="0"/>
  </div>
</template>

<script>
import DecisionTable from './components/DecisionTable.vue'

export default {
  name: 'App',
  components: {
    DecisionTable
  },
  data: function() { 
    return {
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
