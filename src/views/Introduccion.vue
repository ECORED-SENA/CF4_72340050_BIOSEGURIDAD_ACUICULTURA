<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.bg1.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center          
          .col-lg-12    
            p(data-aos="fade-down").mb-4 El informe técnico es la fase final en la implementación de un programa de bioseguridad, desarrollado después de caracterizar, estructurar y verificar el proceso. 

            .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-down")
              .bloque-texto-g__img(
                :style="{'background-image': `url(${require('@/assets/curso/temas/2.png')})`}"
              )
              .bloque-texto-g__texto.p-4
                p.mb-0 Este informe permite analizar a fondo el desempeño del programa, optimizar la gestión del recurso humano, y evaluar la eficiencia en el uso de equipos y maquinaria. Además, facilita la identificación de la necesidad de ajustar o crear nuevos planes para alcanzar los objetivos establecidos. 

            .row.justify-content-center(data-aos="fade-right")
              .col-lg-auto
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/3.svg', alt='')        
              .col.pt-lg-0.pt-md-4
                p(data-aos="fade-down").mb-0 La elaboración del informe técnico es fundamental para garantizar la mejora continua del programa de bioseguridad. A través de este, se generan recomendaciones y ajustes que se transforman en un plan de acción, orientado a garantizar la inocuidad de los alimentos producidos, proteger el medio ambiente y asegurar las condiciones laborales del personal. El informe técnico, por tanto, se convierte en una herramienta esencial para la toma de decisiones estratégicas en el ámbito de la explotación acuícola.     
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
