<template>
    <AppLayout>
        <div class="max-w-full h-auto md:h-[100vh] background pt-14 md:pt-24 flex items-center justify-center">
            <div class="max-w-7xl mx-auto">
                <div class="text-white text-center py-12">
                    <p class="font-['Helvetica'] text-3xl md:text-7xl font-bold">Contact Us</p>
                    <p class="text-sm  font-semibold md:text-xl px-6 md:px-60 mt-2 md:mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet sagittis ornare id libero aliquet sit eu. Libero, pulvinar proin lectus ornare aliquam in </p>
                </div>
            </div>
        </div>

        <div class="max-w-full  bg-[#F3FAFC] py-8 md:py-16">
            <div class="max-w-7xl mx-auto">
                <!-- contact info start  -->
                <div class="grid grid-cols-12 sm:divide-x-0 md:divide-x-2 gap-y-2 md:gap-y-4 px-8">
                    <div class="col-span-12 md:col-span-4">
                        <div class="flex  md:flex-col items-center md:justify-center gap-x-4">
                            <div class="w-[85px] h-[85px] md:w-[136px] md:h-[136px]">
                                <img src="/images/contact/call.svg" class="w-full h-full object-cover" alt="">
                            </div>
                            <div class="text-xs md:text-base text-[rgba(0,0,0,0.5)] text-center py-6">
                                <p>01849737540</p>
                                <p>01849737540</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-span-12 md:col-span-4">
                        <div class="flex  md:flex-col items-center md:justify-center gap-x-4">
                            <div class="w-[85px] h-[85px] md:w-[136px] md:h-[136px]">
                                <img src="/images/contact/email.svg" class="w-full h-full object-cover" alt="">
                            </div>
                            <div class="text-xs md:text-base text-[rgba(0,0,0,0.5)] text-center py-6">
                                <p>info@company.com</p>
                                <p>information@company.com</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-span-12 md:col-span-4">
                        <div class="flex  md:flex-col items-center md:justify-center gap-x-4">
                            <div class="w-[85px] h-[85px] md:w-[136px] md:h-[136px]">
                                <img src="/images/contact/map.svg" class="w-full h-full object-cover" alt="">
                            </div>
                            <div class="text-xs md:text-base text-[rgba(0,0,0,0.5)] text-center py-6">
                                <p>link lane 23e balance streed</p>
                                <p>hatirpool dhaka 1215</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- contact info end  -->

                <!-- contact form section start -->
                <div class="grid grid-cols-12 gap-4 px-4 md:px-12 pt-16">
                    <div class="col-span-12 md:col-span-4 ">
                        <p class="text-lg text-[#0087E9] font-bold">Contact us</p>
                        <p class="text-3xl font-semibold md:text-5xl md:font-bold font-[Helvetica]">Get in touch <br> with us</p>
                        <p class="text-sm pr-0 text-[rgba(0,0,0,0.6)] md:text-base font-medium py-4 md:py-6 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet massa, diam viverra nisl. Nibh pulvinar vitae nisi.</p>

                        <!-- social icon start -->
                        <div class="flex gap-4">
                            <div class="p-2 rounded-full">
                                <img src="/images/contact/social_icon/facebook-f.svg" class="w-[30] md:w-[35px] h-[30px]  md:h[35px] object-cover  bg-[#F4F4F4]" alt="">
                            </div>
                            <div class=" p-2 rounded-full">
                                <img src="/images/contact/social_icon/instagram.svg" class="w-[30] md:w-[35px] h-[30px]  md:h[35px] object-cover  bg-[#F4F4F4]" alt="">
                            </div>
                            <div class="p-2 rounded-full">
                                <img src="/images/contact/social_icon/linkedin-in.svg" class="w-[30] md:w-[35px] h-[30px]  md:h[35px] object-cover  bg-[#F4F4F4]" alt="">
                            </div>
                            <div class="p-2 rounded-full">
                                <img src="/images/contact/social_icon/twitter.svg" class="w-[30] md:w-[35px] h-[30px]  md:h[35px] object-cover  bg-[#F4F4F4]" alt="">
                            </div>
                        </div>
                        <!-- social icon end  -->
                    </div>

                    <!-- contact form start  -->
                    <div class="col-span-12 md:col-span-8 mt-8 md:mt-0">
                        <form @submit.prevent= "submit">
                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-12 md:col-span-6">
                                    <input type="text" v-model="form.first_name" class="w-full border-none rounded-lg shadow-lg text-sm md:text-base font-medium px-6 py-2 md:py-3" placeholder="First Name">
                                    <span v-if="form.errors.first_name" class="flex items-center p-2 text-red-700 ">{{ form.errors.first_name }}</span>

                                </div>
                                 <div class="col-span-12 md:col-span-6">
                                    <input type="text" v-model="form.last_name" class="w-full border-none rounded-lg shadow-lg text-sm md:text-base font-medium px-6 py-2 md:py-3" placeholder="Last Name">
                                    <span v-if="form.errors.last_name" class="flex items-center p-2 text-red-700 ">{{ form.errors.last_name }}</span>

                                </div>
                            </div>

                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-12 md:col-span-6">
                                    <input type="email" v-model="form.email" class="w-full border-none rounded-lg shadow-lg text-sm md:text-base font-medium px-6 py-2 md:py-3" placeholder="Email">
                                    <span v-if="form.errors.email" class="flex items-center p-2 text-red-700 ">{{ form.errors.email }}</span>

                                </div>
                                 <div class="col-span-12 md:col-span-6">
                                    <input type="text" v-model="form.company_name" class="w-full border-none rounded-lg shadow-lg text-sm md:text-base font-medium px-6 py-2 md:py-3" placeholder="Company">
                                    <span v-if="form.errors.company_name" class="flex items-center p-2 text-red-700 ">{{ form.errors.company_name }}</span>

                                </div>
                            </div>

                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-12">
                                    <input type="text" v-model="form.company_website" class="w-full border-none rounded-lg shadow-lg text-sm md:text-base font-medium px-6 py-2 md:py-3" placeholder="Company Website">
                                    <span v-if="form.errors.company_website" class="flex items-center p-2 text-red-700 ">{{ form.errors.company_website }}</span>
                                </div>
                            </div>

                            <div class="grid grid-cols-12 gap-4 mb-4">
                                <div class="col-span-12">
                                    <textarea name="message" v-model="form.message" id="" cols="30" rows="5" class="w-full border-none rounded-lg shadow-lg text-sm md:text-base font-medium px-6 py-2 md:py-3" placeholder="Write message"></textarea>
                                    <span v-if="form.errors.message" class="flex items-center p-2 text-red-700 ">{{ form.errors.message }}</span>
                                </div>
                            </div>

                            <div class="">
                                <button type="submit" class="px-8 py-2 text-white text-sm font-semibold md:text-base md:font-bold bg-[#0199FE] rounded-full">Submit</button>
                            </div>
                        </form>
                    </div>
                     <!-- contact form end  -->

                </div>
                <!-- contact form section end  -->
            </div>
        </div>

        <!-- news letter section start  -->
        <div class=" newsletter_bg">
            <div class="max-w-full bg-[rgba(1,9,65,0.68)] h-auto pt-14 md:py-28 ">
                <div class="max-w-7xl mx-auto">
                    <div class="flex justify-center items-center text-xs md:text-base font-medium md:font-semibold text-justify text-white px-10 md:px-60 pb-28 md:pb-10">
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
import {useForm, Head, Link} from "@inertiajs/inertia-vue3"


const episode = [
    {type: 'FASHION', title: 'We Get Only One Shot At This',img:'/images/about/card_img1.svg'},
    {type: 'MARKETING', title: 'We Get Only One Shot At This',img:'/images/about/card_img2.svg'},
    {type: 'HELTH', title: 'We Get Only One Shot At This',img:'/images/about/card_img3.svg'},
 
];

export default {
    name: 'Contact',
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
        const form = useForm({
			first_name:null,
			last_name:null,
            email:null,
            company_name:null,
            company_website:null,
            message:null,
		})	

        function submit(){
            form.post(route("contact.store"));
        }
    return {
     episode,
     submit,
     form
    };
  },
  watch :{
        "$page.props.flash":{
            handler(data){
                if(data.success){
                    this.form.reset();
                }                
            }
        }
    }
}
</script>

<style>

</style>