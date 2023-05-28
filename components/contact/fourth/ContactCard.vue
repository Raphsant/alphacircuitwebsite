<template>
    <div class="flex-col flex border bg-neutral-50 rounded-lg w-3/12 space-y-4 p-5">
        <img :src="props.imgUrl" alt="">
        <div class="text-3xl w-fit">
            {{props.title}}
        </div>
        <div class="w-3/6 text-lg">
            {{props.body}}
        </div>
        <div class="bg-darkGreen-700 text-white w-fit p-3 font-bold rounded-lg cursor-pointer hover:underline">
            {{props.buttonText}}
        </div>
    </div>
</template>
<script setup>
const props = defineProps(['title', 'imgUrl', 'body', 'buttonText'])
</script>
<style scoped>
</style>
