<template>
  <td @contextmenu.prevent="openThisContextMenuAndCloseOtherContextMenues()">
    <p>{{ value }}</p>

    <context-menu ref="ctxMenu4">
      <li @click="sayColor(String(actionRowKey))">X</li>
      <li @click="sayColor(String(actionRowKey))">-</li>
      <li @click="sayColor(String(actionRowKey))">?</li>
    </context-menu>
  </td>
</template>

<script>
  import contextMenu from 'vue-context-menu'

  export default {
    name: 'Action',
    components: {
          contextMenu
    },
    props: [ 
      'value',
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
