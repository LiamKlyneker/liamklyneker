<template lang="pug">
header
	.header-wrapper
		span
		button.button-hamburguer(:class="{'active': isMobileMenuOpen}", @click="toggleMobileMenu")
			span
			span
		nav(:class="{'active': isMobileMenuOpen}")
			a(href="#") MY WORK
			a(href="#") ABOUT ME
			a(href="#").special CONTACT ME
</template>

<script>
export default {
	data () {
		return {
			isMobileMenuOpen: false
		}
	},

	methods: {
		toggleMobileMenu () {
			this.isMobileMenuOpen = !this.isMobileMenuOpen
		}
	}
}
</script>

<style lang="stylus">
.header-wrapper
	display flex
	align-items center
	justify-content space-between
	padding 2.5rem
	max-width calc(1300px + 5rem)
	margin-left auto
	margin-right auto
	& > span
		display block
		height 30px
		width 30px
		background-color white
@media all and (min-width 1024px)
	.header-wrapper
		padding 3.5rem 2.5rem
nav
	display none
	flex-direction column
	justify-content center
	align-items center
	position fixed
	left 0
	top 0
	width 100%
	height 100%
	background-color rgba(black, .5)
	z-index 100
	a
		font-family 'Expletus Sans', serif
		font-weight 400
		color white
		font-size 1.1rem
		margin-bottom 3rem
	a:nth-child(2)
		margin-bottom 2.5rem
	a:last-child
		margin-bottom 0
	a.special
		height 35px
		display flex
		justify-content center
		align-items center
		text-align center
		border 2px solid white
		border-radius 30px
		padding .3rem 3rem
		padding-top .5rem
	a.special:hover
		background-color white
		color black
nav.active
	display flex
@media all and (min-width 1024px)
	button.button-hamburguer
		display none !important
	nav
		position initial
		display flex !important
		justify-content flex-end
		flex-direction row
		a
			padding-top .2rem
			margin-bottom 0
			margin-right 5rem
			font-size 1rem
		a:nth-child(2)
			margin-bottom 0
		a:last-child
			margin-right 0
		a.special
			height 52px
			padding-top .6rem
</style>
