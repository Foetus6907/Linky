<script setup lang="ts">
import { PropType, ref } from "vue";
import { AiResponse } from "@/adapter/primary/store/store";
import CarousselSlide from "@/adapter/primary/components/CarousselSlide.vue";

/* defineProps iAResponse*/
const props = defineProps({
  iAResponses: {
    type: Object as PropType<AiResponse[]>,
    required: true,
  },
});

console.log("props", props.iAResponses);

const slide = ref("style");
</script>
<template>
  <div class="q-pa-md">
    <div class="q-gutter-md">
      <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="white"
        navigation
        padding
        arrows
        height="300px"
        class="bg-primary text-white shadow-1 rounded-borders"
      >
        <caroussel-slide
          v-for="(iAResponse, key) in iAResponses"
          :key="key"
          :i-a-response="iAResponse"
          :name="key"
        />
      </q-carousel>

      <!--      <q-carousel
        v-model="slide"
        transition-prev="jump-right"
        transition-next="jump-left"
        swipeable
        animated
        control-color="white"
        prev-icon="arrow_left"
        next-icon="arrow_right"
        navigation-icon="radio_button_unchecked"
        navigation
        padding
        arrows
        height="300px"
        class="bg-purple text-white shadow-1 rounded-borders"
      >
        <CarousselSlide
          v-for="(iAResponse, key) in iAResponses"
          :key="key"
          :name="key"
          :i-a-response="iAResponse"
        />
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <q-icon name="live_tv" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
          <q-icon name="layers" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">
          <q-icon name="terrain" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
      </q-carousel>-->
    </div>
  </div>
</template>
