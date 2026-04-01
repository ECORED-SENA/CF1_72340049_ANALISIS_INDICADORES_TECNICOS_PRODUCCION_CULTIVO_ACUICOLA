<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Ofimática: herramientas y aplicaciones 
    p.mb-5 La ofimática desempeña un papel fundamental en la gestión de la información acuícola, ya que permite organizar, analizar y visualizar datos productivos mediante herramientas digitales que facilitan los cálculos, la generación de reportes y la toma de decisiones técnicas basadas en información confiable. En el siguiente apartado se revisarán las herramientas:
    .bg-slider.mb-0
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 #[i Software] de gestión de datos
                p.mb-0 Para organizar y analizar la información productiva se utilizan herramientas como Excel, Google Sheets y software especializado, que permiten almacenar datos, realizar cálculos y generar reportes para la gestión eficiente del cultivo acuícola.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema7/img1.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Uso de hojas de cálculo
                p.mb-0 Las hojas de cálculo permiten realizar cálculos, crear tablas dinámicas y generar gráficos que facilitan la interpretación y gestión eficiente de la información.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema7/img2.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Visualización y análisis de datos
                p.mb-0 La ofimática permite crear #[i dashboards] y reportes que facilitan la visualización de datos, la identificación de tendencias y la toma de decisiones estratégicas.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema7/img3.png', alt='' style="max-width: 500px").m-auto
    Separador
    #t_7_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.1 Recolección y registro de datos 
    p.mb-5 Los registros productivos permiten organizar y analizar la información del cultivo, facilitando el seguimiento técnico y la toma de decisiones. Para una mejor comprensión del tema de registros, concepto, tipos, formatos y diligenciamiento, se invita a conocer el siguiente diagrama:
    .row.justify-content-center.mb-5
      .col-xl-8
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 3.
          span Diagrama de registros
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema7/img4.svg', alt='La imagen presenta un esquema conceptual sobre los registros de datos, mostrando su función como herramienta dinámica para recopilar información, realizar seguimiento a procesos, evaluar situaciones e identificar cambios. Además, organiza los registros según sus formatos y tipos, incluyendo registros de observación, automáticos y de productos de conducta, evidenciando su importancia para la gestión y análisis sistemático de la información.').m-auto
    p.mb-5 El registro adecuado de la información productiva permite asegurar datos confiables y apoyar la toma de decisiones en la gestión del cultivo acuícola.
    .bg-2
      .px-5
        .row.justify-content-center.mb-5
          .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .caja-tema7.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-right")
                    img(src='@/assets/curso/tema7/img5.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Importancia de un registro adecuado
                p.mb-0 Un registro preciso y completo es esencial para garantizar la trazabilidad, facilitar auditorías y tomar decisiones efectivas. La calidad de la información registrada impacta directamente en la gestión del cultivo.
          .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .caja-tema7.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-right")
                    img(src='@/assets/curso/tema7/img6.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Métodos y formatos de registro
                p.mb-0 Existen diversos métodos y formatos para registrar la información, que van desde registros manuales y digitales hasta sistemas especializados de gestión de datos, asegurando la integridad y accesibilidad de la información.
          .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .caja-tema7.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-left")
                    img(src='@/assets/curso/tema7/img7.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Buenas prácticas en el diligenciamiento
                p.mb-0 Es fundamental seguir protocolos estandarizados para evitar errores, mantener la coherencia de los datos y facilitar su validación. Las buenas prácticas aseguran que la información sea confiable y útil para el análisis.
    p.mb-5 Se presenta un ejemplo de un formato diligenciado con el registro de indicadores técnicos del cultivo acuícola, utilizando datos del cultivo de Juan Pérez para aprender su correcto diligenciamiento.
    .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
      h5 Figura 4.
      span Registro de indicadores técnicos productivos en el cultivo acuícola
    figure(data-aos="zoom-in")
      img(src='@/assets/curso/tema7/img8.svg', alt='La imagen muestra un formato de registro de indicadores técnicos productivos en acuicultura, donde se organizan datos del cultivo como población, biomasa, alimentación y crecimiento, permitiendo analizar el desempeño productivo y calcular indicadores para la toma de decisiones técnicas.').m-auto
</template>

<script>
export default {
  name: 'Tema7',
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
