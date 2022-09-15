import { fetchAskList } from "@/api";
import type { ActionContext, ActionTree, Module, MutationTree } from "vuex";

export class AskStore {
  public loading = false;
  public askList = [];
}

const UPDATE_STATE = "UPDATE_STATE";
const FETCH_STATE = "FETCH_STATE";

export const UPDATE_ASK_STATE = `AskState/${UPDATE_STATE}`;
export const FETCH_ASK_STATE = `AskState/${FETCH_STATE}`;

const mutations: MutationTree<AskStore> = {
  [UPDATE_STATE](state: AskStore, payload: AskStore) {
    state.askList =
      payload.askList?.length > 0 ? payload.askList : state.askList;
    state.loading = payload.loading ? payload.loading : state.loading;
  },
};

const actions: ActionTree<AskStore, any> = {
  [FETCH_STATE](state: ActionContext<AskStore, any>) {
    fetchAskList()
      .then((res) => {
        if (res.data) {
          state.commit(UPDATE_ASK_STATE, {
            askList: res.data,
          });
        }
      })
      .catch((e) => console.dir(e));
    state.commit(UPDATE_ASK_STATE, {
      loading: false,
    });
  },
};

const AskState: Module<AskStore, any> = {
  namespaced: true,
  state: new AskStore(),
  mutations,
  actions,
};

export default AskState;
