<template>
  <div class="text-center">
    <h4 class="font-ubuntu text-xl mt-8">Services</h4>
    <hr class="w-12 h-1 bg-darkGreen-700 border-0 mx-auto mb-2 rounded" />
    <div class="sm:hidden flex flex-col justify-center items-center">
      <div
        class="ml-2 mr-2 w-4/5 grid grid-cols-1 rounded-md shadow-lg mt-4"
        role="group"
      >
        <Button
          v-for="cert in certificates"
          :to="{ path: '/services', hash: '#content' }"
          @click="handleConditionals(cert.index)"
          type="button"
          class="
            px-2
            py-2
            text-sm
            font-medium
            text-gray-900
            border border-gray-200
            hover:bg-gray-100 hover:text-blue-700
          "
          :class="{
            'rounded-t-lg': cert.index == 0,
            'rounded-b-lg': cert.index == 4,
            'bg-gray-100': content[cert.index].isOpen,
            'shadow-inner': content[cert.index].isOpen,
            'bg-white': !content[cert.index].isOpen,
          }"
        >
          {{ cert.name }}
        </Button>
      </div>
    </div>
    <div class="hidden sm:inline-flex rounded-md shadow-lg mt-2" role="group">
      <button
        @click="handleConditionals(0)"
        type="button"
        class="
          px-4
          py-2
          text-sm
          font-medium
          text-gray-900
          bg-white
          border border-gray-200
          rounded-l-lg
          hover:bg-gray-100 hover:text-blue-700
          focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700
        "
      >
        Quick-Turn Prototype
      </button>
      <button
        @click="handleConditionals(1)"
        type="button"
        class="
          px-4
          py-2
          text-sm
          font-medium
          text-gray-900
          bg-white
          border-t border-b border-gray-200
          hover:bg-gray-100 hover:text-blue-700
          focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700
        "
      >
        Fast-Turn Prototype
      </button>
      <button
        @click="handleConditionals(2)"
        type="button"
        class="
          px-4
          py-2
          text-sm
          font-medium
          text-gray-900
          bg-white
          border-t border-b border-gray-200
          hover:bg-gray-100 hover:text-blue-700
          focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700
        "
      >
        Offshore Production
      </button>
      <button
        @click="handleConditionals(3)"
        type="button"
        class="
          px-4
          py-2
          text-sm
          font-medium
          text-gray-900
          bg-white
          border-t border-b border-gray-200
          hover:bg-gray-100 hover:text-blue-700
          focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700
        "
      >
        Design Validation
      </button>
      <button
        @click="handleConditionals(4)"
        type="button"
        class="
          px-4
          py-2
          text-sm
          font-medium
          text-gray-900
          bg-white
          border border-gray-200
          rounded-r-md
          hover:bg-gray-100 hover:text-blue-700
          focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700
        "
      >
        Volume Production
      </button>
    </div>

    <div
      id="content"
      class="text-left max-w-5xl mx-auto space-y-1 p-16 rounded-xl"
    >
      <!-- Option 1 -->
      <div v-if="content[0].isOpen" class="space-y-2">
        <h3 class="font-bold font-ubuntu text-2xl">Quick Turn Prototype</h3>
        <hr class="w-12 h-1 bg-darkGreen-700 border-0 rounded" />

        <div>
          <h6 class="font-bold font-ubuntu text-darkGreen-700">
            Prototype PCB
          </h6>
          <h6 class="font-manrope text-darkGreen-700">
            Quick-Turn PCB Prototypes
          </h6>
        </div>

        <h6 class="font-bold font-ubuntu">
          Production Quality Prototype Boards
        </h6>
        <p class="font-manrope">
          Alpha's concentrated
          <span class="font-bold">quick-turn PCB prototype fabrication</span>
          capabilities make us your one-stop shop in reducing the critical
          time-to-market requisitions of the Supply Chain. Employing disciplined
          service, Alpha pledges to meet your quick-turn prototype board needs
          by building multilayer boards swiftly, economically, and proficiently.
        </p>
        <h6 class="font-bold font-ubuntu">Alpha Quick-Turn PCB Quick Facts</h6>
        <ul class="list-disc pl-4 font-manrope">
          <li>
            Guaranteed by Alpha's 500% guarantee to cover for your costs in the
            event of an electrical failure
          </li>
          <li>
            Produced in the same lines that are certified for high-reliability,
            safety, and under-hood applications
          </li>
          <li>Manufactured domestically in our Elmhurst facility</li>
          <li>
            Backed by our exceptional customer service from quote-to-delivery
          </li>
        </ul>

        <h6 class="font-bold font-ubuntu text-darkGreen-700">
          Prototype Circuit Board Fabrication
        </h6>
        <h6 class="font-bold font-ubuntu">Quick Turn PCB Prototyping</h6>
        <ul class="list-disc pl-4 font-manrope">
          <li>
            Alpha Circuit renders an articulated determination for accelerated
            bare circuit board manufacturing. Adept in providing quick-turn
            services to customers worldwide, our Elmhurst, Chicago facility
            specializes in 24-72 hour turn-around time across an inclusive ambit
            of technology.
          </li>
        </ul>

        <h6 class="font-bold font-ubuntu text-darkGreen-700">
          Specific programs dedicated to Quick-Turn
        </h6>
        <ul class="list-disc pl-4 font-manrope">
          <li>Keep 30% of capacity open strictly for quick-turn production</li>
          <li>
            Once ongoing production exceeds 70% of capacity we embark on
            capacity expansion program to address bottleneck areas
          </li>
          <li>
            For more information on our Quick-Turn Services, contact
            <a class="underline" href="/contact">Alpha Sales</a>
          </li>
        </ul>
      </div>

      <!-- Option 2 -->
      <div v-if="content[1].isOpen" class="space-y-2">
        <h3 class="font-bold font-ubuntu text-2xl">Fast-Turn Production</h3>
        <hr class="w-12 h-1 bg-darkGreen-700 border-0 rounded" />

        <div>
          <h6 class="font-ubuntu font-bold text-darkGreen-700">
            Production PCB
          </h6>
          <h6 class="font-ubuntu font-bold text-darkGreen-700">
            Quick-Turn PCB Production
          </h6>
        </div>

        <h6 class="font-ubuntu font-bold">Production Quality Boards</h6>
        <p class="font-manrope">
          Alpha's concentrated
          <span class="font-bold">quick-turn PCB prototype fabrication</span>
          capabilities make us your one-stop shop in reducing the critical
          time-to-market requisitions of the Supply Chain. Employing disciplined
          service, Alpha pledges to meet your quick-turn prototype board needs
          by building multilayer boards swiftly, economically, and proficiently.
        </p>

        <h6 class="font-ubuntu font-bold text-darkGreen-700">
          Alpha Quick-Turn PCB Quick Facts
        </h6>
        <ul class="list-disc pl-4 font-manrope">
          <li>
            Guaranteed by Alpha's 500% guarantee to cover for your costs in the
            event of an electrical failure
          </li>
          <li>
            Guaranteed by Alpha's 500% guarantee to cover for your costs in the
            event of an electrical failure
          </li>
          <li>Manufactured domestically in our Elmhurst facility</li>
          <li>
            Backed by our exceptional customer service from quote-to-delivery
          </li>
        </ul>

        <div>
          <h6 class="font-ubuntu font-bold text-darkGreen-700">
            Production Circuit Board Fabrication
          </h6>
          <h6 class="font-bold font-ubuntu">Quick Turn PCB Prototyping</h6>
        </div>
        <p class="font-manrope">
          Alpha Circuit renders an articulated determination for accelerated
          bare circuit board manufacturing. Adept in providing quick-turn
          services to customers worldwide, our Elmhurst, Chicago facility
          specializes in 24-72 hour turn-around time across an inclusive ambit
          of technology.
        </p>

        <h6 class="font-bold font-ubuntu text-darkGreen-700">
          Specific programs dedicated to Quick-Turn
        </h6>
        <ul class="font-manrope list-disc pl-4">
          <li>Keep 30% of capacity open strictly for quick-turn production</li>
          <li>
            Once ongoing production exceeds 70% of capacity we embark on
            capacity expansion program to address bottleneck areas
          </li>
          <li>
            For more information on our Quick-Turn Services, contact
            <a class="underline text-blue-500" href="/contact">Alpha Sales</a>
          </li>
        </ul>
      </div>

      <!-- Option 3 -->
      <div v-if="content[2].isOpen" class="space-y-3">
        <h3 class="font-ubuntu font-bold text-2xl">Offshore Production</h3>
        <hr class="w-12 h-1 bg-darkGreen-700 border-0 rounded" />

        <h6 class="font-bold font-ubuntu text-darkGreen-700">
          Offshore Sourcing
        </h6>
        <p class="font-manrope">
          ACC'sElmhurst facilities manufacture volume products at the highest
          levels of technology while our plants in Asia supply high-volume at
          globally competitive price points.
        </p>

        <h6 class="font-bold font-ubuntu text-darkGreen-700">
          Alpha's offshore capabilities provide customers:
        </h6>
        <ul class="list-disc pl-4 font-manrope">
          <li>Quicker Delivery</li>
          <li>Higher Quality</li>
          <li>Greater Overall Cost Savings</li>
          <li>Increased Flexibility</li>
          <li>Seamless Facilitation</li>
        </ul>

        <h6 class="font-bold font-ubuntu text-darkGreen-700">
          ACC Personnel provides customers:
        </h6>
        <ul class="list-disc pl-4 font-manrope">
          <li>Engineering & Technical Support</li>
          <li>Customer Service</li>
          <li>Account Representation</li>
        </ul>

        <h6 class="font-bold font-ubuntu text-darkGreen-700">
          ACC Programs include:
        </h6>
        <ul class="list-disc pl-4 font-manrope">
          <li>Complete Kan Ban</li>
          <li>Stocking & Inventory Management</li>
        </ul>

        <h6 class="font-bold font-ubuntu text-darkGreen-700">
          Overseas Qualification Process
        </h6>
        <ul class="list-disc pl-4 font-manrope">
          <li>Factory and Warehouse visit</li>
          <li>
            Conduct Quality Systems Audit of the PCB manufacturing process
          </li>
          <li>ISO 9001-2000 Certification</li>
          <li>Capabilities Survey</li>
          <li>Staff Training and Certification</li>
          <li>Eight Discipline Process</li>
          <li>Design Management</li>
          <li>Materials Controls</li>
        </ul>

        <p class="font-manrope">
          After carefully selecting an offshore PCB facility based on a
          particular expertise, Alpha ensures that the fabricator's performance
          has a High-Quality performance rating by qualifying them through our
          rigid / flex qualification process.
        </p>
      </div>

      <!-- Option 4 -->
      <div v-if="content[3].isOpen" class="space-y-2">
        <h3 class="font-bold font-ubuntu text-2xl">Design Validation</h3>
        <hr class="w-12 h-1 bg-darkGreen-700 border-0 rounded" />

        <h6 class="font-ubuntu font-bold text-darkGreen-700">
          PCB Prototype Design and Process Development
        </h6>
        <h6 class="font-ubuntu font-bold text-darkGreen-700">
          Prototype Design Support
        </h6>

        <p class="font-manrope">
          While we don't offer design services, we are always glad to provide
          designers support with their projects. Alpha's technical support staff
          can work closely with designers and OEMs to help them design a PCB
          that increases both durability and manufacturing ability. Further, we
          educate designers on primary cost drivers so that cost savings can be
          had via the initial design rather than through multiple iterations.
          The goal is to build a board that meets all requirements of its
          life-cycle, while minimizing material and labor costs.
        </p>

        <h6 class="font-ubuntu font-bold text-darkGreen-700">
          Fabrication Process Development
        </h6>
        <p class="font-manrope">
          In today's world, OEM's and startups are constantly being forced to
          push the technological boundaries of PCB fabrication. Alpha Circuit
          Coporation' engineers are ready for any challenge. Whether the design
          requires mechanically drilling .003” vias through a 4-layer flex, or
          building 6-layer parts with a .006” overall thickness, Alpha will work
          with its clients to dial in a consistent fabrication process. The
          design will get full attention until process-realization is achieved.
        </p>
      </div>

      <!-- Option 5 -->
      <div v-if="content[4].isOpen" class="space-y-2">
        <h3 class="font-bold font-ubuntu text-2xl">Volume Production</h3>
        <hr class="w-12 h-1 bg-darkGreen-700 border-0 rounded" />

        <h6 class="font-bold font-ubuntu text-darkGreen-700">
          High Volume Production
        </h6>
        <p class="font-manrope">
          Alpha comprehensively maintains the entire PCB platform by isolating
          each part of the process into succinct stages that ensure the highest
          levels of quality. This rigid isolation accumulates into greater
          flexibility for the overall process, as well as paves the way for
          Alpha to set Industry criteria through its participation in
          ground-breaking research...
        </p>

        <h6 class="font-bold font-ubuntu text-darkGreen-700">
          Global Manufacturing
        </h6>
        <p class="font-manrope">
          With factories in North America and Asia, ACC produces your products
          in the appropriate facility based on technology and volume. The size
          and scale of our manufacturing facilities allow us to meet the demands
          of large-scale commercial production. The capabilities in all of our
          facilities blend to provide complete lifecycle support.
        </p>

        <h6 class="font-bold font-ubuntu text-darkGreen-700">
          Domestic Manufacturing
        </h6>
        <p class="font-manrope">
          Alpha has a complete manufacturing facility in Elmhurst, IL that
          builds to military high reliability standards. Alpha does First
          Article inspection on all new lots. Alpha will inventory up to four
          weeks at Elmhurst, IL. Alpha does pre-engineering on all boards prior
          to sending offshore for manufacturing and panelization if required.
          Alpha will manufacture your board if you have a quality issue at the
          same cost as offshore and deliver on time to support your production.
          Alpha has its own team off-shore that supervises orders at the
          manufacturing level.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<script>
import { ref } from "vue";
export default {
  setup() {
    const isOpen = ref(false);
    const content = ref([
      { isOpen: true, title: "AS9100" },
      { isOpen: false, content: "div 2" },
      { isOpen: false, content: "div 1" },
      { isOpen: false, content: "div 1" },
      { isOpen: false, content: "div 1" },
      { isOpen: false, content: "div 1" },
    ]);

    const certificates = [
      { name: "Quick-Turn Prototype", index: 0 },
      { name: "Fast-Turn Prototype", index: 1 },
      { name: "Offshore Production", index: 2 },
      { name: "Design Validation", index: 3 },
      { name: "Volume Production", index: 4 },
    ];

    return {
      content,
    };
  },
  methods: {
    handleConditionals(index) {
      this.content.forEach((div, i) => {
        if (i === index) {
          console.log(index, i);
          div.isOpen = true;
        } else {
          div.isOpen = false;
        }
      });
    },
  },
};
</script>

<style scoped></style>
