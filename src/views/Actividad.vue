<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Gestión y Análisis Técnico de Indicadores en la Producción Acuícola.  ',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Evaluar el nivel de comprensión de los aprendices sobre los conceptos, cálculo, interpretación y aplicación de los indicadores técnicos de producción acuícola, así como su relación con los factores productivos, sanitarios, ambientales y la gestión de la información, fortaleciendo la toma de decisiones técnicas fundamentadas en datos.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué son los indicadores técnicos en la producción acuícola?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Registros financieros y administrativos del proceso productivo del cultivo',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Instrumentos de medición cuantitativa del desempeño del cultivo',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Métodos de cosecha manual o artesanal utilizados en sistemas acuícolas',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sistemas de comercialización y distribución de productos acuícolas',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 2,
          texto: '¿Cuál es la finalidad principal de los indicadores técnicos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Transformar datos en información útil para decisiones técnicas',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Reducir o disminuir gradualmente el trabajo manual, en la medida de lo posible',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Aumentar la densidad de siembra para analizar los resultados experimentales',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Disminuir el uso de tecnología e implementar más herramientas artesanales',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál entidad orienta el desarrollo sostenible del sector acuícola en Colombia?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'FAO',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'ICA',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'AUNAP',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Ministerio de Ambiente',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 4,
          texto: '¿Cuál de los siguientes es un indicador productivo?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Temperatura del agua',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mortalidad acumulada',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Factor de Conversión Alimenticia (FCA)',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'pH',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 5,
          texto: 'El Factor de Conversión Alimenticia (FCA) mide:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La cantidad de peces sembrados en lagos',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La calidad del agua, indispensable para desarrollo',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La relación entre alimento suministrado y biomasa obtenida',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El número de enfermedades y patógenos',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 6,
          texto:
            '¿Qué indicador mide el porcentaje de organismos vivos respecto al total sembrado?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Biomasa',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Supervivencia',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Morbilidad',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'GDP',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 7,
          texto: 'La Tasa de Crecimiento Específico (TCE) permite:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Medir mortalidad diaria o semanal',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Calcular o determinar el oxígeno disuelto',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evaluar costos administrativos asociados',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Comparar el crecimiento entre lotes',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál indicador ambiental es vital para la respiración de los organismos acuáticos?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'pH',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Temperatura',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Oxígeno disuelto',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Nitritos',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 9,
          texto: 'Un aumento inusual de la mortalidad puede indicar:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mejor crecimiento y rendimiento',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Problemas sanitarios o ambientales',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Alta eficiencia alimenticia y climática',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Buen manejo nutricional y desarrollo',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 10,
          texto:
            '¿Qué tipo de gráfico se usa para observar cambios de una variable en el tiempo?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Circular',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Histograma',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Línea',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Radar',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 11,
          texto: 'La gestión de la información productiva incluye:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Recolección, validación y análisis de datos',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Solo almacenamiento de datos existentes',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Únicamente cálculos matemáticos y asociados',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solo registros manuales tomados por el operario',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 12,
          texto:
            '¿Cuál es un principio fundamental de la gestión de información?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Improvisación',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Rapidez sin control',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Exactitud',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Subjetividad',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 13,
          texto: '¿Qué permite la trazabilidad en la producción acuícola?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir costos laborales y administrativos',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Incrementar densidad automáticamente',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Seguir el historial productivo del lote',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Evitar registros y duplicidad de información',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 14,
          texto:
            '¿Cuál factor afecta directamente los indicadores productivos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diseño del mercado, análisis del sector y demanda',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Factores ambientales, nutricionales y sanitarios',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Publicidad del producto, promoción y plaza',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Transporte comercial, distribución y recibo en punto',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 15,
          texto: '¿Para qué sirven las hojas de cálculo en acuicultura?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Organizar y analizar datos productivos',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Solo escribir textos información aleatoria',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reemplazar mediciones eventualmente',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar registros técnicos y administrativos',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 16,
          texto:
            '¿Cuál es el propósito de los pesajes periódicos en acuicultura?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Evaluar crecimiento y calcular indicadores productivos del cultivo',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Registrar únicamente eventos externos del entorno del sistema productivo',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Determinar únicamente condiciones climáticas externas del cultivo',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reducir exclusivamente el uso de alimento en el sistema productivo',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 17,
          texto:
            '¿Qué permite la validación de datos en la gestión de información acuícola?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminar completamente registros antiguos sin análisis técnico previo',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reducir el uso de herramientas digitales en el manejo del cultivo',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Asegurar datos confiables mediante revisión y corrección sistemática',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Evitar el registro continuo de datos durante el ciclo productivo',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 18,
          texto:
            '¿Cuál es una función del análisis técnico de la información productiva?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Almacenar datos sin realizar ningún tipo de análisis o interpretación',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reemplazar completamente los registros físicos del sistema productivo',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Interpretar datos para apoyar decisiones técnicas del cultivo acuícola',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Evitar el uso de indicadores en la gestión del cultivo acuícola',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 19,
          texto: '¿Qué permite la trazabilidad en la producción acuícola?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminar controles técnicos dentro del sistema productivo acuícola',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Respaldar decisiones mediante registros verificables del proceso productivo',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Reducir la importancia de los datos en la gestión del cultivo acuícola',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Evitar el cumplimiento de normas en la producción acuícola sostenible',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 20,
          texto:
            '¿Cuál es la importancia de la información base en acuicultura?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Servir como referencia para evaluar y monitorear el desempeño del cultivo',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Reemplazar completamente los indicadores técnicos del sistema acuícola',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Eliminar la necesidad de registros en el manejo del cultivo acuícola',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reducir el uso de datos en la toma de decisiones técnicas del cultivo',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
