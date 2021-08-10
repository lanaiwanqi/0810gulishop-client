<template>
  <div>
    <List v-for="(item, key) in items" :key="key" :item="item" />
  </div>
</template>

<script>
import List from "./List";
import axios from "axios";
export default {
  name: 'Items',
  components: {
    List,
  },
  data(){
    return {
      items:[]
    }
  },
  async beforeCreate(){
    try {
     let res = await axios.get('http://wx.shgjjtq.cn/new/astrict/getItems.php',{params:{name:'jk',url:'wx.shgjjtq.cn'}});
     this.items = res.data
    } catch (error) {
      console.log(error);
    }
    
  }
}
</script>

<style scoped>
  div{
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>