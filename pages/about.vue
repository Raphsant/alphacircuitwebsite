 <script setup lang="ts"></script>

<template>
  <div>
    <div id="image">
      <div class="relative overflow-hidden h-56">
        <img class="h-full w-full absolute object-cover brightness-50 transform transition-all duration-3000 animate-kenburns" src="~/assets/images/26-02-201863869.jpeg" alt=""/>
        <h1 class="text-3xl text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">About Us</h1>
      </div>
    </div>
    <div class="bg-darkGreen-900 text-white h-80 flex flex-row items-center justify-center gap-12 text-lg">
      <div>
        <img class="h-56 w-96" src="~/assets/images/ph.png" alt="" />
      </div>
      <div class="flex-col flex">
        <div class="text-2xl font-ubuntu">Who are we?</div>
        <hr class="w-16 h-1 bg-gray-100 border-0 mt-2 rounded dark:bg-gray-700">
        <div class="font-manrope w-96 mt-2 break-words">
          Our goal at Alpha Circuit Corporation is to make us the easiest PCB
          supplier to work with. Part of this goal is obtaining relevant
          industry certifications. These include TS16949 (Automotive), AS9100
          (Aerospace), and MIL-Prf-31032 (Military).
        </div>
      </div>
    </div>
    <div class="mt-12 ml-32 mr-32 mb-12 flex flex-col">
      <div class="text-lg text-darkGreen-700 font-bold font-ubuntu">Our History</div>
      <hr class="w-24 h-1 bg-darkGreen-700 border-0 rounded dark:bg-gray-700 mt-2">
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
    <div class="bg-lightGreen-50 h-fit flex flex-col items-center pb-20 pt-10">
      <div class="text-darkGreen-700 text-2xl text-center font-ubuntu">Our core values</div>
      <hr class="w-24 h-1 bg-darkGreen-700 border-0 rounded mt-2 dark:bg-gray-700">
      <div class="grid grid-cols-4 justify-center items-center mt-6 w-2/4 font-ubuntu">
        <div class="flex flex-col justify-center items-center">
          <img src="~/assets/images/icons/icons8-family-60.png" alt="" />
          <div class="text-darkGreen-900 text-2xl text-center">
            Family Spirit
          </div>
        </div>
        <div class="flex flex-col justify-center items-center">
          <img src="~/assets/images/icons/icons8-box-secured-60.png" alt="" />
          <div class="text-darkGreen-900 text-2xl text-center">
            Confidentiality
          </div>
        </div>
        <div class="flex flex-col justify-center items-center">
          <img src="~/assets/images/icons/icons8-checkmark-60.png" alt="" />
          <div class="text-darkGreen-900 text-2xl text-center">
            Fulfillment
          </div>
        </div>
        <div class="flex flex-col justify-center items-center">
          <img
            src="~/assets/images/icons/icons8-check-document-60.png"
            alt=""
          />
          <div class="text-darkGreen-900 text-2xl text-center">
            Accountability
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white h-96 flex flex-row justify-center items-center gap-2 font-manrope">
      <div class="rounded-2xl bg-lightGreen-50 w-625 h-300">
        <div class="text-darkGreen-900 text-2xl text-center p-4 font-bold">
          Our Mission
        </div>
        <hr class="w-16 h-1 mx-auto bg-darkGreen-700 border-0 rounded dark:bg-gray-700">
        <div>
          <ul class="list-disc ml-10 mt-2">
            <li>To set the highest quality standards in the PCB industry</li>
            <li>Deliver the product on time</li>
            <li>Invent and commercialize leading edge technologies</li>
            <li>Reduce our ecological footprint and minimize waste</li>
            <li>Price our products competitively and create value</li>
          </ul>
        </div>
      </div>
      <div class="rounded-2xl bg-darkGreen-700 w-625 h-300">
        <div class="text-white text-center text-2xl p-4 font-bold">
          Our Vision
        </div>
        <hr class="w-16 h-1 bg-gray-100 border-0 mx-auto rounded dark:bg-gray-700">
        <div class="flex flex-col mt-2 gap-1">
          <div class="text-left text-white ml-5">
            We want to be recognized as the first choice PCB supplier
          </div>
          <div class="text-left text-white w-550 ml-5">
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
