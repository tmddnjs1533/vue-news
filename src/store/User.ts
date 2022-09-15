import type { Module, MutationTree, ActionTree, ActionContext } from "vuex";
import { fetchUser } from "@/api";

export class UserState {
  public loading = false;
  public user = {};
}

const UPDATE_STATE = "UPDATE_STATE";
const FETCH_STATE = "FETCH_STATE";

export const UPDATE_USER_STATE = `User/${UPDATE_STATE}`;
export const FETCH_USER_STATE = `User/${FETCH_STATE}`;

const mutations: MutationTree<UserState> = {
  [UPDATE_STATE](state: UserState, payload: UserState) {
    state.user = payload.user ? payload.user : state.user;
    state.loading = payload.loading ? payload.loading : state.loading;
  },
};
//local mutation 호출 시 네임스페이스를 붙이지 않음
const actions: ActionTree<UserState, any> = {
  [FETCH_STATE](state: ActionContext<UserState, any>, payload: { id: string }) {
    fetchUser(payload.id)
      .then((res) => {
        if (res.data) {
          state.commit(UPDATE_STATE, {
            user: res.data,
            loading: false,
          });
        }
      })
      .catch((e) => {
        console.dir(e);
        state.commit(UPDATE_STATE, {
          loading: false,
        });
      });
  },
};

const News: Module<UserState, any> = {
  namespaced: true,
  state: new UserState(),
  mutations,
  actions,
};

export default News;
