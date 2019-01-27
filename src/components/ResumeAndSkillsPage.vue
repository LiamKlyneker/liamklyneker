<template lang="pug">
main.main.main-wrapper
	div
		h1.h1-expletus RESUME

		section
			p.p-alter I had the honor to work with these companies.

		.jobs-list
			article
				div
					h3 Keller Williams Realty #[b 2018 - Present]
					h4 Front End Engineer
					p Is an American technology and international real estate franchise with headquarters in Austin, Texas. It is the number one franchise in the United States by sales volume, ranking number one in agents and units sold in 2017. It is also the largest real estate franchise by agent count in the world, and one of the largest privately held global residential real estate brokerages. Currently I'm working in apps and tools for our associates in all over the planet, the tech that we use is ReactJS, NextJS, etc. I'm learning a lot of what is to develop global apps and pretty good knowledge to polish my skills 🙌.
			article
				div
					h3 Netzun #[b 2016 - 2018]
					h4 UX Designer & Creative Front End Developer
					p It is a company that is dedicated to the job market and online education, I was involved in several projects, such as NetzunJobs, an application that initially helped to find work only to students of the last semesters and recent graduates, then moved to be available to all types of users (in Front use VueJS). The other project was NetzunPlus, an application that allows you to take short and concise online classes, its MVP version lasted a long time and since it was already growing and having several features that were not in the initial plans, it became unscalable, then the experience and know what the application needs we had to redo everything from the research to our current and potential users, through the wireframes/designs and ending with the programming part (also used VueJS in Front), thus reaching a super improved version of NetzunPlus, you can visit it if you wish and why not, take a course.
			article
				div
					h3 TheGiftMethod #[b 2015 - 2016]
					h4 Front End Developer & iOS Developer
					p It was my first remote experience, the Product Owner was in San Francisco - USA, the Back End in Lima - Peru and I as Front End in Pasco - Peru (a city very far from the capital), so we were a full remote team of three people, we integrated ourselves like if we been in an office, was a very productive experience, we made several applications including TheGiftMethod, that it had an admin and a webapp that consisted in sell hand picked products from the Amazon API, and recommending the right product to gift to someone special, after that we started an app for iOS called ThoughtRecap, It was a very useful tool that allowed you to write all the thoughts and memories that occurred in the day as in a kind of chat with yourself, apart from my tasks such as Front with Backbone, I learned a lot from Swift, autolayout and all, like I say before was a great experience.
			article
				div
					h3 Yaroslab #[b 2015]
					h4 Front End Developer
					p It is a company that is dedicated to doing webapps from different companies, they took different projects, be they educational, health or sales, I was involved as Front End in some education platforms and other health as in a MINSA application (Ministry of Health of Peru) to take medical appointments from any place, which facilitated the hard process of taking this appointment with a doctor and more if we talk about Peru.
			article
				div
					h3 Freelancer #[b 2014]
					h4 Full Stack Developer
					p At the beginning, like everyone else, I began to look for my life with different projects such as junior developer, some Landings for local companies or non-profit projects served me but the biggest challenge I had at that time was to make the registration and income platform of notes for the Local University (UNDAC), I was there all that year learning a lot and identifying everything that entails making a webapp, as I was just beginning I did not know that there was Back and Front, I saw it as a whole, besides I think there were not several tools direct, only frameworks that allowed you to do all the flow, so the normal thing was to build your API and pass the data to the templates, for all this the team of that time use PHP with Zend Framework. Then I would meet BackboneJS, who was going to be my partner in several future projects.

		h2.h2-expletus SKILLS

		.skills-list
			article
				p As a Designer
				ul
					li Collaborative Ideation of a Product
					li Creating Interactive Models & Prototyping
					li Working with Research Findings
					li Working with Engineers to Implement Features
					li UX Design
					li UI Design
					li Visual Design
			article
				p As a Developer
				ul
					li Vue
					li React
					li TaskManagers (Webpack, Gulp)
					li Stylus as my favorite CSS preprocessor
					li Html with Pug or pure if you prefer :)
					li Backbone
					li Some of PHP
					li Some of Python
			article
				p Softwares
				ul
					li Sublime / Atom
					li Sketch
					li Invision
					li Zeplin
					li Framer
			article
				p Currently Learning
				ul
					li All I can about UX/UI Design to perfect my craft
					li After Effects for Motion Design and present my ideas better
					li Music Production
</template>

<style lang="stylus" scoped>
@import '~@variables'

section
	padding-left 20%
	& > p
		margin 0
		margin-bottom 3rem
		max-width 769px
		margin-left auto
@media all and (min-width 1024px)
	section
		& > p
			margin-bottom 5rem
.jobs-list
	border-bottom 2px solid rgba(white, .3)
	margin-bottom 2.5rem
	article
		margin-bottom 2.5rem
		padding-left 20%
		position relative
		&:after
			content ''
			border-bottom 4px solid $purple_alter
			position absolute
			bottom 0
			left 0
			width 85%
			max-width 769px
		div
			padding-bottom 2.5rem
			max-width 769px
			margin-left auto
		h3
			font-size 1.414rem
			font-weight 400
			color white
			margin 0
			margin-bottom .5rem
			b
				font-size .75rem
				color $grey_text
				font-weight 400
		h4
			color $grey_text
			font-size .75rem
			font-weight 300
			margin 0
			margin-bottom 1rem
			&:before
				content ''
				width 16px
				display inline-block
				border-bottom 1px solid $grey_text
				margin-right 4px
				position relative
				top -4px
		p
			font-size .875rem
			color white
			line-height 1.8
			font-weight 300
			margin 0
			letter-spacing .5px
	article:last-child
		margin-bottom 0
		&:after
			border-bottom-width 0
@media all and (min-width 768px)
	.jobs-list
		article
			margin-bottom 4rem
			div
				padding-bottom 4rem
@media all and (min-width 1024px)
	.jobs-list
		margin-bottom 5rem
		article
			margin-bottom 6rem
			div
				padding-bottom 6rem
			h3
				font-size 2.81rem
				margin-bottom 1rem
				b
					font-size 1.2rem
			h4
				font-size 1.2rem
				margin-bottom 2rem
				&:before
					top -6px
					margin-right 8px
			p
				font-size 1.2rem
				line-height 1.9
@media all and (min-width 1300px)
	.jobs-list
		article
			h3
				b
					font-size 1.4rem
			h4
				font-size 1.4rem
			p
				font-size 1.4rem
				line-height 2
.skills-list
	article
		margin-bottom 3rem
		p
			color white
			margin 0
			margin-bottom 1.5rem
			&:before
				content ''
				width 16px
				display inline-block
				border-bottom 1px solid white
				margin-right 4px
				position relative
				top -4px
		ul
			padding 0
			padding-left calc(1rem + 4px)
			li
				list-style none
				color $grey_text
				font-size .875rem
				margin-bottom .95rem
			li:last-child
				margin-bottom 0
@media all and (min-width 768px)
	.skills-list
		display flex
		flex-wrap wrap
		article
			flex 1 calc(50% - 3rem)
			margin-right 3rem
		article:nth-child(even)
			margin-right 0
@media all and (min-width 1024px)
	.skills-list
		article
			p
				font-size 1.4rem
				margin-bottom 2rem
				&:before
					margin-right 8px
			ul
				padding-left calc(1rem + 8px)
				li
					font-size 1rem
					line-height 1.6
					margin-bottom 1rem
@media all and (min-width 1400px)
	.skills-list
		display flex
		flex-wrap nowrap
		justify-content space-between
		article
			flex 1
			margin-bottom 0
		article:nth-child(even)
			margin-right 3rem

</style>
