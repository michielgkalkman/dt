<template>
  <tr>
    <td @contextmenu.prevent="openThisContextMenuAndCloseOtherContextMenues()">
      {{ actions.action }}</td>
    <Action v-for="(c,index) in actions.value"
          v-bind:key="index"
          v-bind:value="c"
          :actionRowKey="2000+index"/>

    <context-menu ref="ctxMenu4">
      <li @click="sayColor(String(actionRowKey))">delete row</li>
      <li class="disabled">create row</li>
      <li class="disabled">edit row</li>
      <li @click="sayColor(String(actionRowKey))">up</li>
      <li class="disabled">down</li>
    </context-menu>
  </tr>
</template>

<script>
import Action from './Action.vue'
import contextMenu from 'vue-context-menu'

export default {
  name: 'ActionRow',
  components: {
    Action,
    contextMenu
  },
  props: [ 
    'actions',
    'actionRowKey'
  ],
  methods: {
    openThisContextMenuAndCloseOtherContextMenues() {
        this.$refs.ctxMenu4.open()
        this.$store.commit('changeCurrentContextMenuKey', this.actionRowKey)
    },
    sayColor(color) {
      window.alert('left click on ' + color)
    }
  },
  computed: {
  },
  mounted() {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'changeCurrentContextMenuKey') {
        // Make the contextmenu for this component
        // invisible if the key in state is
        // different
        if( this.actionRowKey != state.currentContextMenuKey) {
          this.$refs.ctxMenu4.ctxVisible = false
        }
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import '~vue-context/dist/css/vue-context.css';
</style>
