<template lang="pug">
#app
	.main-loader(v-if="isLoaderActive", :class="{'hide': activeLoaderHide}") #[figure #[img(src="@/assets/svgs/logo-to-load.svg")] #[span]]
	.main-page(v-if="!isLoaderActive")
		lk-header
		router-view
		lk-footer
</template>

<script>
import LkHeader from '@/components/Header'
import LkFooter from '@/components/Footer'

export default {
	name: 'App',

	components: {
		LkHeader,
		LkFooter
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
