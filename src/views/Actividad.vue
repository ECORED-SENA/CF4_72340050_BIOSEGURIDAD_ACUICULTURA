<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'La explotación acuícola:  criterios técnicos y normas vigentes',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Identificar los elementos clave de la estructura de un informe técnico, comprendiendo su propósito, componentes y la importancia de cada sección.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál es el propósito principal de un informe técnico?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Comunicar opiniones personales sobre un tema.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mejorar las ventas de una empresa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Presentar resultados y recomendaciones de una investigación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Describir productos comerciales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Qué se incluye en la presentación del informe técnico?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Resultados y análisis.', esCorrecta: false },
            { id: 'b', texto: 'Portada e índice.', esCorrecta: true },
            { id: 'c', texto: 'Conclusiones detalladas.', esCorrecta: false },
            { id: 'd', texto: 'Gráficos y tablas.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de las siguientes opciones es una parte de la estructura de un informe técnico?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Hallazgos o resultados.', esCorrecta: true },
            {
              id: 'b',
              texto: 'Estrategias de <i>marketing</i>.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Opiniones de los colaboradores.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Resumen ejecutivo.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Para qué se utiliza un plan de acción en el informe técnico?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mejorar y corregir el flujo de producción.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Elaborar estrategias de venta.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Publicar investigaciones en revistas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Crear campañas publicitarias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué se describe en la introducción del informe?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Análisis de ventas.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Breve descripción del informe.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Detalles del presupuesto.', esCorrecta: false },
            { id: 'd', texto: 'Opiniones del equipo.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué parte del informe técnico es vital para la toma de decisiones?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Índice.', esCorrecta: false },
            { id: 'b', texto: 'Anexos.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Conclusiones y recomendaciones.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Portada.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué se suele encontrar en el anexo de un informe técnico?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Estrategias de <i>marketing</i>.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Resumen ejecutivo.', esCorrecta: false },
            { id: 'c', texto: 'Tablas y figuras.', esCorrecta: true },
            { id: 'd', texto: 'Evaluaciones de desempeño.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué elemento es clave para evaluar el contenido del informe técnico?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Publicidad del documento.', esCorrecta: false },
            { id: 'b', texto: 'Cantidad de páginas.', esCorrecta: false },
            { id: 'c', texto: 'Precio del informe.', esCorrecta: false },
            { id: 'd', texto: 'Análisis y evaluación.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'Un informe técnico debe incluir un plan de acción para corregir el flujo de producción.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: true },
            { id: 'b', texto: 'Falso.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'Las recomendaciones son una parte opcional y no esencial del informe técnico.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: false },
            { id: 'b', texto: 'Falso.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
