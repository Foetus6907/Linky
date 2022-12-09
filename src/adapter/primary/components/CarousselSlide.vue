<script setup lang="ts">
import { PropType } from "vue";
import { AiResponse } from "@/adapter/primary/store/store";

const props = defineProps({
  iAResponse: {
    type: Object as PropType<AiResponse>,
    required: true,
  },
  name: {
    type: Number,
    required: true,
  },
});
console.log("props", props.iAResponse);
</script>
<template>
  <q-carousel-slide :name="name" class="column no-wrap flex-center">
    <q-icon :name="name.toString()" size="56px" />
    <div class="q-mt-md text-center">
      {{ iAResponse.response }}
    </div>
  </q-carousel-slide>
</template>
