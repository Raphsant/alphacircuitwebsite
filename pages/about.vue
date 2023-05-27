<script setup lang="ts"></script>

<template>
  <div>
    <div id="image">
      <img
        class="h-56 w-full object-cover"
        src="~/assets/images/26-02-201863869.jpeg"
        alt=""
      />
    </div>
    <div
      class="
        bg-darkGreen-900
        text-white
        h-80
        flex flex-row
        items-center
        justify-center
        gap-12
        text-lg
        font-manrope
      "
    >
      <div>
        <img class="h-56 w-96" src="~/assets/images/ph.png" alt="" />
      </div>
      <div class="flex-col gap-5 justify-center align-center flex">
        <div class="text-2xl">Who are we?</div>
        <div class="font-manrope w-96 break-words">
          Our goal at Alpha Circuit Corporation is to make us the easiest PCB
          supplier to work with. Part of this goal is obtaining relevant
          industry certifications. These include TS16949 (Automotive), AS9100
          (Aerospace), and MIL-Prf-31032 (Military).
        </div>
      </div>
    </div>
    <div class="mt-12 ml-32 mr-32 mb-12 flex flex-col gap-5 font-manrope">
      <div class="text-lg text-darkGreen-700 font-bold">Our History</div>
      <div class="text-lg">
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
    <div
      class="
        bg-lightGreen-50
        h-fit
        flex flex-col
        items-center
        gap-14
        pb-20
        pt-10
      "
    >
      <div class="text-darkGreen-700 text-2xl text-center">Our core values</div>
      <div class="grid grid-cols-4 justify-center items-center w-2/4">
        <div class="flex flex-col justify-center items-center">
          <img src="~/assets/images/icons/icons8-family-90.png" alt="" />
          <div class="text-darkGreen-900 font-bold text-2xl text-center">
            Family Spirit
          </div>
        </div>
        <div class="flex flex-col justify-center items-center">
          <img src="~/assets/images/icons/icons8-box-secured-90.png" alt="" />
          <div class="text-darkGreen-900 font-bold text-2xl text-center">
            Confidentiality
          </div>
        </div>
        <div class="flex flex-col justify-center items-center">
          <img src="~/assets/images/icons/icons8-checkmark-90.png" alt="" />
          <div class="text-darkGreen-900 font-bold text-2xl text-center">
            Fulfillment
          </div>
        </div>
        <div class="flex flex-col justify-center items-center">
          <img
            src="~/assets/images/icons/icons8-check-document-90.png"
            alt=""
          />
          <div class="text-darkGreen-900 font-bold text-2xl text-center">
            Accountability
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white h-96 flex flex-row justify-center items-center gap-2">
      <div class="rounded-2xl bg-lightGreen-50 w-1/4 h-2/3">
        <div class="text-darkGreen-900 text-2xl text-center p-4 font-bold">
          Our Mission
        </div>
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
      <div class="rounded-2xl bg-darkGreen-700 w-1/4 h-2/3">
        <div class="text-white text-center text-2xl p-4 font-bold">
          Our Vision
        </div>
        <div class="flex flex-col justify-end items-end mr-6 mt-2 gap-5">
          <div class="text-right text-white">
            We want to be recognized as the first choice PCB supplier
          </div>
          <div class="text-right text-white w-fit ml-5">
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
