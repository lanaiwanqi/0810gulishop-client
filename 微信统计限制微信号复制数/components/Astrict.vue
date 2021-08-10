<template>
  <div>
    <h2>
      录入限制系统 - <a href="index.html">返回换号</a>
    </h2>
    <Items/>
  </div>
  
</template>

<script>
import  Items from "./Items";
export default {
  name: 'Astrict',
  components: {
    Items
   
  }
}
</script>

<style scoped>
  
  h2{
    background: skyblue;
    font-size: 16px;
    padding: 8px;
    font-weight: 400;
    color: #fff;
  }
  
</style>