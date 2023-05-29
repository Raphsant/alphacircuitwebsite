// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    [
      "nuxt-mail",
      {
        message: [{ name: "contact", to: "rafsant345@gmail.com" }],
        smtp: {
          service: "gmail",
          auth: {
            user: "alphacircuitmail@gmail.com",
            pass: "bpqapdkrdvdmouzc",
          },
        },
      },
    ],
  ],
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
