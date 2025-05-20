<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <!-- Header Section -->
    <div class="text-center mb-12">
      <h1 class="text-3xl font-bold text-[#46211A] mb-4">Photo Gallery</h1>
      <p class="text-[#A43820] max-w-2xl mx-auto">
        Explore our collection of memorable moments from rides, events, and meetups.
      </p>
    </div>

    <!-- Filter Buttons -->
    <div class="flex flex-wrap justify-center gap-4 mb-12">
      <button 
        v-for="category in categories" 
        :key="category"
        @click="selectedCategory = category"
        class="px-6 py-2 rounded-lg transition-all duration-300"
        :class="selectedCategory === category 
          ? 'bg-[#A43820] text-white shadow-lg scale-105' 
          : 'bg-[#F1D3B2] text-[#46211A] hover:bg-[#A43820] hover:text-white'"
      >
        {{ category }}
      </button>
    </div>

    <!-- Photo Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div 
        v-for="photo in filteredPhotos" 
        :key="photo.id" 
        class="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
      >
        <img 
          :src="photo.image" 
          :alt="photo.title" 
          class="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
        >
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div class="absolute bottom-0 left-0 right-0 p-6">
            <div class="flex items-center mb-2">
              <span class="bg-[#F1D3B2] text-[#A43820] text-sm font-medium px-3 py-1 rounded-full">
                {{ photo.category }}
              </span>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">{{ photo.title }}</h3>
            <p class="text-white/90 text-sm mb-4">{{ photo.description }}</p>
            <div class="flex items-center text-white/80 text-sm">
              <i class="fas fa-calendar-alt mr-2"></i>
              <span>{{ photo.date }}</span>
              <span class="mx-2">•</span>
              <i class="fas fa-map-marker-alt mr-2"></i>
              <span>{{ photo.location }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Load More Button -->
    <div class="text-center mt-12">
      <button 
        class="bg-[#A43820] text-white px-8 py-3 rounded-lg hover:bg-[#8B2D16] transition-colors duration-300 transform hover:scale-105"
        @click="loadMore"
      >
        Load More Photos
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  data() {
    return {
      selectedCategory: 'All',
      categories: ['All', 'Events', 'Rides', 'Meetups', 'Workshops'],
      photos: [
        {
          id: 1,
          title: 'Mountain Trail Adventure',
          description: 'Breathtaking views from our latest mountain trail ride.',
          image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39',
          category: 'Rides',
          date: 'March 20, 2024',
          location: 'Mountain View Trail'
        },
        {
          id: 2,
          title: 'Annual Biker Festival',
          description: 'Highlights from our biggest gathering of the year.',
          image: 'https://images.unsplash.com/photo-1558981359-219d6364c9c8',
          category: 'Events',
          date: 'March 15, 2024',
          location: 'City Center'
        },
        {
          id: 3,
          title: 'Maintenance Workshop',
          description: 'Members learning essential bike maintenance skills.',
          image: 'https://images.unsplash.com/photo-1558981852-426c6c22a060',
          category: 'Workshops',
          date: 'March 10, 2024',
          location: 'Club Garage'
        },
        {
          id: 4,
          title: 'Women Riders Meetup',
          description: 'A special gathering for our women riders community.',
          image: 'https://images.unsplash.com/photo-1558981285-6f0c94958bb6',
          category: 'Meetups',
          date: 'March 5, 2024',
          location: 'Beachside Cafe'
        },
        {
          id: 5,
          title: 'Coastal Highway Cruise',
          description: 'Beautiful sunset views along the coastal route.',
          image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39',
          category: 'Rides',
          date: 'March 1, 2024',
          location: 'Coastal Highway'
        },
        {
          id: 6,
          title: 'Charity Ride Event',
          description: 'Supporting local community through our charity ride.',
          image: 'https://images.unsplash.com/photo-1558981359-219d6364c9c8',
          category: 'Events',
          date: 'February 25, 2024',
          location: 'City Park'
        }
      ]
    }
  },
  computed: {
    filteredPhotos() {
      if (this.selectedCategory === 'All') {
        return this.photos
      }
      return this.photos.filter(photo => photo.category === this.selectedCategory)
    }
  },
  methods: {
    loadMore() {
      // This would typically load more photos from an API
      // For now, we'll just show an alert
      alert('Loading more photos...')
    }
  }
}
</script>

<style scoped>
/* Add any additional custom styles here */
</style> 