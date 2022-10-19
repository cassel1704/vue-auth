import { createStore } from "vuex";
import { user } from "@/store/user";
import type { State as UserState } from "./user";
import VuexPersistence from "vuex-persist";

export type RootState = {
  user: UserState;
};

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default createStore<RootState>({
  modules: {
    user,
  },
  plugins: [vuexLocal.plugin],
});
