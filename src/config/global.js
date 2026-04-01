export default {
  global: {
    Name:
      'Gestión y Análisis Técnico de Indicadores en la Producción Acuícola.',
    Description:
      'El curso “Análisis de Indicadores Técnicos de Producción en el Cultivo Acuícola” fortalece las competencias necesarias para calcular, interpretar y analizar indicadores productivos, sanitarios y ambientales, fundamentales para la toma de decisiones técnicas y la sostenibilidad de los sistemas de cultivo. Está orientado a optimizar la gestión de la información y el uso de herramientas técnicas en el sector acuícola, contribuyendo a la calidad de la formación y al fortalecimiento de la competitividad del país.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Indicadores técnicos de la producción acuícola',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Aspectos fundamentales',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Clasificación de los indicadores técnicos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Principales indicadores productivos',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Interpretación de gráficos en la producción acuícola',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipología de gráficos aplicados en acuicultura',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Análisis técnico de tendencias',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Identificación de desviaciones técnicas',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Identificación de desviaciones técnicas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Gestión de la información productiva',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Recolección y registro de datos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Validación del dato',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Análisis técnico de la información',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Trazabilidad y soporte documental',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Información base',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Matemática aplicada',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Ofimática: herramientas y aplicaciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Registros: formatos y diligenciamiento',
            hash: 't_7_1',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Acuicultura',
      significado:
        'Actividad productiva dedicada al cultivo controlado de organismos acuáticos bajo condiciones técnicas definidas, con fines alimentarios, económicos y de sostenibilidad.',
    },
    {
      termino: 'Análisis técnico',
      significado:
        'Proceso de interpretación de datos productivos, sanitarios y ambientales para evaluar el desempeño del cultivo y apoyar la toma de decisiones fundamentadas.',
    },
    {
      termino: 'Biomasa',
      significado:
        'Peso total de los organismos vivos presentes en un sistema de cultivo en un momento determinado.',
    },
    {
      termino: 'Buenas Prácticas Acuícolas (BPA)',
      significado:
        'Conjunto de principios y procedimientos técnicos orientados a garantizar una producción acuícola sostenible, segura y conforme a la normativa vigente.',
    },
    {
      termino: 'Calidad del agua',
      significado:
        'Condición físico-química y biológica del agua que influye directamente en la salud, el crecimiento y la supervivencia de los organismos acuáticos.',
    },
    {
      termino: 'Densidad de siembra',
      significado:
        'Cantidad de organismos sembrados por unidad de área o volumen en un sistema de cultivo acuícola.',
    },
    {
      termino: 'Evaluación integral del cultivo',
      significado:
        'Análisis conjunto de los indicadores productivos, sanitarios y ambientales para comprender el comportamiento global del sistema acuícola.',
    },
    {
      termino: 'Factor de Conversión Alimenticia (FCA)',
      significado:
        'Indicador que expresa la relación entre la cantidad de alimento suministrado y el incremento de biomasa obtenido, utilizado para medir la eficiencia alimenticia.',
    },
    {
      termino: 'Ganancia Diaria de Peso (GDP)',
      significado:
        'Incremento promedio de peso por individuo en un período de tiempo determinado.',
    },
    {
      termino: 'Gestión de la información productiva',
      significado:
        'Proceso sistemático de recolección, registro, validación y análisis de datos técnicos del cultivo acuícola.',
    },
    {
      termino: 'Indicadores ambientales',
      significado:
        'Parámetros que permiten evaluar la calidad del entorno acuático, como oxígeno disuelto, temperatura, pH, amonio y nitritos.',
    },
    {
      termino: 'Indicadores productivos',
      significado:
        'Indicadores que miden el rendimiento y la eficiencia del cultivo, tales como crecimiento, biomasa, supervivencia y conversión alimenticia.',
    },
    {
      termino: 'Indicadores sanitarios',
      significado:
        'Indicadores utilizados para evaluar el estado de salud del cultivo, incluyendo morbilidad, incidencia de enfermedades y mortalidad.',
    },
    {
      termino: 'Indicadores técnicos',
      significado:
        'Herramientas de medición cuantitativa que permiten evaluar el desempeño del cultivo acuícola desde los componentes productivo, sanitario y ambiental.',
    },
    {
      termino: 'Incidencia de enfermedad',
      significado:
        'Número de casos nuevos de una patología identificados en un período determinado dentro del cultivo.',
    },
    {
      termino: 'Matemática aplicada',
      significado:
        'Uso de operaciones, fórmulas y cálculos matemáticos para el análisis de datos y el cálculo de indicadores técnicos en acuicultura.',
    },
    {
      termino: 'Morbilidad',
      significado:
        'Proporción de organismos enfermos dentro de una población acuícola en un momento o período específico.',
    },
    {
      termino: 'Ofimática',
      significado:
        'Conjunto de herramientas digitales, como hojas de cálculo y software de análisis, utilizadas para organizar, procesar y visualizar información productiva.',
    },
    {
      termino: 'Oxígeno disuelto (OD)',
      significado:
        'Cantidad de oxígeno disponible en el agua, esencial para la respiración y el metabolismo de los organismos acuáticos.',
    },
    {
      termino: 'pH',
      significado:
        'Medida del grado de acidez o alcalinidad del agua, que influye en los procesos fisiológicos del cultivo.',
    },
    {
      termino: 'Registros productivos',
      significado:
        'Formatos o documentos donde se consignan de manera sistemática los datos técnicos del cultivo acuícola.',
    },
    {
      termino: 'Supervivencia (%)',
      significado:
        'Porcentaje de organismos vivos en relación con el total sembrado inicialmente.',
    },
    {
      termino: 'Tasa de Crecimiento Específico (TCE)',
      significado:
        'Indicador que expresa el crecimiento diario porcentual de los organismos en función de su peso inicial y final.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'Capacidad de seguir y verificar la información productiva del cultivo a lo largo del tiempo mediante registros documentados y confiables.',
    },
    {
      termino: 'Validación del dato',
      significado:
        'Proceso mediante el cual se verifica la coherencia, consistencia y confiabilidad de la información registrada.',
    },
  ],
  referencias: [
    {
      referencia:
        'Autoridad Nacional de Acuicultura y Pesca (AUNAP). (2023). Lineamientos para el desarrollo sostenible de la acuicultura en Colombia. AUNAP.',
      link: 'https://www.aunap.gov.co',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario (ICA). (2022). Normativa sanitaria para la producción y comercialización de organismos acuáticos en Colombia. ICA.',
      link: 'https://www.ica.gov.co',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO). (2022). El estado mundial de la pesca y la acuicultura 2022. FAO.',
      link: 'https://www.fao.org',
    },
    {
      referencia:
        'Boyd, C. E., & Tucker, C. S. (2012). Pond aquaculture water quality management. Springer.',
      link: '',
    },
    {
      referencia:
        'Tacon, A. G. J., & Metian, M. (2015). Feed matters: Satisfying the feed demand of aquaculture. Reviews in Fisheries Science & Aquaculture, 23(1), 1–10.',
      link: '',
    },
    {
      referencia:
        'Pillay, T. V. R., & Kutty, M. N. (2005). Aquaculture: Principles and practices (2nd ed.). Blackwell Publishing.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez P.',
          cargo: 'Líder del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez',
          cargo: 'Responsable de Línea de Producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Andrés Machado Milanés',
          cargo: 'Experto temático',
          centro: 'Centro Agropecuario y de Biotecnología el Porvenir.',
        },
        {
          nombre: 'Eliana Audrey Manchola Pérez',
          cargo: 'Experta temática (actualización)',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paula Marcela Vidal Quintero',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Fredy Fabian Ortiz Segura',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cielo Damaris Angúlo Rodríguez',
          cargo: 'Desarrollador <i>fullstack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos eduardo Garavito Parada',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Fabio Armando Ortiz Reyes',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
