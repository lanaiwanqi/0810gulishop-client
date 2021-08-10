<template>
  <div>
    <h1>当前求和为：{{num}}</h1>
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
      num: 0, //求和总数
      n:1,  //获取选项
    }
  },
  methods: {
    increment(){
      this.num += this.n;
    },
    decrement(){
      this.num -= this.n;
    },
    incrementOdd(){
      if (!this.num % 2) {
        this.num += this.n;
      }
    },
    incrementWait(){
      setTimeout(()=>{
        this.num += this.n;
      },500);
    }
  }
}
</script>

<style scoped>

</style>