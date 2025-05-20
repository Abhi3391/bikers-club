<template>
  <div class="min-h-screen bg-[#F1D3B2]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Hero Section -->
      <div class="text-center mb-16">
        <h1 class="text-4xl font-bold text-[#46211A] mb-4">Latest Stories</h1>
        <p class="text-xl text-[#A43820] max-w-2xl mx-auto">
          Discover our latest articles, insights, and stories from our community.
        </p>
      </div>

      <!-- Featured Post -->
      <div class="mb-16">
        <div class="">
          <div class="">
            <div class="">
              <img 
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643" 
                alt="Featured post" 
                class=""
              >
            </div>
            <div class="p-8 md:w-1/2 flex flex-col justify-center">
              <div class="flex items-center mb-4">
                <span class="bg-[#F1D3B2] text-[#A43820] text-sm font-medium px-3 py-1 rounded-full">
                  Featured
                </span>
                <span class="text-[#46211A] text-sm ml-4">5 min read</span>
              </div>
              <h2 class="text-2xl font-bold text-[#46211A] mb-4">
                The Future of Web Development
              </h2>
              <p class="text-[#A43820] mb-6">
                Explore the latest trends and technologies shaping the future of web development, from AI integration to advanced frameworks.
              </p>
              <div class="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" 
                  alt="Author" 
                  class="w-10 h-10 rounded-full"
                >
                <div class="ml-3">
                  <p class="text-sm font-medium text-[#46211A]">John Doe</p>
                  <p class="text-sm text-[#A43820]">March 15, 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Posts Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="post in posts" :key="post.id" class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <img :src="post.image" :alt="post.title" class="w-full h-48 object-cover">
          <div class="p-6">
            <div class="flex items-center mb-4">
              <span class="bg-[#F1D3B2] text-[#A43820] text-sm font-medium px-3 py-1 rounded-full">
                {{ post.category }}
              </span>
              <span class="text-[#46211A] text-sm ml-4">{{ post.readTime }} min read</span>
            </div>
            <h3 class="text-xl font-bold text-[#46211A] mb-2">{{ post.title }}</h3>
            <p class="text-[#A43820] mb-4">{{ post.excerpt }}</p>
            <div class="flex items-center">
              <img :src="post.authorImage" :alt="post.author" class="w-8 h-8 rounded-full">
              <div class="ml-3">
                <p class="text-sm font-medium text-[#46211A]">{{ post.author }}</p>
                <p class="text-sm text-[#A43820]">{{ post.date }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Newsletter Section -->
      <div class="mt-16 bg-[#46211A] rounded-2xl p-8 text-center">
        <h2 class="text-2xl font-bold text-[#F1D3B2] mb-4">Subscribe to Our Newsletter</h2>
        <p class="text-[#F1D3B2] mb-6">Get the latest stories and updates delivered to your inbox.</p>
        <div class="max-w-md mx-auto flex gap-4">
          <input 
            type="email" 
            placeholder="Enter your email" 
            class="flex-1 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A43820] bg-[#F1D3B2] text-[#46211A] placeholder-[#A43820]"
          >
          <button class="bg-[#A43820] text-[#F1D3B2] px-6 py-2 rounded-lg font-medium hover:bg-[#8B2D16] transition-colors duration-200">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const posts = ref([
  {
    id: 1,
    title: 'Getting Started with Vue.js',
    excerpt: 'Learn the basics of Vue.js and how to build your first application with this powerful framework.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
    category: 'Development',
    readTime: 8,
    author: 'Jane Smith',
    authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    date: 'March 14, 2024'
  },
  {
    id: 2,
    title: 'The Art of UI Design',
    excerpt: 'Discover the principles of creating beautiful and functional user interfaces that users love.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5',
    category: 'Design',
    readTime: 6,
    author: 'Mike Johnson',
    authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    date: 'March 13, 2024'
  },
  {
    id: 3,
    title: 'Optimizing Performance',
    excerpt: 'Tips and tricks for improving your website\'s performance and user experience.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    category: 'Performance',
    readTime: 10,
    author: 'Sarah Wilson',
    authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    date: 'March 12, 2024'
  }
])
</script>

<style scoped>
.posts {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 30px;
}

.post-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.post-card:hover {
  transform: translateY(-5px);
}

.post-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.post-content {
  padding: 20px;
}

.post-content h2 {
  margin: 0 0 10px 0;
  font-size: 1.5em;
}

.post-excerpt {
  color: #666;
  margin-bottom: 15px;
  line-height: 1.5;
}

.post-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  color: #888;
  font-size: 0.9em;
}

.post-category {
  background: #e1f5fe;
  padding: 3px 8px;
  border-radius: 4px;
  color: #0288d1;
}

.read-more {
  display: inline-block;
  color: #3498db;
  text-decoration: none;
  font-weight: bold;
}

.read-more:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .posts-grid {
    grid-template-columns: 1fr;
  }
}
</style> 