<template>
  <nav>
    <!-- Social Icons - Subheader -->
    <!-- <div class="flex items-center space-x-0 5 absolute ml-24 left-3/4 pt-2">
      <a href="https://twitter.com/AlphaCircuitCor">
        <img
          src="~/assets/images/icons/32x32-Icons/icons8-twitter.svg"
          alt="Alpha Circuit on Twitter"
        />
      </a>
      <a href="https://facebook.com">
        <img
          src="~/assets/images/icons/32x32-Icons/icons8-facebook-32.svg"
          alt="Alpha Circuit on Facebook"
        />
      </a>
      <a
        href="https://www.linkedin.com/company/alpha-circuit-corporation/about/"
      >
        <img
          src="~/assets/images/icons/32x32-Icons/icons8-linkedin-32.svg"
          alt="Alpha Circuit on LinkedIn"
        />
      </a>
    </div> -->

    <div class="max-w-7xl mx-auto pt-6">
      <div class="flex justify-between items-center">
        <!-- logo -->
        <div>
          <NuxtLink to="/" class="py-2 px-3">
            <img
              src="~/assets/images/logos/logo.png"
              alt="Alpha Circuit Logo"
            />
          </NuxtLink>
        </div>
        <!-- primary navigation -->
        <div class="flex font-manrope">
          <div class="hidden md:flex items-center space-x-3 mr-2">
            <NuxtLink
              to="/"
              class="
                py-2
                px-3
                text-neutrals-800 text-lg
                no-underline
                hover:underline
                underline-offset-8
                decoration-lightGreen-100 decoration-4
              "
              >Home</NuxtLink
            >
            <NuxtLink
              to="/about"
              class="
                py-2
                px-3
                text-neutrals-800 text-lg
                no-underline
                hover:underline
                underline-offset-8
                decoration-lightGreen-100 decoration-4
              "
              >About</NuxtLink
            >
            <NuxtLink to="/products"
              class="
                py-2
                px-3
                text-neutrals-800 text-lg
                no-underline
                hover:underline
                underline-offset-8
                decoration-lightGreen-100 decoration-4
              "
              >Products</NuxtLink>
            <NuxtLink
              to="/quote"
              class="
                py-2
                px-3
                text-neutrals-800 text-lg
                no-underline
                hover:underline
                underline-offset-8
                decoration-lightGreen-100 decoration-4
              "
              >Quote</NuxtLink
            >
            <NuxtLink to="/capabilities"
              class="
                py-2
                px-3
                text-neutrals-800 text-lg
                no-underline
                hover:underline
                underline-offset-8
                decoration-lightGreen-100 decoration-4
              "
              >Capabilities</NuxtLink>
          </div>
          <!-- secondary nav - cta -->
          <div class="hidden md:flex items-center space-x-1">
            <NuxtLink
              to="/contact"
              class="
                py-2
                px-4
                shadow-xl
                bg-darkGreen-700
                rounded-full
                text-neutrals-100
                hover:bg-lightGreen-100 hover:text-darkGreen-300
                transition-all
                duration-300
                ease-out
              "
              >Contact Us</NuxtLink
            >
          </div>
        </div>
      </div>
        <!-- Mobile Hamburger Button -->
        <div class="md:hidden flex items-center">
              <button @click="toggleMenu" class="fixed top-0 right-0 p-4 m-4 bg-white rounded-lg shadow-lg z-50">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6">
                  <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                </svg>
              </button>
            </div>
        <div ref="menu" :class="{ 'hidden': !isOpen }" class="fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 transition-transform duration-100 transform translate-x-full">
          <!-- Mobile Menu content -->
          <nav class="p-4">
            <a href="#" class="block py-2 px-4 text-gray-800 hover:bg-gray-200">Home</a>
            <a href="#" class="block py-2 px-4 text-gray-800 hover:bg-gray-200">About</a>
            <a href="#" class="block py-2 px-4 text-gray-800 hover:bg-gray-200">Products</a>
            <a href="#" class="block py-2 px-4 text-gray-800 hover:bg-gray-200">Quote Request</a>
            <a href="#" class="block py-2 px-4 text-gray-800 hover:bg-gray-200">Capabilities</a>
            <a href="#" class="block py-2 px-4 text-gray-800 hover:bg-gray-200">Contact Us</a>
          </nav>
        </div>

        <!-- Overlay -->
        <div v-if="isOpen" @click="toggleMenu" class="fixed inset-0 bg-gray-800 bg-opacity-50 z-40"></div>
    </div>
  </nav>
  <slot />
  <!-- <Footer /> -->
  <newFooter />
</template>

<script setup>
  // import Footer from "~/layouts/footer.vue";
  import newFooter from "~/layouts/newFooter.vue"
  import { ref } from 'vue';
  const isOpen = ref(false)
  const toggleMenu = () => {
    isOpen.value = !isOpen.value;
  }
</script>

<style scoped></style>
