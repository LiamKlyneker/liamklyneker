<template lang="pug">
header
	.header-wrapper
		router-link(:to="{ name: 'Landing' }", @click.native="clickLogo") #[figure #[img(src="@/assets/svgs/logo.svg")]]
		button.button-hamburguer(:class="{'active': isMobileMenuOpen}", @click="toggleMobileMenu")
			span
			span
		nav(:class="{'active': isMobileMenuOpen}")
			router-link(:to="{ name: 'Landing' }", @click.native="toggleMobileMenu") WORK
			router-link(:to="{ name: 'ResumeAndSkills' }", @click.native="toggleMobileMenu") RESUME & SKILLS
			router-link(:to="{ name: 'About' }", @click.native="toggleMobileMenu") ABOUT
			//- router-link(:to="{ name: 'Landing', params: {section: 'contact'}}" @click.native="toggleMobileMenu") CONTACT
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
		clickLogo () {
			this.isMobileMenuOpen = false
			this.scrollToTop()
		},
		scrollToTop () {
			const html = document.querySelector('html')
			const body = document.querySelector('body')
			html.scrollTop = 0
			setTimeout(() => { body.scrollTop = 0 }, 50)
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
	animation 'introHeader' .3s ease-in
	&:before
		content ''
		position absolute
		z-index 1
		left 0
		top 0
		height 100%
		width 70%
		background-color $black_text
	& > div
		position relative
		z-index 2

.header-wrapper
	display flex
	align-items center
	justify-content space-between
	padding 2.5rem 2rem
	margin-left auto
	margin-right auto
	height 105px
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
	header
		&:before
			width 53%
	.header-wrapper
		padding 4rem 5rem
		max-width "calc(%s + 10rem)" % $max_width
		height 158px
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
	animation 'navIn' .2s ease-out
	a
		font-family 'Expletus Sans', serif
		font-weight 300
		color white
		font-size 1rem
		margin-bottom 4rem
		transition .1s all linear
		position relative
		padding .2rem .7rem
		padding-top .4rem
		background-color transparent
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
	a:last-child
		margin-bottom 0
	a.router-link-exact-active
		color white
		background-color $purple
		&:after
			border-bottom-color $purple
			opacity 1
			width calc(100% + 2rem)
nav.active
	display flex
@media all and (min-width 1200px)
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
		animation none
		a
			font-size .9rem
			margin-bottom 0
			margin-right 4.5rem
		a:nth-child(2)
			margin-bottom 0
		a:last-child
			margin-right 0
		a.special
			height 52px
			padding-top .6rem
</style>
