<template>
  <div class="max-w-screen">
    <div
      class="
        text-left
        items-left
        flex
        max-w-6xl
        md:mx-auto
        flex-col
        mt-4
        p-4
        md:p-0
      "
    >
      <hr class="w-16 h-1 bg-darkGreen-700 border-0 mt-2 rounded" />
      <p class="mt-2 text-2xl font-ubuntu font-bold text-darkGreen-900">
        Careers
      </p>
      <h1 class="mt-2 text-3xl font-ubuntu font-bold">Run with the best</h1>
      <p class="mt-2 text-2xl font-manrope font-bold">
        Our people have the talent, tools and passion to do epic things
        together—for our clients, for consumers and for our community.
      </p>
    </div>

    <div
      class="
        grid grid-rows-2 grid-cols-2
        p-4
        md:p-0 md:flex
        justify-center
        items-center
        md:items-stretch md:flex-row
        gap-8
        md:mt-8
      "
    >
      <div
        class="
          w-fit
          md:w-250
          h-fit
          md:h-250
          bg-lightGreen-100
          grid
          place-items-center
          rounded-2xl
          p-2
          shadow-2xl
          hover:scale-105
          cursor-pointer
          group
        "
      >
        <a class="scroll-smooth" href="#meet_the_team">
          <img
            class=""
            src="~/assets/images/icons/64x64-Icons/icons8-team-64.png"
            alt=""
          />
          <h4 class="font-ubuntu font-bold">Meet Us</h4>
          <p class="font-manrope">Learn more about the team!</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#000000"
            class="
              w-8
              h-8
              opacity-0
              group-hover:opacity-100
              transition-opacity
              duration-500
              group-hover:animate-fadeInDown
              hidden
              sm:inline-block
            "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </a>
      </div>
      <div
        class="
          w-fit
          md:w-250
          h-fit
          md:h-250
          bg-lightGreen-100
          grid
          place-items-center
          rounded-2xl
          p-2
          shadow-2xl
          hover:scale-105
          cursor-pointer
          group
        "
      >
        <a class="scroll-smooth" href="#your_possibilities">
          <img
            class=""
            src="~/assets/images/icons/64x64-Icons/icons8-award-64.png"
            alt=""
          />
          <h4 class="font-ubuntu font-bold">Your Possibilities</h4>
          <p class="font-manrope">Career opportunities for you</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#000000"
            class="
              w-8
              h-8
              opacity-0
              group-hover:opacity-100
              transition-opacity
              duration-500
              group-hover:animate-fadeInDown
              hidden
              sm:inline-block
            "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </a>
      </div>
      <div
        class="
          w-fit
          md:w-250
          h-fit
          md:h-250
          bg-lightGreen-100
          grid
          place-items-center
          rounded-2xl
          p-2
          shadow-2xl
          hover:scale-105
          cursor-pointer
          group
        "
      >
        <a class="scroll-smooth" href="#open_positions">
          <img
            class=""
            src="~/assets/images/icons/64x64-Icons/icons8-job-64.png"
            alt=""
          />
          <h4 class="font-ubuntu font-bold">Open Positions</h4>
          <p class="font-manrope">Apply and join our team!</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#000000"
            class="
              w-8
              h-8
              opacity-0
              group-hover:opacity-100
              transition-opacity
              duration-500
              group-hover:animate-fadeInDown
              hidden
              sm:inline-block
            "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </a>
      </div>
      <div
        class="
          w-fit
          md:w-250
          h-fit
          md:h-250
          bg-lightGreen-100
          grid
          place-items-center
          rounded-2xl
          p-2
          shadow-2xl
          hover:scale-105
          cursor-pointer
          group
        "
      >
        <NuxtLink to="/about">
          <img
            class=""
            src="~/assets/images/icons/64x64-Icons/icons8-lightbulb-64.png"
            alt=""
          />
          <h4 class="font-ubuntu font-bold">Learn about AlphaCircuit</h4>
          <p class="font-manrope">About Us</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#000000"
            class="
              w-8
              h-8
              opacity-0
              group-hover:opacity-100
              transition-opacity
              duration-500
              group-hover:animate-fadeInDown
              hidden
              sm:inline-block
            "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </div>

  <div class="mb-16">
    <div
      id="open_positions"
      class="
        mx-auto
        max-w-screen
        flex-col flex
        md:flex-row
        justify-evenly
        mt-8
        md:mt-16
      "
    >
      <div
        class="
          w-screen
          md:w-525
          h-375
          flex flex-col
          justify-center
          gap-2
          p-4
          my-4
        "
      >
        <h4 class="font-ubuntu font-bold text-darkGreen-900 text-2xl">
          Open Positions
        </h4>
        <p class="font-ubuntu font-bold">
          We are excited to offer a range of open positions that provide
          excellent opportunities for individuals looking to contribute their
          skills and expertise to our dynamic and innovative team. Whether you
          are an experienced engineer, a skilled technician, or a passionate
          problem solver, we have positions available that encompass various
          areas of expertise. From design and manufacturing to quality control
          and project management, we offer a diverse range of roles that cater
          to different skill sets and interests.
        </p>
        <NuxtLink
          @click="showContent1 = !showContent1"
          :to="{ path: '/careers', hash: '#jobs' }"
          class="
            py-3
            px-5
            mt-4
            m-1
            w-max
            rounded-lg
            text-neutrals-100
            relative
            inline-flex
            md:group
            items-center
            justify-center
            cursor-pointer
            border-b-4 border-l-2
            active:border-darkGreen-700 active:shadow-none
            shadow-xl
            bg-gradient-to-tr
            from-darkGreen-700
            to-darkGreen-700
            border-darkGreen-700
          "
        >
          <span
            class="
              md:absolute
              md:w-0
              md:h-0
              md:transition-all
              md:duration-300
              md:ease-out
              md:bg-white
              md:rounded-full
              md:group-hover:w-32
              md:group-hover:h-32
              md:opacity-10
            "
          ></span>
          <span class="relative font-manrope">Job Postings</span>
        </NuxtLink>
      </div>
      <div>
        <img
          :class="[
            'hello3 w-425 h-375 rounded-lg scale-90',
            isMd ? 'hello scale-100' : '',
          ]"
          src="~/assets/images/images/carouselImages/dylan-gillis-KdeqA3aTnBY-unsplash.jpg"
          alt=""
        />
      </div>
    </div>
    <div
      v-if="showContent1"
      class="space-y-5 py-6 pr-6 pl-6 md:pl-0 2xl:pl-36 max-w-6xl mx-left"
    >
      <div class="md:max-w-2xl md:mx-48">
        <div class="bg-white rounded-xl border-2">
          <div
            id="jobs"
            @click="
              () => {
                showContent2 = !showContent2;
                isOpen1 = !isOpen1;
              }
            "
            class="flex items-center justify-between cursor-pointer"
          >
            <span class="font-semibold text-lg p-4 font-ubuntu"
              >Entry Level PCB Designer (10)</span
            >
            <span class="font-semibold text-xs text-gray-500"
              >*US Citizen or Green Card required</span
            >
            <div>
              <img
                v-if="isOpen1"
                class="scale-75 mr-2"
                src="~/assets/images/icons/32x32-Icons/icons8-chevron-up-32.png"
                alt=""
              />
              <img
                v-else
                class="scale-75 mr-2"
                src="~/assets/images/icons/32x32-Icons/icons8-chevron-down-32.png"
                alt=""
              />
            </div>
          </div>

          <div
            v-if="showContent2"
            class="ease-out animate-fadeInDown transition-opacity duration-1000"
          >
            <div class="p-4 border-t space-y-2">
              <h6 class="font-ubuntu font-semibold text-darkGreen-700">
                Responsibilities and Duties
              </h6>
              <p class="font-manrope">
                In this role, you will be responsible for designing and drafting
                layouts of printed circuit boards (PCBs) based on engineering
                specifications. You will collaborate closely with the
                Engineering staff to address design details and resolve any
                issues that may arise. Additionally, you will analyze
                engineering design schematics and supporting documents to
                strategically plan the layout of PCB components and printed
                circuitry.
              </p>
              <h6 class="font-ubuntu font-semibold text-darkGreen-700">
                Education / Experience:
              </h6>
              <p class="font-manrope">
                The ideal candidate will have completed a PCB design course from
                an accredited source. Their educational background should
                include an Associate's degree or On-the-Job training within the
                electronics industry, candidate should have working knowledge of
                Cadence and/or Atrium Designer software tools.
              </p>
              <h6 class="font-ubuntu font-semibold text-darkGreen-700">
                Preferred Experience Level
              </h6>
              <p class="font-manrope">
                The ideal candidate will have completed a PCB design course from
                an accredited source. Their educational background should
                include an Associate's degree or On-the-Job training within the
                electronics industry, candidate should have working knowledge of
                Cadence and/or Atrium Designer software tools.
              </p>
              <p class="text-gray-500 text-xs mt-2">
                *A complete design and layout training will be provided to the
                selected candidate
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="md:max-w-2xl md:mx-48">
        <div class="bg-white rounded-xl border-2">
          <div
            @click="
              () => {
                showContent3 = !showContent3;
                isOpen2 = !isOpen2;
              }
            "
            class="flex items-center justify-between cursor-pointer"
          >
            <span class="font-semibold text-lg p-4 font-ubuntu"
              >Quality Control Inspector (5)</span
            >
            <span class="font-semibold text-xs text-gray-500"
              >*US Citizen or Green Card required</span
            >
            <div>
              <img
                v-if="isOpen2"
                class="scale-75 mr-2"
                src="~/assets/images/icons/32x32-Icons/icons8-chevron-up-32.png"
                alt=""
              />
              <img
                v-else
                class="scale-75 mr-2"
                src="~/assets/images/icons/32x32-Icons/icons8-chevron-down-32.png"
                alt=""
              />
            </div>
          </div>

          <div
            v-if="showContent3"
            class="ease-out animate-fadeInDown transition-opacity duration-1000"
          >
            <div class="p-4 border-t space-y-2">
              <h6 class="font-ubuntu font-semibold text-darkGreen-700">
                Responsibilities and Duties
              </h6>
              <p class="font-manrope">
                In this role, you will oversee various procurement activities,
                including the acquisition of goods and services such as raw
                materials, equipment, tools, parts, and supplies. This involves
                engaging with vendors to gather essential product or service
                information, such as pricing, availability, and delivery
                schedules. Utilizing your market knowledge, you will estimate
                values and determine the most suitable procurement method,
                whether it's through direct purchase or bid. You will
                meticulously review bid proposals, negotiate contracts within
                budgetary constraints, and maintain comprehensive procurement
                records. In cases of defective or unsatisfactory goods or
                services, you will liaise with vendors to identify the root
                cause and implement corrective measures. Additionally, you may
                be responsible for validating invoices for payment.
              </p>
              <h6 class="font-ubuntu font-semibold text-darkGreen-700">
                Education / Experience:
              </h6>
              <p class="font-manrope">
                This candidate will have a high school diploma or equivalent -
                ideally 2 years of college desirable.
              </p>
              <p class="font-manrope">Proficient in Microsoft Office</p>
              <p class="text-gray-500 text-xs mt-2">
                *Training will be provided
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="md:max-w-2xl md:mx-48">
        <div class="bg-white rounded-xl border-2">
          <div
            @click="
              () => {
                showContent4 = !showContent4;
                isOpen3 = !isOpen3;
              }
            "
            class="flex items-center justify-between cursor-pointer"
          >
            <span class="font-semibold text-lg p-4 font-ubuntu">Buyer (2)</span>
            <span class="font-semibold text-xs text-gray-500"
              >*US Citizen or Green Card required</span
            >
            <div>
              <img
                v-if="isOpen3"
                class="scale-75 mr-2"
                src="~/assets/images/icons/32x32-Icons/icons8-chevron-up-32.png"
                alt=""
              />
              <img
                v-else
                class="scale-75 mr-2"
                src="~/assets/images/icons/32x32-Icons/icons8-chevron-down-32.png"
                alt=""
              />
            </div>
          </div>

          <div
            v-if="showContent4"
            class="ease-out animate-fadeInDown transition-opacity duration-1000"
          >
            <div class="p-4 border-t space-y-2">
              <h6 class="font-ubuntu font-semibold text-darkGreen-700">
                Responsibilities and Duties
              </h6>
              <p class="font-manrope">
                In this role, you will oversee various procurement activities,
                including the acquisition of goods and services such as raw
                materials, equipment, tools, parts, and supplies. This involves
                engaging with vendors to gather essential product or service
                information, such as pricing, availability, and delivery
                schedules. Utilizing your market knowledge, you will estimate
                values and determine the most suitable procurement method,
                whether it's through direct purchase or bid. You will
                meticulously review bid proposals, negotiate contracts within
                budgetary constraints, and maintain comprehensive procurement
                records. In cases of defective or unsatisfactory goods or
                services, you will liaise with vendors to identify the root
                cause and implement corrective measures. Additionally, you may
                be responsible for validating invoices for payment.
              </p>
              <h6 class="font-ubuntu font-semibold text-darkGreen-700">
                Education / Experience:
              </h6>
              <p class="font-manrope">
                This candidate will have a high school diploma or equivalent -
                ideally 2 years of college desirable.
              </p>
              <p class="font-manrope">Proficient in Microsoft Office</p>
              <p class="text-gray-500 text-xs mt-2">
                *Training will be provided
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      id="your_possibilities"
      class="
        mx-auto
        max-w-screen
        flex-col flex
        md:flex-row
        justify-evenly
        mt-2
        md:mt-16
      "
    >
      <div
        class="
          w-screen
          md:w-525
          h-fit
          flex flex-col
          justify-center
          gap-2
          p-4
          my-4
          md:order-2
        "
      >
        <h4 class="font-ubuntu font-bold text-darkGreen-900 text-2xl">
          Your Possibilities
        </h4>
        <p class="font-ubuntu font-bold">
          Join our team and be part of a company that values creativity,
          collaboration, and continuous growth. With a wide range of positions
          available, we invite you to explore the possibilities and discover a
          career that aligns with your passion and aspirations. Together, let's
          shape the future of technology and printed circuit boards
        </p>
      </div>
      <div class="md:order-1">
        <img
          :class="[
            'hello3 w-425 h-375 rounded-lg scale-90',
            isMd ? 'hello2 scale-100' : '',
          ]"
          src="~/assets/images/images/carouselImages/greg-willson-KCU9PPL9GuE-unsplash.jpg"
          alt=""
        />
      </div>
    </div>
    <div
      id="meet_the_team"
      class="
        mx-auto
        max-w-screen
        flex-col flex
        md:flex-row
        justify-evenly
        mt-8
        md:mt-16
      "
    >
      <div
        class="
          w-screen
          md:w-525
          h-fit
          flex flex-col
          justify-center
          gap-2
          p-4
          my-4
        "
      >
        <h4 class="font-ubuntu font-bold text-darkGreen-900 text-2xl">
          Meet the team!
        </h4>
        <p class="font-ubuntu font-bold">
          Get to know the exceptional individuals who make up our extraordinary
          team at AlphaCircuit. Behind every circuit board we produce, there is
          a team of passionate individuals working together to push the
          boundaries of possibility. Join us in getting to know the faces behind
          AlphaCircuit.
        </p>
        <NuxtLink
          @click="showContent = !showContent"
          :to="{ path: '/careers', hash: '#team' }"
          class="
            py-3
            px-5
            mt-4
            m-1
            w-max
            rounded-lg
            text-neutrals-100
            relative
            inline-flex
            md:group
            items-center
            justify-center
            cursor-pointer
            border-b-4 border-l-2
            active:border-darkGreen-700 active:shadow-none
            shadow-xl
            bg-gradient-to-tr
            from-darkGreen-700
            to-darkGreen-700
            border-darkGreen-700
          "
        >
          <span
            class="
              md:absolute
              md:w-0
              md:h-0
              md:transition-all
              md:duration-300
              md:ease-out
              md:bg-white
              md:rounded-full
              md:group-hover:w-32
              md:group-hover:h-32
              md:opacity-10
            "
          ></span>
          <span class="relative font-manrope">Show me!</span>
        </NuxtLink>
      </div>
      <div>
        <img
          :class="[
            'hello3 w-425 h-375 rounded-lg scale-90',
            isMd ? 'hello scale-100' : '',
          ]"
          src="~/assets/images/images/carouselImages/business-concept-closeup-two-confident-business-people-shaking-hands-during-meeting.webp"
          alt=""
        />
      </div>
    </div>
  </div>

  <div id="team" v-if="showContent" class="mx-auto max-w-6xl">
    <!-- divider line -->
    <hr class="my-6 border-gray-350 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <p
      class="
        text-darkGreen-700
        font-ubuntu font-bold
        text-center text-2xl
        md:text-left
      "
    >
      Management Board
    </p>
    <div class="flex flex-col md:flex-row justify-evenly p-4 gap-10">
      <div
        class="
          flex flex-col
          text-center
          items-center
          gap-1.
          bg-neutrals-100
          p-4
          md:px-10
          rounded-xl
          drop-shadow-xl
        "
      >
        <p class="font-manrope">Prashant Patel</p>
        <p class="font-bold font-ubuntu">Owner and CEO</p>
        <img
          class="w-200 h-200 rounded-full bg-slate-200 shadow-lg"
          src="~/assets/images/shapes/default-avatar-photo-placeholder-profile-icon-vector.jpg"
          alt=""
        />
        <p class="font-manrope">Contact Info</p>
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
          src="~/assets/images/shapes/default-avatar-photo-placeholder-profile-icon-vector.jpg"
          alt=""
        />
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
        <p class="font-manrope">Person Name</p>
        <p class="font-bold font-ubuntu">Job Role</p>
        <img
          class="w-200 h-200 rounded-full bg-slate-200 shadow-lg"
          src="~/assets/images/shapes/default-avatar-photo-placeholder-profile-icon-vector.jpg"
          alt=""
        />
        <p class="font-manrope">Contact Info</p>
      </div>
    </div>
  </div>

  <div v-if="showContent" class="mx-auto max-w-6xl">
    <!-- divider line -->
    <hr class="my-6 border-gray-350 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <p
      class="
        text-darkGreen-700
        font-ubuntu font-bold
        text-center text-2xl
        md:text-left
      "
    >
      Sales Team
    </p>
    <div class="flex flex-col md:flex-row justify-evenly p-4 mb-4 gap-10">
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
        <p class="font-bold font-ubuntu">Sales Team</p>
        <img
          class="w-200 h-200 rounded-full bg-slate-200 shadow-lg"
          src="~/assets/images/shapes/default-avatar-photo-placeholder-profile-icon-vector.jpg"
          alt=""
        />
        <p class="font-manrope">SteveR@alphacircuit.com</p>
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
        <p class="font-manrope">Person Name</p>
        <p class="font-bold font-ubuntu">Job Role</p>
        <img
          class="w-200 h-200 rounded-full bg-slate-200 shadow-lg"
          src="~/assets/images/shapes/default-avatar-photo-placeholder-profile-icon-vector.jpg"
          alt=""
        />
        <p class="font-manrope">Contact Info</p>
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
        <p class="font-manrope">Person Name</p>
        <p class="font-bold font-ubuntu">Job Role</p>
        <img
          class="w-200 h-200 rounded-full bg-slate-200 shadow-lg"
          src="~/assets/images/shapes/default-avatar-photo-placeholder-profile-icon-vector.jpg"
          alt=""
        />
        <p class="font-manrope">Contact Info</p>
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
        <p class="font-manrope">Person Name</p>
        <p class="font-bold font-ubuntu">Job Role</p>
        <img
          class="w-200 h-200 rounded-full bg-slate-200 shadow-lg"
          src="~/assets/images/shapes/default-avatar-photo-placeholder-profile-icon-vector.jpg"
          alt=""
        />
        <p class="font-manrope">Contact Info</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showContent: false,
      showContent1: false,
      showContent2: false,
      showContent3: false,
      showContent4: false,
      isMd: false, // Variable to track the media query
    };
  },
  mounted() {
    const mediaQuery = window.matchMedia("(min-width: 768px)"); // Define your media query here

    // Set the initial value of `isMd`
    this.isMd = mediaQuery.matches;

    // Listen for changes in the media query
    mediaQuery.addEventListener("change", (event) => {
      this.isMd = event.matches;
    });
  },
  name: "careers",
};
</script>

<script setup>
let isOpen1 = false;
let isOpen2 = false;
let isOpen3 = false;
</script>

<style scoped>
html {
  overflow-x: hidden;
}

#hello3 {
  clip-path: none;
}

.hello {
  clip-path: polygon(0 0, 100% 0%, 100% 100%, 47% 100%);
}
.hello2 {
  clip-path: polygon(0 0, 100% 0%, 45% 100%, 0% 100%);
}
</style>
