import { fetchItem } from "@/api";
import type { ActionContext, ActionTree, Module, MutationTree } from "vuex";

export class ItemState {
  public loading = false;
  public item = {};
}

const UPDATE_STATE = "UPDATE_STATE";
const FETCH_STATE = "FETCH_STATE";

export const UPDATE_ITEM_STATE = `Item/${UPDATE_STATE}`;
export const FETCH_ITEM_STATE = `Item/${FETCH_STATE}`;

const mutations: MutationTree<ItemState> = {
  [UPDATE_STATE](state: ItemState, payload: ItemState) {
    state.item = payload.item ? payload.item : state.item;
    state.loading = payload.loading ? payload.loading : state.loading;
  },
};

const actions: ActionTree<ItemState, any> = {
  [FETCH_STATE](state: ActionContext<ItemState, any>, payload: { id: string }) {
    fetchItem(payload.id)
      .then((res) => {
        if (res.data) {
          state.commit(UPDATE_STATE, {
            item: res.data,
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

const Item: Module<ItemState, any> = {
  namespaced: true,
  state: new ItemState(),
  mutations,
  actions,
};

export default Item;
