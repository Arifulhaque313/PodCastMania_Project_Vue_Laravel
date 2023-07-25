<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="absolute w-full z-20">
    <Disclosure as="nav"  v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="!flex flex-1 items-center !justify-center mt-10 sm:items-stretch sm:justify-start">

          <div class="hidden sm:ml-6 sm:block">
            <div class="flex md:space-x-8 sm:space-x-2">
              <Link class="relative nav_item" v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'text-[#01B9F7]' : 'text-white  hover:text-[#01B9F7]', 'px-3 py-2 rounded-md sm:text-sm sm:font-normal md:text-base md:font-medium lg:font-semibold  lg:text-lg']" :aria-current="item.current ? 'page' : undefined">
                  <span>{{ item.name }}</span> <span class="absolute bottom-2 lg:bottom-4">
                <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 6H0L6 0V6Z" :class="[item.current ? 'fill-cyan-500' : 'fill-white']" class="arrow_svg"/></svg></span>
              </Link>
              <Link href="/contact" class="text-[#01B9F7] md:px-8 sm:px-3 py-1 md:py-1 lg:py-2 md:text-xl md:font-medium lg:font-semibold  lg:text-lg border-2 border-[#02A7F5] rounded-full">Contact Us
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="z-50">
      <DisclosurePanel class="sm:hidden bg-[#6784FA] opacity-95 rounded-lg z-20 ">
      <div class="space-y-1 px-2 pt-6 pb-6 ">
        <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
        <Link href="/contact" class="text-[#01B9F7] px-4  text-sm md:px-8  py-2 md:text-lg md:font-semibold sm:text-sm sm:font-normal border-2 border-[#02A7F5] rounded-full">Contact Us
        </Link>
      </div>
    </DisclosurePanel>
    </div>
  </Disclosure>
  </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { Inertia } from '@inertiajs/inertia';
import { Head, Link } from '@inertiajs/inertia-vue3';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'About', href: '/about', current: false },
  { name: 'Podcast', href: '/podcast', current: false },
  { name: 'Blog', href: '/blog', current: false },
]

</script>

<style scoped>
  .nav_item :hover .arrow_svg{
    @apply fill-cyan-500;
  }
</style>