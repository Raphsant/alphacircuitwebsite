<template>
  <div class="flex flex-col gap-5 p-12">
    <div class="font-bold text-3xl font-ubuntu">
      Send us a message! Get in touch with one of the team today!
    </div>
    <div>
      <div class="flex flex-col gap-5">
        <input
          v-model="emailData.name"
          type="text"
          placeholder="Name"
          class="font-manrope rounded-md h-10 p-2"
        />
        <input
          v-model="emailData.subject"
          type="text"
          placeholder="Subject"
          class="font-manrope rounded-md h-10 p-2"
        />
        <input
          v-model="emailData.emailAddress"
          type="text"
          placeholder="Email"
          class="font-manrope rounded-md h-10 p-2"
        />
        <textarea
          v-model="emailData.message"
          placeholder="Your requirement"
          class="font-manrope h-36 rounded-md p-2 pb-20"
        />
        <button
          @click="send"
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
</template>

<script setup>
const mail = useMail();
let emailData = {
  firstName: "",
  subject: "",
  emailAddress: "",
  message: "",
};

const send = async () => {
  try {
    event.preventDefault();
    await mail.send({
      config: "contact",
      from: emailData.firstName,
      subject: `${emailData.subject}.`,
      text: `Name: ${emailData.name} \n
            Company: ${emailData.company}\n
            Email: ${emailData.emailAddress}\n
            Message: ${emailData.message}\n
            `,
    });
  } catch (e) {
    console.error(e);
  }
  window.location.reload();
};
</script>

<style scoped></style>
