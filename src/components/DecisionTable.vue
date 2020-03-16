<template>
  <div>
    <p>You chose {{ $store.getters.flavor }}</p>
    <p>test decisionTable {{ decisionTableId }}</p>
    <table border="1">
    <ConditionRow v-for="(c,index) in decisionTable.conditions"
      v-bind:key="index"
      v-bind:conditions="decisionTable.conditions[index]"/>
    <ActionRow v-for="(c,index) in decisionTable.actions"
      v-bind:key="1000+index"
      v-bind:actions="decisionTable.actions[index]"
      :actionRowKey="1000+index"
      />
    </table>
  </div>

  
</template>

<script>
import ConditionRow from './ConditionRow.vue'
import ActionRow from './ActionRow.vue'


export default {
  name: 'DecisionTable',
  components: {
    ActionRow,
    ConditionRow
  },
  props: [ 
    'decisionTableId'
  ],
  methods: {
    doSomething (text) {
        alert(`You clicked ${text}!`);
    },
    sayColor(color) {
      window.alert('left click on ' + color)
    }
  },
  computed: {
    decisionTable() {
      console.log( this.$store.state.decisionTables.decisiontables[0].decisionTable.conditions[0].condition)
      console.log( this.$store.getters.getDecisionTable(0).decisionTable.conditions[0].condition)
      return this.$store.getters.getDecisionTable(0).decisionTable
      // return this.$store.state.decisionTablesx.decisiontables[0].decisionTable
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import '~vue-context/dist/css/vue-context.css';

</style>
