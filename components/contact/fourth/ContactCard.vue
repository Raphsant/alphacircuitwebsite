<template>
  <div
    class="
      flex-col flex
      border
      bg-neutral-50
      rounded-lg
      w-3/12
      space-y-4
      p-5
      shadow-xl
    "
  >
    <img class="w-16" :src="props.imgUrl" alt="" />
    <div class="text-3xl w-fit font-ubuntu">
      {{ props.title }}
    </div>
    <div class="w-4/6 text-lg font-manrope">
      {{ props.body }}
    </div>
    <NuxtLink :to="props.hash ? fullLink : props.redirectLink">
      <div
        class="
          bg-darkGreen-700
          text-white
          w-fit
          p-3
          font-manrope
          rounded-lg
          cursor-pointer
          hover:underline
        "
      >
        {{ props.buttonText }}
      </div>
    </NuxtLink>
  </div>
</template>
<script setup>
const props = defineProps([
  "title",
  "imgUrl",
  "body",
  "buttonText",
  "redirectLink",
  "hash",
]);

const fullLink = props.redirectLink + props.hash;
</script>
<style scoped></style>
