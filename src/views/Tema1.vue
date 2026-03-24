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
        TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
          .py-3.py-md-4(titulo="Productivos")
            .row.justify-content-center.align-items-center
              .col-xl-5.order-2.order-lg-1
                figure
                  img(src='@/assets/curso/tema1/img6.png', alt="" ).m-auto
              .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                h4.txt--purpura Productivos
                p.mb-0 Evalúa el rendimiento del cultivo. Ejemplos: Factor de conversión alimenticia (FCA), tasa de crecimiento, biomasa y ganancia de peso. Su importancia está en que determinan la eficiencia productiva y rentabilidad.
          .py-3.py-md-4(titulo="Sanitarios")
            .row.justify-content-center.align-items-center
              .col-xl-5.order-2.order-lg-1
                figure
                  img(src='@/assets/curso/tema1/img7.png', alt="" ).m-auto
              .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                h4.txt--purpura Sanitarios
                p.mb-0 Evalúa el estado de salud del cultivo. Ejemplos: Mortalidad acumulada, morbilidad e incidencia de enfermedades. Permite detectar problemas sanitarios oportunamente.
          
          .py-3.py-md-4(titulo="Ambientales")
            .row.justify-content-center.align-items-center
              .col-xl-5.order-2.order-lg-1
                figure
                  img(src='@/assets/curso/tema1/img8.png', alt="" ).m-auto
              .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                h4.txt--purpura Ambientales
                p.mb-0 Evalúa la calidad del agua o medio acuático. Ejemplos: oxígeno disuelto, la temperatura del agua, pH, amonio y nitritos. Es importante porque garantiza el bienestar animal y crecimiento adecuado.
    
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Principales indicadores productivos 
    p.mb-5 A continuación, se describen los principales indicadores técnicos productivos utilizados en la gestión acuícola. Estos indicadores constituyen herramientas de análisis que permiten evaluar el desempeño biológico del cultivo, medir la eficiencia en el uso de los recursos, estimar la rentabilidad del sistema y sustentar la toma de decisiones técnicas durante todo el ciclo productivo.
     h2 Factor de Conversión Alimenticia (FCA)
    p.mb-5 El Factor de Conversión Alimenticia (FCA) expresa la relación entre la cantidad total de alimento suministrado y el incremento de biomasa logrado en el lote durante un período determinado. Constituye uno de los indicadores más relevantes en la gestión técnica y financiera del cultivo Antes de presentar los elementos clave, se sintetiza la información principal: 
    .bg-slider.mb-5
          .px-5
            .ajuste-slider(data-aos="zoom-in")
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Concepto y cálculo 
                    p.mb-0 Relación entre el total de alimento suministrado (kg) y el incremento de biomasa (kg).FCA = Total de alimento suministrado (kg) / Incremento de biomasa (kg).
                   
                  .col-xl-6
                    figure
                      img(src='@/assets/curso/tema1/img11.png', alt='' style="max-width: 500px").m-auto
                  
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Importancia técnica y económica
                    p.mb-0 El alimento balanceado representa el mayor costo operativo en acuicultura. Un FCA bajo indica mejor aprovechamiento del alimento, menor desperdicio y mayor rentabilidad.
                    
              
                  .col-xl-6
                    figure
                      img(src='@/assets/curso/tema1/img9.png', alt='' style="max-width: 500px").m-auto
                  
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4.mb-md-0
                    h4 Obtención del dato
                    p.mb-0 Requiere registros diarios precisos del alimento ofrecido y biometrías periódicas para estimar el crecimiento real del lote.
                    
                  .col-xl-6
                    figure
                      img(src='@/assets/curso/tema1/img10.png', alt='' style="max-width: 500px").m-auto
    p.mb-5 Este indicador permite evaluar la eficiencia alimenticia y realizar ajustes oportunos en la ración y en el manejo del sistema. En coherencia con lo anterior, la tasa de alimentación se ajusta según el peso promedio de los peces, tal como se presenta a continuación:

    p.mb-5 La tasa también puede expresarse en cifras decimales (por ejemplo, 12 % equivale a 0,12), lo cual facilita su aplicación en cálculos técnicos.

    h2 Tasa de Crecimiento Específico (TCE)

    p.mb-5 La Tasa de Crecimiento Específico (TCE) mide el porcentaje de crecimiento diario del organismo, considerando su peso inicial y final en un período determinado. Este indicador permite comparar el desempeño entre diferentes lotes, ciclos productivos o sistemas de cultivo. A continuación, se sintetizan sus componentes principales:
        TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
          .py-3.py-md-4(titulo="Concepto y fórmula")
            .row.justify-content-center.align-items-center
              .col-xl-5.order-2.order-lg-1
                figure
                  img(src='@/assets/curso/tema1/img12.png', alt="" ).m-auto
              .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                h4.txt--purpura Concepto y fórmula
                p.mb-0 Porcentaje de crecimiento diario con base en el peso inicial y final. TCE (%) = [(ln peso final - ln peso inicial) / Número de días] x 100
          .py-3.py-md-4(titulo="Relevancia")
            .row.justify-content-center.align-items-center
              .col-xl-5.order-2.order-lg-1
                figure
                  img(src='@/assets/curso/tema1/img13.png', alt="" ).m-auto
              .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                h4.txt--purpura Relevancia
                p.mb-0 Permite comparar desempeño entre lotes y evaluar respuesta a cambios nutricionales o ambientales.
          .py-3.py-md-4(titulo="Obtención del dato")
            .row.justify-content-center.align-items-center
              .col-xl-5.order-2.order-lg-1
                figure
                  img(src='@/assets/curso/tema1/img14.png', alt="" ).m-auto
              .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                h4.txt--purpura Obtención del dato
                p.mb-0 Se basa en muestreos representativos de peso y requiere precisión en fechas y biometrías.
    
    h2.mb-5 Ganancia Diaria de Peso (GDP)    

    p.mb-5 La Ganancia Diaria de Peso (GDP) representa el incremento promedio de peso por individuo en un intervalo de tiempo específico. Es un indicador práctico para la proyección de cosecha y la planificación comercial. Sus elementos esenciales se presentan a continuación:           
    
    .bg-carrusel
      .px-5
        .row.align-items-center.mb-5
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/tema1/img16.png', alt='' style="max-width: 250px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-4 col-xl-4")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema1/img2.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Organización lógica
                p.mb-0.text-center Disposición ordenada de los componentes del proyecto.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema1/img3.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Secuencialidad
                p.mb-0.text-center Desarrollo progresivo de acciones conforme a un orden definido.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema1/img4.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Delimitación de responsabilidades
                p.mb-0.text-center Asignación clara de funciones y tareas.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema1/img5.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Priorización
                p.mb-0.text-center Determinación de qué acciones deben ejecutarse primero.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema1/img5.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Control y seguimiento
                p.mb-0.text-center Establecimiento de mecanismos para evaluar avances.








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
