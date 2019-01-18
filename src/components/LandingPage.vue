<template lang="pug">
div
	main.main-wrapper
		div
			.main-statement
				div
					h1.h1-oxygen Hi, my name is #[span Liam Klyneker]
					p I'm a UX/UI Designer and a Creative Front End Developer based in Lima Perú and here I show you some of my work.

			.work-list
				article.item-work
					div
						figure #[img(src="@/assets/images/luar-tile.jpg")]
						div
							p.item-work__title LUAR
							p.item-work__role UX/UI Designer
							p.item-work__description The goal in this project is to ensure that users do not get saturated with many options when searching for a room or a roomie, and that by continuing to search their feed, they do not see the same thing again and again. What is proposed is to SAVE the options that you consider convenient and DISMISS with which you think you could not do MATCH.
							a(href="https://www.behance.net/gallery/72673721/LUAR" class="link-external" target="_blank") See process #[i.icon-arrow-right]

				article.item-work
					div
						figure #[img(src="@/assets/images/donar-online-tile.jpg")]
						div
							p.item-work__title Donar Online
							p.item-work__role UX/UI Designer
							p.item-work__description DonarOnline is a platform where people can donate the amount they want through debit / credit cards to non-profit organizations, foundations, etc. The process is supposed to be or should be simple, but we will see that the main issue is just that, which is anything but simple, I try to improve it.
							a(href="https://medium.com/@LiamKlyneker/formularios-menos-intimidantes-58bfed0e396e" class="link-external" target="_blank") See process #[i.icon-arrow-right]

				article.item-work
					div
						figure #[img(src="@/assets/images/netzun-jobs-tile.jpg")]
						div
							p.item-work__title Netzun Jobs
							p.item-work__role UX Designer & Front End Developer
							p.item-work__description Netzun Jobs is a platform to find work (job bank). If you are looking for a job you can match the ideal job, you can find out which stage of the selection process you are in and many more benefits. If you are a company you can find the ideal candidate for the position you are looking for, for this it offers an administrator of job offers and candidates, very useful.
							a(href="https://jobs.netzun.com/" class="link-external" target="_blank") Go to the site #[i.icon-arrow-right]

</template>

<script>
import LkAnimatedCircles from '@/components/AnimatedCircles'

export default {
	beforeRouteUpdate (to, from, next) {
		next()
		this.verifySection()
	},

	components: {
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

		// goToSection (section) {
		// 	console.log('goToSection', section)
		// 	const html = document.querySelector('html')
		// 	const body = document.querySelector('body')
		// 	setTimeout(() => {
		// 		if (section) {
		// 			// console.log(window.scrollY, this.contactTop)
		// 			if (window.scrollY < this.contactTop - 200) {
		// 				html.scrollTop = this.contactTop
		// 				body.scrollTop = this.contactTop
		// 			}
		// 		}
		// 	}, 1)
		// },

		handleScroll () {
			// control Contact section
			// if (window.scrollY < this.contactTop - 200) {
			// 	if (this.$route.params.section) {
			// 		this.$router.replace({
			// 			name: 'Landing'
			// 		})
			// 	}
			// } else {
			// 	if (!this.$route.params.section) {
			// 		this.$router.replace({
			// 			name: 'Landing',
			// 			params: {section: 'contact'}
			// 		})
			// 	}
			// }
		}
	},

	created () {
		window.addEventListener('scroll', this.handleScroll)
	},

	mounted () {
		setTimeout(() => {
			// this.contactTop = this.$refs['contact'].$el.offsetTop
			// this.verifyIntialSection()
		}, 50)
	},

	destroyed () {
		window.removeEventListener('scroll', this.handleScroll)
	}
}

</script>

<style lang="stylus" scoped>
@import '~@variables'

.main-statement
	padding 2rem 0
	padding-top 2rem
	padding-left 20%
	margin-bottom 4rem
	div
		padding-bottom 3.5rem
		position relative
		max-width 820px
		margin-left auto
		&:after
			content ''
			position absolute
			bottom 0
			width 24%
			left 0
			border-bottom 1px solid $grey_text
	h1
		max-width 250px
		margin-bottom 2.5rem
		span
			position relative
			padding-bottom 6px
			&:after
				content ''
				position absolute
				top 100%
				left 0
				border-bottom 4px solid $purple
				width 0
				animation nameLine 1.5s cubic-bezier(.28,.56,.61,.43) .5s
				animation-fill-mode forwards
	p
		margin 0
		color $grey_text
		line-height 1.8
		font-weight 300
		font-size .9rem
@keyframes nameLine
	0%
		opacity 0
		width 0
	40%
		opacity 1
	100%
		width 100%
@media all and (min-width 700px)
	.main-statement
		h1
			max-width 100%
		p
			font-size 1rem
			// max-width 550px
			// margin-left auto
			// margin-right auto
		div
			&:after
				width 18%
				left 0
@media all and (min-width 1200px)
	.main-statement
		padding-top 10rem
		padding-bottom 4.5rem
		margin-bottom 10rem
		h1
			margin-bottom 3rem
			span
				padding-bottom 8px
				&:after
					border-bottom 8px solid $purple
		p
			font-size 1.43rem
			max-width 770px
.work-list
	.item-work
		margin-bottom 4rem
	.item-work:last-child
		margin-bottom 0
@media all and (min-width 1024px)
	.work-list
		.item-work:nth-child(odd)
			margin-right 6.25rem
		.item-work:nth-child(even)
			margin-left 6.25rem
@media all and (min-width 1200px)
	.work-list
		.item-work
			margin-bottom 8rem
</style>
