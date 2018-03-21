<template lang="pug">
div
	main.main-wrapper.main-landing.full
		.main-statement
			div
				div
					h1.h1 Hi, my name is Liam Klyneker, I'm a UX/UI Designer and Front End Developer based in Lima Perú.
					hr

		.main-wrapper__content.fix-relative
			.second-statement
				p.p-main.p-grey As a #[span Front End Developer] I've worked with differents companies such as #[b Yaroslab], #[b 199Insights], #[b The Gift Method] and I'm currently working at #[b Netzun], during this time I have used various technology and now, in particular I'm working with #[b React] y #[b Vue].

				p.p-main.p-grey I found #[span passion and skill in design], I'm involved in the design process from the conception to the end product and I get to see how it evolves over time. Now, I'd love it if you could check out some of my personal projects.

			.antennas
				article.svg
					span.circle
					span.halo
					span.line
				article.svg
					span.circle
					span.halo
					span.line
				article.svg
					span.circle
					span.halo
					span.line

		lk-animated-circles

	main.main-wrapper.full.white.fix-relative
		.main-wrapper__content

			.section.white
				header
					h3 WHAT I CAN DO
					h4 AS A DESIGNER
				section
					div
						p.p-secondary.p-black Collect the vision, goals and what it takes to carry out the project, interpret the data and design the best possible solution for the product. Everything is focused on the end user, #[b what message we want to convey] and #[b what the users need to do] in the easiest and most intuite way possible.
						p.p-secondary.p-black These ideas have to be shared with the whole team for #[b constant feedback] and so that we are always on the same page.
						//- Puedes visitar mis #[router-link(:to="{ name: 'Work' }", @click.native="toggleMobileMenu") trabajos] para más.
					div
						figure #[img(src="@/assets/svgs/as-a-designer.svg")]

	main.main-wrapper.full
		.main-wrapper__content

			.section
				header
					h3 WHAT I CAN DO
					h4 AS A DEVELOPER
				section
					div
						p.p-secondary Once the whole team understands the project and all its implications, it is followed by programming phase, this process #[b from design to programming] is always iterative because #[b nothing is static, each product is changing and evolving.]
						p.p-secondary When it comes to skills I see all in a #[b progressive way] so I now work with #[b React, Vue], etc. To this, I add what is needed such as Task Automation, Promise-based HTTP Clients, libraries and so on, always aiming to write readable and scalable code.
					div
						figure #[img(src="@/assets/svgs/as-a-developer.svg")]

	lk-contact(ref="contact")
</template>

<script>
import LkContact from '@/components/Contact'
import LkAnimatedCircles from '@/components/AnimatedCircles'

export default {
	beforeRouteUpdate (to, from, next) {
		next()
		this.verifySection()
	},

	components: {
		LkContact,
		LkAnimatedCircles
	},

	data () {
		return {
			contactTop: 0
		}
	},

	methods: {
		verifySection () {
			const section = this.$route.params.section
			this.goToSection(section)
		},

		verifyIntialSection () {
			const html = document.querySelector('html')
			const body = document.querySelector('body')
			const section = this.$route.params.section
			if (section === 'contact') {
				html.scrollTop = this.contactTop - 50
				body.scrollTop = this.contactTop - 50
			}
		},

		goToSection (section) {
			console.log('goToSection', section)
			const html = document.querySelector('html')
			const body = document.querySelector('body')
			setTimeout(() => {
				if (section) {
					// console.log(window.scrollY, this.contactTop)
					if (window.scrollY < this.contactTop - 200) {
						html.scrollTop = this.contactTop
						body.scrollTop = this.contactTop
					}
				}
			}, 1)
		},

		handleScroll () {
			// control Contact section
			if (window.scrollY < this.contactTop - 200) {
				if (this.$route.params.section) {
					this.$router.replace({
						name: 'Landing'
					})
				}
			} else {
				if (!this.$route.params.section) {
					this.$router.replace({
						name: 'Landing',
						params: {section: 'contact'}
					})
				}
			}
		}
	},

	created () {
		window.addEventListener('scroll', this.handleScroll)
	},

	mounted () {
		setTimeout(() => {
			this.contactTop = this.$refs['contact'].$el.offsetTop
			this.verifyIntialSection()
		}, 50)
	},

	destroyed () {
		window.removeEventListener('scroll', this.handleScroll)
	}
}

</script>

<style lang="stylus" scoped>
@import '~@variables'
.main-landing
	padding-top 10rem
	padding-bottom 6.5rem
@media all and (min-width 1024px)
	.main-landing
		padding-top 18rem
		padding-bottom 11.71rem

.main-statement
	animation 'showSection' .3s ease-out
	margin-bottom 2.64rem
	position relative
	z-index 10
	hr
		margin-top 1.71rem
		margin-bottom 0
	& > div
		max-width "calc(%s + 6rem)" % $max_width
		margin-left auto
		margin-right auto
		& > div
			width calc(100% - 3rem)
			padding 2rem 3rem
			background-color $purple
			max-width 862px
			padding-bottom 2.85rem
@media all and (min-width 1024px)
	.main-statement
		position relative
		margin-bottom 5rem
		&:before
			content ''
			position absolute
			left 0
			top 0
			background-color $purple
			width 50%
			height 100%
		hr
			margin-top 2.5rem
		& > div
			position relative
			z-index 2
			& > div
				padding-top 3.5rem
				padding-right 8.42rem
				padding-bottom 4.21rem

.second-statement
	max-width 779px
.section
	padding 5.28rem 0
	padding-bottom 7.07rem
	header
		margin-bottom 2.57rem
		position relative
		&:before
			content ''
			position absolute
			left -16px
			top -3px
			border-left 2px solid $purple
			height 100%

		h3
			color rgba(white, .3)
	section
		figure
			margin 0
			img
				width calc(100% + 2rem)
				position relative
				left -1rem
		& > div:first-child
			margin-bottom 5.57rem
@media all and (min-width 1024px)
	.section
		padding 11.07rem 0
		header
			margin-bottom 5rem
			&:before
				left -22px
		section
			display flex
			align-items flex-end
			figure
				padding-bottom 4rem
				img
					width 100%
					left 0
			div
				flex 1
				div:first-child
					max-width 486px
			& > div:first-child
				margin-bottom 0
				margin-right 5.71rem
	.section.white
		section
			figure
				padding-bottom 5rem
.section.white
	header
		h3
			color rgba(black, .3)
		h4
			color black
.fix-relative
	position relative
	z-index 10
</style>
