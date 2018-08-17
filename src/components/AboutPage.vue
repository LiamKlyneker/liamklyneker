<template lang="pug">
main.main.main-wrapper
	div
		h1.h1-expletus ABOUT

		section
			p.p-alter Shh! I still working on this! In the meantime, come visit my #[a(href="https://www.instagram.com/liamklyneker/", target="_blank") Instagram] page, where I am quite active or my #[a(href="https://dribbble.com/liamklyneker/", target="_blank") Dribbble] page, where I am even more active!

		.icon-back #[i.icon-time]
</template>

<style lang="stylus" scoped>
@import '~@variables'

.main-wrapper
	& > div
		position relative
		.icon-back
			z-index -1
			font-size 20rem
			position absolute
			top 55%
			left 10%
			color rgba($purple, .25)
@media all and (min-width 1024px)
	.main-wrapper
		& > div
			.icon-back
				font-size 40rem
				top 0
				left 40%
section
	padding-left 20%
	& > p
		margin 0
		margin-bottom 3rem
		max-width 769px
		margin-left auto
		a
			text-decoration underline
@media all and (min-width 1024px)
	section
		& > p
			margin-bottom 5rem
</style>
