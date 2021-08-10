<template>
  <div>
    <h2>我是User的内容</h2>
    这是动态传过来的内容{{userId}}
  </div>
	
</template>

<script>
	export default {
		name:'User',
    computed: {
      userId(){
        return this.$route.params.id
      }
    }
	}
</script>