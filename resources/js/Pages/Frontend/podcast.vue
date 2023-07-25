<template>
    <AppLayout>
         <div class="max-w-full h-auto md:h-[100vh] background pt-14 md:pt-24 flex items-center justify-center">
            <div class="max-w-7xl mx-auto">
                <div class="text-white text-center py-12">
                    <p class="font-['Helvetica'] text-3xl md:text-7xl font-bold">Podcast</p>
                    <p class="text-sm  font-semibold md:text-xl px-6 md:px-20 lg:px-60 mt-2 md:mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet sagittis ornare id libero aliquet sit eu. Libero, pulvinar proin lectus ornare aliquam in </p>
                </div>
            </div>
        </div>


        <!-- about section start  -->
        <div class="max-w-full  h-auto about_section_bg bg[#E5E5E5]  pt-2 md:pt-2">
            <div class="max-w-7xl mx-auto md:px-12">

                <div class="max-w-full mx-auto mt-8 mb-40">
                    <!-- category link -->
                    <div class="flex flex-wrap gap-2 px-4 md:px-0 py-6">
                        <a href="#" class="px-4 md:px-8 py-2 text-sm md:text-base text-white rounded-full bg-gradient-to-r from-[#0616E0] to-[#01B9F7]">All</a>
                        <a v-for="row in category" :key="row" href="" class="px-4 md:px-8 py-2 text-sm md:text-base text-gray-400 border border-gray-500 rounded-full ">{{row.name}}</a>
                    </div>
                    <!-- category lind end  -->
                    
                    <!-- podcast episode start  -->
                    <div class="py-4 md:py-4 grid grid-cols-12 px-4 md:px-0 gap-y-2 md:gap-8">
                            <div class="col-span-12 md:col-span-4 bg-white p-6 rounded-lg shadow-lg"  v-for="(row,index) in episode" :key="index">
                                <div class="flex justify-center relative">
                                    <img class="w-[600px]" :src="row.img" alt="">
                                    <div class="absolute  bg-[rgba(0,0,0,0.3)] top-3 right-3 rounded-full px-4 py-1 text-sm md:text-base text-white font-semibold md:font-bold">
                                    April 20, 2021
                                    </div>
                                </div>

                                <div class="flex item-center gap-2 mt-2">
                                    <span><img src="/images/about/headphones-alt.svg" alt=""></span>
                                    <span class="font-bold text-[#0087E9]">{{row.type}}</span>
                                </div>
                                <p class="text-base font-semibold text-md:text-xl md:font-bold pb-0 md:pb-6 pt-2">{{row.title}}</p>
                            </div>   
                    </div>
                    <!-- podcast episode end  -->


                    <!-- pagination start  -->
                    <!-- <PaginateFrontend :links="blogs.links" :to="blogs.to" :from="blogs.from" :total="blogs.total" /> -->
                    <div class="flex gap-4 px-4 md:px-0 my-12">
                        <a href="" class="text-sm  text-white bg-[#0087E9] font-bold rounded-full px-3 py-1.5">1</a>
                        <a href="" class="text-sm  text-gray-500 border border-gray-500 font-bold rounded-full px-3 py-1.5">2</a>
                        <a href="" class="text-sm  text-gray-500 border border-gray-500 font-bold rounded-full px-2 py-1.5">>></a>
                    </div>
                    <!-- pagination end  -->
                
                </div>
            </div>
        </div>
        <!-- about section end  -->
    </AppLayout>
</template>

<script>
import AppLayout from '../../Layouts/Frontend/AppLayout.vue'
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

import PaginateFrontend from "../../Components/PaginateFrontend.vue"

const episode = [
    {type: 'FASHION', title: 'We Get Only One Shot At This',img:'/images/podcast/card_img1.svg'},
    {type: 'MARKETING', title: 'We Get Only One Shot At This',img:'/images/podcast/card_img2.svg'},
    {type: 'HELTH', title: 'We Get Only One Shot At This',img:'/images/podcast/card_img3.svg'},
    {type: 'FASHION', title: 'We Get Only One Shot At This',img:'/images/podcast/card_img4.svg'},
    {type: 'MARKETING', title: 'We Get Only One Shot At This',img:'/images/podcast/card_img5.svg'},
    {type: 'HELTH', title: 'We Get Only One Shot At This',img:'/images/podcast/card_img6.svg'},
    {type: 'FASHION', title: 'We Get Only One Shot At This',img:'/images/podcast/card_img7.svg'},
    {type: 'MARKETING', title: 'We Get Only One Shot At This',img:'/images/podcast/card_img8.svg'},
    {type: 'HELTH', title: 'We Get Only One Shot At This',img:'/images/podcast/card_img2.svg'},
];

const category = [
    {name:'fashion'},{name:'education'},{name:'health'},{name:'entertainment'},{name:'Business'},{name:'Marketing'},{name:'Technology'},{name:'politics'},{name:'social media'},{name:'Telecomuniction Media'},{name:'Current Affairs'}
];

export default {
    name: 'Blog',
    components:{
        AppLayout,
         Carousel,
        Slide,
        Pagination,
        Navigation,
        PaginateFrontend,
        
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
     episode,
     category
    };
  },
}
</script>

<style>

</style>