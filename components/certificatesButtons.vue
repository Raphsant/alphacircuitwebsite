<script setup lang="ts">
const certificates = [
  { name: "AS9100", index: 0 },
  { name: "TS16949", index: 1 },
  { name: "ISO9001", index: 2 },
  { name: "ITAR", index: 3 },
  { name: "UL Certification", index: 4 },
  { name: "MBE", index: 5 },
];
</script>

<template>
  <table>
    <thead class="bg-darkGreen-700 text-white outline outline-amber-300">
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
</template>

<style scoped></style>
