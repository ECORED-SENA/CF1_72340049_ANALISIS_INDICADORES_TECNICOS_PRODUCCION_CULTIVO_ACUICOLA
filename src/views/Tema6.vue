<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Matemática aplicada  
    p.mb-5 La matemática aplicada en acuicultura permite analizar datos y calcular indicadores técnicos para evaluar el rendimiento del cultivo y apoyar la toma de decisiones eficientes. A continuación, se conocerán los principios, aplicación y cálculo:
    .row.justify-content-center.mb-5
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        .caja-tema4-1.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/tema6/img1.png', alt="" ).m-auto
            h4.text-center Principios fundamentales
            p.mb-0.text-center Matemática aplicada analiza datos para evaluar rendimiento productivo y sanitario.
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema4-1.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/tema6/img2.png', alt="" ).m-auto
            h4.text-center Aplicación de la producción acuícola
            p.mb-0.text-center Matemática aplicada calcula indicadores clave para evaluar eficiencia del cultivo.
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-left")
        .caja-tema4-1.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/tema6/img3.png', alt="" ).m-auto
            h4.text-center Cálculo de indicadores clave
            p.mb-0.text-center Fórmulas matemáticas transforman datos en indicadores para gestión eficiente sostenible.
    p.mb-5 Se invita al aprendiz a explorar el siguiente video, donde se presenta un ejercicio práctico orientado a comprender la aplicación de herramientas matemáticas en el análisis de indicadores técnicos de la producción acuícola. 
    figure(data-aos="zoom-in").mb-0
      .video.mb-1
        iframe(width="560" height="315" src="https://www.youtube.com/embed/kWNrf2EiD1I?si=PEyCQAL13tjvkakL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption(data-aos="zoom-in") #[b Video]: cálculo del peso promedio de peces.
</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
