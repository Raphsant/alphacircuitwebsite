<script setup lang="ts"></script>

<template>
  <div>
    <div>
      <div class="relative overflow-hidden h-56">
        <img
          class="
            h-full
            w-full
            absolute
            object-cover
            brightness-50
            transform
            transition-all
            duration-3000
            animate-kenburns
          "
          src="~/assets/images/images/carouselImages/26-02-201863869.webp"
          alt=""
        />
        <h1
          class="
            font-ubuntu
            text-3xl text-white
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2 -translate-y-1/2
          "
        >
          About Us
        </h1>
      </div>
    </div>
    <div
      class="
        bg-darkGreen-900
        text-white
        md:h-80
        pt-8
        md:pt-0
        flex flex-col
        md:flex-row
        w-screen
        items-center
        justify-center
        gap-6
        md:gap-12
        text-lg
        pb-8
        md:pb-0
      "
    >
      <div class="md:order-1 order-2">
        <img class="h-56 w-96" src="/img/companyAssets/thumbnail.webp" alt="" />
      </div>
      <div class="flex-col flex md:order-2 order-1 p-4 md:p-0">
        <div class="text-2xl font-ubuntu">Who are we?</div>
        <hr class="w-16 h-1 bg-gray-100 border-0 mt-2 rounded" />
        <div class="font-manrope md:w-96 mt-2 break-words">
          Our goal at Alpha Circuit Corporation is to make us the easiest PCB
          supplier to work with. Part of this goal is obtaining relevant
          industry certifications. These include TS16949 (Automotive), and
          AS9100 (Aerospace).
        </div>
      </div>
    </div>
    <div class="md:mt-12 md:mx-32 md:mb-12 flex flex-col p-12 md:p-0 gap-2">
      <div class="text-lg text-darkGreen-700 font-bold font-ubuntu">
        Our History
      </div>
      <hr class="w-24 h-1 bg-darkGreen-700 border-0 rounded mt-2" />
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
    <div class="md:mt-12 md:mx-32 md:mb-12 flex flex-col p-12 md:p-0 gap-2">
      <div class="text-lg text-darkGreen-700 font-bold font-ubuntu">
        Quality Commitment
      </div>
      <hr class="w-24 h-1 bg-darkGreen-700 border-0 rounded mt-2" />
      <div class="text-lg mt-4 font-manrope">
        We achieve the highest quality levels by utilizing the latest equipment,
        processes, and quality standards throughout our organization. Our
        facilities are ISO 9001, RoHS, certified. We have six-sigma black belt
        trained staff that guarantees strictest quality of the products we ship.
      </div>
      <div class="text-lg">
        We have also trained each employee with the 5S quality system which
        allows us to flawlessly launch and sustain your project. Rigorous
        auditing and regular training of personnel at all levels are done.
        Proactive engineering change system and first article processing concept
        ensure prevention of any quality related issues when actual
        manufacturing of the boards begins. Document control center completely
        safeguard your data and release of technical documents.
      </div>
      <div class="text-lg">
        We invest our time, knowledge and capital to create an optimal solution
        to meet and exceed your requirements and keep you ahead of your
        competitors. Our goal is to provide you with the best possible products.
      </div>
    </div>
    <div
      class="
        bg-lightGreen-50
        h-fit
        flex flex-col
        items-center
        pb-10
        md:pb-20
        pt-10
      "
    >
      <div class="text-darkGreen-700 text-2xl text-center font-ubuntu">
        Our core values
      </div>
      <hr class="w-24 h-1 bg-darkGreen-700 border-0 rounded mt-2" />
      <div
        class="
          grid
          md:grid-cols-4
          grid-cols-2
          gap-8
          md:gap-0
          justify-center
          items-center
          mt-6
          md:w-2/4
          font-ubuntu
        "
      >
        <div class="flex flex-col justify-center items-center">
          <img
            src="~/assets/images/icons/60x60-Icons/icons8-family-60.png"
            alt=""
          />
          <div class="text-darkGreen-900 text-2xl text-center">
            Family Spirit
          </div>
        </div>
        <div class="flex flex-col justify-center items-center">
          <img
            src="~/assets/images/icons/60x60-Icons/icons8-box-secured-60.png"
            alt=""
          />
          <div class="text-darkGreen-900 text-2xl text-center">
            Confidentiality
          </div>
        </div>
        <div class="flex flex-col justify-center items-center">
          <img
            src="~/assets/images/icons/60x60-Icons/icons8-checkmark-60.png"
            alt=""
          />
          <div class="text-darkGreen-900 text-2xl text-center">Fulfillment</div>
        </div>
        <div class="flex flex-col justify-center items-center">
          <img
            src="~/assets/images/icons/60x60-Icons/icons8-check-document-60.png"
            alt=""
          />
          <div class="text-darkGreen-900 text-2xl text-center">
            Accountability
          </div>
        </div>
      </div>
    </div>
    <div
      class="
        bg-white
        md:h-96
        flex flex-col
        md:flex-row
        justify-center
        items-center
        gap-4
        md:gap-8
        font-manrope
        p-4
        md:p-0
      "
    >
      <div
        class="
          rounded-2xl
          bg-lightGreen-50
          md:w-625 md:h-300
          order-2
          md:order-1
        "
      >
        <div class="text-darkGreen-900 text-2xl text-center p-4 font-ubuntu">
          Our Mission
        </div>
        <hr class="w-16 h-1 mx-auto bg-darkGreen-700 border-0 rounded" />
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
      <div
        class="
          rounded-2xl
          bg-darkGreen-700
          md:w-625 md:h-300
          order-1
          md:order-2
        "
      >
        <div class="text-white text-center text-2xl p-4 font-ubuntu">
          Our Vision
        </div>
        <hr class="w-16 h-1 bg-gray-100 border-0 mx-auto rounded" />
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

  <div class="rounded-2xl bg-darkGreen-700 order-3 md:order-3 m-4">
    <div class="text-white text-center text-2xl p-4 font-ubuntu">Our Team</div>
    <hr class="w-16 h-1 bg-gray-100 border-0 mx-auto rounded" />
    <div class="flex flex-col mt-2 gap-1 p-4 md:p-0">
      <div class="md:mx-auto md:max-w-6xl">
        <!-- divider line -->
        <hr
          class="
            my-6
            hidden
            md:visible
            border-gray-350
            sm:mx-auto
            dark:border-gray-700
            lg:my-8
          "
        />
        <p
          class="
            text-white
            font-ubuntu font-bold
            text-center text-2xl
            md:text-left
            my-2
            md:ml-4
          "
        >
          Management Board
        </p>
        <div class="flex flex-col md:flex-row justify-evenly md:p-4 gap-10">
          <div
            class="
              flex flex-col
              text-center
              items-center
              gap-1.5
              bg-neutrals-100
              p-4
              md:px-6
              rounded-xl
              drop-shadow-xl
            "
          >
            <p class="font-manrope">Prashant Patel</p>
            <p class="font-bold font-ubuntu">President and CEO</p>
            <img
              class="w-200 h-200 rounded-full bg-slate-200 shadow-lg"
              src="/img/companyAssets/Prashant.png"
              alt=""
            />
            <p class="font-manrope">prashantp@alphacircuit.com</p>
            <p class="font-manrope">630-617-5555</p>
          </div>
          <div
            class="
              flex flex-col
              text-center
              items-center
              gap-1.5
              bg-neutrals-100
              p-4
              md:px-6
              rounded-xl
              drop-shadow-xl
            "
          >
            <p>Steve Smith</p>
            <p class="font-bold">General Manager</p>
            <img
              class="w-200 h-200 rounded-full bg-slate-200 shadow-lg"
              src="~/assets/images/shapes/default-avatar-photo-placeholder-profile-icon-vector.jpg"
              alt=""
            />
            <p class="font-manrope">steves@alphacircuit.com</p>
            <p class="font-manrope">630-617-5555</p>
            <p class="text-xs">EXT-116</p>
          </div>
          <div
            class="
              flex flex-col
              text-center
              items-center
              gap-1.5
              bg-neutrals-100
              p-4
              md:px-6
              rounded-xl
              drop-shadow-xl
            "
          >
            <p class="font-manrope">Natu Vaghani</p>
            <p class="font-bold font-ubuntu">Engineering Manager</p>
            <img
              class="w-200 h-200 rounded-full bg-slate-200 shadow-lg"
              src="/img/companyAssets/Natu.jpg"
              alt=""
            />
            <p class="font-manrope">natuv@alphacircuit.com</p>
            <p class="font-manrope">630-617-5555</p>
            <p class="text-xs">EXT-119</p>
          </div>
          <div
            class="
              flex flex-col
              text-center
              items-center
              gap-1.5
              bg-neutrals-100
              p-4
              md:px-6
              rounded-xl
              drop-shadow-xl
            "
          >
            <p class="font-manrope">Heather Llanes</p>
            <p class="font-bold font-ubuntu">Quality Manager</p>
            <img
              class="w-200 h-200 rounded-full bg-slate-200 shadow-lg"
              src="/img/companyAssets/Heather.jpg"
              alt=""
            />
            <p class="font-manrope">heatherl@alphacircuit.com</p>
            <p class="font-manrope">630-617-5555</p>
            <p class="text-xs">EXT-112</p>
          </div>
        </div>
      </div>

      <div class="md:mx-auto md:max-w-6xl">
        <!-- divider line -->
        <hr
          class="
            my-6
            hidden
            md:visible
            border-gray-350
            sm:mx-auto
            dark:border-gray-700
            lg:my-8
          "
        />
        <p
          class="
            text-white
            font-ubuntu font-bold
            text-center text-2xl
            md:text-left
            my-2
          "
        >
          Sales Team
        </p>
        <div class="flex flex-col md:flex-row justify-evenly mb-4 gap-10">
          <div
            class="
              flex flex-col
              text-center
              items-center
              gap-1.5
              bg-neutrals-100
              p-4
              md:px-6
              rounded-xl
              drop-shadow-xl
            "
          >
            <p class="font-manrope">Steve Ryan</p>
            <p class="font-bold font-ubuntu">Sales / Direct Support</p>
            <img
              class="w-200 h-200 rounded-full bg-slate-200 shadow-lg"
              src="/img/companyAssets/StevenW.Ryan.jpg"
              alt=""
            />
            <p class="font-manrope">stever@alphacircuit.com</p>
            <p class="font-manrope">630-617-5555</p>
            <p class="text-xs">EXT-110</p>
          </div>
          <div
            class="
              flex flex-col
              text-center
              items-center
              gap-1.5
              bg-neutrals-100
              p-4
              md:px-6
              rounded-xl
              drop-shadow-xl
            "
          >
            <p class="font-manrope">Thomas Massman</p>
            <p class="font-bold font-ubuntu">Sales</p>
            <img
              class="w-200 h-200 rounded-full bg-slate-200 shadow-lg"
              src="/img/companyAssets/TomMassman.jpg"
              alt=""
            />
            <p class="font-manrope">tomm@alphacircuit.com</p>
            <p class="font-manrope">224-908-9964</p>
          </div>
          <div
            class="
              flex flex-col
              text-center
              items-center
              gap-1.5
              bg-neutrals-100
              p-4
              md:px-6
              rounded-xl
              drop-shadow-xl
            "
          >
            <p class="font-manrope">Matt Kehoe</p>
            <p class="font-bold font-ubuntu">Sales</p>
            <img
              class="w-200 h-200 rounded-full bg-slate-200 shadow-lg"
              src="/img/companyAssets/MattKehoe.jpg"
              alt=""
            />
            <p class="font-manrope">mattk@alphacircuit.com</p>
            <p class="font-manrope">404-680-7977</p>
          </div>
          <div
            class="
              flex flex-col
              text-center
              items-center
              gap-1.5
              bg-neutrals-100
              p-4
              md:px-6
              rounded-xl
              drop-shadow-xl
            "
          >
            <p class="font-manrope">Matthew Hammesfahr</p>
            <p class="font-bold font-ubuntu">Sales</p>
            <img
              class="w-200 h-200 rounded-full bg-slate-200 shadow-lg"
              src="/img/companyAssets/MattHamesfahr.jpg"
              alt=""
            />
            <p class="font-manrope">matth@alphacircuit.com</p>
            <p class="font-manrope">847-745-8556</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
