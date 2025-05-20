<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-3xl font-bold text-[#46211A] mb-8">Upcoming Events</h1>
    
    <!-- Featured Event -->
    <div class="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
      <div class="md:flex">
        <div class="md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1558981806-ec527fa84c39" 
            alt="Featured event" 
            class="w-full h-full object-cover"
          >
        </div>
        <div class="p-8 md:w-1/2">
          <div class="flex items-center mb-4">
            <span class="bg-[#F1D3B2] text-[#A43820] text-sm font-medium px-3 py-1 rounded-full">
              Featured Event
            </span>
            <span class="text-[#46211A] text-sm ml-4">3 days</span>
          </div>
          <h2 class="text-2xl font-bold text-[#46211A] mb-4">
            Annual Biker's Festival 2024
          </h2>
          <p class="text-[#A43820] mb-6">
            Join us for the biggest biker gathering of the year! Three days of riding, music, food, and fun. 
            Showcase your bike, meet fellow riders, and enjoy live performances.
          </p>
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-medium text-[#46211A]">April 15-17, 2024</p>
              <p class="text-sm text-[#A43820]">Mountain View Resort</p>
            </div>
            <button class="bg-[#A43820] text-white px-6 py-2 rounded-lg hover:bg-[#8B2D16] transition-colors">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Other Events -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="event in events" :key="event.id" class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <img :src="event.image" :alt="event.title" class="w-full h-48 object-cover">
        <div class="p-6">
          <div class="flex items-center mb-4">
            <span class="bg-[#F1D3B2] text-[#A43820] text-sm font-medium px-3 py-1 rounded-full">
              {{ event.type }}
            </span>
            <span class="text-[#46211A] text-sm ml-4">{{ event.duration }}</span>
          </div>
          <h3 class="text-xl font-bold text-[#46211A] mb-2">{{ event.title }}</h3>
          <p class="text-[#A43820] mb-4">{{ event.description }}</p>
          <div class="flex justify-between items-center">
            <span class="text-sm text-[#46211A]">{{ event.date }}</span>
            <button class="bg-[#A43820] text-white px-4 py-2 rounded-lg hover:bg-[#8B2D16] transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Events',
  data() {
    return {
      events: [
        {
          id: 1,
          title: 'Bike Maintenance Workshop',
          description: 'Learn essential maintenance skills from expert mechanics.',
          image: 'https://images.unsplash.com/photo-1558981359-219d6364c9c8',
          type: 'Workshop',
          duration: '4 hours',
          date: 'April 5, 2024'
        },
        {
          id: 2,
          title: 'Charity Ride for Children',
          description: 'Join us for a charity ride to support local children\'s hospital.',
          image: 'https://images.unsplash.com/photo-1558981852-426c6c22a060',
          type: 'Charity',
          duration: '1 day',
          date: 'April 10, 2024'
        },
        {
          id: 3,
          title: 'Women Riders Meetup',
          description: 'A special gathering for women riders to share experiences.',
          image: 'https://images.unsplash.com/photo-1558981285-6f0c94958bb6',
          type: 'Meetup',
          duration: '3 hours',
          date: 'April 12, 2024'
        }
      ]
    }
  }
}
</script> 