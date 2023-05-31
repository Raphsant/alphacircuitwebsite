<template>
    <div>
        <div class="text-left items-left flex max-w-6xl mx-auto flex-col mt-4">
            <hr class="w-16 h-1 bg-darkGreen-700 border-0 mt-2 rounded dark:bg-gray-700">
            <p class="mt-2 text-2xl font-ubuntu font-bold">Careers</p>
            <h1 class="mt-2 text-3xl font-ubuntu font-bold">Run with the best</h1>
            <p class="mt-2 text-2xl font-manrope font-bold">Our people have the talent, tools and passion to do epic things together—for our clients, for consumers and for our community.</p>
        </div>
    
        <div class="flex flex-row justify-center gap-8 mt-8">
                <div class="w-250 h-250 bg-lightGreen-100 grid place-items-center rounded-2xl p-2 shadow-2xl hover:scale-105 cursor-pointer group">
                    <a class="scroll-smooth" href="#meet_the_team">
                        <img class="" src="~/assets/images/icons/64x64-Icons/icons8-team-64.png" alt="">
                        <h4 class="font-ubuntu font-bold">Meet Us</h4>
                        <p class="font-manrope">Learn more about the team!</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" class="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:animate-fadeInDown">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </a>
                </div>
            <div class="w-250 h-250 bg-lightGreen-100 grid place-items-center rounded-2xl p-2 shadow-2xl hover:scale-105 cursor-pointer group">
                <a class="scroll-smooth" href="#your_possibilities">
                    <img class="" src="~/assets/images/icons/64x64-Icons/icons8-award-64.png" alt="">
                    <h4 class="font-ubuntu font-bold">Your Possibilities</h4>
                    <p class="font-manrope">Career opportunities for you</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" class="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:animate-fadeInDown">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </a>
            </div>
            <div class="w-250 h-250 bg-lightGreen-100 grid place-items-center rounded-2xl p-2 shadow-2xl hover:scale-105 cursor-pointer group">
                <a class="scroll-smooth" href="#open_positions">
                    <img class="" src="~/assets/images/icons/64x64-Icons/icons8-job-64.png" alt="">
                    <h4 class="font-ubuntu font-bold">Open Positions</h4>
                    <p class="font-manrope">Apply and join our team!</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" class="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:animate-fadeInDown">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </a>
            </div>
            <div class="w-250 h-250 bg-lightGreen-100 grid place-items-center rounded-2xl p-2 shadow-2xl hover:scale-105 cursor-pointer group">
                <NuxtLink to="/about">
                    <img class="" src="~/assets/images/icons/64x64-Icons/icons8-lightbulb-64.png" alt="">
                    <h4 class="font-ubuntu font-bold">Learn about AlphaCircuit</h4>
                    <p class="font-manrope">About Us</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" class="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:animate-fadeInDown">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </NuxtLink>
            </div>
        </div>
    </div>

    <div class="mb-16">
        <div id="open_positions" class="mx-auto max-w-7xl flex flex-row justify-evenly mt-16">
            <div class="w-525 h-375 flex flex-col justify-center gap-2">
                <h4 class="font-ubuntu font-bold text-darkGreen-900 text-2xl">Open Positions</h4>
                <p class="w-525 font-ubuntu font-bold"> We are excited to offer a range of open positions that provide excellent opportunities for individuals looking to contribute their skills and expertise to our dynamic and innovative team. Whether you are an experienced engineer, a skilled technician, or a passionate problem solver, we have positions available that encompass various areas of expertise. From design and manufacturing to quality control and project management, we offer a diverse range of roles that cater to different skill sets and interests.</p>
                <a
                    @click="showContent1 = !showContent1"
                    href="#_"
                    class="py-3 px-5 mt-4 m-1 w-max rounded-lg text-neutrals-100 relative inline-flex group items-center justify-center cursor-pointer border-b-4 border-l-2 active:border-darkGreen-700 active:shadow-none shadow-xl bg-gradient-to-tr from-darkGreen-700 to-darkGreen-700 border-darkGreen-700">
                    <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                    <span class="relative font-manrope">Job Postings</span>
                </a>
            </div>
            <div>
                <img class="w-425 h-375 rounded-lg" id="hello" src="~/assets/images/images/carouselImages/dylan-gillis-KdeqA3aTnBY-unsplash.jpg" alt="">
            </div>
        </div>
        <div v-if="showContent1" id="" class="space-y-5">
            <div class="max-w-2xl mx-48">
                <div class="bg-white rounded-xl border-2">
                    <div @click="showContent2 = !showContent2" class="flex items-center justify-between cursor-pointer">
                        <span class="font-semibold text-lg p-4">Entry Level PCB Designer (10)</span>
                        <span class="font-semibold text-xs text-gray-500">*US Citizen or Green Card required</span>
                        <img class="scale-75 mr-2" src="~/assets/images/icons/32x32-Icons/icons8-chevron-down-32.png" alt="">
                    </div>

                    <div v-if="showContent2" class="">
                        <div class="p-4 border-t space-y-2">
                            <h6 class="font-ubuntu font-semibold text-darkGreen-700">Responsibilities and Duties</h6>
                            <p class="font-manrope">In this role, you will be responsible for designing and drafting layouts of printed circuit boards (PCBs) based on engineering specifications. You will collaborate closely with the Engineering staff to address design details and resolve any issues that may arise. Additionally, you will analyze engineering design schematics and supporting documents to strategically plan the layout of PCB components and printed circuitry. </p>
                            <h6 class="font-ubuntu font-semibold text-darkGreen-700">Education / Experience:</h6>
                            <p class="font-manrope">The ideal candidate will have completed a PCB design course from an accredited source. Their educational background should include an Associate's degree or On-the-Job training within the electronics industry, candidate should have working knowledge of Cadence and/or Atrium Designer software tools.</p>
                            <h6 class="font-ubuntu font-semibold text-darkGreen-700">Preferred Experience Level</h6>
                            <p class="font-manrope">The ideal candidate will have completed a PCB design course from an accredited source. Their educational background should include an Associate's degree or On-the-Job training within the electronics industry, candidate should have working knowledge of Cadence and/or Atrium Designer software tools.</p>
                            <p class="text-gray-500 text-xs mt-2">*A complete design and layout training will be provided to the selected candidate</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="max-w-2xl mx-48">
                <div class="bg-white rounded-xl border-2">
                    <div @click="showContent3 = !showContent3" class="flex items-center justify-between cursor-pointer">
                        <span class="font-semibold text-lg p-4">Quality Control Inspector (5)</span>
                        <span class="font-semibold text-xs text-gray-500">*US Citizen or Green Card required</span>
                        <img class="scale-75 mr-2" src="~/assets/images/icons/32x32-Icons/icons8-chevron-down-32.png" alt="">
                    </div>

                    <div v-if="showContent3" class="">
                        <div class="p-4 border-t space-y-2">
                            <h6 class="font-ubuntu font-semibold text-darkGreen-700">Responsibilities and Duties</h6>
                            <p class="font-manrope">In this role, you will oversee various procurement activities, including the acquisition of goods and services such as raw materials, equipment, tools, parts, and supplies. This involves engaging with vendors to gather essential product or service information, such as pricing, availability, and delivery schedules. Utilizing your market knowledge, you will estimate values and determine the most suitable procurement method, whether it's through direct purchase or bid. You will meticulously review bid proposals, negotiate contracts within budgetary constraints, and maintain comprehensive procurement records. In cases of defective or unsatisfactory goods or services, you will liaise with vendors to identify the root cause and implement corrective measures. Additionally, you may be responsible for validating invoices for payment.</p>
                            <h6 class="font-ubuntu font-semibold text-darkGreen-700">Education / Experience:</h6>
                            <p class="font-manrope">This candidate will have a high school diploma or equivalent - ideally 2 years of college desirable.</p>
                            <p class="font-manrope">Proficient in Microsoft Office</p>
                            <p class="text-gray-500 text-xs mt-2">*Training will be provided</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="max-w-2xl mx-48">
                <div class="bg-white rounded-xl border-2">
                    <div @click="showContent4 = !showContent4" class="flex items-center justify-between cursor-pointer">
                        <span class="font-semibold text-lg p-4">Buyer (2)</span>
                        <span class="font-semibold text-xs text-gray-500">*US Citizen or Green Card required</span>
                        <img class="scale-75 mr-2" src="~/assets/images/icons/32x32-Icons/icons8-chevron-down-32.png" alt="">
                    </div>

                    <div v-if="showContent4" class="">
                        <div class="p-4 border-t space-y-2">
                            <h6 class="font-ubuntu font-semibold text-darkGreen-700">Responsibilities and Duties</h6>
                            <p class="font-manrope">In this role, you will oversee various procurement activities, including the acquisition of goods and services such as raw materials, equipment, tools, parts, and supplies. This involves engaging with vendors to gather essential product or service information, such as pricing, availability, and delivery schedules. Utilizing your market knowledge, you will estimate values and determine the most suitable procurement method, whether it's through direct purchase or bid. You will meticulously review bid proposals, negotiate contracts within budgetary constraints, and maintain comprehensive procurement records. In cases of defective or unsatisfactory goods or services, you will liaise with vendors to identify the root cause and implement corrective measures. Additionally, you may be responsible for validating invoices for payment.</p>
                            <h6 class="font-ubuntu font-semibold text-darkGreen-700">Education / Experience:</h6>
                            <p class="font-manrope">This candidate will have a high school diploma or equivalent - ideally 2 years of college desirable.</p>
                            <p class="font-manrope">Proficient in Microsoft Office</p>
                            <p class="text-gray-500 text-xs mt-2">*Training will be provided</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="your_possibilities" class="mx-auto max-w-7xl flex flex-row justify-evenly mt-16">
            <div>
                <img class="w-425 h-375 rounded-lg" id="hello2" src="~/assets/images/images/carouselImages/greg-willson-KCU9PPL9GuE-unsplash.jpg" alt="">
            </div>
            <div class="w-525 h-375 flex flex-col justify-center gap-2">
                <h4 class="font-ubuntu font-bold text-darkGreen-900 text-2xl">Your Possibilities</h4>
                <p class="w-525 font-ubuntu font-bold">Join our team and be part of a company that values creativity, collaboration, and continuous growth. With a wide range of positions available, we invite you to explore the possibilities and discover a career that aligns with your passion and aspirations. Together, let's shape the future of technology and printed circuit boards</p>
            </div>
        </div>
        <div id="meet_the_team" class="mx-auto max-w-7xl flex flex-row justify-evenly mt-16">
            <div class="w-525 h-375 flex flex-col justify-center gap-2">
                <h4 class="font-ubuntu font-bold text-darkGreen-900 text-2xl">Meet the team!</h4>
                <p class="w-525 font-ubuntu font-bold">Get to know the exceptional individuals who make up our extraordinary team at AlphaCircuit. Behind every circuit board we produce, there is a team of passionate individuals working together to push the boundaries of possibility. Join us in getting to know the faces behind AlphaCircuit.</p>
                <a
                    @click="showContent = !showContent"
                    href="#_"
                    class="py-3 px-5 mt-4 m-1 w-max rounded-lg text-neutrals-100 relative inline-flex group items-center justify-center cursor-pointer border-b-4 border-l-2 active:border-darkGreen-700 active:shadow-none shadow-xl bg-gradient-to-tr from-darkGreen-700 to-darkGreen-700 border-darkGreen-700">
                    <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                    <span class="relative font-manrope">Show me!</span>
                </a>
            </div>
            <div>
                <img class="w-425 h-375 rounded-lg" id="hello" src="~/assets/images/images/carouselImages/business-concept-closeup-two-confident-business-people-shaking-hands-during-meeting.webp" alt="">
            </div>
        </div>
    </div>

    <div v-if="showContent" class="mx-auto max-w-6xl">
        <!-- divider line -->
        <hr class="my-6 border-gray-350 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <p class="text-darkGreen-700 font-ubuntu font-bold">Management Board</p>
        <div class="flex flex-row justify-evenly p-4">
            <div class="flex flex-col text-center gap-1.5">
                <p class="font-manrope">Prashant Patel</p>
                <p class="font-bold font-ubuntu">Owner and CEO</p>
                <div class="w-200 h-200 rounded-full bg-slate-200 shadow-lg"></div>
                <p class="font-manrope">Contact Info</p>
            </div>
            <div class="flex flex-col text-center gap-1.5">
                <p>Steve Smith</p>
                <p class="font-bold">General Manager</p>
                <div class="w-200 h-200 rounded-full bg-slate-200 shadow-lg"></div>
                <p class="font-manrope">630-617-5555</p>
                <p class="text-xs">EXT-116</p>
            </div>
            <div class="flex flex-col text-center gap-1.5">
                <p class="font-manrope">Natu Vaghani</p>
                <p class="font-bold font-ubuntu">Engineering Manager</p>
                <div class="w-200 h-200 rounded-full bg-slate-200 shadow-lg"></div>
                <p class="font-manrope">630-617-5555</p>
                <p class="text-xs">EXT-119</p>
            </div>
            <div class="flex flex-col text-center gap-1.5">
                <p class="font-manrope">Person Name</p>
                <p class="font-bold font-ubuntu">Job Role</p>
                <div class="w-200 h-200 rounded-full bg-slate-200 shadow-lg"></div>
                <p class="font-manrope">Contact Info</p>
            </div>
        </div>
    </div>

    <div v-if="showContent" class="mx-auto max-w-6xl">
        <!-- divider line -->
        <hr class="my-6 border-gray-350 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <p class="text-darkGreen-700 font-ubuntu font-bold">Sales Team</p>
        <div class="flex flex-row justify-evenly p-4 mb-4">
            <div class="flex flex-col text-center gap-1.5">
                <p class="font-manrope">Steve Ryan</p>
                <p class="font-bold font-ubuntu">Sales Team</p>
                <div class="w-200 h-200 rounded-full bg-slate-200 shadow-lg"></div>
                <p class="font-manrope">SteveR@alphacircuit.com</p>
                <p class="font-manrope">630-617-5555</p>
                <p class="text-xs">EXT-110</p>
            </div>
            <div class="flex flex-col text-center gap-1.5">
                <p class="font-manrope">Person Name</p>
                <p class="font-bold font-ubuntu">Job Role</p>
                <div class="w-200 h-200 rounded-full bg-slate-200 shadow-lg"></div>
                <p class="font-manrope">Contact Info</p>
            </div>
            <div class="flex flex-col text-center gap-1.5">
                <p class="font-manrope">Person Name</p>
                <p class="font-bold font-ubuntu">Job Role</p>
                <div class="w-200 h-200 rounded-full bg-slate-200 shadow-lg"></div>
                <p class="font-manrope">Contact Info</p>
            </div>
            <div class="flex flex-col text-center gap-1.5">
                <p class="font-manrope">Person Name</p>
                <p class="font-bold font-ubuntu">Job Role</p>
                <div class="w-200 h-200 rounded-full bg-slate-200 shadow-lg"></div>
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
        };
    },
    name: "careers"
}
</script>
  
  <script setup>
  </script>
  
  <style scoped>
    #hello {
        clip-path: polygon(0 0, 100% 0%, 100% 100%, 47% 100%);
    }
    #hello2 {
        clip-path: polygon(0 0, 100% 0%, 45% 100%, 0% 100%);
    }
  </style>