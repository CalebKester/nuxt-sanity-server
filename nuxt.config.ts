// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  nitro: {
    preset: "azure",
  },
  modules: ["@nuxtjs/sanity"],
  sanity: {
    projectId: "x2hmuriz",
    dataset: "production",
    apiVersion: "2021-10-21",
    minimal: true,
  },
});
