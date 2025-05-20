<template>
  <div class="max-w-7xl mx-auto">
    <h1 class="text-3xl font-bold mb-8">Dashboard</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-lg font-semibold text-gray-700">Total Posts</h3>
        <p class="text-4xl font-bold text-blue-600 mt-2">12</p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-lg font-semibold text-gray-700">Total Views</h3>
        <p class="text-4xl font-bold text-blue-600 mt-2">1,234</p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-lg font-semibold text-gray-700">Comments</h3>
        <p class="text-4xl font-bold text-blue-600 mt-2">45</p>
      </div>
    </div>

    <div class="mt-12">
      <h2 class="text-2xl font-bold mb-6">Recent Posts</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="post in recentPosts" 
          :key="post.id" 
          class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h3 class="text-xl font-semibold mb-2">{{ post.title }}</h3>
          <p class="text-gray-600 mb-4">{{ post.excerpt }}</p>
          <div class="flex justify-between items-center text-sm text-gray-500">
            <span>{{ post.date }}</span>
            <router-link 
              :to="'/post/' + post.id"
              class="text-blue-600 hover:text-blue-800 font-medium"
            >
              Read More
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
          date: '2024-03-20'
        },
        {
          id: 2,
          title: 'Annual Biker Meetup',
          excerpt: 'Our biggest event of the year! Connect with fellow riders, showcase your bike, and enjoy live music...',
          date: '2024-03-19'
        },
        {
          id: 3,
          title: 'Safety Workshop',
          excerpt: 'Essential safety tips and maintenance workshop for all riders. Learn from experienced bikers...',
          date: '2024-03-18'
        }
      ]
    }
  }
}
</script>

<style scoped>
.dashboard {
  max-width: 1200px;
  margin: 0 auto;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.stat-card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.stat-number {
  font-size: 2em;
  font-weight: bold;
  color: #3498db;
  margin: 10px 0;
}

.recent-posts {
  margin-top: 40px;
}

.post-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.post-card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.post-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  color: #666;
}

.post-meta a {
  color: #3498db;
  text-decoration: none;
}

.post-meta a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .post-list {
    grid-template-columns: 1fr;
  }
}
</style>