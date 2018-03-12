<template lang="pug">
header
	.header-wrapper
		router-link(:to="{ name: 'Landing' }", @click.native="scrollToTop") #[figure #[img(src="@/assets/svgs/logo.svg")]]
		button.button-hamburguer(:class="{'active': isMobileMenuOpen}", @click="toggleMobileMenu")
			span
			span
		nav(:class="{'active': isMobileMenuOpen}")
			router-link(:to="{ name: 'Work' }", @click.native="toggleMobileMenu") WORK
			router-link(:to="{ name: 'Landing', params: {section: 'contact'}}" @click.native="toggleMobileMenu") CONTACT
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
		},
		scrollToTop () {
			const html = document.querySelector('html')
			html.scrollTop = 0
		}
	}
}
</script>

<style lang="stylus" scoped>
@import '~@variables'

header
	position fixed
	left 0
	top 0
	width 100%
	background-color rgba(black, .9)
	z-index 1000
.header-wrapper
	display flex
	align-items center
	justify-content space-between
	padding 2.5rem 3rem
	margin-left auto
	margin-right auto
	& > div
		margin-left auto
		margin-right auto
	figure
		padding-top 4px
		margin 0
		position relative
		z-index 101
		img
			max-width 80px
@media all and (min-width 1024px)
	.header-wrapper
		padding 4rem 3rem
		max-width "calc(%s + 6rem)" % $max_width
		figure
			padding-top 2px
			img
				max-width 110px
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
	background-color rgba(black, .9)
	z-index 100
	a
		font-family 'Expletus Sans', serif
		font-weight 300
		color white
		font-size 1rem
		margin-bottom 3rem
		transition .1s all linear
		position relative
		&:after
			content ''
			position absolute
			top calc(100% + 5px)
			width 0
			// width calc(100% + 2rem)
			left -1rem
			border-bottom 1px solid white
			transition .2s all ease-out
			opacity 0
	a:hover
		&:after
			width calc(100% + 2rem)
			opacity 1
	a:nth-child(2)
		margin-bottom 2.5rem
	a:last-child
		margin-bottom 0
	a.router-link-active
		color $purple
		&:after
			border-bottom-color $purple
			opacity 1
			width calc(100% + 2rem)
nav.active
	display flex
@media all and (min-width 1024px)
	button.button-hamburguer
		display none !important
	nav
		background-color transparent
		margin-right 5rem
		position initial
		display flex !important
		justify-content flex-end
		flex-direction row
		background-color transparent
		a
			padding-top .2rem
			margin-bottom 0
			margin-right 6rem
		a:nth-child(2)
			margin-bottom 0
		a:last-child
			margin-right 0
		a.special
			height 52px
			padding-top .6rem
</style>
