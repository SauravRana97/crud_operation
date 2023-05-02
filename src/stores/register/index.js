import { defineStore } from "pinia";
import state from "./state";
import action from "./actions";
import mutation from "./mutation";

export const useindexStore = defineStore("index", () => {
  state, action, mutation;

  return { state, action, mutation };
});
