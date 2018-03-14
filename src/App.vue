<template lang="pug">
#app
	.main-loader(v-if="isLoaderActive", :class="{'hide': activeLoaderHide}") #[figure #[img(src="@/assets/svgs/logo-to-load.svg")] #[span]]
	.main-page(v-if="!isLoaderActive")
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
		setTimeout(() => {
			this.activeLoaderHide = true
			setTimeout(() => {
				this.isLoaderActive = false
			}, 600)
		}, 3000)
	}
}
</script>

<style lang="stylus">
@import '~@styles/default.styl'
</style>
