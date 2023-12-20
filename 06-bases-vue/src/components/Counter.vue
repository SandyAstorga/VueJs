<template>
  <div>
    <h1>Counter en Vuex</h1>
    <h2>Direct Access: {{ $store.state.counter.count }}</h2>
    <!-- <h2>Computed: {{ countComputed }}</h2> -->
    <button @click="increment">Increment +1</button>
    <button @click="incrementBy">Increment +5</button>
    <!-- <button @click="randomInt">Random</button> -->
    <button @click="incrementRandomInt" :disabled="isLoading" >Random</button>

    <h1>mapState</h1>
    <h2>mapState: {{count}}</h2>
    <h2>lastMutation: {{lastMutation}}</h2>

    <h2>Direct Getter: {{$store.getters['counter/squareCount'] }}</h2>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    // computed: mapState(['count'])
    computed: {
      countComputed(){
        return this.$store.state.counter.count
      },
      ...mapState('counter', ['count', 'lastMutation', 'isLoading'])
      // ...mapState({
      //     count: state => state.count,
      //     // lastMutation: state => state.lastMutation
      //     lastMutation: 'lastMutation'
      // })
    },
    methods: {
      increment(){
        // this.$store.commit('increment')
        this.$store.commit('counter/increment')
      },
      incrementBy(){
        // this.$store.commit('incrementBy', 5)
        this.$store.commit('counter/incrementBy', 5 )
      },
      // incrementRandomInt(){
      //   this.$store.dispatch('incrementRandomInt')
      // },
      // ...mapActions({
        //     randomInt: 'incrementRandomInt'
      // })
      ...mapActions( 'counter', ['incrementRandomInt'])
    }
}
</script>

<style>

</style>