<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-3xl font-bold text-[#46211A] mb-8">Upcoming Rides</h1>
    
    <!-- Upcoming Rides -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      <div v-for="ride in upcomingRides" :key="ride.id" class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <img :src="ride.image" :alt="ride.title" class="w-full h-48 object-cover">
        <div class="p-6">
          <div class="flex items-center mb-4">
            <span class="bg-[#F1D3B2] text-[#A43820] text-sm font-medium px-3 py-1 rounded-full">
              {{ ride.difficulty }}
            </span>
            <span class="text-[#46211A] text-sm ml-4">{{ ride.duration }}</span>
          </div>
          <h3 class="text-xl font-bold text-[#46211A] mb-2">{{ ride.title }}</h3>
          <p class="text-[#A43820] mb-4">{{ ride.description }}</p>
          <div class="flex justify-between items-center">
            <span class="text-sm text-[#46211A]">{{ ride.date }}</span>
            <button class="bg-[#A43820] text-white px-4 py-2 rounded-lg hover:bg-[#8B2D16] transition-colors">
              Join Ride
            </button>
          </div>
        </div>
      </div>
    </div>

    <h2 class="text-3xl font-bold text-[#46211A] mb-8">Past Rides</h2>
    
    <!-- Past Rides -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="ride in pastRides" :key="ride.id" class="bg-white rounded-xl shadow-md overflow-hidden">
        <img :src="ride.image" :alt="ride.title" class="w-full h-48 object-cover">
        <div class="p-6">
          <h3 class="text-xl font-bold text-[#46211A] mb-2">{{ ride.title }}</h3>
          <p class="text-[#A43820] mb-4">{{ ride.description }}</p>
          <div class="flex justify-between items-center text-sm text-[#46211A]">
            <span>{{ ride.date }}</span>
            <span>{{ ride.participants }} riders</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Rides',
  data() {
    return {
      upcomingRides: [
        {
          id: 1,
          title: 'Mountain Trail Adventure',
          description: 'Experience the thrill of mountain trails with breathtaking views.',
          image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39',
          difficulty: 'Intermediate',
          duration: '4 hours',
          date: 'March 25, 2024'
        },
        {
          id: 2,
          title: 'Coastal Highway Cruise',
          description: 'A scenic ride along the beautiful coastal highway.',
          image: 'https://images.unsplash.com/photo-1558981359-219d6364c9c8',
          difficulty: 'Easy',
          duration: '3 hours',
          date: 'March 28, 2024'
        },
        {
          id: 3,
          title: 'Night City Tour',
          description: 'Explore the city lights on this exciting night ride.',
          image: 'https://images.unsplash.com/photo-1558981852-426c6c22a060',
          difficulty: 'Beginner',
          duration: '2 hours',
          date: 'March 30, 2024'
        }
      ],
      pastRides: [
        {
          id: 4,
          title: 'Forest Trail Expedition',
          description: 'A memorable ride through the ancient forest trails.',
          image: 'https://images.unsplash.com/photo-1558981285-6f0c94958bb6',
          date: 'March 15, 2024',
          participants: 25
        },
        {
          id: 5,
          title: 'Sunset Beach Ride',
          description: 'Beautiful sunset views along the beach route.',
          image: 'https://images.unsplash.com/photo-1558981852-426c6c22a060',
          date: 'March 10, 2024',
          participants: 18
        },
        {
          id: 6,
          title: 'Hill Climb Challenge',
          description: 'Challenging hill climb with amazing summit views.',
          image: 'https://images.unsplash.com/photo-1558981359-219d6364c9c8',
          date: 'March 5, 2024',
          participants: 15
        }
      ]
    }
  }
}
</script> 