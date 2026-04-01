<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Gestión de la información productiva  
    .caja-tema4.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl.order-2.order-lg-1
          p.mb-0 La gestión de la información productiva constituye un proceso fundamental para la toma de decisiones informadas y para garantizar la sostenibilidad y eficiencia del cultivo acuícola. Comprende un conjunto de etapas que abarcan desde la recolección de datos hasta su análisis y validación, con el propósito de mantener registros confiables y completos del desempeño productivo.
        .col-xl-auto.order-1.order-lg-2
          figure
            img(src='@/assets/curso/tema4/img1.png', alt='').m-auto
    p.mb-5 La gestión de la información productiva se refiere al proceso sistemático de recopilación, organización, validación y análisis de datos técnicos relacionados con el cultivo acuícola. Los principios fundamentales son:
    .row.justify-content-center.mb-0
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        .caja-tema4-1.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/tema4/img2.png', alt="" ).m-auto
            h4.text-center Exactitud
            p.mb-0 La precisión en la recolección y el registro de datos es crucial para evitar errores que puedan afectar el análisis y la toma de decisiones. Los datos deben reflejar la realidad del cultivo.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema4-1.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/tema4/img3.png', alt="" ).m-auto
            h4.text-center Oportunidad
            p.mb-0 La información debe ser recopilada y analizada en tiempo real o con la frecuencia adecuada, para que las decisiones se tomen de manera oportuna y se puedan aplicar correcciones de inmediato.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema4-1.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/tema4/img4.png', alt="" ).m-auto
            h4.text-center Trazabilidad
            p.mb-0 La capacidad de rastrear cada dato desde su origen hasta su uso final es esencial para garantizar la transparencia y la integridad del proceso productivo, así como para cumplir con normativas y auditorías.
      .col-xl-3.col-md-9(data-aos="fade-left")
        .caja-tema4-1.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/tema4/img5.png', alt="" ).m-auto
            h4.text-center Confiabilidad
            p.mb-0 La información debe ser consistente y verificable, lo que implica el uso de métodos estandarizados y equipos calibrados, así como la verificación cruzada de datos.
    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Recolección y registro de datos 
    p.mb-5 El control técnico del cultivo acuícola se sustenta en rutinas de seguimiento que permiten recolectar información confiable para evaluar el desempeño productivo, sanitario y ambiental. Estas prácticas garantizan una gestión organizada del ciclo productivo y facilitan la toma de decisiones oportunas frente a cualquier variación en los indicadores:   
    .bg-carrusel
      .px-5
        .row.align-items-center.mb-0
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/tema4/img6.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.fit___card-sinbordes
                .row.justify-content-center.mb-4
                  .col-12
                    img(src='@/assets/curso/tema4/img7.png').m-auto
                h4.mb-3.estilo-text Pesajes periódicos
                p.mb-0.text-center Se mide el peso para evaluar crecimiento y calcular indicadores productivos.
              .tarjeta.color-acento-botones.fit___card-sinbordes
                .row.justify-content-center.mb-4
                  .col-12
                    img(src='@/assets/curso/tema4/img8.png').m-auto
                h4.mb-3.estilo-text Control de mortalidad
                p.mb-0.text-center El registro diario permite evaluar mortalidad y ajustar el manejo.
              .tarjeta.color-acento-botones.fit___card-sinbordes
                .row.justify-content-center.mb-4
                  .col-12
                    img(src='@/assets/curso/tema4/img9.png').m-auto
                h4.mb-3.estilo-text Registro de consumo de alimento
                p.mb-0.text-center Controlar alimento permite evaluar eficiencia y ajustar raciones.
              .tarjeta.color-acento-botones.fit___card-sinbordes
                .row.justify-content-center.mb-4
                  .col-12
                    img(src='@/assets/curso/tema4/img10.png').m-auto
                h4.mb-3.estilo-text Monitoreo de calidad de agua
                p.mb-0.text-center Monitorear el agua previene problemas sanitarios.
    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 Validación del dato  
    p.mb-5 El análisis de la información recolectada en el cultivo no solo implica registrar datos, sino validarlos y depurarlos para asegurar que reflejen con precisión la realidad productiva. Un proceso sistemático de revisión fortalece la confiabilidad de los indicadores y respalda decisiones técnicas fundamentadas:
    .bg-slider.mb-0
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Identificación de valores atípicos
                p.mb-0 Se detectan datos que se desvían significativamente de lo esperado, lo que puede indicar errores de medición o eventos anómalos en el cultivo.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema4/img11.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Revisión de coherencia
                p.mb-0 Se verifica que los datos sean consistentes entre sí y con otros registros, asegurando que no haya contradicciones.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema4/img12.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Comparación histórica
                p.mb-0 Los datos actuales se comparan con registros anteriores para identificar tendencias, variaciones y posibles áreas de mejora.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema4/img13.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Corrección de errores
                p.mb-0 Se realizan ajustes en los registros cuando se detectan errores, garantizando la integridad de la información.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema4/img14.png', alt='' style="max-width: 500px").m-auto
    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.3 Análisis técnico de la información 
    p.mb-5 El análisis técnico de la información transforma los registros productivos, sanitarios y ambientales en insumos estratégicos para la toma de decisiones. No se trata únicamente de recopilar datos, sino de interpretarlos mediante herramientas metodológicas que permitan evaluar el desempeño del cultivo, anticipar riesgos y optimizar el manejo del sistema:
    TabsC.color-acento-contenido.mb-0(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Aplicación de fórmulas establecidas")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/tema4/img15.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura Aplicación de fórmulas establecidas
            p.mb-0 Se emplean fórmulas matemáticas y estadísticas para calcular indicadores clave como el Factor de Conversión Alimenticia (FCA), la tasa de crecimiento y la supervivencia.
      .py-3.py-md-4(titulo="Uso de hojas de cálculo")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/tema4/img16.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura Uso de hojas de cálculo
            p.mb-0 Herramientas como Excel o #[i software] especializado permiten organizar, procesar y visualizar los datos de manera eficiente.
      .py-3.py-md-4(titulo="Construcción de gráficos")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/tema4/img17.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura Construcción de gráficos
            p.mb-0 La representación gráfica de los datos facilita la identificación de tendencias, patrones y desviaciones, lo que permite una interpretación más intuitiva.
      .py-3.py-md-4(titulo="Comparación con estándares técnicos")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/tema4/img18.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura Comparación con estándares técnicos
            p.mb-0 Se contrasta la información obtenida con valores de referencia establecidos por normativas y guías sectoriales, asegurando que el cultivo cumpla con los parámetros óptimos.
    Separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.4 Trazabilidad y soporte documental 
    p.mb-5 La trazabilidad y el registro sistemático de la información constituyen pilares de la gestión técnica en acuicultura, ya que permiten respaldar cada decisión con evidencia documentada, fortalecer la transparencia del proceso productivo y garantizar la sostenibilidad del sistema en el tiempo:
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img19.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        ul.fa-ul.estilo___ul_bloque.mb-0
          li.mb-2.ajuste---li.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 #[b Procesos de auditoría]. La trazabilidad permite que toda la información pueda ser auditada de forma eficiente, asegurando que los registros sean verificables y fiables.
          br
          li.mb-2.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 #[b Certificaciones]. La documentación detallada y la trazabilidad son requisitos esenciales para la obtención de certificaciones de calidad, sostenibilidad e inocuidad.
          br
          li.mb-2.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 #[b Cumplimiento normativo]. Mantener registros precisos y trazables facilita el cumplimiento de las normativas vigentes, tanto del ICA como de la AUNAP, y garantiza la conformidad con las Buenas Prácticas Acuícolas (BPA).
          br
          li.mb-0.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 #[b Evaluación del desempeño histórico]. La información histórica permite evaluar la evolución del cultivo a lo largo del tiempo, identificar mejoras, detectar áreas de oportunidad y planificar futuras estrategias de gestión.
</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
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
