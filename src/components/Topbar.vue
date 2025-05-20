<template>
    <div class="sticky top-0 z-10 text-white w-full" style="background-color: #46211A;">
        <!-- Desktop Navigation -->
        <div class="hidden lg:grid grid-cols-12 justify-between items-center h-16">
            <div class="col-span-5 text-start">
                <h1 class="text-2xl font-bold pl-10">Biker's Club</h1>
            </div>
            <div class="flex flex-row col-span-4">   
                <div v-for="link in navigationLinks" :key="link.path" class="h-full">
                    <router-link 
                        :to="link.path"
                        class="rounded-lg transition-all duration-300 hover:bg-[#A43820] hover:translate-x-1"
                        :class="{ 'bg-[#A43820] font-bold': $route.path === link.path }"
                    >
                        <button class="px-4 py-2 min-w-32">{{ link.name }}</button>
                    </router-link>
                </div> 
            </div>
        </div>

        <!-- Mobile/Tablet Navigation -->
        <div class="lg:hidden flex justify-between items-center h-16 px-4">
            <h1 class="text-2xl font-bold">Biker's Club</h1>
            <button 
                @click="toggleMobileMenu" 
                class="p-2 rounded-lg hover:bg-[#A43820] transition-colors"
            >
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    class="h-6 w-6" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                >
                    <path 
                        v-if="!isMobileMenuOpen" 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        stroke-width="2" 
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                    <path 
                        v-else 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        stroke-width="2" 
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>
        </div>

        <!-- Mobile Menu Overlay -->
        <div 
            v-if="isMobileMenuOpen" 
            class="lg:hidden fixed inset-0 bg-[#46211A] bg-opacity-95 z-20"
            :class="{ 'animate-slide-in': isMobileMenuOpen }"
        >
            <div class="flex flex-col items-center justify-center h-full">
                <div v-for="link in navigationLinks" :key="link.path" class="w-full text-center">
                    <router-link 
                        :to="link.path"
                        class="block py-4 text-xl transition-all duration-300 hover:bg-[#A43820]"
                        :class="{ 'bg-[#A43820] font-bold': $route.path === link.path }"
                        @click="closeMobileMenu"
                    >
                        {{ link.name }}
                    </router-link>
                </div>
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
        toggleMobileMenu() {
            this.isMobileMenuOpen = !this.isMobileMenuOpen;
            // Prevent body scroll when menu is open
            document.body.style.overflow = this.isMobileMenuOpen ? 'hidden' : '';
        },
        closeMobileMenu() {
            this.isMobileMenuOpen = false;
            document.body.style.overflow = '';
        }
    },
    // Close mobile menu when route changes
    watch: {
        '$route'() {
            this.closeMobileMenu();
        }
    }
}
</script>

<style scoped>
.animate-slide-in {
    animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
  
