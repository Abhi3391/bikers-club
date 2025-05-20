<template>
  <div class="min-h-screen bg-[#F1D3B2]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Hero Section -->
      <div class="text-center mb-16">
        <h1 class="text-4xl font-bold text-[#46211A] mb-4">Get in Touch</h1>
        <p class="text-xl text-[#A43820] max-w-2xl mx-auto">
          Have questions or want to collaborate? We'd love to hear from you.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div class="bg-white rounded-2xl shadow-lg p-8">
          <h2 class="text-2xl font-bold text-[#46211A] mb-6">Send us a Message</h2>
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-[#46211A] mb-1">Name</label>
              <input
                type="text"
                id="name"
                v-model="form.name"
                class="w-full px-4 py-2 border border-[#A43820] rounded-lg focus:ring-2 focus:ring-[#A43820] focus:border-[#A43820]"
                required
              >
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-[#46211A] mb-1">Email</label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                class="w-full px-4 py-2 border border-[#A43820] rounded-lg focus:ring-2 focus:ring-[#A43820] focus:border-[#A43820]"
                required
              >
            </div>
            <div>
              <label for="subject" class="block text-sm font-medium text-[#46211A] mb-1">Subject</label>
              <input
                type="text"
                id="subject"
                v-model="form.subject"
                class="w-full px-4 py-2 border border-[#A43820] rounded-lg focus:ring-2 focus:ring-[#A43820] focus:border-[#A43820]"
                required
              >
            </div>
            <div>
              <label for="message" class="block text-sm font-medium text-[#46211A] mb-1">Message</label>
              <textarea
                id="message"
                v-model="form.message"
                rows="4"
                class="w-full px-4 py-2 border border-[#A43820] rounded-lg focus:ring-2 focus:ring-[#A43820] focus:border-[#A43820]"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              class="w-full bg-[#A43820] text-[#F1D3B2] px-6 py-3 rounded-lg font-medium hover:bg-[#8B2D16] transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        </div>

        <!-- Contact Information -->
        <div class="space-y-8">
          <div class="bg-white rounded-2xl shadow-lg p-8">
            <h2 class="text-2xl font-bold text-[#46211A] mb-6">Contact Information</h2>
            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0">
                  <i class="fas fa-envelope text-[#A43820] text-xl"></i>
                </div>
                <div>
                  <h3 class="text-lg font-medium text-[#46211A]">Email</h3>
                  <p class="text-[#A43820]">contact@myblog.com</p>
                </div>
              </div>
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0">
                  <i class="fas fa-phone text-[#A43820] text-xl"></i>
                </div>
                <div>
                  <h3 class="text-lg font-medium text-[#46211A]">Phone</h3>
                  <p class="text-[#A43820]">+1 (555) 123-4567</p>
                </div>
              </div>
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0">
                  <i class="fas fa-map-marker-alt text-[#A43820] text-xl"></i>
                </div>
                <div>
                  <h3 class="text-lg font-medium text-[#46211A]">Location</h3>
                  <p class="text-[#A43820]">123 Blog Street, San Francisco, CA 94107</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Social Media -->
          <div class="bg-white rounded-2xl shadow-lg p-8">
            <h2 class="text-2xl font-bold text-[#46211A] mb-6">Follow Us</h2>
            <div class="flex space-x-6">
              <a href="#" class="text-[#46211A] hover:text-[#A43820] transition-colors duration-200">
                <i class="fab fa-twitter text-2xl"></i>
              </a>
              <a href="#" class="text-[#46211A] hover:text-[#A43820] transition-colors duration-200">
                <i class="fab fa-facebook text-2xl"></i>
              </a>
              <a href="#" class="text-[#46211A] hover:text-[#A43820] transition-colors duration-200">
                <i class="fab fa-instagram text-2xl"></i>
              </a>
              <a href="#" class="text-[#46211A] hover:text-[#A43820] transition-colors duration-200">
                <i class="fab fa-linkedin text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  console.log('Form submitted:', form.value)
  alert('Thank you for your message! We will get back to you soon.')
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
}
</script> 