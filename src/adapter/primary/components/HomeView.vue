<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import Caroussel from "@/adapter/primary/components/Caroussel.vue";
import { AiResponse } from "@/adapter/primary/store/store";

const store = useStore();

/* Create search ref*/
const prompt = computed({
  get: () => store.getters.getPrompt,
  set: (value) => store.commit("setPrompt", value),
});
const onSearch = async () => {
  await store.dispatch("fetchPostFromPrompt", prompt.value);
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const aiResponses = computed<AiResponse[]>(() => store.getters.getAiResponses);

const fakeResponse: AiResponse[] = [
  {
    prompt: "test",
    response: "qksjdh sdkjfhsdkj usdhfkjsdb kusdhfkjb kjshqdjkfnb dskjfhdsufhl",
  },
  {
    prompt: "test",
    response: "qksjdh sdkjfhsdkj usdhfkjsdb kusdhfkjb kjshqdjkfnb dskjfhdsufhl",
  },
  {
    prompt: "test",
    response: "qksjdh sdkjfhsdkj usdhfkjsdb kusdhfkjb kjshqdjkfnb dskjfhdsufhl",
  },
];
console.log("fakeResponse", fakeResponse);
</script>

<template>
  <!--  Create a q-page that will have a search bar centered in the middle take 70% width-->
  <q-page>
    <div class="q-mt-xl row flex flex-center">
      <q-input
        v-model="prompt"
        class="q-px-md w-70"
        outlined
        rounded
        dense
        placeholder="Search"
        @input="onSearch"
        @keyup.enter="onSearch"
      >
        <template #append>
          <q-icon name="search" />
        </template>
      </q-input>
    </div>

    <div class="row flex flex-center">
      <Caroussel class="w-50" :i-a-responses="fakeResponse" />
    </div>
  </q-page>
</template>

<style lang="sass" scoped>
.w-70
  width: 70%
.w-50
  width: 50%
</style>
