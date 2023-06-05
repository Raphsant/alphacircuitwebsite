<script setup lang="ts"></script>

<template>
  <div>
    <div>
      <div class="relative overflow-hidden h-56">
        <img class="h-full w-full absolute object-cover brightness-50 transform transition-all duration-3000 animate-kenburns" src="~/assets/images/images/carouselImages/26-02-201863869.webp" alt=""/>
        <h1 class="font-ubuntu text-3xl text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">About Us</h1>
      </div>
    </div>
    <div class="bg-darkGreen-900 text-white md:h-80 pt-8 md:pt-0 flex flex-col md:flex-row w-screen items-center justify-center gap-6 md:gap-12 text-lg pb-8 md:pb-0">
      <div class="md:order-1 order-2">
        <img class="h-56 w-96" src="~/assets/images/images/companyAssets/thumbnail.webp" alt="" />
      </div>
      <div class="flex-col flex md:order-2 order-1 p-4 md:p-0">
        <div class="text-2xl font-ubuntu">Who are we?</div>
        <hr class="w-16 h-1 bg-gray-100 border-0 mt-2 rounded"/>
        <div class="font-manrope md:w-96 mt-2 break-words">
          Our goal at Alpha Circuit Corporation is to make us the easiest PCB
          supplier to work with. Part of this goal is obtaining relevant
          industry certifications. These include TS16949 (Automotive), AS9100
          (Aerospace), and MIL-Prf-31032 (Military).
        </div>
      </div>
    </div>
    <div class="md:mt-12 md:mx-32 md:mb-12 flex flex-col p-12 md:p-0">
      <div class="text-lg text-darkGreen-700 font-bold font-ubuntu">
        Our History
      </div>
      <hr class="w-24 h-1 bg-darkGreen-700 border-0 rounded mt-2"/>
      <div class="text-lg mt-4 font-manrope">
        Alpha Circuit Corporation was founded by Bhagvan K. Vaghani in 1981 to
        make simple double sided printed circuit boards and we have steadily
        grown since then.
      </div>
      <div class="text-lg">
        With a change in management philosophy to emphasize on aggressively
        pursuing the rapidly emerging electronics technology market, and
        leveraging our capabilities towards it, we have solidly re-positioned
        ourselves on a higher technology platform. Over the past decade, the PCB
        industry has evolved tremendously to cater to the ever increasing
        demands of making PCBs for high speed and high data processing.
      </div>
    </div>
    <div class="bg-lightGreen-50 h-fit flex flex-col items-center pb-10 md:pb-20 pt-10">
      <div class="text-darkGreen-700 text-2xl text-center font-ubuntu">
        Our core values
      </div>
      <hr class="w-24 h-1 bg-darkGreen-700 border-0 rounded mt-2"/>
      <div class="grid md:grid-cols-4 grid-cols-2 gap-8 md:gap-0 justify-center items-center mt-6 md:w-2/4 font-ubuntu">
        <div class="flex flex-col justify-center items-center">
          <img src="~/assets/images/icons/60x60-Icons/icons8-family-60.png" alt="" />
          <div class="text-darkGreen-900 text-2xl text-center">
            Family Spirit
          </div>
        </div>
        <div class="flex flex-col justify-center items-center">
          <img src="~/assets/images/icons/60x60-Icons/icons8-box-secured-60.png" alt="" />
          <div class="text-darkGreen-900 text-2xl text-center">
            Confidentiality
          </div>
        </div>
        <div class="flex flex-col justify-center items-center">
          <img src="~/assets/images/icons/60x60-Icons/icons8-checkmark-60.png" alt="" />
          <div class="text-darkGreen-900 text-2xl text-center">Fulfillment</div>
        </div>
        <div class="flex flex-col justify-center items-center">
          <img src="~/assets/images/icons/60x60-Icons/icons8-check-document-60.png" alt="" />
          <div class="text-darkGreen-900 text-2xl text-center">
            Accountability
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white md:h-96 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 font-manrope p-4 md:p-0">
      <div class="rounded-2xl bg-lightGreen-50 md:w-625 md:h-300 order-2 md:order-1">
        <div class="text-darkGreen-900 text-2xl text-center p-4 font-ubuntu">
          Our Mission
        </div>
        <hr class="w-16 h-1 mx-auto bg-darkGreen-700 border-0 rounded"/>
        <div class="p-4 md:p-0">
          <ul class="list-disc ml-10 mt-2">
            <li>To set the highest quality standards in the PCB industry</li>
            <li>Deliver the product on time</li>
            <li>Invent and commercialize leading edge technologies</li>
            <li>Reduce our ecological footprint and minimize waste</li>
            <li>Price our products competitively and create value</li>
          </ul>
        </div>
      </div>
      <div class="rounded-2xl bg-darkGreen-700 md:w-625 md:h-300 order-1 md:order-2">
        <div class="text-white text-center text-2xl p-4 font-ubuntu">
          Our Vision
        </div>
        <hr
          class="w-16 h-1 bg-gray-100 border-0 mx-auto rounded"
        />
        <div class="flex flex-col mt-2 gap-1 p-4 md:p-0">
          <div class="text-left text-white ml-5">
            We want to be recognized as the first choice PCB supplier
          </div>
          <div class="text-left text-white md:w-550 ml-5">
            As we grow as a company, we have realized and clearly identified our
            core business goals and values from which we gain strength, build
            our company culture and business strategies.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
