<template>
  <div>
    <p>You chose {{ $store.getters.flavor }}</p>
    <p>test decisionTable {{ decisionTableId }}</p>
    <table border="1">
    <ConditionRow v-for="(c,index) in conditions"
      v-bind:key="index"
      v-bind:conditions="conditions[index]"/>
    <ActionRow v-for="(c,index) in actions"
      v-bind:key="1000+index"
      v-bind:actions="actions[index]"
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
    conditions() {
      return this.$store.getters.getDecisionTable(0).asJson().conditions
    },
    actions() {
      return this.$store.getters.getDecisionTable(0).asJson().actions
    },
    decisionTable() {
      return this.$store.getters.getDecisionTable(0)
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import '~vue-context/dist/css/vue-context.css';

</style>
