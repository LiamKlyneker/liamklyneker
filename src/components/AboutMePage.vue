<template lang="pug">
main
	.main-wrapper
		h2 ABOUT ME
		.item-about-me
			div
				p.p-main Hi, I’m Liam Klyneker and I’m a web designer / developer based on Lima Perú.
				p.p-main I like to do greatest things by building cross platforms apps always with the user experience on mind and their satisfaction using it.
			figure
		button.button-more MORE
	.divide-section
		div
			.section-what-can-i-do
				header
					h3 WHAT CAN I DO
					h4 AS A DESIGNER
				section
					p.p-secondary Design what you want for all devices available, I hear once: say only what you need to say, so I focus on what message want to send and just what the user have to do and a easier way.
				figure #[img(src="@images/as-a-designer.png")]

		div
			.section-what-can-i-do
				header
					h3 WHAT CAN I DO
					h4 AS A DEVELOPER
				section
					p.p-secondary I’m a developer too, so I know  how to make it real that designs, usign the latest technology available. Writing clean scalable and maintanable code.
				figure #[img(src="@images/as-a-developer.png")]

</template>

<style lang="stylus" scoped=true>
.main-wrapper
	margin-bottom 6rem
@media all and (min-width 1024px)
	.main-wrapper
		margin-bottom 4rem
@media all and (min-width 1300px)
	.main-wrapper
		margin-bottom 0

.item-about-me
	div
		margin-bottom 5rem
		p:last-child
			margin-bottom 0
	figure
		width 221px
		height 312px
		background-color white
		margin 0
		margin-left auto
		margin-right auto

@media all and (min-width 1024px)
	.item-about-me
		display flex
		align-items center
		div
			flex 1
			margin-right 6.5rem
		figure
			width 331px
			height 467px
			margin-right 6.5rem

.divide-section
	& > div:first-child
		color black
		background-color white
		h3
			color rgba(black, .3)
	& > div:last-child
		h3
			color rgba(white, .3)
@media all and (min-width 800px)
	.divide-section
		display flex
		& > div
			flex 1
@media all and (min-width 1300px)
	.divide-section
		min-height 100vh
		& > div:first-child
			.section-what-can-i-do
				margin-left auto
		& > div:last-child
			.section-what-can-i-do
				margin-right auto
@media all and (min-width 1400px)
	.divide-section
		& > div
			.section-what-can-i-do
				position relative
		& > div:first-child
			.section-what-can-i-do
				&:after
					content ''
					border-bottom 2px solid black
					position absolute
					bottom 151px
					left -50vw
					width 50vw
				section
					margin-bottom 5rem
		& > div:last-child
			.section-what-can-i-do
				position relative
				&:after
					content ''
					border-bottom 2px solid white
					position absolute
					bottom 155px
					right -50vw
					width 50vw
				section
					margin-bottom 4.9rem

.section-what-can-i-do
	padding 6rem 0
	header
		margin-bottom 2.7rem
		padding 0 2.8rem
	section
		padding 0 2.8rem
	figure
		display flex
		justify-content center
		align-items center
		margin 0
		max-width 100%
		overflow hidden
		img
			max-width calc(100% + 2.6rem)

@media all and (min-width 800px)
	.section-what-can-i-do
		padding-bottom 10rem
		header
			margin-bottom 4rem
			padding 0 4rem
		section
			min-height 130px
			padding 0 4rem
			margin-bottom 5rem
@media all and (min-width 1300px)
	.section-what-can-i-do
		padding 8rem 0
		padding-bottom 10rem
		max-width 720px
		header
			padding 0 7rem
			margin-bottom 5rem
		section
			padding 0 7rem
			min-height 200px
		figure
			img
				max-width 100%

</style>
