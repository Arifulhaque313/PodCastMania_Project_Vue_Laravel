<template>
    <!--  -->
    <div class="relative max-h-screen max-w-full overflow-x-hidden">
        <Header></Header>
        <slot></slot>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from './Shared/Header.vue'
import Footer from './Shared/Footer.vue'
import { Head, Link } from '@inertiajs/inertia-vue3';
export default {
    components:{
        Header,
        Footer,
        Link
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
body{
	font-family: 'Nunito', sans-serif;
}

.background{
    background: url('/images/bg_portfolio.svg') no-repeat; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.hero_bg{
    background: url('/images/hero_bg.svg') no-repeat; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.statistic_bg{
    background: url('/statistics_section/statistic_bg.svg') no-repeat; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.hero_3rd_bg{
   background: url('/images/hero_3rd_sec/hero_3rd_bg.svg') no-repeat; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover; 
}
.hero_4th_bg{
  background: url('/images/hero_4th_sec/bg.svg') no-repeat; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover; 
}
.carousel2_bg{
   background: url('/images/hero_4th_sec/secon_carousel_image1.svg') no-repeat; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover; 
  
}

.achivement_bg{
   background: url('/images/acivement_sec/bg.svg') no-repeat; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover; 
}

.newsletter_bg{
   background: url('/images/news_letter_sec/bg.svg') no-repeat; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover; 
  
}

.newsletter_2nd_bg{
  background: linear-gradient(92.51deg, #AFC4F6 -2.03%, #B8E7F8 7.05%, #FFFFFF 40.52%, #FFFFFF 63.77%, #F9E9EE 88.39%, #FBE3D1 101.33%);
}

.about_section_bg{
    background: url('/images/about/bg.svg') no-repeat; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover; 
  background-position: right;
  background-size:cover
}


</style>