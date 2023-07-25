<template>
    <AppLayout>
         <div class="max-w-full h-auto md:h-[100vh] background pt-14 md:pt-24 flex items-center justify-center">
            <div class="max-w-7xl mx-auto">
                <div class="text-white text-center py-12">
                    <p class="font-['Helvetica'] text-3xl md:text-7xl font-bold">Meet The Host</p>
                    <p class="text-sm  font-semibold md:text-xl px-6 md:px-20 lg:px-60 mt-2 md:mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet sagittis ornare id libero aliquet sit eu. Libero, pulvinar proin lectus ornare aliquam in </p>
                </div>
            </div>
        </div>


        <!-- about section start  -->
        <div class="max-w-full  h-auto about_section_bg bg[#E5E5E5]  pt-2 md:pt-2">
            <div class="max-w-7xl mx-auto px-0 md:px-12">
                <!-- About main section start -->
                  <div class="grid grid-cols-12 gap-6 mt-8 md:mt-24 px-4 md:px-0 md:pb-16 items-center">
                    <div class="col-span-12 md:col-span-6 rounded-lg flex justify-center">
                        <img src="/images/about/main_img.svg" class="w-9/12" alt="">
                    </div>

                    <!-- right col start  -->
                    <div class="col-span-12 md:col-span-6 pl-0 md:pl-8 mt-6 md:mt-0">
                        <p class="text-[#080808] text-sm font-bold">Meet the host</p>
                        <p class="text-[#080808] text-xl md:text-2xl lg:text-3xl font-bold mt-2">Mr. Mission</p>
                        <p class="mt-2 md:mt-6 text-base md:text-lg font-bold text-[#070707] font-['Averia Gruesa Libre']  text-lg md:text-xl lg:text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis fermentum ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <p class="mt-4 md:mt-18 text-[rgba(0,0,0,0.7)] text-xs text-justify md:text-left md:text-sm lg:text-base font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet sagittis ornare id libero aliquet sit eu. Libero, pulvinar proin lectus ornare aliquam in dignissim. Sodales tincidunt vitae duis scelerisque massa. At arcu tristique pellentesque et commodo eget mauris Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet sagittis ornare id libero aliquet </p>

                        <div class="grid grid-cols-12 gap-2 mt-4 md:mt-6 pb-6 md:pb-0">
                            <div class="col-span-12 md:col-span-8 mt-2 md:mt-4">
                                 <div class="flex justify-content items-center ">
                                    <div>
                                        <button class="bg-gradient-to-r from-[#0616E0] to-[#01B9F7] px-4 py-1.5 md:px-6 md:py-2 text-sm md:text-xs font-medium md:font-semibold text-white rounded-full">GET IN TOUCH</button>
                                    </div>
                                    <div class="ml-8 flex justify-center items-center gap-6">
                                        <div>
                                            <img src="/images/about/social_icon/facebook-f.svg" alt="">
                                        </div>
                                        <div>
                                            <img src="/images/about/social_icon/linkedin-in.svg" alt="">
                                        </div>
                                        <div>
                                            <img src="/images/about/social_icon/twitter.svg" alt="">
                                        </div>
                                    </div>
                                 </div>
                                
                            </div> 
                        </div>
                    </div>
                  </div>
                  <!-- right cols end -->

                  <div class="max-w-full mx-auto mt-8">
                    <p class="text-[#2B3065] text-xl font-bold md:text-4xl md:font-bold px-4 md:px-0">Latest Episode</p>
                    <a href="/" class="underline text-sm md:text-base font-medium text-[#0087E9] px-4 md:px-0">Browse All</a>

                    <div class="py-4 md:py-12 grid grid-cols-12 px-4 md:px-0 gap-y-2 md:gap-8">
                            <div class="col-span-12 md:col-span-4 bg-white p-6 rounded-lg shadow-lg"  v-for="(row,index) in episode" :key="index">
                            <div class="flex justify-center">
                                <img class="w-[600px]" :src="row.img" alt="">
                            </div>

                            <div class="flex item-center gap-2 mt-2">
                                <span><img src="/images/about/headphones-alt.svg" alt=""></span>
                                <span class="font-bold text-[#0087E9]">{{row.type}}</span>
                            </div>
                            <p class="text-base font-semibold text-md:text-xl md:font-bold pb-0 md:pb-6 pt-2">{{row.title}}</p>
                         </div>
                        
                    </div>

                  </div>
            </div>
        </div>
        <!-- about section end  -->

         <!-- achivement and review section start  -->
        <div class="max-w-full  h-auto bg-[#E5E5E5] achivement_bg mb-12">
            <div class="max-w-7xl mx-auto md:px-12">
            
                  <div class="grid grid-cols-12 gap-6 mt-8 md:mt-24 px-4 md:px-0 md:pb-16 items-center">
                    <div class="col-span-12 md:col-span-6 rounded-lg ">
                        <img src="/images/acivement_sec/achivment.svg" class="w-full" alt="">
                    </div>
                    <div class="col-span-12 md:col-span-6 pl-0 md:pl-8">
                        <p class="text-[#0299F3] text-base md:text-xl font-bold">Achivements</p>
                        <p class="mt-1 md:mt-6 text-lg md:text-2xl lg:text-3xl font-bold text-[#212057]">Lorem Ipsum dolor sit amet, <br> consecetetur adipiscing elit Sit.</p>
                        <p class="mt-4 md:mt-8 lg:mt-12 text-xs text-justify md:text-left md:text-base font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet sagittis ornare id libero aliquet sit eu. Libero, pulvinar proin lectus ornare aliquam in dignissim. Sodales tincidunt vitae duis scelerisque massa. At arcu tristique pellentesque et commodo eget mauris Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet sagittis ornare id libero aliquet</p>

                        <div class="grid grid-cols-12 gap-2 mt-6 md:mt-14 pb-6 md:pb-0">
                            <div class="col-span-12 md:col-span-4 mt-2 md:mt-0">
                                <p class="text-[#0299F3] text-xl md:text-4xl font-bold text-center">10Y</p>
                                <p class="mt-2 md:mt-2 text-center text-xs md:text-sm text-[rgba(0,0,0,0.7)]">Years of Experience</p>
                            </div>

                            <div class="col-span-12 md:col-span-4 mt-2 md:mt-0">
                                <p class="text-[#0299F3] text-xl md:text-4xl font-bold text-center">50+</p>
                                <p class="mt-2 md:mt-2 text-center text-xs md:text-sm text-[rgba(0,0,0,0.7)]">Team work</p>
                            </div>

                            <div class="col-span-12 md:col-span-4 mt-2 md:mt-0">
                                <p class="text-[#0299F3] text-xl md:text-4xl font-bold text-center">10Y</p>
                                <p class="mt-2 md:mt-2 text-center text-xs md:text-sm text-[rgba(0,0,0,0.7)]">Client Partner</p>
                            </div>

                        </div>
                    </div>
                  </div>
            </div>

            <!-- review section start  -->
                <div class="py-8">
                    <p class="text-[#2B3065] text-xl md:text-4xl font-bold my-4 md:my-4 text-center ">Whats our happy <span class="text-[#0299F3]">Client</span> Says</p>
                    <p class="text-center text-sm md:text-base md:mb-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    <carousel :autoplay="3000" :wrap-around="true" :settings="settings" :breakpoints="breakpoints">
                        <slide v-for="slide in 10" :key="slide">
                            <div class="w-[500px] h-auto pt-2 pb-8 px-4">
                                <div class=" py-6 px-2 rounded-lg shadow-lg bg-white">
                                    <div class="flex justify-center">
                                        <img class="w-[80px] h-[80px]" src="/images/hero_4th_sec/Avatar.svg" alt="">
                                    </div>
                                    
                                    <div class="">
                                        <p class="text-lg font-semibold md:text-2xl md:font-bold text-[#212057] text-center mt-2 md:mt-5">Lorem ipsum </p>
                                        
                                        <div class="text-black font-semibold  items-center mt-2 md:mt-2">
                                            
                                            <div class="text-sm font-base px-12">Lorem Ipsum aoisasdas asda asda wqqwqeq wdadawe asdasdw foja lkjf jhaohdof jajdl uoaudf </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </slide>

                        <template #addons>
                        <pagination/>
                        </template>
                    </carousel>
                </div>
            <!-- review section end  -->
        </div>
        <!-- achivement section end  -->

         <!-- news letter section start  -->
        <div class=" newsletter_bg">
            <div class="max-w-full bg-[rgba(1,9,65,0.68)] h-auto pt-14 py-0 md:py-20 lg:py-28">
                <div class="max-w-7xl mx-auto">
                    <div class="flex justify-center items-center text-xs md:text-base font-medium md:font-semibold text-justify text-white px-10 md:px-28 lg:px-60 pb-28 md:pb-10">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet sagittis ornare id libero aliquet sit eu. Libero, pulvinar proin lectus ornare aliquam in dignissim. Sodales tincidunt vitae duis scelerisque massa. At arcu tristique pellentesque et commodo eget mauris Lorem ipsum dolor sit amet, consectetur  </p>
                    </div>
                </div>
            </div> 
        </div>
    
    </AppLayout>
</template>

<script>
import AppLayout from '../../Layouts/Frontend/AppLayout.vue'
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';


const episode = [
    {type: 'FASHION', title: 'We Get Only One Shot At This',img:'/images/about/card_img1.svg'},
    {type: 'MARKETING', title: 'We Get Only One Shot At This',img:'/images/about/card_img2.svg'},
    {type: 'HELTH', title: 'We Get Only One Shot At This',img:'/images/about/card_img3.svg'},
 
];

export default {
    name: 'Blog',
    components:{
        AppLayout,
         Carousel,
        Slide,
        Pagination,
        Navigation,
        
    },
        data: () => ({
        settings: {
        itemsToShow: 1,
        snapAlign: 'center',
        },
        // breakpoints are mobile first
        // any settings not specified will fallback to the carousel settings
        breakpoints: {
        // 700px and up
        700: {
            itemsToShow: 1,
            snapAlign: 'center',
        },
        // 1024 and up
        1024: {
            itemsToShow: 3,
            snapAlign: 'start',
        },
        },
    }),

    setup() {
    return {
     episode
    };
  },
}
</script>

<style>

</style>