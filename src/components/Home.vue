<template>
	<div>
		<h2>我是Home的内容</h2>
		<div class="row">
			<div class="col-xs-6">
				<div class="list-group">
					<!-- Vue中借助router-link标签实现路由的切换 -->
					<router-link class="list-group-item" active-class="active" to="/home/phone">手机</router-link>
					<router-link class="list-group-item" active-class="active" to="/home/tablet">平板</router-link>
				</div>
				<router-view></router-view>
			</div>
	</div>
	</div>
</template>

<script>
	export default {
		name:'Home'
	}
</script>