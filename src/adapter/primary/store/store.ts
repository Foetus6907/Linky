import { createStore } from "vuex";

export interface AiResponse {
  prompt: string;
  response: string;
}

interface ApiState {
  aiResponses: AiResponse[];
  prompt: string;
}

const apiStore = {
  state: {
    aiResponses: [],
    prompt: "",
  } as ApiState,
  mutations: {
    setAiResponse(state: any, aiResponses: AiResponse) {
      state.aiResponses.push(aiResponses);
    },
    setPrompt(state: any, prompt: string) {
      state.prompt = prompt;
    },
  },
  actions: {
    async fetchPostFromPrompt(context: any, payload: { prompt: string }) {
      try {
        const response = await fetch(
          "https://FaroffSnowInternalcommand.jean-paulduchen.repl.co",
          {
            method: "POST",
            body: JSON.stringify({ prompt: payload.prompt }),
          }
        );
        const aiResponse = (await response.json()) as AiResponse;
        console.log("data", aiResponse);
        context.commit("setAiResponse", aiResponse);
      } catch (e) {
        console.log("error", e);
      }
    },
  },
  getters: {
    getAiResponses(state: any): AiResponse[] {
      return state.aiResponses;
    },
    getPrompt(state: any): string {
      return state.prompt;
    },
  },
};
const store = createStore({
  modules: {
    apiStore: apiStore,
  },
});

export default store;
