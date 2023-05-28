<template>
<div id="wrapper" class="mb-10 w-full">
    <div class="flex bg-darkGreen-500 h-20 w-full">
        <div class="flex flex-row gap-10 mr-28 mt-50 w-full justify-end items-center">
            <div>
                READY TO REQUEST A QUOTE?
            </div>
            <div class="rounded-md text-white bg-neutrals-600 p-3">
                Inquires?
            </div>
        </div>
    </div>
    <div id="third section" class="h-90">
        <div class="flex flex-row justify-evenly items-center gap-40 p-10">
            <div class="text-white bg-darkGreen-900 rounded-lg text-3xl p-10">
                <p class="font-bold mt-5 mb-5">First Choice PCB Supplier</p>
                <p>35 Years of mutually rewarding</p>
                <p>Relationships with all of our</p>
                <p>Customers from here in</p>
                <p>Illinois!</p>
            </div>
            <img src="~/assets/images/ph.png" class="h-52 w-1/5" alt="">
        </div>
    </div>
    <div class="bg-lightGreen-100 flex flex-col pb-10">
        <div class="flex flex-row gap-16 justify-center items-center m-10" >
            <ContactCard v-for="data in fourthSectionData" :title='data.title' :body='data.body' :button-text="data.buttonText"/>
        </div>
        <div>
            <div class="flex flex-row justify-center items-center">
                <Form class="w-4/5"/>
            </div>
            <div>
                    <!--TODO: Here goes the map with the location-->
            </div>
        </div>
    </div>
</div>

</template>

<script setup>

import Form from "~/components/contact/fourth/form.vue";

const fourthSectionData = [
    {
        "title": "Careers",
        "body": "Interested in applying?\n Take a look at our open positions",
        "buttonText": "Explore jobs"
    },
    {
        "title": "About Us",
        "body": "Want to know more?\n Come by schedule a visit, let's talk",
        "buttonText": "Book Appointment"
    },
    {
        "title": "Quote Request",
        "body": "Talk directly with a sales representative",
        "buttonText": "Get a quote"
    }
]

</script>

<style scoped>

</style>
