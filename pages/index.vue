<template>
  <div>
      <div class="flex justify-between max-h-max max-w-7xl mx-auto md:pb-36 md:mt-12 mt-6 p-4">
        <div class="flex flex-col">
          <h1 class="font-ubuntu bold md:text-5xl text-4xl text-left mt-2">
            Powering your tech at every spec
          </h1>
          <p class="text-left font-manrope md:text-4xl text-3xl break-normal md:pr-40 mt-4">
            Delivering high quality PCB components creating lasting value for our
            customers
          </p>
          <NuxtLink to="/about" class="py-3 px-5 mt-4 m-1 w-max rounded-lg text-neutrals-100 relative inline-flex group items-center justify-center cursor-pointer border-b-4 border-l-2 active:border-darkGreen-700 active:shadow-none shadow-xl bg-gradient-to-tr from-darkGreen-700 to-darkGreen-700 border-darkGreen-700">
            <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
            <span class="relative font-manrope">Learn More</span>
          </NuxtLink>
          <!-- Carousel -->
          <div id="controls-carousel" class="relative mt-4" data-carousel="slide">
            <!-- Carousel wrapper -->
            <div class="relative h-56 overflow-hidden rounded-lg">
              <!-- Item 1 -->
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img
                  src="~/assets/images/images/carouselImages/26-02-2018882096.webp"
                  class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
              </div>
              <!-- Item 2 -->
              <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
                <img src="~/assets/images/images/carouselImages/26-02-201863869.webp" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
              </div>
              <!-- Item 3 -->
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="~/assets/images/images/carouselImages/26-02-2018989851.webp" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
              </div>
              <!-- Item 4 -->
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="~/assets/images/images/carouselImages/26-02-2018286406.webp" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
              </div>
              <!-- Item 5 -->
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="~/assets/images/images/carouselImages/26-02-2018391558.webp" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
              </div>
            </div>
            <!-- Slider controls -->
            <button
              type="button"
              class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
              <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30group-hover:bg-white/50dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg aria-hidden="true" class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                <span class="sr-only">Previous</span>
              </span>
            </button>
            <button type="button" class=" absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
              <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
                <svg aria-hidden="true" class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
                <span class="sr-only">Next</span>
              </span>
            </button>
          </div>
      </div>

      <div class="relative hidden sm:inline-block left-16">
        <img class="absolute top-10 -left-10" src="~/assets/images/images/companyAssets/15916-removebg-preview-1.webp" alt="">
        <svg class="top-0" width="516" height="453" viewBox="0 0 566 503" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M56.3367 116.702C92.0917 73.8894 135.114 41.7804 183.715 20.9305C231.887 0.112132 285.606 -9.87691 315.26 17.3355C344.944 44.9778 350.595 110.251 398.021 149.99C445.478 190.158 534.711 204.791 558.421 239.353C581.701 273.948 539.458 328.472 493.155 362.982C446.82 397.063 397.253 410.637 347.436 438.49C297.62 466.344 248.413 508.413 209.034 501.793C169.623 494.744 140.437 438.542 101.135 391.726C61.8019 344.48 12.7512 306.157 2.43824 259.808C-7.84318 213.889 20.5817 159.514 56.3367 116.702Z" fill="#54C68E" fill-opacity="0.6"/>
        </svg>
      </div>
    </div>

    <!-- Lets Innovate Together Section -->
    <div class="bg-darkGreen-700 text-neutrals-100 flex flex-col p-8 md:absolute md:left-1/2 md:top-[46rem] md:rounded-l-lg md:rounded-tr-none md:rounded-br-none rounded-lg m-4 md:m-0">
      <h2 class="font-ubuntu italic text-2xl">Lets Innovate Together</h2>
      <p class="font-manrope text-xl">Here at Alpha Circuit we strive to be the best in class manufacturer and provider of PCB solutions in the industry and for your needs. Work together with us to prototype your goals and we'll work towards making that a reality. Giving you a best in class product that is built to last.</p>
    </div>
    <!-- Second Section -->
    <section class="bg-lightGreen-50 flex flex-col md:flex-row mx-auto">
      <!-- Action Cards -->
      <div class="md:ml-20 md:m-16 flex-col flex space-y-5 p-4 md:p-0">
        <NuxtLink to="/quote">
          <div class="bg-darkGreen-900 text-neutrals-100 flex justify-center md:w-[24rem] py-8 pl-4 rounded-lg cursor-pointer hover:shadow-xl group">
              <img src="~/assets/images/icons/64x72-Icons/icons8-quote-request-64x72.png" alt="" />
              <div>
                  <h4 class="font-ubuntu bold ml-2 no-underline group-hover:underline">Request A Quote</h4>
                  <p class="font-manrope bold ml-2">Our goal is to provide you with the best possible product and solution</p>
              </div>
          </div>
        </NuxtLink>
        <NuxtLink to="/capabilities">
          <div class="bg-darkGreen-900 text-neutrals-100 flex justify-center md:w-[24rem] py-8 pl-4 rounded-lg cursor-pointer hover:shadow-xl group">
              <img src="~/assets/images/icons/64x72-Icons/Support.png" alt="" />
              <div>
                <h4 class="font-ubuntu bold ml-2 no-underline group-hover:underline">Capabilities</h4>
                <p class="font-manrope bold ml-2">Our goal is to provide you with the best possible product and solution</p>
              </div>
          </div>
        </NuxtLink>
      </div>
      <!-- Trusted By Section -->
      <div class="md:mt-48 2xl:ml-64 flex flex-col justify-center md:left-1/2 md:absolute">
        <h3 class="text-center text-2xl my-4 font-ubuntu bold">
          Recognized and Trusted By:
        </h3>
        <!-- postLaunchFix -- i made the md:flex-row into md:flex-col while we wait for more partner logos -->
        <div class="grid grid-cols-2 gap-2 place-items-center md:flex md:flex-row mb-12 md:mb-0">
          <img class="" src="~/assets/images/images/companyAssets/boyd.png" width="148" height="90" alt="" />
          <img class="opacity-0" src="https://via.placeholder.com/148x90" alt="" />
          <img class="opacity-0" src="https://via.placeholder.com/148x90" alt="" />
          <img class="opacity-0" src="https://via.placeholder.com/148x90" alt="" />
        </div>
      </div>
    </section>

    <!-- Serving In These Industries Section -->
    <section class="max-w-7xl mx-auto pt-6">
      <div class="text-center">
        <h1 class="text-2xl font-manrope">Industries</h1>
        <h2 class="text-darkGreen-700 text-xl font-bold font-ubuntu">
          We Serve Solutions In These Markets
        </h2>
      </div>

      <div class="grid place-items-center gap-4 grid-cols-2 my-6 md:p-0 p-4 md:grid-cols-4 pt-6 pb-12">
        <!-- All of these "cards" should clickout to a paragraph or writeup on another page. TODO -->
        <div class="bg-lightGreen-50 w-200 h-150 rounded-xl grid place-items-center hover:scale-110 transform transition cursor-pointer">
          <img src="~/assets/images/icons/48x48-Icons/icons8-hospital-bed-with-iv-machine-48.png" alt="Medical Diagnostics Icon"
          />
          <p class="font-ubuntu font-medium hover:underline">
            Medical Diagnostics
          </p>
        </div>
        <!-- All of these "cards" should clickout to a paragraph or writeup on another page. TODO -->
        <div class="bg-lightGreen-50 w-200 h-150 rounded-xl grid place-items-center hover:scale-110 transform transition cursor-pointer">
          <img src="~/assets/images/icons/48x48-Icons/icons8-microchip-48.png" alt="5G Infrastructure Icon"/>
          <p class="font-ubuntu font-medium hover:underline">5G Infrastructure</p>
        </div>
        <!-- All of these "cards" should clickout to a paragraph or writeup on another page. TODO -->
        <div class="bg-lightGreen-50 w-200 h-150 rounded-xl grid place-items-center hover:scale-110 transform transition cursor-pointer">
          <img src="~/assets/images/icons/48x48-Icons/icons8-automotive-48.png" alt="Automotives Icon"/>
          <p class="font-ubuntu font-medium hover:underline">Automotives</p>
        </div>
        <!-- All of these "cards" should clickout to a paragraph or writeup on another page. TODO -->
        <div class="bg-lightGreen-50 w-200 h-150 rounded-xl grid place-items-center hover:scale-110 transform transition cursor-pointer">
          <img src="~/assets/images/icons/48x48-Icons/icons8-display-48.png" alt="Display Electronics Icon"/>
          <p class="font-ubuntu font-medium hover:underline">Display Electronics</p>
        </div>
        <!-- All of these "cards" should clickout to a paragraph or writeup on another page. TODO -->
        <div class="bg-lightGreen-50 w-200 h-150 rounded-xl grid place-items-center hover:scale-110 transform transition cursor-pointer">
          <img src="~/assets/images/icons/48x48-Icons/icons8-cockpit-48.png" alt="Avionics In Cockpic Icon"/>
          <p class="font-ubuntu font-medium hover:underline">Avionics</p>
        </div>
        <!-- All of these "cards" should clickout to a paragraph or writeup on another page. TODO -->
        <div class="bg-lightGreen-50 w-200 h-150 rounded-xl grid place-items-center hover:scale-110 transform transition cursor-pointer">
          <img src="~/assets/images/icons/48x48-Icons/icons8-aeronautics-48.png" alt="Aerospace Icon"/>
          <p class="font-ubuntu font-medium hover:underline">Aerospace</p>
        </div>
        <!-- All of these "cards" should clickout to a paragraph or writeup on another page. TODO -->
        <div class="bg-lightGreen-50 w-200 h-150 rounded-xl grid place-items-center hover:scale-110 transform transition cursor-pointer">
          <img src="~/assets/images/icons/48x48-Icons/icons8-automation-48.png" alt="Industrial Automation"/>
          <p class="font-ubuntu font-medium hover:underline">Industrial Automation</p>
        </div>
        <!-- All of these "cards" should clickout to a paragraph or writeup on another page. TODO -->
        <div class="bg-lightGreen-50 w-200 h-150 rounded-xl grid place-items-center hover:scale-110 transform transition cursor-pointer">
          <img src="~/assets/images/icons/48x48-Icons/icons8-electronics-48.png" alt=""/>
          <p class="font-ubuntu font-medium hover:underline">Power Electronics</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "index",
};
</script>

<script setup>
import { onMounted } from "vue";
import { initCarousels } from "flowbite";

onMounted(() => {
  initCarousels();
});
</script>

<style scoped></style>
