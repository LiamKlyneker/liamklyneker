<template lang="pug">
div
    main.main-wrapper.main-landing
        .main-statement
            p.p-main.p-grey Hola, me llamo #[span Liam Klyneker], soy #[span Diseñador UX/UI] y #[span Front End Developer] radicando en #[span Lima Perú]

            hr
        .second-statement
            p.p-main.p-grey Como #[span Desarrollador Front End] trabaje en diferentes compañias como #[b Yaroslab], #[b 199Insights], #[b The Gift Method] y actualmente en #[b Netzun], en el trasncurso use muchas tecnologias ahora particularmente estoy trabajando con #[b React] y #[b Vue].

            p.p-main.p-grey Ahora quiero explotar mi #[span alma de diseñador], asi que te invito a ver algunos de mis proyectos personales.

        .fancy-animations

    main.main-wrapper.full.white
        .main-wrapper__content

            .section.white
                header
                    h3 QUE PUEDO HACER
                    h4 COMO DISEÑADOR
                section
                    div
                        p.p-secondary.p-black Recolectar la visión, metas y lo que haga falta para realizar el proyecto, interpretar estos datos y diseñar la mejor solución posible a los problemas que nos podamos enfrentar.
                        p.p-secondary.p-black Los esfuerzos se enfocan en que mensaje se quiere enviar y en que el usuario tiene que hacer de la manera mas facil e intuitiva posible. Puedes visitar mi Dribbble para más.
                    div
                        figure #[img(src="@/assets/svgs/as-a-designer.svg")]

    main.main-wrapper.full
        .main-wrapper__content

            .section
                header
                    h3 QUE PUEDO HACER
                    h4 COMO DISEÑADOR
                section
                    div
                        p.p-secondary Soy programador tambien asi que se llevar todos esos diseños a la realidad, con la ultima tencnologia disponible que se adapte al proyecto.
                        p.p-secondary Particularmente ahora soy un “component lover” asi que trabajo con React o Vue, siempre escribiendo código limpio y modular, con la escabilidad en mente.
                    div
                        figure #[img(src="@/assets/svgs/as-a-developer.svg")]
    lk-contact(ref="contact")
</template>

<script>
import LkContact from '@/components/Contact'

export default {
	beforeRouteUpdate (to, from, next) {
		next()
		this.verifySection()
	},

	components: {
		LkContact
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

		goToSection (section) {
			const html = document.querySelector('html')
			setTimeout(() => {
				if (section) {
					if (window.scrollY < this.contactTop - 143) {
						html.scrollTop = this.contactTop + 143
					}
				}
			}, 1)
		},

		handleScroll () {
			// contro Contact section
			if (window.scrollY < this.contactTop) {
				if (this.$route.params.section) {
					console.log('fuera de CONTACT')
					this.$router.replace({
						name: 'Landing'
					})
				}
			} else {
				if (!this.$route.params.section) {
					console.log('dentro de CONTACT')
					this.$router.replace({
						name: 'Landing',
						params: {section: 'contact'}
					})
				}
			}
		}
	},

	created () {
		this.verifySection()

		window.addEventListener('scroll', this.handleScroll)
	},

	mounted () {
		const html = document.querySelector('html')
		this.contactTop = html.scrollHeight - (this.$refs['contact'].$el.scrollHeight + 143)
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
    max-width 690px
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
                padding-bottom 3rem
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
    header
        h3
            color rgba(black, .3)
        h4
            color black
</style>
