<template>
  <div :class="ui.landingHero.wrapper" class="bg-[url('/images/landing-hero/lh-3.jpeg')] bg-cover bg-center"> 
    <ContentDoc class="pl-12 pr-12 sm:pl-16 sm:pr-16 md:pl-24 md:pr-24 lg:pl-50 lg:pr-50 pb-32" />
    <!-- <div class="grid grid-cols-2">
      <div :class="ui.landingHero.hero">
        <img v-if="landingPage.hero.logo" :src="landingPage.hero.logo" alt="Logo" :class="ui.landingHero.logo" />
        <div class="rounded-xl">
          <h1 v-if="landingPage.hero.title" :class="ui.landingPage.hero.title" v-html="landingPage.hero.title"></h1>
          <p v-if="landingPage.hero.subtitle" :class="ui.landingPage.hero.subtitle" v-html="landingPage.hero.subtitle">
          </p>
        </div>
        <ShButton v-if="landingPage.button.disabled === false" :disabled="landingPage.button.disabled"
          :urlButton="landingPage.button.url" :class="ui.landingPage.button" :labelButton="landingPage.button.label">
        </ShButton>
      </div> -->
    <!-- <div class="col-start-2 col-span-1 pr-5 sm:mt-24 md:mt-56">
        <ContentQuery path="/landing-page-menu" v-slot="{ data }">
          <h1 v-if="data[0].title !== 'Landing Page Menu'" :class="ui.landingPage.menu.title">{{ data[0].title }}</h1>
          <h3 :class="ui.landingPage.menu.description">{{ data[0].description }}</h3>
          <ContentRenderer :value="item" v-for="item in data" :class="ui.landingPage.menu.content" />
        </ContentQuery> -->

    <!-- section below this comment was already comented (it has been deprecated) -->

    <!-- <ContentQuery path="/landing-page-floaters" v-slot="{ data }">
          <ContentRenderer :value="item" v-for="item in data"
            class="flex flex-col lg:flex-row h-[80%] sm:h-full lg:h-1/6 lg:pl-16 items-end p-3 sm:p-0 mt-12 sm:mt-14 lg:mt-64" />
        </ContentQuery> -->
    <!-- </div> -->
  </div>
  <!-- </div> -->
  <!-- <ContentDoc :class="ui.landingPage.contentDoc" /> -->
  <AppFooter />
</template>

<script setup lang="ts">

const config = {
  landingHero: {
    wrapper: '',
    hero: 'col-start-1 col-span-1 flex flex-col items-start pl-5 sm:pl-14 lg:pl-28 pt-20 h-screen',
    logo: 'w-[70%] sm:w-[60%] lg:w-[28%] xl:w-[30%] mb-14',
  },
  microCard: '',
  landingPage: {
    hero: {
      title: 'font-extrabold text-golden sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl word-break',
      subtitle: 'text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-2 sm:mt-16 text-golden/70 font-mono sm:truncate',
    },
    menu: {
      title: 'flex mx-auto justify-center',
      description: 'flex mx-auto justify-center',
      content: 'flex justify-center pl-3 sm:pl-0 mt-5',
    },
    button: 'p-4 rounded-2xl border mt-4 sm:mt-12 hover:contrast-150 bg-neutral-400 border-neutral-400 dark:bg-neutral-600 dark:border-neutral-600 text-white dark:text-white dark:hover:text-white',
    contentDoc: 'lg:w-3/4 xl:w-1/2 min-w-max mx-auto mt-14 pb-24',
  },
};

const props = withDefaults(
  defineProps<{
    ui?: Partial<typeof config>;
  }>(),
  {
    ui: () => ({}),
  },
);

const landingPage = useAppConfig().landingPage;

const { ui, attrs } = useUI(
  "index",
  toRef(props, "ui"),
  config,
);

const theme = useColorMode();
const route = useRoute();

</script>