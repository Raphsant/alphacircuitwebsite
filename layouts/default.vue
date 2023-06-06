<template>
  <div
    class="
      text-gray-100
      py-3.5
      px-6
      shadow
      md:flex
      flex
      justify-between
      items-center
      bg-neutrals-100
    "
  >
    <div class="flex items-center cursor-pointer xl:ml-28">
      <NuxtLink to="/" class="text-green-500 text-xl mr-1">
        <img src="~/assets/images/logos/logoNew.png" alt="Alpha Circuit Logo"/>
      </NuxtLink>
    </div>

    <div>
      <span
        @click="MenuOpen"
        class="md:hidden right-6 top-1.5 cursor-pointer text-4xl"
      >
        <div class="top-0 right-0 p-4 m-4 bg-white rounded-lg shadow-lg z-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            class="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </span>
    </div>

    <ul
      class="
        md:flex md:items-center md:px-0
        px-10
        md:pb-0
        pb-10
        md:static
        absolute
        bg-neutrals-100
        md:w-auto
        w-full
        h-full
        top-28
        duration-700
        ease-in
        z-50
      "
      :class="[open ? 'left-0' : 'left-[-100%]']"
    >
      <li class="md:mx-4 md:my-0 my-6">
        <NuxtLink
          @click="MenuOpen"
          to="/"
          class="
            text-neutrals-800 text-lg
            no-underline
            hover:underline
            underline-offset-8
            decoration-lightGreen-100 decoration-4
            py-2
            px-3
          "
          >Home</NuxtLink
        >
      </li>
      <li class="md:mx-4 md:my-0 my-6">
        <NuxtLink
          @click="MenuOpen"
          to="/about"
          class="
            text-neutrals-800 text-lg
            no-underline
            hover:underline
            underline-offset-8
            decoration-lightGreen-100 decoration-4
            py-2
            px-3
          "
          >About</NuxtLink
        >
      </li>
      <li class="md:mx-4 md:my-0 my-6">
        <NuxtLink
          @click="MenuOpen"
          to="products"
          class="
            text-neutrals-800 text-lg
            no-underline
            hover:underline
            underline-offset-8
            decoration-lightGreen-100 decoration-4
            py-2
            px-3
          "
          >Products</NuxtLink
        >
      </li>
      <li class="md:mx-4 md:my-0 my-6">
        <NuxtLink
          @click="MenuOpen"
          to="/capabilities"
          class="
            text-neutrals-800 text-lg
            no-underline
            hover:underline
            underline-offset-8
            decoration-lightGreen-100 decoration-4
            py-2
            px-3
          "
          >Capabilities</NuxtLink
        >
      </li>
      <li class="md:mx-4 md:my-0 my-6">
        <NuxtLink
          @click="MenuOpen"
          to="/quote"
          class="
            text-neutrals-800 text-lg
            no-underline
            hover:underline
            underline-offset-8
            decoration-lightGreen-100 decoration-4
            py-2
            px-3
          "
          >Request A Quote</NuxtLink
        >
      </li>

      <div class="md:flex items-center space-x-1 pl-3">
        <NuxtLink
          @click="MenuOpen"
          to="/contact"
          class="
            text-xl
            py-2
            px-4
            md:my-0
            my-6
            shadow-xl
            bg-darkGreen-700
            md:rounded-full
            rounded-md
            text-neutrals-100
            hover:bg-lightGreen-100 hover:text-darkGreen-300
            transition-all
            duration-300
            ease-out
          "
          >Contact Us</NuxtLink
        >
      </div>
    </ul>
  </div>
  <slot />
  <!-- <Footer /> -->
  <newFooter />
</template>

<script setup>
// import Footer from "~/layouts/footer.vue";

import newFooter from "~/layouts/newFooter.vue";

const open = ref(false);
function MenuOpen() {
  open.value = !open.value;
}
</script>

<style scoped></style>
