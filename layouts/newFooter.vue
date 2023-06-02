<template>

<footer>
    <div class="mx-auto w-screen px-28 rounded-lg py-6 lg:py-8 bg-lightGreen-100">
        <div class="md:flex md:justify-between mr-5 space-y-6">
          <div class="mb-6 md:mb-0 ml-5">
              <NuxtLink to="/" class="flex items-center">
                  <img src="~/assets/images/logos/logo.png" class="h-12 mr-3" alt="Alpha Circuit Logo" />
                  <!-- <span class="self-center text-2xl font-ubuntu font-semibold whitespace-nowrap">Alpha Circuit</span> -->
              </NuxtLink>
              <p class="w-200 h-10 mt-5 font-ubuntu text-neutrals-800">Total Bare Board Manufacturing Solutions</p>
              <p class="w-250 h-85 mt-5 font-manrope text-neutrals-800">One stop shop for your printed circuit board requirements.</p>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                  <ul class="text-gray-600 font-medium">
                      <li class="mb-4">
                          <NuxtLink to="/services" class="hover:underline">Services</NuxtLink>
                      </li>
                      <li class="mb-4">
                          <NuxtLink to="/careers" class="hover:underline">Careers</NuxtLink>
                      </li>
                      <li>
                          <NuxtLink to="/contact" class="hover:underline">Contact Us</NuxtLink>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                  <ul class="text-gray-600 font-medium">
                      <li class="mb-4">
                          <NuxtLink to="/certificates" class="hover:underline">Certificates</NuxtLink>
                      </li>
                      <li class="mb-4">
                          <NuxtLink to="/terms" class="hover:underline">Terms &amp; Conditions</NuxtLink>
                      </li>
                      <div class="flex flex-row space-x-1">
                        <img src="~/assets/images/icons/24x24-Icons/ISO.png" alt="ISO9001 and AS9100 Certification Logo">
                        <img src="~/assets/images/icons/24x24-Icons/ITAR.png" alt="International Traffic In Arms Regulation Certification Logo">
                        <img src="~/assets/images/icons/24x24-Icons/MBE.png" alt="Chicago Minority Supplier - Minority Business Enterprise Certification Logo">
                        <img src="~/assets/images/icons/24x24-Icons/UL (1).png" alt="UL Certified Logo">
                      </div>
                  </ul>
              </div>
          </div>
      </div>
      <hr class="my-6 border-gray-350 sm:mx-auto lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between ml-5">
          <span class="text-sm text-gray-500 sm:text-center">© 2023 Alpha Circuit. All Rights Reserved.
          </span>
          <span class="text-sm text-gray-500 sm:text-center">730 N Oaklawn Ave, Elmhurst, IL, 60126</span>
          <span class="text-sm text-gray-500 sm:text-center">(630)-615-5555</span>
          <span class="text-sm text-gray-500 sm:text-center">sales@alphacircuit.com</span>
          <a class="text-xs hover:underline text-gray-500" href="https://www.icons8.com">Icons by Icons8</a>
          <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0 mr-5">
              <a href="https://facebook.com" class="text-gray-500 hover:text-gray-900">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                  <span class="sr-only">Facebook page</span>
              </a>
              <a href="https://twitter.com/AlphaCircuitCor" class="text-gray-500 hover:text-gray-900">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                  <span class="sr-only">Twitter page</span>
              </a>
              <a href="https://www.linkedin.com/company/alpha-circuit-corporation/" class="text-gray-500 hover:text-gray-900">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn icon</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
          </div>
      </div>
    </div>
</footer>

</template>

<script>
    export default {
        name: "newFooter",
    };
</script>