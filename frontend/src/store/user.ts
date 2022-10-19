import type { ActionContext } from "vuex";

export interface State {
  data: User | null;
}

export interface User {
  id: number;
  email: string;
  username: string;
  contacts: {
    telegram: string;
    linkedin: string;
  };
}
import axios from "@/service";
import router from "@/router";
import type { RootState } from ".";

export const user = {
  namespaced: true,
  state: () => ({
    data: null,
  }),
  getters: {},
  mutations: {
    setUser(state: State, data: User) {
      state.data = data;
    },
  },
  actions: {
    async logout({ commit }: ActionContext<State, RootState>) {
      commit("setUser", null);
      router.push("/login");
    },
    async login(
      { commit }: ActionContext<State, RootState>,
      { email, password }: { email: string; password: string }
    ) {
      try {
        const response = await axios.post("/login", {
          email,
          password,
        });
        const user = response.data.user;

        commit("setUser", user);
        router.push("/");
      } catch (e: any) {
        commit("setUser", null);
        throw e;
      }
    },
  },
};
