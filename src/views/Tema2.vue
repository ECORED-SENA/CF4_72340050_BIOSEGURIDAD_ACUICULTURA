<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 Plan de acción

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/34.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Un plan de acción es la herramienta para concretar y asignar tareas, estableciendo plazos y estimando el uso de recursos. Se trata de un resumen de las acciones a llevar a cabo en tiempos específicos, con los recursos asignados, para alcanzar el objetivo de mejorar la productividad en la explotación acuícola.

    .row.justify-content-start.mb-4
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.brad.p-0.px-4
            h3.mb-0 Elaboración

    .row.justify-content-center.mb-4(data-aos="fade-right")      
      .col.pt-lg-0.pt-md-4.j1
        p(data-aos="fade-down")  La creación del plan de acción es un proceso colaborativo que puede involucrar diversos departamentos y áreas. Es fundamental convocar al personal para su participación, a fin de cumplir con los objetivos establecidos.

        p(data-aos="fade-down").mb-0 Elementos del plan de acción:
      .col-lg-auto
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/19.svg', alt='')  

    .row.justify-content-center
      .col-lg-3.my-2 
        .bg5.brad.p-4(data-aos="fade-right")
          h5(data-aos="fade-down").mb-0 Objetivo
      .col-lg-5.my-2
        .bg6.brad.p-4(data-aos="fade-right")
          p(data-aos="fade-down").mb-0 Qué se desea lograr.

    .row.justify-content-center
      .col-lg-3.my-2 
        .bg5.brad.p-4(data-aos="fade-right")
          h5(data-aos="fade-down").mb-0 Cantidad y calidad
      .col-lg-5.my-2
        .bg6.brad.p-4(data-aos="fade-right")
          p(data-aos="fade-down").mb-0 Cuánto se aspira a lograr.

    .row.justify-content-center
      .col-lg-3.my-2 
        .bg5.brad.p-4(data-aos="fade-right")
          h5(data-aos="fade-down").mb-0 Tiempo 
      .col-lg-5.my-2
        .bg6.brad.p-4(data-aos="fade-right")
          p(data-aos="fade-down").mb-0 En qué plazo se desean alcanzar los objetivos.

    .row.justify-content-center
      .col-lg-3.my-2 
        .bg5.brad.p-4(data-aos="fade-right")
          h5(data-aos="fade-down").mb-0 Ubicación
      .col-lg-5.my-2
        .bg6.brad.p-4(data-aos="fade-right")
          p(data-aos="fade-down").mb-0 El lugar específico donde se implementará el plan.

    .row.justify-content-center
      .col-lg-3.my-2 
        .bg5.brad.p-4(data-aos="fade-right")
          h5(data-aos="fade-down").mb-0 Recursos
      .col-lg-5.my-2
        .bg6.brad.p-4(data-aos="fade-right")
          p(data-aos="fade-down").mb-0 Personal y recursos financieros necesarios.

    .row.justify-content-center
      .col-lg-3.my-2 
        .bg5.brad.p-4(data-aos="fade-right")
          h5(data-aos="fade-down").mb-0 Indicadores de avance
      .col-lg-5.my-2
        .bg6.brad.p-4(data-aos="fade-right")
          p(data-aos="fade-down").mb-0 Cómo identificar si se progresa hacia el objetivo.

    .row.justify-content-center
      .col-lg-3.my-2 
        .bg5.brad.p-4(data-aos="fade-right")
          h5(data-aos="fade-down").mb-0 Evaluación de resultados 
      .col-lg-5.my-2
        .bg6.brad.p-4(data-aos="fade-right")
          p(data-aos="fade-down").mb-0 El mecanismo para determinar si se alcanzó el objetivo.

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.my-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/36.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Es aconsejable diseñar no solo un plan de acción general, sino también planes de acción específicos por zonas o departamentos de la empresa para lograr los resultados deseados. Para elaborar un plan de acción, se debe empezar definiendo las acciones más amplias y luego desglosarlas en tareas más detalladas, sin olvidar considerar posibles restricciones, consecuencias y futuras mejoras. Se recomienda incluir los siguientes elementos en el diseño del plan de acción: 

    .row.justify-content-center.text-center.mb-4 
      .col-lg-3.my-3
        .bg2.p-4.brad.h-100(data-aos="fade-left")  
          img.img-a.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/37.svg', alt='') 
          p(data-aos="fade-down").mb-0 Actividades

      .col-lg-3.my-3
        .bg2.p-4.brad.h-100(data-aos="fade-left")  
          img.img-a.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/38.svg', alt='') 
          p(data-aos="fade-down").mb-0 Objetivo

      .col-lg-3.my-3
        .bg2.p-4.brad.h-100(data-aos="fade-right")  
          img.img-a.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/39.svg', alt='') 
          p(data-aos="fade-down").mb-0 Tiempo

      .col-lg-3.my-3
        .bg2.p-4.brad.h-100(data-aos="fade-right")  
          img.img-a.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/40.svg', alt='') 
          p(data-aos="fade-down").mb-0 Lugar  

      .col-lg-3.my-3
        .bg2.p-4.brad.h-100(data-aos="fade-left")  
          img.img-a.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/41.svg', alt='') 
          p(data-aos="fade-down").mb-0 Recursos 

      .col-lg-3.my-3
        .bg2.p-4.brad.h-100(data-aos="fade-right")  
          img.img-a.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/42.svg', alt='') 
          p(data-aos="fade-down").mb-0 Seguimiento 

      .col-lg-3.my-3
        .bg2.p-4.brad.h-100(data-aos="fade-right")  
          img.img-a.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/43.svg', alt='') 
          p(data-aos="fade-down").mb-0 Alcance del objetivo


    .row.justify-content-center.mb-4 
      .col-lg-8.my-3.order-1
        p(data-aos="fade-down") Revisar el plan de acción periódicamente permite evaluar el progreso y ajustar cualquier aspecto que no esté funcionando adecuadamente. Al finalizar el plan de acción, se realiza un balance para verificar si se lograron los objetivos planteados desde el inicio.

        p(data-aos="fade-down") En conclusión, un plan de acción detalla las acciones a realizar, asigna responsabilidades, define tiempos y recursos, y orienta a la organización hacia el logro de sus objetivos.

        p(data-aos="fade-down") A continuación, se describirá con un ejemplo un informe de auditoría para certificar una empresa productora de semillas de camarón (nauplios y postlarvas).
      .col-lg-4.my-3.order-lg-2
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/44.png', alt='')   

    .row.justify-content-center.mb-4
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/45.png', alt='')       
      .col-lg-8.my-3
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg6")(data-aos="fade-left")
          div(titulo="Título")
            p Informe de auditoría para la aprobación del establecimiento de producción de nauplios y postlarvas de camarón marino para exportar a Panamá.
          div(titulo="Índice")
            p Resumen 
            ul.lista-ul
              li 
                i.fas.fa-check-circle.color1
                span Introducción 
              li 
                i.fas.fa-check-circle.color1
                span Antecedentes 
              li 
                i.fas.fa-check-circle.color1
                span Objetivo de la inspección de origen 
              li 
                i.fas.fa-check-circle.color1
                span Objetivo general 
              li 
                i.fas.fa-check-circle.color1
                span Objetivos específicos, entre otros.
          div(titulo="Antecedentes")
            p Ecuador es el principal productor de camarón marino de América, desarrollando más de 250.000 hectáreas de producción semi intensiva y unos 142 centros de producción larval. La camaronicultura en este país, al igual que en países del área, ha sufrido el efecto de enfermedades virales, principalmente el Síndrome de Taura (ST) y la enfermedad de las manchas blancas (WSS), con pérdidas socioeconómicas de gran magnitud.
          div(titulo="Objetivo general")
            p Obtener información #[i in situ] para el análisis de riesgo de la condición sanitaria del país y del establecimiento TEXCUMAR S.A.
          div(titulo="Objetivos específicos")
            ul.lista-ul
              li 
                i.fas.fa-check-circle.color1
                span Verificar la condición sanitaria de Ecuador y la equivalencia de sus normas zoosanitarias para el comercio internacional.
              li 
                i.fas.fa-check-circle.color1
                span Evaluar los probables riesgos a la salud humana y/o animal, con la exportación de nauplios o postlarvas hacia Panamá.                                                 

    .row.justify-content-center 
      .col-lg-8.my-3
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg6")(data-aos="fade-right")
          div(titulo="Alcance")
            p Esta auditoría comprendió la verificación de la infraestructura del establecimiento respecto a la bioseguridad, revisión de la implementación de los protocolos de producción, bioseguridad, aplicación de buenas prácticas de producción acuícola, entre otras acciones.
          div(titulo="Metodología")
            p Se procedió con una reunión de coordinación del proceso de auditoría con el gerente y su equipo de trabajo, para luego pasar a la inspección de las instalaciones, funcionamiento, revisión de los registros (trazabilidad) y posteriormente una reunión con su personal técnico, para captar la información del formulario oficial de DINASA “Protocolo de Inspección Sanitaria Acuícola” I.P.3.1 (Anexo 2) y obtener la información necesaria para evaluar el riesgo sanitario, asociado a la importación.
          div(titulo="Verificación <i>in situ</i>")
            p En el establecimiento de maduración y de larvicultura, se revisó la documentación y se verificó #[i in situ], paso a paso, la facilidad de cada estructura y la aplicación de los diferentes protocolos, buenas prácticas de producción y medidas de bioseguridad establecidas en sus procesos de producción de nauplios y postlarvas.
          div(titulo="Conclusiones")
            ul.lista-ul
              li 
                i.fas.fa-check-circle.color1
                span El establecimiento TEXCUMAR S.A. cumple con las normas sanitarias nacionales y mantiene un estatus sanitario satisfactorio. 

              li 
                i.fas.fa-check-circle.color1
                span Como toda actividad productiva con organismos vivos, existe riesgo sanitario por la importación de estos en cualquiera de sus estados del ciclo de vida, lo cual hace necesario que se cumplan a cabalidad todas las normas internacionales zoosanitarias, al igual que a la llegada y estadía en Panamá.
          div(titulo="Anexo")
            p Tablas, figuras, esquemas.  
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/46.png', alt='')   


                                          

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
