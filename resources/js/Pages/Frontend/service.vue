<template>
  <div class="mt-24 mx-12">
    <carousel :items-to-show="item_to_show">
        <slide v-for="slide in 10" :key="slide">
            <div class="w-28 h-28 bg-indigo-500"></div>
        </slide>

        <template #addons>
        <navigation />
       
        </template>
    </carousel>
  </div>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data(){
    return{
        item_to_show : 3
    }
  },
  mounted (){
       if(screen.width <768){
          this.item_to_show = 1;  
           
       }
       console.log(screen.width);

       watch:{
       }
  },

 
};
</script>