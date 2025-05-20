<template>
  <div class="max-w-7xl mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8 text-[#46211A]">Welcome to Biker's Club</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
        <h3 class="text-lg font-semibold text-[#46211A]">Upcoming Rides</h3>
        <p class="text-4xl font-bold text-[#A43820] mt-2">5</p>
        <p class="text-sm text-gray-600 mt-2">Next ride in 3 days</p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
        <h3 class="text-lg font-semibold text-[#46211A]">Active Members</h3>
        <p class="text-4xl font-bold text-[#A43820] mt-2">128</p>
        <p class="text-sm text-gray-600 mt-2">+12 this month</p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
        <h3 class="text-lg font-semibold text-[#46211A]">Events This Month</h3>
        <p class="text-4xl font-bold text-[#A43820] mt-2">8</p>
        <p class="text-sm text-gray-600 mt-2">Including 2 workshops</p>
      </div>
    </div>

    <div class="mt-12">
      <h2 class="text-2xl font-bold mb-6 text-[#46211A]">Latest Updates</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="post in recentPosts" 
          :key="post.id" 
          class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
        >
          <div class="relative">
            <img :src="post.image" :alt="post.title" class="w-full h-48 object-cover rounded-lg mb-4">
            <span class="absolute top-2 right-2 bg-[#A43820] text-white px-3 py-1 rounded-full text-sm">
              {{ post.type }}
            </span>
          </div>
          <h3 class="text-xl font-semibold mb-2 text-[#46211A]">{{ post.title }}</h3>
          <p class="text-gray-600 mb-4">{{ post.excerpt }}</p>
          <div class="flex justify-between items-center text-sm text-gray-500">
            <span>{{ post.date }}</span>
            <router-link 
              :to="post.link"
              class="text-[#A43820] hover:text-[#8B2D16] font-medium flex items-center gap-1"
            >
              View Details
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      recentPosts: [
        {
          id: 1,
          title: 'Weekend Mountain Ride',
          excerpt: 'Join us for an exciting weekend ride through the scenic mountain trails. Perfect for all skill levels...',
          date: 'March 20, 2024',
          type: 'Ride',
          image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          link: '/rides'
        },
        {
          id: 2,
          title: 'Annual Biker Meetup',
          excerpt: 'Our biggest event of the year! Connect with fellow riders, showcase your bike, and enjoy live music...',
          date: 'March 19, 2024',
          type: 'Event',
          image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          link: '/events'
        },
        {
          id: 3,
          title: 'Safety Workshop',
          excerpt: 'Essential safety tips and maintenance workshop for all riders. Learn from experienced bikers...',
          date: 'March 18, 2024',
          type: 'Workshop',
          image: 'https://images.unsplash.com/photo-1558981359-219d6364c9c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          link: '/events'
        }
      ]
    }
  }
}
</script>

<style scoped>
.router-link-active {
  color: #A43820;
  font-weight: 600;
}
</style>
