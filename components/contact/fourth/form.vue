<template>
  <form
    name="contact-us"
    method="POST"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    <input type="hidden" name="form-name" value="contact-us" />
    <div class="flex flex-col gap-5 p-12">
      <div class="font-bold text-3xl font-ubuntu">
        Send us a message! Get in touch with one of the team today!
      </div>
      <div>
        <div class="flex flex-col gap-5">
          <input
            type="text"
            name="Name"
            placeholder="Name"
            class="font-manrope rounded-md h-10 p-2"
          />
          <input
            type="text"
            name="Subject"
            placeholder="Subject"
            class="font-manrope rounded-md h-10 p-2"
          />
          <input
            type="text"
            name="Email"
            placeholder="Email"
            class="font-manrope rounded-md h-10 p-2"
          />
          <textarea
            name="Requirement"
            placeholder="Your requirement"
            class="font-manrope h-36 rounded-md p-2 pb-20"
          />
          <button
            type="submit"
            class="
              bg-darkGreen-900
              rounded-md
              p-3
              text-white
              font-bold font-manrope
              text-lg
              w-max
              hover:underline
            "
          >
            Send
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup></script>

<style scoped></style>
