<template lang="pug">
#app
	lk-header
	router-view
</template>

<script>
import LkHeader from '@/components/Header'

export default {
	name: 'App',

	components: {
		LkHeader
	}
}
</script>

<style lang="stylus">
@import '~@styles/default.styl'
</style>
