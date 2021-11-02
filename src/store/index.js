import { init } from "@rematch/core";
import selectPlugin from "@rematch/select";
import StateModels from "./state-models/index.js";

const store = init({ 
  models: StateModels,
  plugins: [selectPlugin()],
});

export const { select } = store

export default store;