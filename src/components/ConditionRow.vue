<template>
          <tr>
            <td>{{ conditions.condition }}</td>
    <Condition v-for="(c,index) in conditions.value"
      v-bind:key="index"
      v-bind:value="c"/>
      </tr>
</template>

<script>
import Condition from './Condition.vue'

export default {
  name: 'ConditionRow',
  components: {
    Condition
  },
  props: [ 'conditions' ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
