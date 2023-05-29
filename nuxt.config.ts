// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Alpha Circuit",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1.0",
      keywords:
        "Quick turn prototype,PWB Fabricator,Quick turn production,TS16949,AS9100,Automotive,Mil-31032,PCB Reliability",
      description: "Prototype Design",
    },
  },
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
