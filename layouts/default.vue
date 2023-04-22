<template>
  <nav>
    <!-- Social Icons - Subheader -->
    <div class="flex items-center space-x-0 5 absolute ml-24 left-3/4 pt-2">
      <a href="https://twitter.com/AlphaCircuitCor">
        <img src="../assets/images/icons8-twitter.svg" alt="Alpha Circuit on Twitter"/>
      </a>
      <a href="https://facebook.com">
        <img src="../assets/images/icons8-facebook-32.svg" alt="Alpha Circuit on Facebook"/>
      </a>
      <a href="https://www.linkedin.com/company/alpha-circuit-corporation/about/">
        <img src="../assets/images/icons8-linkedin-32.svg" alt="Alpha Circuit on LinkedIn"/>
      </a>
    </div>

    <div class="max-w-7xl mx-auto pt-6">
      <div class="flex justify-between items-center">
        <!-- logo -->
        <div>
          <a href="index.html" class="py-2 px-3">
            <img src="../assets/images/logo.png" alt="Alpha Circuit Logo" />
          </a>
        </div>
        <!-- primary navigation -->
        <div class="flex font-manrope">
          <div class="flex items-center space-x-3 mr-2">
            <a href="#" class="py-2 px-3 text-neutrals-800 text-lg no-underline hover:underline underline-offset-8 decoration-lightGreen-100 decoration-4">Home</a>
            <NuxtLink to="/contact" class="py-2 px-3 text-neutrals-800 text-lg no-underline hover:underline underline-offset-8 decoration-lightGreen-100 decoration-4">Contact</NuxtLink>
            <a href="#" class="py-2 px-3 text-neutrals-800 text-lg no-underline hover:underline underline-offset-8 decoration-lightGreen-100 decoration-4">Products</a>
            <a href="#" class="py-2 px-3 text-neutrals-800 text-lg no-underline hover:underline underline-offset-8 decoration-lightGreen-100 decoration-4">Quote</a>
            <a href="#" class="py-2 px-3 text-neutrals-800 text-lg no-underline hover:underline underline-offset-8 decoration-lightGreen-100 decoration-4">Capabilities</a>
          </div>
          <!-- secondary nav - cta -->
          <div class="flex items-center space-x-1">
            <a href="#" class="py-2 px-4 shadow-xl bg-darkGreen-700 rounded-full text-neutrals-100 hover:bg-lightGreen-100 hover:text-darkGreen-300 transition-all duration-300 ease-out">Contact Us</a>
          </div>
        </div>
      </div>
      <!-- mobile menu -->
      <!-- TODO -->
    </div>
  </nav>

  <slot/>
  <Footer/>
</template>

<script setup>

</script>

<style scoped>

</style>
