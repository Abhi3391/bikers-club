<template>
  <div class="min-h-screen bg-[#F1D3B2]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Hero Section -->
      <div class="text-center mb-16">
        <h1 class="text-4xl font-bold text-[#46211A] mb-4">About Us</h1>
        <p class="text-xl text-[#A43820] max-w-2xl mx-auto">
          We're a team of passionate writers, designers, and developers creating content that matters.
        </p>
      </div>

      <!-- Mission Section -->
      <div class="bg-white rounded-2xl shadow-lg p-8 mb-16">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-bold text-[#46211A] mb-6">Our Mission</h2>
          <p class="text-lg text-[#A43820] mb-8">
            We believe in the power of storytelling and technology to create meaningful connections. 
            Our mission is to share knowledge, inspire creativity, and build a community of learners and innovators.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="p-6">
              <i class="fas fa-pen-fancy text-4xl text-[#A43820] mb-4"></i>
              <h3 class="text-xl font-bold text-[#46211A] mb-2">Quality Content</h3>
              <p class="text-[#A43820]">Creating engaging and informative content that adds value to our readers.</p>
            </div>
            <div class="p-6">
              <i class="fas fa-users text-4xl text-[#A43820] mb-4"></i>
              <h3 class="text-xl font-bold text-[#46211A] mb-2">Community First</h3>
              <p class="text-[#A43820]">Building a supportive community where ideas can flourish and grow.</p>
            </div>
            <div class="p-6">
              <i class="fas fa-lightbulb text-4xl text-[#A43820] mb-4"></i>
              <h3 class="text-xl font-bold text-[#46211A] mb-2">Innovation</h3>
              <p class="text-[#A43820]">Embracing new technologies and creative approaches to storytelling.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Team Section -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold text-[#46211A] text-center mb-12">Meet Our Team</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="member in team" :key="member.id" class="bg-white rounded-xl shadow-md overflow-hidden">
            <img :src="member.image" :alt="member.name" class="w-full h-64 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold text-[#46211A] mb-2">{{ member.name }}</h3>
              <p class="text-[#A43820] font-medium mb-4">{{ member.role }}</p>
              <p class="text-[#A43820] mb-4">{{ member.bio }}</p>
              <div class="flex space-x-4">
                <a href="#" class="text-[#46211A] hover:text-[#A43820]">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="text-[#46211A] hover:text-[#A43820]">
                  <i class="fab fa-linkedin"></i>
                </a>
                <a href="#" class="text-[#46211A] hover:text-[#A43820]">
                  <i class="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="bg-[#46211A] rounded-2xl p-8 text-center">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div class="text-4xl font-bold text-[#F1D3B2] mb-2">100+</div>
            <div class="text-[#F1D3B2]">Articles Published</div>
          </div>
          <div>
            <div class="text-4xl font-bold text-[#F1D3B2] mb-2">50k+</div>
            <div class="text-[#F1D3B2]">Monthly Readers</div>
          </div>
          <div>
            <div class="text-4xl font-bold text-[#F1D3B2] mb-2">10+</div>
            <div class="text-[#F1D3B2]">Team Members</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const team = ref([
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Editor in Chief',
    bio: 'Passionate about storytelling and digital media with over 10 years of experience.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Lead Developer',
    bio: 'Full-stack developer with expertise in modern web technologies and architecture.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Content Strategist',
    bio: 'Creative writer and strategist focused on creating engaging content that resonates.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80'
  }
])
</script>

<style scoped>
.about {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.about-content {
  margin-top: 30px;
}

.about-section {
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  margin-bottom: 40px;
}

.about-section p {
  line-height: 1.6;
  color: #666;
  margin-bottom: 15px;
}

.team-section {
  margin-bottom: 40px;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 30px;
}

.team-member {
  text-align: center;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.team-member img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 15px;
}

.team-member h3 {
  margin: 10px 0 5px 0;
  color: #2c3e50;
}

.team-member p {
  color: #666;
}

.mission-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 30px;
}

.mission-card {
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  text-align: center;
}

.mission-card i {
  font-size: 2.5em;
  color: #3498db;
  margin-bottom: 20px;
}

.mission-card h3 {
  color: #2c3e50;
  margin-bottom: 15px;
}

.mission-card p {
  color: #666;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .team-grid,
  .mission-grid {
    grid-template-columns: 1fr;
  }
}
</style> 