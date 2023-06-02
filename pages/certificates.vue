<template>
  <div class="text-center">
    <h4 class="font-ubuntu text-lg">Certificates</h4>
    <hr class="w-12 h-1 bg-darkGreen-700 border-0 mx-auto mb-2 rounded" />
    <div class="inline-flex rounded-md shadow-lg mt-2" role="group">
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
        AS9100
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
        TS16949
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
        ISO9001
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
        ITAR
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
          border-t border-b border-gray-200
          hover:bg-gray-100 hover:text-blue-700
          focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700
        "
      >
        UL Certification
      </button>
      <button
        @click="handleConditionals(5)"
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
        MBE
      </button>
    </div>

    <div class="text-left max-w-5xl mx-auto space-y-1 p-8 rounded-xl">
      <!-- Option 1 -->
      <div v-if="content[0].isOpen" class="space-y-4">
        <h3 class="font-bold font-ubuntu">AS9100</h3>
        <hr class="w-12 h-1 bg-darkGreen-700 border-0 rounded" />

        <img src="~/assets/images/logos/AS9100+Black+TM+png.png" alt="">

        <h6 class="font-bold font-ubuntu">What is AS9100?</h6>
        <p class="font-manrope">
          The AS9100 is a technical specification aiming to the development of a
          quality management system for the Aerospace Industry. Much like the
          TS16949 that the current Revision C seems to be based on, it provides
          for continual improvement, emphasizing defect prevention and the
          reduction of variation and waste in the supply chain. It replaces the
          former AS9000 and now fully incorporates the ISO 9001 standard.
        </p>
        <h6 class="font-bold font-ubuntu">Benefits</h6>
        <p class="font-manrope">
          "The Improvement Standard" with ISO 9001:2000 as the basic quality
          management system, organizations achieving certification to AS9100
          receive dual benefits. First, they benefit from the process approach,
          with emphasis on continuous improvement and communication. This means
          that the organization knows, understands, and practices a philosophy
          that is committed to quality in all actions, never settles for “good
          enough” and understands the dynamics and interactions that exist
          between the various processes that make up the quality management
          system. Secondly, the added requirements of AS9100, although
          prescriptive in nature, are based on proven techniques that further
          enhance an organization's ability to achieve high quality levels in
          the challenging automotive sector.
        </p>
        <p class="font-bold font-ubuntu">AS9100 certification offers the following benefits:</p>
        <ul class="list-disc pl-4 font-manrope">
          <li>Improved product and process quality and reliability.</li>
          <li>Improved on-time delivery.</li>
          <li>Greater emphasis on supplier quality improvement efforts.</li>
          <li>Single quality system registration to meet multiple customer quality
          requirements</li>
          <li>Incorporates the best lessons learned from the global automotive
          segment</li>
          <li>Improved staff morale through increased management efficiencies</li>
          <li>Continuous improvement of business performance through ongoing
          certification audits</li>
          <li>Bottom-line benefits through increased efficiency, reduced waste and
          better utilization of resources</li>
        </ul>

        <a
          href="~/assets/images/pdfs/ACF088_B_Supplier_Agreement_1 (1).pdf"
          download
          class="
            py-3
            px-5
            mt-4
            mr-1
            mb-1
            w-max
            rounded-lg
            text-neutrals-100
            relative
            inline-flex
            group
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
              absolute
              w-0
              h-0
              transition-all
              duration-300
              ease-out
              bg-white
              rounded-full
              group-hover:w-32 group-hover:h-32
              opacity-10
            "
          ></span>
          <span class="relative font-manrope">View Certificate</span>
        </a>
      </div>

      <!-- Option 2 -->
      <div v-if="content[1].isOpen" class="space-y-4">
        <h3 class="font-bold font-ubuntu">TS16949</h3>
        <hr class="w-12 h-1 bg-darkGreen-700 border-0 rounded" />

        <h6 class="font-bold font-ubuntu">What is TS16949</h6>
        <p class="font-manrope">
          The ISO/TS16949 is an ISO technical specification aiming to the
          development of a quality management system that provides for continual
          improvement, emphasizing defect prevention and the reduction of
          variation and waste in the supply chain. It is based on the ISO 9001
          and the first edition was published in March 2002 as ISO/TS
          16949:2002.
        </p>
        <p class="font-manrope">
          It was prepared by the International Automotive Task Force (IATF) and
          the "Technical Committee" of ISO. It harmonizes the country-specific
          regulations of Quality-Management-Systems.
        </p>
        <p class="font-manrope">
          About 30 percent of the more than 100 existing automobile
          manufacturers affiliate the requirements of the norm but especially
          the large Asian manufacturers have differentiated, own requirements
          for the quality management systems of their corporate group and their
          suppliers.
        </p>

        <h6 class="font-bold font-ubuntu">Benefits</h6>
        <p class="font-semibold font-manrope italic">"The Improvement Standard"</p>

        <p class="font-manrope">
          With ISO 9001:2000 as the basic quality management system,
          organizations achieving certification to ISO/TS 16949 receive dual
          benefits. First, they benefit from the process approach, with emphasis
          on continuous improvement and communication. This means that the
          organization knows, understands, and practices a philosophy that is
          committed to quality in all actions, never settles for “good enough”
          and understands the dynamics and interactions that exist between the
          various processes that make up the quality management system.
          Secondly, the added requirements of ISO/TS 16949, although
          prescriptive in nature, are based on proven techniques that further
          enhance an organization’s ability to achieve high quality levels in
          the challenging automotive sector.
        </p>

        <ul class="list-disc pl-4 font-manrope">
          <li>ISO/TS 16949 certification offers the following benefits:</li>
          <li>Improved product and process quality and reliability.</li>
          <li>Improved on-time delivery.</li>
          <li>Greater emphasis on supplier quality improvement efforts.</li>
          <li> Single quality system registration to meet multiple customer quality
          requirements</li>
          <li>Incorporates the best lessons learned from the global automotive
          segment</li>
          <li>Improved staff morale through increased management efficiencies</li>
          <li>Continuous improvement of business performance through ongoing
          certification audits</li>
          <li>Bottom-line benefits through increased efficiency, reduced waste and
          better utilization of resources</li>
        </ul>

        <a
          href="~/assets/images/pdfs/ACF088_B_Supplier_Agreement_1 (1).pdf"
          download
          class="
            py-3
            px-5
            mt-4
            mr-1
            mb-1
            w-max
            rounded-lg
            text-neutrals-100
            relative
            inline-flex
            group
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
              absolute
              w-0
              h-0
              transition-all
              duration-300
              ease-out
              bg-white
              rounded-full
              group-hover:w-32 group-hover:h-32
              opacity-10
            "
          ></span>
          <span class="relative font-manrope">View Certificate</span>
        </a>
      </div>

      <!-- Option 3 -->
      <div v-if="content[2].isOpen" class="space-y-2">
        <h3 class="font-bold font-ubuntu">ISO9001</h3>
        <hr class="w-12 h-1 bg-darkGreen-700 border-0 rounded" />

        <img src="~/assets/images/logos/AS9100+Black+TM+png.png" alt="">

        <h6 class="font-bold font-ubuntu">What is ISO9001?</h6>
        <p class="font-manrope">
          The ISO 9000 family of standards is related to quality management
          systems and designed to help organizations ensure that they meet the
          needs of customers and other stakeholders while meeting statutory and
          regulatory requirements related to the product. The standards are
          published by ISO, the International Organization for Standardization,
          and available through National standards bodies. ISO 9000 deals with
          the fundamentals of quality management systems,including the eight
          management principleson which the family of standards is based. ISO
          9001 deals with the requirements that organizations wishing to meet
          the standard have to fulfill.
        </p>

        <a
          href="~/assets/images/pdfs/ACF088_B_Supplier_Agreement_1 (1).pdf"
          download
          class="
            py-3
            px-5
            mt-4
            mr-1
            mb-1
            w-max
            rounded-lg
            text-neutrals-100
            relative
            inline-flex
            group
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
              absolute
              w-0
              h-0
              transition-all
              duration-300
              ease-out
              bg-white
              rounded-full
              group-hover:w-32 group-hover:h-32
              opacity-10
            "
          ></span>
          <span class="relative font-manrope">View Certificate</span>
        </a>
      </div>

      <!-- Option 4 -->
      <div v-if="content[3].isOpen" class="space-y-2">
        <h3 class="font-ubuntu">ITAR</h3>
        <hr class="w-12 h-1 bg-darkGreen-700 border-0 rounded" />

        <img src="~/assets/images/logos/ITAR.png" alt="">

        <h6 class="font-ubuntu font-bold">ITAR Registration</h6>
        <h6 class="font-ubuntu font-bold">
          Know Your Flexible Circuit Supply Chain
        </h6>

        <p class="font-manrope">
          Come into Alpha anytime if you’d like to inspect your boards during
          production. If a company is not willing to make this offer, regardless
          of being ITAR registered, then they may potentially be producing your
          product elsewhere.
        </p>

        <p class="font-manrope">
          No matter the administration, International Traffic in Arms Regulation
          rules will not fundamentally change. A common misconception is that
          ITAR is only a response to terrorism. Additionally, ITAR is looking
          ahead and that is why it is imperative that we keep sensitive military
          and space technology away from potential enemies.
        </p>

        <a
          href="~/assets/images/pdfs/ACF088_B_Supplier_Agreement_1 (1).pdf"
          download
          class="
            py-3
            px-5
            mt-4
            mr-1
            mb-1
            w-max
            rounded-lg
            text-neutrals-100
            relative
            inline-flex
            group
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
              absolute
              w-0
              h-0
              transition-all
              duration-300
              ease-out
              bg-white
              rounded-full
              group-hover:w-32 group-hover:h-32
              opacity-10
            "
          ></span>
          <span class="relative font-manrope">View Certificate</span>
        </a>
      </div>

      <!-- Option 5 -->
      <div v-if="content[4].isOpen" class="space-y-4 grid">
        <div class="flex flex-col">
          <img class="self-center" src="~/assets/images/logos/UL.png" alt="UL Certification Logo">
          <h3 class="text-center text-2xl">UL Certification</h3>
          <hr class="w-12 mx-auto h-1 bg-darkGreen-700 border-0 rounded" />
        </div>


        <div class="font-ubuntu space-x-5 flex justify-center">
            <a class="hover:underline bg-darkGreen-700 text-white p-2 rounded-lg shadow-xl" href="">Link to UL Cert USA</a>
            <a class="hover:underline bg-darkGreen-700 text-white p-2 rounded-lg shadow-xl" href="">Link to UL Cert Canada</a>
        </div>

        <p class="font-semibold">UL Approved Single / Double Layer Material Chart</p>

        <!-- Table -->
        <table>
          <thead class="bg-darkGreen-700 text-white">
            <tr>
              <th>UL Type</th>
              <th>Manufacturer</th>
              <th>Grade</th>
              <th>Min Line</th>
              <th>Min Copper</th>
            </tr>
          </thead>
          <tbody class="text-black">
            <!-- Table rows -->
            <tr class="bg-neutrals-100">
              <td>1A-0</td>
              <td>Iteq</td>
              <td>IT-140TC</td>
              <td>0.004"</td>
              <td>0.00068" (0.5 Oz)</td>
            </tr>
            <tr class="bg-neutrals-200">
              <td></td>
              <td></td>
              <td>IT-588TC</td>
              <td></td>
              <td></td>
            </tr>
            <tr class="bg-neutrals-100">
              <td></td>
              <td></td>
              <td>IT-158TC</td>
              <td></td>
              <td></td>
            </tr>
            <tr class="bg-neutrals-200">
              <td></td>
              <td></td>
              <td>IT-180TC</td>
              <td></td>
              <td></td>
            </tr>
            <tr class="bg-neutrals-100">
              <td></td>
              <td>Shinemore</td>
              <td>SM-730R</td>
              <td>0.004"</td>
              <td>0.00068" (0.5 Oz)</td>
            </tr>
            <tr class="bg-neutrals-200">
              <td></td>
              <td></td>
              <td>SM-770R</td>
              <td></td>
              <td></td>
            </tr>
            <tr class="bg-neutrals-100">
              <td></td>
              <td>Guangdong Shengyi</td>
              <td>S1141</td>
              <td>0.004"</td>
              <td>0.00068" (0.5 Oz)</td>
            </tr>
            <tr class="bg-neutrals-200">
              <td></td>
              <td></td>
              <td>S1170</td>
              <td></td>
              <td></td>
            </tr>
            <tr class="bg-neutrals-100">
              <td>3-0</td>
              <td>Nan Ya</td>
              <td>NP-180R</td>
              <td>0.004"</td>
              <td>0.00068" (0.5 Oz)</td>
            </tr>
            <tr class="bg-neutrals-200">
              <td></td>
              <td></td>
              <td>NP-180TL</td>
              <td></td>
              <td></td>
            </tr>
            <tr class="bg-neutrals-100">
              <td>5-0</td>
              <td>Guangdong Shengyi</td>
              <td>S1000, S1000-2</td>
              <td>0.002"</td>
              <td>0.00033" (1/4 Oz)</td>
            </tr>
            <tr class="bg-neutrals-200">
              <td></td>
              <td></td>
              <td>S1000-3, S1000-4</td>
              <td></td>
              <td></td>
            </tr>
            <tr class="bg-neutrals-100">
              <td></td>
              <td>Shinemore</td>
              <td>SM-750R, SM-750M</td>
              <td>0.002"</td>
              <td>0.00068" (0.5 Oz)</td>
            </tr>
            <tr class="bg-neutrals-200">
              <td></td>
              <td>Isola</td>
              <td>IS402, FR402, FR-4</td>
              <td>0.002"</td>
              <td>0.00068" (0.5 Oz)</td>
            </tr>
            <tr class="bg-neutrals-100">
              <td></td>
              <td></td>
              <td>FR406, FR406N, FR406BC, FR406HR</td>
              <td></td>
              <td></td>
            </tr>
            <tr class="bg-neutrals-200">
              <td></td>
              <td></td>
              <td>IS410, IS410BC, IS400</td>
              <td></td>
              <td></td>
            </tr>
            <tr class="bg-neutrals-100">
              <td></td>
              <td></td>
              <td>PLC-FR-370HR</td>
              <td></td>
              <td></td>
            </tr>
            <tr class="bg-neutrals-200">
              <td></td>
              <td>Ventec</td>
              <td>VT-41, VT-41RD</td>
              <td>0.002"</td>
              <td>0.00068" (0.5 Oz)</td>
            </tr>
            <tr class="bg-neutrals-100">
              <td></td>
              <td></td>
              <td>VT-42, VT-42RD</td>
              <td></td>
              <td></td>
            </tr>
            <tr class="bg-neutrals-200">
              <td></td>
              <td></td>
              <td>VT-45, VT-45RD</td>
              <td></td>
              <td></td>
            </tr>
            <tr class="bg-neutrals-100">
              <td></td>
              <td></td>
              <td>VT-47, VT-47RD</td>
              <td></td>
              <td></td>
            </tr>
            <tr class="bg-neutrals-200">
              <td></td>
              <td></td>
              <td>VT-481, VT-481RD</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <p class="font-semibold">UL Approved Multilayer Material Chart</p>
        <!-- Table -->
        <table>
          <thead class="bg-darkGreen-700 text-white">
            <tr>
              <th>UL Type</th>
              <th>Manufacturer</th>
              <th>Grade</th>
              <th>Min Line</th>
              <th>Max Internal Copper</th>
              <th>Max External Copper</th>
            </tr>
          </thead>
          <tbody class="text-black">
            <!-- Table rows -->
            <tr class="bg-neutrals-100">
              <td>4-0</td>
              <td>Isola</td>
              <td>IS410, IS410BC</td>
              <td>0.004"</td>
              <td>0.004" (3 Oz)</td>
              <td>0.004" (3 Oz)</td>
            </tr>
            <tr class="bg-neutrals-200">
              <td></td>
              <td></td>
              <td>IS402, FR402</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr class="bg-neutrals-100">
              <td></td>
              <td></td>
              <td>FR406, FR406BC, FR406HR</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr class="bg-neutrals-200">
              <td></td>
              <td></td>
              <td>PCL-FR-370</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr class="bg-neutrals-100">
              <td></td>
              <td></td>
              <td>IS420</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr class="bg-neutrals-200">
              <td></td>
              <td>Nan Ya</td>
              <td>NP-140TL</td>
              <td>0.004"</td>
              <td>0.004" (3 Oz)</td>
              <td>0.004" (3 Oz)</td>
            </tr>
            <tr class="bg-neutrals-100">
              <td>4A-0</td>
              <td>Shinemore</td>
              <td>SM-730M, SM770M</td>
              <td>0.004"</td>
              <td>0.004" (3 Oz)</td>
              <td>0.004" (3 Oz)</td>
            </tr>
            <tr class="bg-neutrals-200">
              <td>6-0</td>
              <td>Guangdong shengyi</td>
              <td>S1000, S1000-2</td>
              <td>0.002"</td>
              <td>0.004" (3 Oz)</td>
              <td>0.004" (3 Oz)</td>
            </tr>
            <tr class="bg-neutrals-100">
              <td></td>
              <td></td>
              <td>S1000-3, S1000-4</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr class="bg-neutrals-200">
              <td></td>
              <td>Isola</td>
              <td>FR406, FR406BC, FR406HR</td>
              <td>0.002"</td>
              <td>0.004" (3 Oz)</td>
              <td>0.004" (3 Oz)</td>
            </tr>
            <tr class="bg-neutrals-100">
              <td></td>
              <td></td>
              <td>IS400, PCL-FR-370HR</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr class="bg-neutrals-200">
              <td></td>
              <td>Shinemore</td>
              <td>SM-750R, SM-750M</td>
              <td>0.002"</td>
              <td>0.004" (3 Oz)</td>
              <td>0.004" (3 Oz)</td>
            </tr>
            <tr class="bg-neutrals-100">
              <td></td>
              <td>Ventec</td>
              <td>VT-41, VT-41RD</td>
              <td>0.002"</td>
              <td>0.004" (3 Oz)</td>
              <td>0.004" (3 Oz)</td>
            </tr>
            <tr class="bg-neutrals-200">
              <td></td>
              <td></td>
              <td>VT-42, VT-42RD</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr class="bg-neutrals-100">
              <td></td>
              <td></td>
              <td>VT-45, VT-45RD</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr class="bg-neutrals-200">
              <td></td>
              <td></td>
              <td>VT-47, VT-47RD</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr class="bg-neutrals-100">
              <td></td>
              <td></td>
              <td>VT-481, VT-481RD</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr class="bg-neutrals-200">
              <td></td>
              <td>Iteq</td>
              <td>IT-180A</td>
              <td>0.002"</td>
              <td>0.004" (3 Oz)</td>
              <td>0.004" (3 Oz)</td>
            </tr>
            <tr class="bg-neutrals-100">
              <td>6-1</td>
              <td>Iteq</td>
              <td>IT-180A</td>
              <td>0.019"</td>
              <td>0.008" (6 Oz)</td>
              <td>0.008" (6 Oz)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Option 5 -->
      <div v-if="content[5].isOpen" class="space-y-2">
        <h3 class="font-bold font-ubuntu">MBE</h3>
        <hr class="w-12 h-1 bg-darkGreen-700 border-0 rounded" />

        <h6 class="font-bold">MBE PCB Manufacturer</h6>
        <p class="font-manrope">
          Alpha Circuit is Minority Business Enterprise (MBE)
        </p>

        <p class="font-manrope">
          Certified with Chicago Minority Supplier Development Council (CMSDC)
          as defined by the National Minority Supplier Development Council, Inc.
          (NMSDC) and as adopted by the Chicago Minority Supplier Development
          Council.
        </p>

        <p><span class="font-bold font-ubuntu">NAICS Code </span>334412</p>
        <p>
          <span class="font-bold font-ubuntu">Product/Service Description: </span
          >Manufacturer of printed circuit boards
        </p>

        <a
          href="~/assets/images/pdfs/ACF088_B_Supplier_Agreement_1 (1).pdf"
          download
          class="
            py-3
            px-5
            mt-4
            mr-1
            mb-1
            w-max
            rounded-lg
            text-neutrals-100
            relative
            inline-flex
            group
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
              absolute
              w-0
              h-0
              transition-all
              duration-300
              ease-out
              bg-white
              rounded-full
              group-hover:w-32 group-hover:h-32
              opacity-10
            "
          ></span>
          <span class="relative font-manrope">View Certificate</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showOption6: true,
      showOption7: false,
      showOption8: false,
      showOption9: false,
      showOption10: false,
      content: [
        { isOpen: false, title: "AS9100" },
        { isOpen: false, content: "div 2" },
        { isOpen: false, content: "div 1" },
        { isOpen: false, content: "div 1" },
        { isOpen: false, content: "div 1" },
        { isOpen: false, content: "div 1" },
      ],
    };
  },
  name: "careers",
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

<script setup></script>

<style scoped></style>
