import { fetchAskList } from "@/api";
import type { ActionContext, ActionTree, Module, MutationTree } from "vuex";

export class AskState {
  public loading = false;
  public askList = [];
}

const UPDATE_STATE = "UPDATE_STATE";
const FETCH_STATE = "FETCH_STATE";

export const UPDATE_ASK_STATE = `Ask/${UPDATE_STATE}`;
export const FETCH_ASK_STATE = `Ask/${FETCH_STATE}`;

const mutations: MutationTree<AskState> = {
  [UPDATE_STATE](state: AskState, payload: AskState) {
    state.askList =
      payload.askList?.length > 0 ? payload.askList : state.askList;
    state.loading = payload.loading ? payload.loading : state.loading;
  },
};

const actions: ActionTree<AskState, any> = {
  [FETCH_STATE](state: ActionContext<AskState, any>) {
    fetchAskList()
      .then((res) => {
        if (res.data) {
          state.commit(UPDATE_STATE, {
            askList: res.data,
          });
        }
      })
      .catch((e) => console.dir(e));
    state.commit(UPDATE_STATE, {
      loading: false,
    });
  },
};

const Ask: Module<AskState, any> = {
  namespaced: true,
  state: new AskState(),
  mutations,
  actions,
};

export default Ask;
