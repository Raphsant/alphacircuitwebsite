<template>
    <div class="flex-col flex border bg-neutral-50 rounded-lg w-3/12">
        <div class="m-5 text-3xl w-fit">
            {{props.title}}
        </div>
        <div class="m-5 w-3/6 text-lg">
            {{props.body}}
        </div>
        <div class="m-5 bg-darkGreen-700 text-white w-fit p-3 font-bold rounded-lg">
            {{props.buttonText}}
        </div>
    </div>
</template>
<script setup>
const props = defineProps(['title', 'imgUrl', 'body', 'buttonText'])
</script>
<style scoped>
</style>
