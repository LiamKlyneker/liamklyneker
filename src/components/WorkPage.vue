<template lang="pug">
main.main.main-wrapper
	div
		h2 WORK
		p.p-secondary I'll be publishing some of the personal projects I've been working on very soon, so do keep in touch n.n! In the meantime, come visit my #[a(href="https://www.instagram.com/liamklyneker/", target="_blank") Instagram] page, where I am quite active or my #[a(href="https://dribbble.com/liamklyneker/", target="_blank") Dribbble] page, where I am even more active!

		.icon-back #[i.icon-time]
</template>

<style lang="stylus" scoped>
@import '~@variables'

.main-wrapper
	margin-top 94px
	display flex
	align-items center
	position relative
	& > div
		position relative
		z-index 2
		margin-top -5rem
		width 90%
		max-width 687px
		.icon-back
			font-size 20rem
			position absolute
			z-index 1
			top 55%
			left 10%
			color rgba($purple, .25)
	h2
		position relative
		z-index 2
		font-size 3.92rem
		margin-bottom 2.71rem
	p
		position relative
		z-index 2
@media all and (min-width 1024px)
	.main-wrapper
		margin-top 142px
		h2
			font-size 5rem
			margin-bottom 6.5rem
		& > div
			.icon-back
				font-size 40rem
				top 0
				left 90%
</style>
