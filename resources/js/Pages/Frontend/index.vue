<template>
    <AppLayout>
        <!-- hero section start  -->
        <div class="max-w-full h-auto md:h-[100vh] background pt-14 md:pt-8">
            <div class="max-w-7xl mx-auto px-4 md:px-5 lg:px-12 ">
                <div class="grid grid-cols-12 gap-4 items-center md:px-0 h-auto md:h-[100vh]">
                    <div class="col-span-12 md:col-span-6 mb-8 md:mb-0">
                        <p class="text-base md:text-xl text-[#01B9F7] font-semibold">Welcome Here,</p>
                        <p class="mt-2 md:mt-6 text-white text-xl md: lg:text-[54px] font-bold leading-tight">Hey I'm Mission Khan, <br> 
                            A Digital podcast consultant
                        </p>
                        <p class="mt-2 md:mt-10 text-white text-xs md:text-base font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet sagittis ornare id libero aliquet sit eu. Libero, pulvinar proin lectus ornare aliquam in dignissim. Sodales tincidunt vitae duis scelerisque massa. At arcu tristique </p>
                        <!-- <button class="mt-4 md:mt-10 bg-gradient-to-r  from-[#0616E0] to-[#01B9F7] px-4 py-1.5 md:px-6 md:py-2 text-sm md:text-base text-white
                        rounded-full">Condimentum</button> -->
                    </div>

                     <div class="col-span-12 md:col-span-6 mb-8 md:mb-0 ">
                        <div class="flex justify-end">
                            <img class="" src="/images/hero_img.svg" alt="">
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
        <!-- hero section end  -->

        <!-- statistics_section start -->
        <div class="max-w-full  h-auto statistic_bg pt-14 md:pt-14">
            <div class="max-w-7xl mx-auto md:px-8">
                <!-- company logo start -->
                <div class="grid grid-cols-12 gap-4 items-center">
                   <div v-for="item in company_logo" :key="item.name" class="px-4 md:px-0 col-span-4 md:col-span-2 flex items-center">
                        <img :src="item.src" alt="">     
                  </div>
                </div>
                <!-- company logo end  -->

                <!-- statistics section main content  -->
                  <div class="grid grid-cols-12 gap-6 mt-8 md:mt-24 px-4 md:px-0 md:pb-16 items-center">
                    <div class="col-span-12 md:col-span-6 rounded-lg ">
                        <img src="/statistics_section/statistic_chart.svg" class="w-full" alt="">
                    </div>
                    <div class="col-span-12 md:col-span-6 pl-0 md:pl-8">
                        <p class="text-[#0299F3] text-base md:text-xl font-bold">A amet molestie</p>
                        <p class="mt-1 md:mt-6 text-lg md:text-3xl font-bold text-[#212057]">Lorem Ipsum dolor sit amet, <br> consecetetur adipiscing elit Sit.</p>
                        <p class="mt-4 md:mt-8 text-xs text-justify md:text-left md:text-base font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet sagittis ornare id libero aliquet sit eu. Libero, pulvinar proin lectus ornare aliquam in dignissim. Sodales tincidunt vitae duis scelerisque massa. At arcu tristique pellentesque et commodo eget mauris Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet sagittis ornare id libero aliquet</p>

                        <div class="grid grid-cols-12 gap-2 mt-6 md:mt-8 pb-6 md:pb-0">
                            <div class="col-span-12 md:col-span-4 mt-2 md:mt-0">
                                <p class="text-[#212057] text-xs md:text-sm font-bold text-center">Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                                <p class="mt-2 md:mt-4 text-center text-xs md:text-sm text-[rgba(0,0,0,0.7)]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. adipiscing elit.</p>
                            </div>

                            <div class="col-span-12 md:col-span-4 mt-2 md:mt-0">
                                <p class="text-[#212057] text-xs md:text-sm font-bold text-center">Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                                <p class="mt-2 md:mt-4 text-center text-xs md:text-sm text-[rgba(0,0,0,0.7)]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. adipiscing elit.</p>
                            </div>

                            <div class="col-span-12 md:col-span-4 mt-2 md:mt-0">
                                <p class="text-[#212057] text-xs md:text-sm font-bold text-center">Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                                <p class="mt-2 md:mt-4 text-center text-xs md:text-sm text-[rgba(0,0,0,0.7)]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. adipiscing elit.</p>
                            </div>
                        </div>
                    </div>
                  </div>
                <!-- statistics section main content end -->
            </div>
        </div>
        <!-- statistics section end  -->
        
        <!-- thrid section start  -->
        <div class="max-w-full  h-auto hero_3rd_bg pt-14 md:pt-14 pb-14">
            <div class="max-w-7xl mx-auto my-2">
                <p class="text-center text-white text-2xl md:text-4xl font-bold">Lorem ipsum dolor sit amet,consectetur</p>
                <p class="text-white  text-sm text-justify md:text-justify md:text-lg mt-4 font-medium px-4 md:px-28">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet sagittis ornare id libero aliquet sit eu. Libero, <br>  pulvinar proin lectus ornare aliquam in dignissim. Sodales tincidunt vitae duis scelerisque massa. At arcu tristique.</p>

                <div class="grid grid-cols-12 gap-x-4">
                    <div class="col-span-12 md:col-span-4 px-2 md:p-6">
                        <div class="flex justify-center">
                             <img src="/images/hero_3rd_sec/hero_3rd_grid_img.svg" alt="" class="w-9/12 md:w-full
                              object-cover">
                        </div>
                        <p class="text-lg md:text-2xl text-white font-semibold text-center">Lorem ipsum dolor sit amet, consectetur </p>
                        <p class="text-sm md:text-base text-white text-center font-medium mt-2 md:mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. adipiscing elit.</p>
                    </div>

                    <div class="col-span-12 md:col-span-4 px-2 md:p-6">
                        <div class="flex justify-center">
                             <img src="/images/hero_3rd_sec/hero_3rd_grid_img.svg" alt="" class="w-9/12 md:w-full object-cover">
                        </div>
                        <p class="text-lg md:text-2xl text-white font-semibold text-center">Lorem ipsum dolor sit amet, consectetur </p>
                        <p class="text-white text-center font-medium text-sm md:text-base mt-2 md:mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. adipiscing elit.</p>
                    </div>

                    <div class="col-span-12 md:col-span-4 px-2 md:p-6">
                        <div class="flex justify-center">
                             <img src="/images/hero_3rd_sec/hero_3rd_grid_img.svg" alt="" class="w-9/12 md:w-full object-cover">
                        </div>
                        <p class="text-lg md:text-2xl text-white font-semibold text-center">Lorem ipsum dolor sit amet, consectetur </p>
                        <p class="text-white text-center font-medium text-sm md:text-base mt-2 md:mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. adipiscing elit.</p>
                    </div>
                    
                </div>
            </div>
        </div>
        <!-- third section end  -->

        <!-- fourth section +  start  -->
        <div class="max-w-full  h-auto bg-[#E5E5E5] hero_4th_bg pt-14 md:pt-14 pb-14">
            <div class="max-w-7xl mx-auto my-2 px-4">
                <!-- first carousel start  -->
                <div>
                    <p class="text-[#2B3065] text-2xl md:text-4xl font-bold my-4 md:my-14">Lorium Ipsum dolor</p>
                    <carousel :settings="settings" :breakpoints="breakpoints">
                        <slide v-for="slide in 10" :key="slide">
                            <div class="w-[500px] h-auto">
                                <div class="grid grid-cols-12 gap-2 items-center bg-white py-8 px-4 mx-4 rounded-lg shadow-lg">
                                    <div class="col-span-6 flex justify-center">
                                    <img src="/images/hero_4th_sec/card_img1.svg" class="w-10/12 " alt="">
                                    </div>
                                    <div class="col-span-6 ">
                                        <div class="text-[#0299F3] text-sm md:text-base font-semibold flex justify-left items-center">
                                            <div class="mr-2">
                                                <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 font-bold">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                                                </svg>
                                            </div>
                                            <div class="font-bold">Lorem Ipsum</div>
                                            </div>
                                            <p class="text-lg font-semibold md:text-2xl md:font-bold text-[2B3065] text-left mt-2 md:mt-5">Lorem ipsum dolor shit</p>
                                            <p class="text-xs sm:text-justify md:text-sm text-normal text-[rgba(0,0,0,0.62)] text-left mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet sagittis ornare id libero aliquet sit eu. Libero, pulvinar proin lectus </p>
                                            <div class="text-[#0299F3] text-sm md:text-base font-semibold flex justify-left items-center mt-2 md:mt-5">
                                                <div class="font-bold">View</div>
                                                <div class="ml-2 font-bold">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                                    </svg>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                                
                            </div>
                        </slide>

                        <template #addons>
                        <navigation />
                    
                        </template>
                    </carousel>
                </div>
                <!-- first carousel end  -->

                 <!-- second carousel start  -->
                <div>
                    <p class="text-[#2B3065] text-2xl md:text-4xl font-bold my-4 md:mt-14 md:mb-20 ">Lorium Ipsum dolor</p>
                    <div class="t-12">
                        <carousel :settings="settings" :breakpoints="breakpoints" >
                        <slide v-for="slide in 10" :key="slide">
                            <div class="w-[500px] h-auto mx-4">
                                <div class=" py-8 px-4 rounded-lg shadow-lg carousel2_bg relative ">
                                    <div class="absolute  top-4 right-4">
                                        <p class="px-4 py-1 text-xs rounded-full bg-gray-500 text-white font-bold uppercase">Branding</p>
                                    </div>
                                    <div class="py-14 md:py-20 lg:py-24"></div>
                                    <div class="">
                                        <p class="text-base font-semibold md:text-2xl md:font-bold text-white text-left mt-2 md:mt-5">Lorem ipsum dolor shit Lorem Ipsum dolor shit lorem ipsum dolor shit</p>
                                        <div class="text-white font-semibold flex justify-left items-center mt-2 md:mt-5">
                                            <div class="mr-4 font-bold">
                                                <img class="h-[60px] w-[60px]" src="/images/hero_4th_sec/Avatar.svg" alt="">
                                            </div>
                                            <div class="font-bold">Lorem Ipsum</div>
                                            
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </slide>

                        <template #addons>
                        <navigation />
                    
                        </template>
                    </carousel>
                    </div>
                </div>
                <!-- second carousel end  -->  
            </div>
        </div>
        <!-- fourth section end  -->

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
        
        <!-- news letter section end  -->

    </AppLayout>
</template>

<script>
import AppLayout from '../../Layouts/Frontend/AppLayout.vue'
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

const company_logo = [
  { name: 'daraz', src: '/statistics_section/daraz.svg'},
  { name: 'Service', src: '/statistics_section/sheba.svg'},
  { name: 'Price', src: '/statistics_section/walton.svg'},
  { name: 'Blog', src: '/statistics_section/datasoft.svg'},
  { name: 'Blog', src: '/statistics_section/conagra.svg'},
  { name: 'Blog', src: '/statistics_section/leadsoft.svg'},
]

export default {
    name: 'index',
    components:{
        AppLayout,
        Carousel,
        Slide,
        Pagination,
        Navigation,
        
    },
    data: () => ({
        // carousel settings
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
}
</script>

<style>

</style>