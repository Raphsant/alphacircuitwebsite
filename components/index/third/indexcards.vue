<template>
<div class="bg-lightGreen-50 flex flex-col justify-center items-center w-2/5 rounded-lg drop-shadow-lg p-3">
    <div>
        <img :src="url" alt="svg">
    </div>
    <div>
        <div>
            {{props.text}}
        </div>
    </div>

</div>
</template>

<script setup>

const props = defineProps(['imageUrl', 'text'])
const url = `/img/${props.imageUrl}`

</script>

<style scoped>

</style>
