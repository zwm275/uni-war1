<template>
	<view>
		404
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad() {
			let timer = setTimeout(() => {
				clearTimeout(timer)
				uni.switchTab({
					url: '/pages/index/index'
				})
			}, 2000)
		},
		methods: {

		}
	}
</script>

<style>

</style>