<template lang="pug">
main.main-wrapper.full
    .main-wrapper__content

        .contact-card
            .contact-card__ornament
            .contact-card__content
                header #[h2.p-purple CONTACTO]
                section
                    p.p-secondary.p-black Si gustas puedes contactarme, aquí los canales.

                    article.by-email
                        p Por email
                        div
                            p liamklyneker@gmail.com
                            a.button-send(href="mailto:liamklyneker@gmail.com") ENVIAR MENSAJE #[i.icon-arrow-right]

                    article.by-socials
                        p Tambien por estas redes
                        div
                            a(target="_blank", href="https://dribbble.com/liamklyneker") #[i.icon-dribbble]
                            a(target="_blank", href="https://www.linkedin.com/in/liamklyneker/") #[i.icon-linkedin]
                            a(target="_blank", href="https://twitter.com/liamklyneker") #[i.icon-twitter]
                            a(target="_blank", href="https://www.instagram.com/liamklyneker/") #[i.icon-instagram]

                hr

                footer
                    p Este portafolio fue diseñado y programado por mi con #[i.icon-heart] en Perú #[i.icon-flag]
                    p © 2018 Liam Klyneker - Todos los derechos reservados
</template>

<style lang="stylus" scoped>
@import '~@variables'

.main-wrapper
    border-top 1px solid rgba(white, .2)
    position relative
    z-index 1
    min-height auto
    &:after
        content ''
        background-color white
        position absolute
        left 0
        top 8.21rem
        height calc(100% - 8.21rem)
        width 50%
.main-wrapper__content
    padding-bottom 0
    padding-top 8.21rem
@media all and (min-width 1024px)
    .main-wrapper
        &:after
            top 12.07rem
            height calc(100% - 12.07rem)
    .main-wrapper__content
        padding-top 12.07rem

.contact-card
    position relative
    z-index 2
    max-width 830px
.contact-card__ornament
    position absolute
    z-index 1
    left .7rem
    top .7rem
    height calc(100% - .7rem)
    width 100%
    background-color $purple
.contact-card__content
    position relative
    z-index 2
    background-color white
    padding-top 3.85rem
    padding-bottom 4.14rem
    padding-right 3rem
@media all and (min-width 1024px)
    .contact-card__content
        padding-top 5.92rem
article.by-email
article.by-socials
    margin-bottom 3rem
    & > p
        margin 0
        margin-bottom 1.05rem
        color $grey_text
article.by-email
    div
        & > p
            color black
            margin 0
            margin-bottom 1.1rem
article.by-socials
    div
        display flex
        a
            color black
            font-size 1.8rem
            margin-right 2rem
            transition all .1s linear
        a:hover
            color $purple
@media all and (min-width 1024px)
    article.by-email
    article.by-socials
        margin-bottom 4rem
        & > p
            font-size 1.14rem
    article.by-email
        div
            display flex
            & > p
                font-size 1.28rem
                margin-right 2.57rem
            a
                margin-top 3px

section
    margin-bottom 5.42rem
    .p-secondary
        margin-bottom 3.64rem
hr
    margin-bottom 2.35rem
footer
    p
        line-height 1.45rem
        font-weight 400
        color black
        font-size .85rem
        margin 0
        margin-bottom 1.3rem
        i
            margin-left .3rem
            margin-right .3rem
    p:first-child
        max-width 240px
    p:last-child
        margin-bottom 0
@media all and (min-width 1024px)
    section
        margin-bottom 9rem
    hr
        margin-bottom 2.14rem
    footer
        p
            margin-bottom .9rem
        p:first-child
            max-width 100%
</style>
