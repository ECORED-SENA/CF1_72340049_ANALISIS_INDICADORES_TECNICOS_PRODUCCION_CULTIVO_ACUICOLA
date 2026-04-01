<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Interpretación de gráficos en la producción acuícola 
    p.mb-3 La representación gráfica de datos productivos es una herramienta clave en la gestión acuícola, ya que transforma registros numéricos en información analítica para comprender el comportamiento del cultivo. En Colombia, la AUNAP y el ICA promueven su uso para fortalecer la competitividad, sostenibilidad y cumplimiento de las Buenas Prácticas Acuícolas. La interpretación gráfica permite:
    .row.align-items-center.justify-content-center.mb-5
      .col-xl
        ul.fa-ul.estilo___ul.mb-3
          li.mb-1
            span.fa-li
              i.fas.fa-check-circle
            | Evaluar el desempeño productivo de manera dinámica.
          li.mb-1
            span.fa-li
              i.fas.fa-check-circle
            | Detectar comportamientos atípicos o desviaciones tempranas.
          li.mb-1
            span.fa-li
              i.fas.fa-check-circle
            | Relacionar variables productivas con factores ambientales o sanitarios.
          li.mb-1
            span.fa-li
              i.fas.fa-check-circle
            | Sustentar técnicamente decisiones de manejo.
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Facilitar auditorías, inspecciones y procesos de certificación.
        .caja-tema2-1.mb-4.mb-lg-0(data-aos="flip-up")
          p.mb-0 En términos formativos, el análisis gráfico fortalece la capacidad del estudiante para interpretar datos técnicos con criterio profesional, evitando decisiones basadas únicamente en percepción empírica.
      .col-xl-auto(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img1.png', alt='' style="max-width: 400px").m-auto
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
     h2 2.1 Tipología de gráficos aplicados en acuicultura 
    p.mb-5 La representación gráfica de la información productiva permite transformar datos técnicos en herramientas de análisis que orientan la toma de decisiones. A través de diferentes tipos de gráficos, es posible interpretar tendencias, comparar resultados y proyectar comportamientos futuros del cultivo, fortaleciendo el control y la planificación del sistema acuícola:
    .bg-slider.mb-0
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Gráficos de línea
                p.mb-0 Los gráficos de línea se utilizan para visualizar el comportamiento de una variable a lo largo del tiempo, permitiendo realizar el seguimiento del peso promedio, la evolución de la biomasa, la variación de parámetros ambientales y la tendencia del FCA, facilitando la identificación de tendencias, cambios y estabilidad productiva. 
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema2/img2.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Gráficos de barras
                p.mb-0 Los gráficos de barras se utilizan para comparar categorías discretas, permitiendo analizar variables como la supervivencia entre lotes, el FCA por ciclo productivo y la mortalidad mensual, facilitando una comparación rápida y clara entre diferentes variables independientes.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema2/img3.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Curvas de tendencia
                p.mb-0 Las curvas de tendencia permiten observar la proyección o comportamiento esperado de una variable productiva, especialmente en crecimiento y rendimiento, facilitando la proyección de cosecha, la estimación del peso final y la evaluación anticipada de la eficiencia alimenticia del cultivo.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema2/img4.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Gráficos acumulativos
                p.mb-0 Los gráficos acumulativos se emplean para analizar variables que se incrementan progresivamente a lo largo del tiempo, como la mortalidad acumulada, el consumo total de alimento y los costos acumulados durante el ciclo productivo, facilitando el seguimiento integral del desempeño del cultivo.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema2/img5.png', alt='' style="max-width: 500px").m-auto
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Análisis técnico de tendencias  
    p.mb-5 La interpretación de gráficos permite analizar el comportamiento del cultivo, identificar patrones productivos y apoyar la toma de decisiones técnicas basadas en datos. En la siguiente tabla, se presenta la interpretación visual de comportamientos:
    .bg-2
      .px-5
        .row.justify-content-center.mb-5
          .col-xl-8
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 2.
              span Interpretación visual de comportamientos
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Comportamiento
                    th.ajuste-border-tabla.texto-left ¿Qué indica?
                    th.texto-left Posibles causas
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left Crecimiento constante
                    td.ajuste-border-tabla.texto-left Manejo adecuado
                    td.texto-left Buen ambiente y nutrición
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Estancamiento
                    td.ajuste-border-tabla.texto-left Bajo crecimiento
                    td.texto-left Nutrición o calidad de agua
                  tr
                    td.ajuste-border-tabla.texto-left Descenso inesperado
                    td.ajuste-border-tabla.texto-left Problema crítico
                    td.texto-left Aireación, estrés o enfermedad
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Variabilidad irregular
                    td.ajuste-border-tabla.texto-left Inconsistencia
                    td.texto-left Alimentación o registros
        p.mb-5 Para comprender esta dinámica, se expone una tabla como ejemplo práctico y aplicado que ilustra el registro de indicadores:
    .row.justify-content-center.mb-5
      .col-xl-8
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 3.
          span Caso práctico
        .tabla-a(data-aos="zoom-in")
          table
            caption Referencia tabla - Norma APA.
            thead
              tr
                th.ajuste-border-tabla.texto-left Semana
                th.ajuste-border-tabla.texto-left Peso
                th.ajuste-border-tabla.texto-left FCA
                th.ajuste-border-tabla.texto-left Supervivencia
                th.texto-left OD
            tbody
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left 1
                td.ajuste-border-tabla.texto-left 15
                td.ajuste-border-tabla.texto-left 1.4
                td.ajuste-border-tabla.texto-left 98
                td.texto-left 6.5
              tr
                td.ajuste-border-tabla.texto-left 4
                td.ajuste-border-tabla.texto-left 85
                td.ajuste-border-tabla.texto-left 1.6
                td.ajuste-border-tabla.texto-left 95
                td.texto-left 5.8
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left 8
                td.ajuste-border-tabla.texto-left 210
                td.ajuste-border-tabla.texto-left 1.9
                td.ajuste-border-tabla.texto-left 88
                td.texto-left 4.9
    .caja-tema2-2.mb-0(data-aos="flip-up")
      .row.align-items-center
        .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/tema2/img7.svg', alt='' style="width: 85px").m-auto
        .col-xl.col-md-10
          h5 ¿Qué tendencia observa en el FCA y el oxígeno disuelto?
          p.mb-0 El aumento del FCA y la disminución del oxígeno disuelto sugieren posible sobrecarga del sistema o insuficiencia en aireación.
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Identificación de desviaciones técnicas
    p.mb-5 El análisis de los indicadores no se limita a registrar valores, sino a interpretar sus variaciones y comprender qué situaciones pueden estar afectando el desempeño del cultivo. Cuando un parámetro cambia de forma inesperada, se convierte en una señal de alerta que requiere revisión técnica inmediata para identificar causas y aplicar correctivos oportunos:
    .bg-slider.mb-0.ajuste-border-final
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 FCA aumenta
                p #[b ¿Qué puede indicar?]
                p.mb-0 Ineficiencia en alimentación, baja calidad del alimento, estrés ambiental y enfermedad subclínica. 
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema2/img8.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Disminución de supervivencia
                p #[b Indicador observado]: baja supervivencia.
                p.mb-0 #[b Posibles causas]: problemas sanitarios, manejo inadecuado y fallas en bioseguridad.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema2/img9.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Alteraciones en la calidad del agua
                p #[b Variable]: OD, pH o amonio fuera de rango.
                p.mb-0 #[b Impacto]: reduce crecimiento y consumo.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema2/img10.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Variaciones bruscas en biomasa
                p #[b Situación]: cambios inesperados.
                p.mb-0 #[b Posible explicación]: error de biometría, mortalidad no registrada y evento sanitario.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema2/img11.png', alt='' style="max-width: 500px").m-auto
</template>

<script>
export default {
  name: 'Tema2',
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
