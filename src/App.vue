<template lang="pug">
#app
	.main-loader(v-show="isLoaderActive", :class="{'hide': activeLoaderHide}") #[figure #[img(src="@/assets/svgs/logo-to-load.svg")] #[span]]
	.main-page(v-show="!isLoaderActive")
		lk-header
		router-view
</template>

<script>
import LkHeader from '@/components/Header'

export default {
	name: 'App',

	components: {
		LkHeader
	},

	data () {
		return {
			isLoaderActive: true,
			activeLoaderHide: false
		}
	},

	mounted () {
		console.log('mounted')
		setTimeout(() => {
			this.activeLoaderHide = true
			setTimeout(() => {
				this.isLoaderActive = false
			}, 300)
		}, 2000)
	}
}
</script>

<style lang="stylus">
@import '~@styles/default.styl'
</style>
