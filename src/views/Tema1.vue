<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Indicadores técnicos de la producción acuícola 
    .row.align-items-center.justify-content-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .caja-tema1.cambio-color-1.mb-3(data-aos="fade-right")
          p.mb-0 Son instrumentos de medición cuantitativa que permiten evaluar el desempeño del cultivo mediante el análisis de diferentes aspectos fundamentales, entre ellos la producción, la sanidad, las condiciones ambientales y los factores económicos, facilitando así la toma de decisiones técnicas y la mejora de la gestión productiva.
        p.mb-0 Los datos productivos confiables comprenden información clave para el seguimiento y evaluación del cultivo, incluyendo el peso y la biomasa de los organismos, el consumo de alimento, los índices de mortalidad, los parámetros fisicoquímicos del agua y los costos operativos, elementos esenciales para una adecuada gestión técnica y productiva.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img1.png', alt='').m-auto
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
                p.mb-0 Transforman los datos en información técnica útil que permite la toma de decisiones, el monitoreo permanente del cultivo, la identificación de tendencias productivas, la comparación con estándares establecidos y la implementación de procesos de mejora continua orientados a optimizar el desempeño del sistema productivo.
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
                h4 Importancia productiva
                p.mb-0 Permiten realizar la evaluación económica y financiera del cultivo, facilitar la detección temprana de problemas productivos, optimizar el uso de los recursos disponibles, asegurar el cumplimiento normativo y fortalecer la gestión documental, contribuyendo a una administración técnica y eficiente del sistema productivo.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema1/img5.png', alt='' style="max-width: 500px").m-auto
    .caja-tema1.mb-0(data-aos="zoom-in")
      .row.align-items-center
        .col-xl-auto.col-md-2.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/tema1/img1.svg', alt='' style="width: 77px").m-auto
        .col-xl.col-md-10
          p.mb-0 La gestión acuícola eficiente y sostenible se fundamenta en la toma de decisiones basadas en datos, lo que permite aumentar la competitividad del sistema productivo, reducir riesgos operativos y ambientales, y promover una producción sostenible orientada al uso responsable de los recursos y la mejora continua del cultivo.
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Clasificación de los indicadores técnicos 
    p.mb-5 La producción acuícola moderna exige un control técnico sustentado en indicadores que permitan analizar el comportamiento del cultivo desde una perspectiva integral. No basta con medir resultados finales; es necesario comprender cómo evoluciona el rendimiento productivo, cuál es la condición sanitaria de los organismos y en qué estado se encuentran las variables del medio acuático. Esta lectura articulada permite anticipar riesgos, optimizar recursos y sostener la viabilidad económica del sistema. A continuación, se presentan los principales indicadores productivos, sanitarios y ambientales que orientan el seguimiento técnico del cultivo:
    TabsC.color-acento-contenido.mb-0(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Productivos")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/tema1/img6.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura Productivos
            p.mb-0 Evalúa el rendimiento del cultivo. Ejemplos: Factor de conversión alimenticia (FCA), tasa de crecimiento, biomasa y ganancia de peso. Su importancia está en que determinan la eficiencia productiva y la rentabilidad.
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
            p.mb-0 Evalúa la calidad del agua o medio acuático. Ejemplos: oxígeno disuelto, la temperatura del agua, pH, amonio y nitritos. Es importante porque garantiza el bienestar animal y el crecimiento adecuado.
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Principales indicadores productivos 
    p.mb-5 A continuación, se describen los principales #[b indicadores técnicos productivos] utilizados en la gestión acuícola. Estos indicadores constituyen herramientas de análisis que permiten evaluar el desempeño biológico del cultivo, medir la eficiencia en el uso de los recursos, estimar la rentabilidad del sistema y sustentar la toma de decisiones técnicas durante todo el ciclo productivo.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img18.svg" style="max-width: 60px").m-auto
      .col
        h3 Factor de Conversión Alimenticia (FCA)
    p.mb-5 El #[b Factor de Conversión Alimenticia (FCA)] expresa la relación entre la cantidad total de alimento suministrado y el incremento de biomasa logrado en el lote durante un período determinado. Constituye uno de los indicadores más relevantes en la gestión técnica y financiera del cultivo. Antes de presentar los elementos clave, se sintetiza la información principal: 
    .bg-slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Concepto y cálculo 
                p Relación entre el total de alimento suministrado (kg) y el incremento de biomasa (kg). 
                p.mb-0 FCA = Total de alimento suministrado (kg) / Incremento de biomasa (kg).
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
              .col-xl-6.mb-4
                h4 Obtención del dato
                p.mb-0 Requiere registros diarios precisos del alimento ofrecido y biometrías periódicas para estimar el crecimiento real del lote.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema1/img10.png', alt='' style="max-width: 500px").m-auto
    .bg-1
      .px-5
        p.mb-5 Este indicador permite evaluar la eficiencia alimenticia y realizar ajustes oportunos en la ración y en el manejo del sistema. En coherencia con lo anterior, la tasa de alimentación se ajusta según el peso promedio de los peces, tal como se presenta a continuación:
        .row.justify-content-center.mb-5
          .col-xl-6
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 1.
              span Tasa de alimentación según peso promedio
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Peso promedio peces (g)
                    th.texto-left Tasa de alimentación (%)
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left 0 a 5
                    td.texto-left 12 %
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left 5 a 10
                    td.texto-left 10 %
                  tr
                    td.ajuste-border-tabla.texto-left 10 a 20
                    td.texto-left 8 %
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left 20 a 50
                    td.texto-left 7 %
                  tr
                    td.ajuste-border-tabla.texto-left 50 a 100
                    td.texto-left 6 %
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left 100 a 150
                    td.texto-left 4 %
                  tr
                    td.ajuste-border-tabla.texto-left 150 a 200
                    td.texto-left 3 %
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left 200 a 250
                    td.texto-left 2 %
                  tr
                    td.ajuste-border-tabla.texto-left 250 a 350
                    td.texto-left 1,5 %
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left 350 a 500
                    td.texto-left 1 %
        p.mb-5 La tasa también puede expresarse en cifras decimales (por ejemplo, 12 % equivale a 0,12), lo cual facilita su aplicación en cálculos técnicos.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img18.svg" style="max-width: 60px").m-auto
      .col
        h3 Tasa de Crecimiento Específico (TCE)
    p.mb-5 La #[b Tasa de Crecimiento Específico (TCE)] mide el porcentaje de crecimiento diario del organismo, considerando su peso inicial y final en un período determinado. Este indicador permite comparar el desempeño entre diferentes lotes, ciclos productivos o sistemas de cultivo. A continuación, se sintetizan sus componentes principales:
    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Concepto y fórmula")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/tema1/img12.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura Concepto y fórmula
            p.mb-0 Porcentaje de crecimiento diario con base en el peso inicial y final. 
            p.mb-0 TCE (%) = [(ln peso final - ln peso inicial) / Número de días] x 100.
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
    p.mb-5 La TCE resulta especialmente útil para analizar el impacto de ajustes en alimentación, calidad de agua o densidad de siembra.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img18.svg" style="max-width: 60px").m-auto
      .col
        h3 Ganancia Diaria de Peso (GDP)
    p.mb-5 La Ganancia Diaria de Peso (GDP) representa el incremento promedio de peso por individuo en un intervalo de tiempo específico. Es un indicador práctico para la proyección de cosecha y la planificación comercial. Sus elementos esenciales se presentan a continuación:         
    .bg-carrusel
      .px-5
        .row.align-items-center.mb-5
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/tema1/img16.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema1/img2.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Concepto
                p.mb-0.text-center Incremento promedio de peso por individuo en un período determinado.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema1/img3.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Cálculo general
                p.mb-0.text-center GDP = (Peso final - Peso inicial) / Días del período.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema1/img4.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Cálculo alternativo
                p.mb-0.text-center GDP = Incremento en biomasa / Número de peces.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema1/img5.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Importancia
                p.mb-0.text-center Facilita la proyección de tiempos de cosecha, programación de mercado y planificación financiera.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema1/img6.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Obtención del dato
                p.mb-0.text-center Se calcula a partir de pesajes periódicos y registros cronológicos del ciclo productivo.
        p.mb-5 Este indicador complementa la TCE, ya que expresa el crecimiento en términos absolutos y facilita su interpretación operativa.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img18.svg" style="max-width: 60px").m-auto
      .col
        h3 Supervivencia (%)
    p.mb-5 El indicador de #[b supervivencia (%)] señala el porcentaje de organismos que permanecen vivos respecto al total sembrado inicialmente. Constituye una medida directa de la eficiencia del manejo sanitario y ambiental. Los  aspectos fundamentales son:
    .bg-slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Concepto y fórmula 
                p Porcentaje de organismos vivos respecto al total sembrado.
                p.mb-0 #[b Supervivencia (%)] = (Número final de individuos / Número inicial sembrado) x 100.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema1/img19.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Importancia
                p.mb-0 Refleja la eficiencia del manejo sanitario, la calidad del agua y la adecuación de las condiciones ambientales.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema1/img20.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Obtención del dato
                p.mb-0 Se fundamenta en registros de siembra y control diario de mortalidad.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema1/img21.png', alt='' style="max-width: 500px").m-auto
    p.mb-5 Altos niveles de mortalidad pueden asociarse a fallas en bioseguridad, manejo nutricional o parámetros fisicoquímicos inadecuados. Las actividades de muestreo, control de mortalidad y seguimiento de parámetros de agua son determinantes para mantener niveles adecuados de supervivencia.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img18.svg" style="max-width: 60px").m-auto
      .col
        h3 Biomasa total
    p.mb-5 La #[b biomasa total] corresponde al peso acumulado del lote en un momento específico del ciclo productivo. Este indicador integra crecimiento y supervivencia, por lo que resulta esencial en la gestión operativa. A continuación, se sintetizan sus componentes:
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        .caja-tema1-2.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/tema1/img22.png', alt="" ).m-auto
            h4.text-center Concepto
            p.mb-0.text-center Peso total acumulado del lote en un momento determinado.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1-2.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/tema1/img23.png', alt="" ).m-auto
            h4.text-center Cálculo
            p.mb-0.text-center Biomasa = a Peso promedio individual x Número de organismos vivos. 
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1-2.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/tema1/img24.png', alt="" ).m-auto
            h4.text-center Importancia
            p.mb-0.text-center Permite ajustar la ración alimenticia, determinar densidad de carga y calcular requerimientos de oxigenación.
      .col-xl-3.col-md-9(data-aos="fade-left")
        .caja-tema1-2.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/tema1/img25.png', alt="" ).m-auto
            h4.text-center Obtención del dato
            p.mb-0.text-center Se obtiene mediante biometrías representativas y estimaciones actualizadas de supervivencia.
    .caja-tema1.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl-auto.col-md-2.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/tema1/img26.svg', alt='' style="width: 77px").m-auto
        .col-xl.col-md-10
          p.mb-0 El cálculo oportuno de la biomasa total permite ajustar la alimentación diaria y prevenir problemas asociados a sobrecarga del sistema, como déficit de oxígeno o deterioro de la calidad del agua.
    p.mb-5 Para explorar las condiciones esenciales del cultivo acuícola, la correcta obtención de datos productivos, las recomendaciones generales de manejo y las prácticas de fertilización de estanques que favorecen un sistema eficiente y sostenible, lo invitamos a conocer el presente pódcast.
    .row.align-items-center.m-0.mb-5
      .col-xl
        .row.align-items-center.justify-content-center.estilo___caja_7(data-aos="zoom-in")
          .col-auto.mb-4.mb-lg-0
            figure(data-aos="fade-right")
              img(src="@/assets/curso/tema1/img27.svg" style="max-width: 220px").m-auto
          .col
            h4.mb-4 Pódcast
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="Buenas prácticas para el manejo del estanque acuícola"
              :audio="require('@/assets/componentes/audios/Buenas_practicas_para_manejo_estanque_acuicola.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
      .col-xl-auto.d-none.d-xl-block
        figure(data-aos="fade-left")
          img(src="@/assets/curso/tema1/img28.png" ).m-auto
    p.mb-5 Luego de calcular los indicadores técnicos productivos, es necesario realizar su interpretación para comprender el comportamiento real del cultivo. Cada indicador aporta información específica que permite analizar el crecimiento, la eficiencia alimenticia y el desempeño general de la población acuícola, facilitando la toma de decisiones técnicas fundamentadas. A continuación, se presentan algunas interpretaciones:    
    .bg-carrusel
      .px-5
        .row.align-items-center.mb-5
          .col-xl-8(data-aos="fade-right")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema1/img29.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Peso promedio de peces
                p.mb-0 Es un indicador técnico que nos permite conocer el peso promedio real de los peces en diferentes periodos de tiempo con el objetivo de ajustar las raciones alimenticias de una población específica.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema1/img30.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Biomasa en peso de la población de peces
                p.mb-0.text-center Este indicador técnico nos da a conocer el peso total actual de la población de peces.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema1/img31.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Incremento en biomasa
                p.mb-0.text-center Ofrece información técnica sobre el aumento en biomasa en un periodo de tiempo por parte de la población de peces.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema1/img32.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Ganancia de peso diario
                p.mb-0.text-center Por medio de este indicador técnico podemos calcular los gramos de peso ganados por los peces diariamente.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema1/img33.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Ración diaria de alimento
                p.mb-0.text-center Es un indicador técnico que se obtiene teniendo en cuenta el número de animales, peso promedio y tasa alimenticia.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema1/img34.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Cantidad de alimento a consumir en el periodo
                p.mb-0 El resultado de este indicador técnico muestra la cantidad de alimento consumido por una población de peces en un periodo de tiempo.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema1/img35.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Factor de conversión alimenticia
                p.mb-0 Indica la relación entre el alimento suministrado a una población de peces y el incremento en peso que obtienen durante el tiempo que consumen el alimento.
          .col-xl-4(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/tema1/img36.png', alt='' style="max-width: 350px").m-auto
    .caja-tema1-3.mb-5(data-aos="flip-up")
      .row.align-items-center
        .col-xl.col-md-10.order-2.order-lg-1
          p.mb-0 Una vez conocidos los indicadores técnicos productivos, se da paso a los indicadores sanitarios, que son los que permiten evaluar el estado de salud del cultivo y constituyen un componente clave en los programas de vigilancia epidemiológica exigidos por el ICA. Estos se detallarán a continuación:
        .col-xl-auto.col-md-2.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/tema1/img37.svg', alt='' style="width: 85px").m-auto
    .row.align-items-center.mb-5
      .col-xl-auto
        figure(data-aos="fade-right").d-none.d-xl-block
          img(src="@/assets/curso/tema1/img38.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Morbilidad acumulada").ajuste-cajaAcordion
            ul.fa-ul.mb-3
              li.mb-1
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | #[b Concepto]: cantidad total de organismos muertos durante un período específico.
              li.mb-1
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | #[b Importancia]: un incremento inusual puede evidenciar brotes infecciosos, estrés ambiental o deficiencias en el manejo.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | #[b Obtención]: se registra diariamente y se consolida en informes periódicos.
          .row(titulo="Incidencia de enfermedad").ajuste-cajaAcordion
            ul.fa-ul.mb-3
              li.mb-1
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | #[b Concepto]: número de casos nuevos de una patología identificados en un período determinado.
              li.mb-1
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | #[b Importancia]: permite evaluar la dinámica de propagación de enfermedades y la efectividad de medidas de bioseguridad.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | #[b Obtención]: se determina mediante observación clínica y confirmación diagnóstica cuando sea necesario.
          .row(titulo="Tasa de morbilidad").ajuste-cajaAcordion
            ul.fa-ul.mb-3
              li.mb-1
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | #[b Concepto]: proporción de organismos enfermos dentro del total del lote.
              li.mb-1
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | #[b Fórmula: morbilidad (%)] = (Número de individuos enfermos / Total de individuos) x 100.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | #[b Importancia]: permite dimensionar el impacto sanitario y planificar acciones correctivas.
    p.mb-5 El monitoreo de las variables físico-químicas del agua constituye un componente esencial en la gestión ambiental del cultivo acuícola, dado que estas determinan las condiciones de bienestar y el desempeño fisiológico de los organismos. El control periódico y sistemático de estos parámetros permite mantener la estabilidad del sistema y prevenir alteraciones que afecten el crecimiento o la supervivencia:
    .row.align-items-center.mb-5
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-right")
          .row(titulo="Oxígeno Disuelto (OD)").ajuste-cajaAcordion
            ul.fa-ul.mb-3
              li.mb-1
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | #[b Concepto]: concentración de oxígeno disponible en el agua (mg/L).
              li.mb-1
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | #[b Importancia]: es vital para la respiración y metabolismo. Niveles bajos generan estrés fisiológico, disminución del consumo de alimento y mortalidad.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | #[b Medición]: mediante oxímetro calibrado o equipos multiparamétricos.
          .row(titulo="Temperatura").ajuste-cajaAcordion
            ul.fa-ul.mb-3
              li.mb-1
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | #[b Concepto]: grado térmico del agua en °C.
              li.mb-1
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | #[b Importancia]: influye directamente en la tasa metabólica, crecimiento y eficiencia alimenticia. Cada especie tiene rangos óptimos específicos.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | #[b Medición]: con termómetro digital o sensor multiparamétrico.
          .row(titulo="pH").ajuste-cajaAcordion
            ul.fa-ul.mb-3
              li.mb-1
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | #[b Concepto]: indica el nivel de acidez o alcalinidad del agua.
              li.mb-1
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | #[b Importancia]: valores fuera del rango óptimo pueden alterar procesos fisiológicos y aumentar la toxicidad de compuestos nitrogenados.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | #[b Medición]: mediante potenciómetro calibrado o kits colorimétricos.
          .row(titulo="Amonio y nitritos").ajuste-cajaAcordion
            ul.fa-ul.mb-3
              li.mb-1
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | #[b Concepto]: compuestos nitrogenados generados por el metabolismo de los peces y la descomposición de materia orgánica.
              li.mb-1
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | #[b Importancia]: en concentraciones elevadas resultan tóxicos, afectando principalmente el sistema branquial y circulatorio.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | #[b Medición]: mediante análisis colorimétricos o pruebas de laboratorio.
      .col-xl-auto
        figure(data-aos="fade-left").d-none.d-xl-block
          img(src="@/assets/curso/tema1/img39.png", alt="" ).m-auto
    p.mb-0 La evaluación conjunta de estos tres tipos de indicadores permite comprender el sistema productivo como un proceso biológico, técnico y económico interrelacionado e incide en el desempeño del cultivo. A esto se le llama “Evaluación Integral del Cultivo”.
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
