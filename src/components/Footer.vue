<template lang="pug">
footer
	.footer-wrapper
		article.footer-item
			p Liam Klyneker
			p UX/UI Designer

		article.footer-item
			p Lima, Perú
			p 15048

		article.footer-item
			p liamklyneker@gmail.com
			p #[img(src="~@/assets/svgs/peru-flag.svg")] 954 397372
		.social-links
			a(target="_blank", href="https://dribbble.com/liamklyneker") #[i.icon-dribbble]
			a(target="_blank", href="https://www.instagram.com/liamklyneker/") #[i.icon-instagram]
			a(target="_blank", href="https://medium.com/@LiamKlyneker/") #[i.icon-medium]
			a(target="_blank", href="https://twitter.com/liamklyneker") #[i.icon-twitter]
			a(target="_blank", href="https://www.linkedin.com/in/liamklyneker/") #[i.icon-linkedin]
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
@import '~@variables'

footer
	padding 4.5rem 2rem
	background-color $purple
.footer-item
	margin-bottom 2rem
	p
		margin 0
		img
			margin-right .4rem
	p:first-child
		font-weight 700
		margin-bottom .4rem
	p:last-child
		font-weight 300
		color rgba(white, .9)
.social-links
	a
		color white
		font-size 1.2rem
		margin-right 1.5rem
		transform translateY(0)
		i
			position relative
			transition all .15s linear
			top 0
	a:hover
		i
			top -2px

@media all and (min-width 700px)
	footer
		padding 6rem 3rem
	.footer-wrapper
		display flex
		flex-wrap wrap
		.footer-item
		.social-links
			flex 1 50%
		.footer-item
			margin-bottom 4rem
		.footer-item:nth-child(3)
			margin-bottom 0
@media all and (min-width 1200px)
	footer
		padding 10rem 3rem
	.footer-wrapper
		flex-wrap nowrap
		justify-content space-between
		// max-width "calc(%s + 6rem)" % $max_width
		max-width $max_width
		margin-left auto
		margin-right auto
		.footer-item
		.social-links
			flex initial
		.footer-item
			margin-bottom 0
</style>
