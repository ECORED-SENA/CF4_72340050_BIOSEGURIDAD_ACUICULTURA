export default {
  global: {
    componenteFormativo:
      'La explotación acuícola:  criterios técnicos y normas vigentes',
    descripcionCurso:
      'El componente formativo trata sobre la bioseguridad en acuicultura, destacando la elaboración de informes técnicos y planes de acción. Incluye la estructura, metodología y recomendaciones para la implementación de programas de bioseguridad, enfatizando la importancia de un plan de acción para asegurar la inocuidad alimentaria, la protección ambiental y la seguridad del personal en la explotación acuícola.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
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
        titulo: 'Informe técnico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Presentación',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Desarrollo, hallazgos y resultados',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Plan de acción',
        desarrolloContenidos: true,
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/72340050_CF04_DU.pdf',
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
  complementario: [
    {
      tema: 'Informe técnico.',
      referencia:
        'Digitalinvit. (2021). CÓMO HACER UN INFORME EN WORD  REDACTAR UN INFORME CORRECTAMENTE EN 5 MINUTO. [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/zy9hyWjf29w?si=PmhU-zq_HU-UbIPp',
    },
    {
      tema: 'Presentación.',
      referencia:
        'LA PROFE MÓNICA. (2022). CÓMO HACER UN INFORME - pasos y sugerencias - Edutuber La profe Mónica. [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/hHMV9wMXZrg?si=X8TWQA3OGUy_xX9b',
    },
    {
      tema: 'Desarrollo, hallazgos y resultados.',
      referencia:
        'Udearroba. (2019). Hallazgos de investigación. [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/M51uodqnqYI?si=fbmXEnHBSbBJHlvH',
    },
    {
      tema: 'Plan de acción.',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022). Plan de acción. [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/eFJOKJMVsQs?si=0Lp0JtUQVIGd7Ho0',
    },
  ],
  glosario: [
    {
      termino: 'Análisis',
      significado:
        'evaluación detallada de los datos recopilados durante la investigación.',
    },
    {
      termino: 'Anexo',
      significado:
        'parte del informe que incluye material adicional como tablas y figuras.',
    },
    {
      termino: 'Conclusiones',
      significado:
        'resumen de los resultados y recomendaciones basadas en el análisis realizado.',
    },
    {
      termino: 'Hallazgos',
      significado:
        'resultados obtenidos a partir de un análisis o investigación.',
    },
    {
      termino: 'Informe técnico',
      significado:
        'documento que comunica resultados, análisis y recomendaciones de una investigación específica.',
    },
    {
      termino: 'Introducción',
      significado:
        'sección inicial del informe que describe el objetivo y contexto del estudio.',
    },
    {
      termino: 'Monitoreo',
      significado:
        'proceso de seguimiento de los puntos críticos para mantenerlos bajo control.',
    },
    {
      termino: 'Normatividad',
      significado:
        'conjunto de normas que rigen la realización y presentación del informe.',
    },
    {
      termino: 'Plan de acción',
      significado:
        'estrategia para mejorar y corregir procesos en un informe técnico.',
    },
    {
      termino: 'Puntos críticos de control',
      significado:
        'áreas donde se deben aplicar medidas para evitar riesgos y asegurar la calidad.',
    },
  ],
  referencias: [
    {
      referencia:
        'Real Academia Española. (s. f.). <i>Diccionario de la lengua española.</i>',
      link: 'http://dle.rae.es/?id=SpXqUn9',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (s. f.). <i>¿Qué es un plan de acción?</i>',
      link:
        'https://www.minsalud.gov.co/Documentos%20y%20Publicaciones/Plan%20de%20acci%C3%B3n.pdf',
    },
    {
      referencia:
        'Perdomo, G. (s. f.). <i>Guía para elaboración de un informe técnico.</i>',
      link: 'http://guillermoperdomo.blogspot.com.co',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Frank Esquivel Acosta',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y servicios - Regional Tolima',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andres Felipe Herrera Roldan',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edward Leonardo Pico Cabra',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
