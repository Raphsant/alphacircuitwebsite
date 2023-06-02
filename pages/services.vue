<template>
    <div class="text-center">
        <h4 class="font-ubuntu text-lg">Categories</h4>
        <hr class="w-12 h-1 bg-darkGreen-700 border-0 mx-auto mb-2 rounded"/>
        <div class="inline-flex rounded-md shadow-lg mt-2" role="group">
            <button @click="showOption1 = !showOption1" type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                Quick-Turn Prototype
            </button>
            <button @click="showOption2 = !showOption2" type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                Fast-Turn Prototype
            </button>
            <button @click="showOption3 = !showOption3" type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                Offshore Production
            </button>
            <button @click="showOption4 = !showOption4" type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                Design Validation
            </button>
            <button @click="showOption5 = !showOption5" type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                Volume Production
            </button>
        </div>

        <div class="text-left max-w-5xl mx-auto space-y-1 p-16 rounded-xl">
            <!-- Option 1 -->
            <div v-if="showOption1">
                <h3>Quick Turn Prototype</h3>
            <hr class="w-12 h-1 bg-darkGreen-700 border-0 rounded "/>

            <h6>Prototype PCB</h6>
            <h6>Quick-Turn PCB Prototypes</h6>

            <h6>Production Quality Prototype Boards</h6>
            <p>Alpha's concentrated <span class="font-bold">quick-turn PCB prototype fabrication</span> capabilities make us your one-stop shop in reducing the critical time-to-market requisitions of the Supply Chain. Employing disciplined service, Alpha pledges to meet your quick-turn prototype board needs by building multilayer boards swiftly, economically, and proficiently.</p>
            <h6>Alpha Quick-Turn PCB Quick Facts</h6>
            <p>Guaranteed by Alpha’s 500% guarantee to cover for your costs in the event of an electrical failure</p>
            <p>Produced in the same lines that are certified for high-reliability, safety, and under-hood applications</p>
            <p>Manufactured domestically in our Elmhurst facility</p>
            <p>Backed by our exceptional customer service from quote-to-delivery</p>

            <h6>Prototype Circuit Board Fabrication</h6>
            <h6>Quick Turn PCB Prototyping</h6>
            <p>Alpha Circuit renders an articulated determination for accelerated bare circuit board manufacturing. Adept in providing quick-turn services to customers worldwide, our Elmhurst, Chicago facility specializes in 24-72 hour turn-around time across an inclusive ambit of technology.</p>
            
            <h6>Specific programs dedicated to Quick-Turn</h6>
            <p>Keep 30% of capacity open strictly for quick-turn production</p>
            <p>Once ongoing production exceeds 70% of capacity we embark on capacity expansion program to address bottleneck areas</p>
            <p>For more information on our Quick-Turn Services, contact <a class="underline" href="/contact">Alpha Sales</a></p>
            </div>

            <!-- Option 2 -->
            <div v-if="showOption2">
                <h3>Fast-Turn Production</h3>
            <hr class="w-12 h-1 bg-darkGreen-700 border-0 rounded"/>

            <h6>Production PCB</h6>
            <h6>Quick-Turn PCB Production</h6>

            <h6>Production Quality Boards</h6>
            <p>Alpha's concentrated <span class="font-bold">quick-turn PCB prototype fabrication</span> capabilities make us your one-stop shop in reducing the critical time-to-market requisitions of the Supply Chain. Employing disciplined service, Alpha pledges to meet your quick-turn prototype board needs by building multilayer boards swiftly, economically, and proficiently.</p>

            <h6>Alpha Quick-Turn PCB Quick Facts</h6>
            <p>Guaranteed by Alpha’s 500% guarantee to cover for your costs in the event of an electrical failure</p>
            <p>Produced in the same lines that are certified for high-reliability, safety, and under-hood applications</p>
            <p>Manufactured domestically in our Elmhurst facility</p>
            <p>Backed by our exceptional customer service from quote-to-delivery</p>

            <h6>Prototype Circuit Board Fabrication</h6>
            <h6>Quick Turn PCB Prototyping</h6>
            <p>Alpha Circuit renders an articulated determination for accelerated bare circuit board manufacturing. Adept in providing quick-turn services to customers worldwide, our Elmhurst, Chicago facility specializes in 24-72 hour turn-around time across an inclusive ambit of technology.</p>
            
            <h6>Specific programs dedicated to Quick-Turn</h6>
            <p>Keep 30% of capacity open strictly for quick-turn production</p>
            <p>Once ongoing production exceeds 70% of capacity we embark on capacity expansion program to address bottleneck areas</p>
            <p>For more information on our Quick-Turn Services, contact <a class="underline" href="/contact">Alpha Sales</a></p>
            </div>
            
            <!-- Option 3 -->
            <div v-if="showOption3">
                <h3>Offshore Production</h3>
                <hr class="w-12 h-1 bg-darkGreen-700 border-0 rounded"/>

                <h6>Offshore Sourcing</h6>
                <p>ACC'sElmhurst facilities manufacture volume products at the highest levels of technology while our plants in Asia supply high-volume at globally competitive price points.</p>

                <h6>Alpha's offshore capabilities provide customers:</h6>
                <p>Quicker Delivery</p>
                <p>Higher Quality</p>
                <p>Greater Overall Cost Savings</p>
                <p>Increased Flexibility</p>
                <p>Seamless Facilitation</p>

                <h6>ACC Personnel provides customers:</h6>
                <p>Engineering & Technical Support</p>
                <p>Customer Service</p>
                <p>Account Representation</p>

                <h6>ACC Programs include:</h6>
                <p>Complete Kan Ban</p>
                <p>Stocking & Inventory Management</p>
                
                <h6>Overseas Qualification Process</h6>
                
                <p>Factory and Warehouse visit</p>
                <p>Conduct Quality Systems Audit of the PCB manufacturing process</p>
                <p>ISO 9001-2000 Certification</p>
                <p>Capabilities Survey</p>
                <p>Staff Training and Certification</p>
                <p>Eight Discipline Process</p>
                <p>Design Management</p>
                <p>Materials Controls</p>
                <p>After carefully selecting an offshore PCB facility based on a particular expertise, Alpha ensures that the fabricator's performance has a High-Quality performance rating by qualifying them through our rigid / flex qualification process.</p>
            </div>

            <!-- Option 4 -->
            <div v-if="showOption4">
                <h3>Design Validation</h3>
                <hr class="w-12 h-1 bg-darkGreen-700 border-0 rounded"/>

                <h6>PCB Prototype Design and Process Development</h6>
                <h6> Prototype Design Support</h6>

                <p>While we don't offer design services, we are always glad to provide designers support with their projects.  Alpha's technical support staff can work closely with designers and OEMs to help them design a PCB that increases both durability and manufacturing ability.  Further, we educate designers on primary cost drivers so that cost savings can be had via the initial design rather than through multiple iterations.  The goal is to build a board that meets all requirements of its life-cycle, while minimizing material and labor costs.</p>

                <h6>Fabrication Process Development</h6>
                <p>In today's world, OEM's and startups are constantly being forced to push the technological boundaries of PCB fabrication.  Alpha Circuit Coporation' engineers are ready for any challenge.  Whether the design requires mechanically drilling .003” vias through a 4-layer flex, or building 6-layer parts with a .006” overall thickness, Alpha will work with its clients to dial in a consistent fabrication process.  The design will get full attention until process-realization is achieved.</p>
            </div>

            <!-- Option 5 -->
            <div v-if="showOption5">
                <h3>Volume Production</h3>
                <hr class="w-12 h-1 bg-darkGreen-700 border-0 rounded"/>

                <h6>High Volume Production</h6>
                <p> Alpha comprehensively maintains the entire PCB platform by isolating each part of the process into succinct stages that ensure the highest levels of quality. This rigid isolation accumulates into greater flexibility for the overall process, as well as paves the way for Alpha to set Industry criteria through its participation in ground-breaking research...</p>

                <h6>Global Manufacturing</h6>
                <p>With factories in North America and Asia, ACC produces your products in the appropriate facility based on technology and volume. The size and scale of our manufacturing facilities allow us to meet the demands of large-scale commercial production. The capabilities in all of our facilities blend to provide complete lifecycle support.</p>

                <h6>Domestic Manufacturing</h6>
                <p>Alpha has a complete manufacturing facility in Elmhurst, IL that builds to military high reliability standards. Alpha does First Article inspection on all new lots. Alpha will inventory up to four weeks at Elmhurst, IL. Alpha does pre-engineering on all boards prior to sending offshore for manufacturing and panelization if required. Alpha will manufacture your board if you have a quality issue at the same cost as offshore and deliver on time to support your production. Alpha has its own team off-shore that supervises orders at the manufacturing level.</p>
            </div>

        </div>
    </div>
</template>
  
<script>
    export default {
    data() {
        return {
            showOption1: true,
            showOption2: false,
            showOption3: false,
            showOption4: false,
            showOption5: false,
        };
    },
    name: "careers"
}
</script>

<style scoped>

</style>
  