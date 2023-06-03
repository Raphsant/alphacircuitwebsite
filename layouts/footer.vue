<template>
  <!-- Footer Container -->
  <footer
    class="
      max-w-7xl
      mx-auto
      bg-lightGreen-100
      p-12
      flex
      relative
      rounded-md
      font-manrope
    "
  >
    <!-- Left Company Information Container -->
    <div class="">
      <NuxtLink to="/"><img src="../assets/images/logos/logo.png" alt="Alpha Circuit Logo"></NuxtLink>
      <p class="w-300 h-85 mt-5">One stop shop for your printed circuit board requirements. We are the foundation your business can be based on.</p>
      <div class="bg-darkGreen-700 text-neutrals-100 py-2 px-8 w-fit rounded-lg mt-5 hover:underline cursor-pointer hover:scale-105 transform transition">
        <a href="">Inquiries?</a>
      </div>
      <ul class="flex space-x-2 mt-2">
        <li><a class="hover:underline" href="">Services</a></li>
        <li>
          <NuxtLink to="/careers" class="hover:underline" href=""
            >Careers</NuxtLink
          >
        </li>
        <li><a class="hover:underline" href="">Certificates</a></li>
        <li><a class="hover:underline" href="">Terms</a></li>
      </ul>
      <a class="text-xs hover:underline" href="icons8.com">Icons by icons8.com</a>
    </div>
    <!-- Right Contact Information Container -->
    <div
      class="
        text-neutrals-100
        bg-darkGreen-900
        h-max
        absolute
        top-36
        left-96
        rounded-md
      "
    >
      <div class="flex p-2 space-x-10">
        <div class="p-4 pr-8 flex-col space-y-1">
          <h5 class="">Address:</h5>
          <h6>730 N Oaklawn Ave,<br />Elmhurst, IL, 60126</h6>
        </div>

        <div
          class="border-solid border-neutrals-100 border-l-2 left-2/4 h-75 mt-4"
        ></div>

        <div class="p-4 pr-8">
          <h5 class="">Phone:</h5>
          <h6>(630)-615-5555</h6>
          <h5 class="">Email:</h5>
          <h6>sales@alphacircuit.com</h6>
        </div>

        <div
          class="border-solid border-neutrals-100 border-l-2 left-2/4 h-75 mt-4"
        ></div>
        <div class="flex space-x-2">
          <img
            class="self-center"
            src="~/assets/images/logos/MBE-Logo-Alt-Color-60x60.png"
            alt="Minority Business Enterprise Logo"
          />
          <img
            class="self-center"
            src="~/assets/images/logos/UL.png"
            alt="UL Certified Logo"
          />
          <img
            class="self-center"
            src="~/assets/images/logos/ITAR.png"
            alt="International Traffic In Arms Regulations Registered Certification Logo"
          />
          <img
            class="self-center"
            src="~/assets/images/logos/AS9100+Black+TM+png.png"
            alt="AS9100 Certification & ISO 9001 Certification Logo"
          />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footer",
};
</script>

<style scoped></style>
