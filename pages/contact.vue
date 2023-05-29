<template>
  <div id="wrapper" class="w-full">
    <div class="flex bg-lightGreen-100 h-20 w-full">
      <div class="flex flex-row gap-10 mr-28 mt-50 w-full justify-end items-center">
        <div>READY TO REQUEST A QUOTE?</div>
        <div class="rounded-md text-white bg-neutrals-600 p-2 px-4">
          Inquires?
        </div>
      </div>
    </div>

    <div class="rounded-lg flex shadow-lg bg-gradient-to-b from-darkGreen-700 to-darkGreen-500 via-lightGreen-300 to-lightGreen-600 max-w-5xl mt-8 mx-auto mb-8 w-1100 h-400">
      <!-- Leftside -->
      <div class="text-left align-middle p-8 text-black rounded-lg gap-2 flex-col flex">
        <h1 class="w-400 text-5xl font-ubuntu font-semibold">
          Partner with Alpha Circuit today!
        </h1>
        <p class="w-300 text-2xl font-manrope">
          Level up your business with a leader in producing innovative PCB for
          emerging electronics
        </p>
        <div class="flex w-150 -ml-1 space-x-1">
          <img
            class="cursor-pointer"
            src="~/assets/images/icons/32x32-Icons/icons8-location-32.png"
            alt="Location Pin"
          />
          <img
            class="cursor-pointer"
            src="~/assets/images/icons/32x32-Icons/icons8-phone-32.png"
            alt="Call Icon"
          />
          <img
            class="cursor-pointer"
            src="~/assets/images/icons/32x32-Icons/icons8-email-32.png"
            alt="Email Icon"
          />
        </div>
      </div>
      <!-- Rightside -->
      <div>
        <img class="rounded-r-lg h-400" src="~/assets/images/images/pcb.jpg" alt="" />
      </div>
    </div>

    <div id="third section" class="h-90 pb-32">
      <div class="flex flex-row justify-evenly items-center p-10 h-max">
        <div class="text-white bg-darkGreen-900 rounded-lg text-2xl p-10 w-400">
          <h4 class="font-bold mb-5">First Choice PCB Supplier</h4>
          <p class="font-manrope">
            35 Years of mutually rewarding relationships with all of our
            customers from here in Illinois!
          </p>
        </div>
        <blockquote
          class="
            w-64
            bg-neutrals-100
            text-darkGreen-700
            box-border
            p-6
            border-2 border-neutrals-150 border-l-10
            before:content-[&quot;\201c&quot;] before:text-2xl
          "
        >
          <p class="font-serif font-semibold italic leading-6 margin-0">
            Because you're not just a customer... You are our partner, and your
            success is our success.
          </p>
        </blockquote>
        <img src="~/assets/images/images/video-call.svg" class="h-52 w-1/5" alt="" />
      </div>
    </div>
    <div class="bg-lightGreen-50">
      <div class="flex flex-row gap-16 justify-center m-10 relative abolute -top-40">
        <ContactCard
          v-for="data in fourthSectionData"
          :imgUrl="data.imgUrl"
          :title="data.title"
          :body="data.body"
          :button-text="data.buttonText"
        />
      </div>
      <div class="flex -mt-32">
        <div>
          <Form class="w-650 h-450" />
        </div>
        <div class="p-12 mt-4">
          <iframe
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
  </div>
</template>

<script setup>
import Form from "~/components/contact/fourth/form.vue";

const fourthSectionData = [
  {
    imgUrl: "assets/images/icons/48x48-Icons/icons8-career-vacancy-48.png",
    title: "Careers",
    body: "Interested in applying? Take a look at our open positions",
    buttonText: "Explore jobs",
  },
  {
    imgUrl: "/assets/images/icons/48x48-Icons/icons8-career-vacancy-48.png",
    title: "About Us",
    body: "Want to know more? Come by schedule a visit, let's talk",
    buttonText: "Book Appointment",
  },
  {
    imgUrl: "/assets/images/icons/48x48-Icons/icons8-quote-request-48.png",
    title: "Quote Request",
    body: "Talk directly with a representative of our sales team today!",
    buttonText: "Get a quote",
  },
];
</script>

<style scoped>
  
</style>
