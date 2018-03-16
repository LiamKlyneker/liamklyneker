<template lang="pug">
.circles
	span(v-for="circle in circles", :style="circle.styles")

</template>

<script>
export default {
	data () {
		return {
			animations: ['circleAround1', 'circleAround2', 'circleAround3', 'circleAround4'],
			circles: []
		}
	},

	methods: {
		createCircles (interval) {
			this.frankesteinLab()
			setInterval(() => { this.frankesteinLab() }, interval)
		},

		frankesteinLab () {
			const animationIndex = Math.floor(Math.random() * 3)
			const right = Math.floor(Math.random() * (window.innerWidth - (window.innerWidth * 0.2)))
			const top = Math.floor(Math.random() * 1001)
			const circle = {
				styles: `right: ${right}px; top: ${top}px; animation-name: ${this.animations[animationIndex]}`
			}
			this.circles.push(circle)
		}
	},

	mounted () {
		this.createCircles(4000)
		setTimeout(() => { this.createCircles(7000) }, 3000)
		setTimeout(() => { this.createCircles(3500) }, 2000)
		setTimeout(() => { this.createCircles(2000) }, 3500)
		setTimeout(() => { this.createCircles(5200) }, 5500)
	}
}
</script>

<style lang="stylus" scoped>
@import '~@variables'

.circles
	position absolute
	top 14%
	right 0
	width 50%
	height 100%
	span
		display block
		border-radius 50%
		position absolute
		width 80px
		height 80px
		right 0
		border 1px solid $purple
		animation-duration 7s
		animation-timing-function cubic-bezier(.17, .67, .83, .67)
		opacity 0
		&:before
			background-color $purple
			height 35px
			width 35px
			content ''
			position absolute
			left calc(50% - 35px/2)
			top calc(50% - 35px/2)
			border-radius 50%
</style>
