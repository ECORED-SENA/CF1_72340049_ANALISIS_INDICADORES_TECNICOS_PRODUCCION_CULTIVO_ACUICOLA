<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Indicadores técnicos de la producción acuícola 

    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Aspectos fundamentales 
    p.mb-5 A continuación, se conocerán los aspectos fundamentales de los indicadores técnicos de la producción acuícola, fortaleciendo su comprensión para analizar, evaluar y mejorar la gestión productiva de manera eficiente y sostenible:
    .bg-slider.mb-5
          .px-5
            .ajuste-slider(data-aos="zoom-in")
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 ¿Para qué sirven?
                    p.mb-0 Transforman los datos en información técnica útil que permite la toma de decisiones, el monitoreo permanente del cultivo, la identificación de tendencias productivas, la comparación con estándares establecidos y la implementación de procesos de mejora continua orientados a optimizar el desempeño del sistema productivo.]
                      
                  .col-xl-6
                    figure
                      img(src='@/assets/curso/tema1/img2.png', alt='' style="max-width: 500px").m-auto
                  
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Marco constitucional
                    p.mb-0 Se encuentran articulados con entidades del sector, como la AUNAP, orientada al desarrollo sostenible de la acuicultura, y el ICA, encargado de fortalecer los procesos relacionados con la sanidad y la bioseguridad, garantizando el cumplimiento de lineamientos técnicos y normativos en la actividad acuícola.
                    
              
                  .col-xl-6
                    figure
                      img(src='@/assets/curso/tema1/img3.png', alt='' style="max-width: 500px").m-auto
                  
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4.mb-md-0
                    h4 Contribuyen a
                    p.mb-0 Estos procesos se relacionan con la implementación de programas sanitarios oficiales, la adopción de Buenas Prácticas Acuícolas (BPA), el fortalecimiento de la trazabilidad productiva, la obtención de certificaciones de calidad y la promoción de la formalización productiva, contribuyendo al desarrollo sostenible y competitivo del sector acuícola.
                    
                  .col-xl-6
                    figure
                      img(src='@/assets/curso/tema1/img4.png', alt='' style="max-width: 500px").m-auto
                
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4.mb-md-0
                    h4 Importancia y productiva
                    p.mb-0 Permiten realizar la evaluación económica y financiera del cultivo, facilitar la detección temprana de problemas productivos, optimizar el uso de los recursos disponibles, asegurar el cumplimiento normativo y fortalecer la gestión documental, contribuyendo a una administración técnica y eficiente del sistema productivo.
                    
                  .col-xl-6
                    figure
                      img(src='@/assets/curso/tema1/img5.png', alt='' style="max-width: 500px").m-auto

    .caja-tema1.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl-auto.col-md-2(data-aos="fade-right")
          figure
            img(src='@/assets/curso/tema1/img1.svg', alt='' style="width: 77px").m-auto
        .col-xl.col-md-10.espacio-sm
          p.mb-0 La gestión acuícola eficiente y sostenible se fundamenta en la toma de decisiones basadas en datos, lo que permite aumentar la competitividad del sistema productivo, reducir riesgos operativos y ambientales, y promover una producción sostenible orientada al uso responsable de los recursos y la mejora continua del cultivo.

    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Clasificación de los indicadores técnicos 

    p.mb-0 La producción acuícola moderna exige un control técnico sustentado en indicadores que permitan analizar el comportamiento del cultivo desde una perspectiva integral. No basta con medir resultados finales; es necesario comprender cómo evoluciona el rendimiento productivo, cuál es la condición sanitaria de los organismos y en qué estado se encuentran las variables del medio acuático. Esta lectura articulada permite anticipar riesgos, optimizar recursos y sostener la viabilidad económica del sistema. A continuación, se presentan los principales indicadores productivos, sanitarios y ambientales que orientan el seguimiento técnico del cultivo:
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Principales indicadores productivos  
 
</template>

<script>
export default {
  name: 'Tema1',
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
