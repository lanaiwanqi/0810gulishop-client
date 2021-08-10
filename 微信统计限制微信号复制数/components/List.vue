<template>
  <div class="item">
    <span>微信:{{item.wx}}</span>
    <div class="input-item">
      <input type="number" v-model.number="item.copy" name="" id="">
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import qs from "qs";
export default {
  name: 'List',
  props:['item'],
  computed: {
    getCopy: function() {
      return this.item.copy
    }
  },
  watch:{
    getCopy:{
    async handler(val){
        //do something
        console.log(val);
        try {
          let data = {copy:val,wx:this.item.wx};
          let res = await axios({
            method:"post",
            url:"http://wx.shgjjtq.cn/new/astrict/setItems.php",
            headers:{
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            data,
            transformRequest: [(data)=> {
              let ret = ''
              for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
              }
              return ret
              }],
          })
          
          console.log(res.data);
        }  catch (error) {
          console.log(error);
        }
      }
    }
  }
}
</script>

<style scoped>
  .item{
    background: #fff;
    /* border: 1px solid #f0f; */
    width:200px;
    height: 80px;
    box-shadow:4px 4px 4px #eee;
    border-radius: 4px;
    margin: 8px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
  }
  span{
    
  }
  .input-item{
    /* flex-grow: 2; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  input{
    text-align: center;
    appearance: none;
    font-size:1em;
    width: 80%;
    height:1.8em;
    border-radius:4px;
    border:1px solid #c8cccf;
    color:#6a6f77;
    outline:0;
  }
</style>