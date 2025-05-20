<template>
    <div class="grid grid-cols-12 justify-between items-center sticky top-0 z-10 text-white h-16 w-full" style="background-color: #46211A;">
        <div class="col-span-5 text-start">
            <h1 class="text-2xl font-bold pl-10">Biker's Club</h1>
        </div>
        <div class="flex flex-row col-span-4">   
            <div v-for="link in navigationLinks" class="h-full">
                <router-link 
                :key="link.path"
                :to="link.path"
                class="rounded-lg transition-all duration-300 hover:bg-[#A43820] hover:translate-x-1"
                :class="{ 'bg-[#A43820] font-bold': $route.path === link.path }"
                >
                    <button class="px-4 py-2 min-w-32">{{ link.name }}</button>
                </router-link>
            </div> 
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Topbar',
    data() {
      return {
        isMobileMenuOpen: false,
        navigationLinks: [
          { name: 'Home', path: '/' },
          { name: 'Rides', path: '/rides' },
          { name: 'Events', path: '/events' },
          { name: 'Gallery', path: '/gallery' },
          { name: 'About', path: '/about' },
          { name: 'Contact', path: '/contact' }
        ]
      }
    },
    methods: {
    }
  }
  </script>
  