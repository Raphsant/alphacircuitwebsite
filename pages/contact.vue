<template>
  <div id="wrapper" class="w-full">
    <div class="flex bg-lightGreen-100 h-20 w-full">
      <div
        class="
          flex flex-row
          gap-10
          md:mr-28
          mt-50
          w-full
          md:justify-end
          justify-center
          items-center
        "
      >
        <div>READY TO REQUEST A QUOTE?</div>
        <div
          class="
            rounded-md
            text-white
            bg-neutrals-600
            p-2
            px-4
            hover:underline
            cursor-pointer
            hover:bg-neutrals-800
          "
        >
          <NuxtLink to="/quote"> Inquires? </NuxtLink>
        </div>
      </div>
    </div>
  </div>
  <div
    class="
      rounded-lg
      flex flex-col
      md:flex-row
      shadow-lg
      bg-gradient-to-b
      from-darkGreen-700
      to-darkGreen-500
      via-lightGreen-300
      to-lightGreen-600
      max-w-6xl
      mt-8
      md:mx-auto md:mb-8 md:w-1100 md:h-400
      m-4
    "
  >
    <!-- Leftside -->
    <div
      class="
        text-left
        align-middle
        p-8
        text-black
        rounded-lg
        gap-2
        flex-col flex
      "
    >
      <h1 class="md:w-400 text-5xl font-ubuntu font-semibold">
        Partner with Alpha Circuit today!
      </h1>
      <p class="md:w-300 text-2xl font-manrope">
        Level up your business with a leader in producing innovative PCB for
        emerging electronics
      </p>
      <div class="flex w-150 -ml-1 space-x-1">
        <a
          href="https://www.google.com/maps/place/Alpha+Circuit/@41.9501225,-87.9481431,12z/data=!4m10!1m2!2m1!1salpha+circuit!3m6!1s0x880fb33e009a8cc1:0xe257b9fba3dbacc6!8m2!3d41.921193!4d-87.957951!15sCg1hbHBoYSBjaXJjdWl0kgEMbWFudWZhY3R1cmVy4AEA!16s%2Fg%2F1tzzw2vf?entry=ttu"
          target="_blank"
        >
          <img
            class="cursor-pointer"
            src="~/assets/images/icons/32x32-Icons/icons8-location-32.png"
            alt="Location Pin"
          />
        </a>
        <a href="tel:6306175555">
          <img
            class="cursor-pointer"
            src="~/assets/images/icons/32x32-Icons/icons8-phone-32.png"
            alt="Call Icon"
          />
        </a>
        <a href="mailto:sales@alphacircuit.com">
          <img
            class="cursor-pointer"
            src="~/assets/images/icons/32x32-Icons/icons8-email-32.png"
            alt="Email Icon"
          />
        </a>
      </div>
    </div>
    <!-- Rightside -->
    <div>
      <img
        class="rounded-lg md:rounded-r-lg md:h-400"
        src="~/assets/images/images/carouselImages/pcb.webp"
        alt=""
      />
    </div>
  </div>

  <div id="third section" class="h-90 pb-32">
    <div
      class="
        flex flex-col
        gap-5
        md:gap-0 md:flex-row
        justify-evenly
        items-center
        md:p-10
        h-max
      "
    >
      <div
        class="
          text-white
          bg-darkGreen-900
          rounded-lg
          text-2xl
          p-8
          md:p-10
          w-400
        "
      >
        <h4 class="font-bold mb-5 font-ubuntu">First Choice PCB Supplier</h4>
        <p class="font-manrope">
          35 Years of mutually rewarding relationships with all of our customers
          from here in Illinois!
        </p>
      </div>
      <blockquote
        class="
          md:w-64
          w-96
          bg-neutrals-100
          text-darkGreen-700
          box-border
          p-6
          border-2 border-neutrals-150 border-l-10
          before:content-[&quot;\201c&quot;] before:text-2xl
        "
      >
        <p class="font-ubuntu font-semibold italic leading-6 margin-0">
          "Because you're not just a customer... You are our partner, and your
          success is our success."
        </p>
      </blockquote>
      <img
        src="~/assets/images/shapes/video-call.svg"
        class="h-52 w-1/5 hidden sm:inline-block"
        alt=""
      />
    </div>
  </div>
  <div class="bg-lightGreen-50">
    <div
      class="
        flex flex-col
        md:flex-row md:gap-16
        justify-center
        m-10
        relative
        -top-40
      "
    >
      <ContactCard
        v-for="data in fourthSectionData"
        :imgUrl="data.imgUrl"
        :title="data.title"
        :body="data.body"
        :button-text="data.buttonText"
        :redirect-link="data.redirectLink"
        :hash="data.hash"
      />
    </div>
    <div
      class="
        flex
        md:flex-row
        flex-col
        -mt-40
        md:-mt-32
        max-w-7xl
        mx-auto
        md:pb-16
      "
    >
      <div>
        <Form id="form" class="md:w-650 md:h-450" />
      </div>
      <div class="md:p-0 p-4 md:mt-12 md:w-650 md:h-450">
        <iframe
          class="googlemap"
          width="650"
          height="450"
          style="border: 0"
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAoqHW2nqRR-cbdHyHlFwB5eWpH1wdkrRs&q=730%20N%20Oaklawn%20Ave%2C%20Elmhurst%2C%20IL%2C%2060126"
        >
        </iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
import Form from "~/components/contact/fourth/form.vue";
import ContactCard from "~/components/contact/fourth/ContactCard.vue";

const fourthSectionData = [
  {
    imgUrl: "/img/form.png",
    title: "Careers",
    body: "Interested in applying? Take a look at our open positions",
    buttonText: "Explore jobs",
    redirectLink: "/careers",
  },
  {
    imgUrl: "/img/form.png",
    title: "About Us",
    body: "Want to know more? Come by schedule a visit, let's talk",
    buttonText: "Book Appointment",
    redirectLink: "/contact",
    hash: "#form",
  },
  {
    imgUrl: "/img/icons8-quote-request-48.png",
    title: "Quote Request",
    body: "Talk directly with a representative of our sales team today!",
    buttonText: "Get a quote",
    redirectLink: "/quote",
  },
];
</script>

<style scoped>
.googlemap {
  width: 100%;
}
</style>
