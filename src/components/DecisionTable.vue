<template>
  <div>
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
  },
  computed: {
    decisionTable() {
      return this.$store.getters.getDecisionTable(this.decisionTableId)
    },
    conditions() {
      return this.$store.getters.getDecisionTable(this.decisionTableId).asJson().conditions
    },
    actions() {
      return this.$store.getters.getDecisionTable(this.decisionTableId).asJson().actions
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import '~vue-context/dist/css/vue-context.css';

</style>
