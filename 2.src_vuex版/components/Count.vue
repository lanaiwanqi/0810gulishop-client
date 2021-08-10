<template>
  <div>
    <h1>当前求和为：{{$store.state.num}}</h1>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
export default {
  name: 'Count',
  data(){
    return {
      n:1,  //获取选项
    }
  },
  methods: {
    increment(){
      this.$store.dispatch('Increment',this.n);
    },
    decrement(){
      this.$store.dispatch('Decrement',this.n);
    },
    incrementOdd(){
      this.$store.dispatch('IncrementOdd',this.n);
    },
    incrementWait(){
      this.$store.dispatch('IncrementWait',this.n);
    }
  }
}
</script>

<style scoped>

</style>