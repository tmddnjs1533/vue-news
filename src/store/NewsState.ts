import { fetchNewsList } from "@/api";
import type { ActionContext, ActionTree, Module, MutationTree } from "vuex";

export class NewsStore {
  public loading = false;
  public newsList = [];
}

const UPDATE_STATE = "UPDATE_STATE";
const FETCH_STATE = "FETCH_STATE";

export const UPDATE_NEWS_STATE = `NewsState/${UPDATE_STATE}`;
export const FETCH_NEWS_STATE = `NewsState/${FETCH_STATE}`;

const mutations: MutationTree<NewsStore> = {
  [UPDATE_STATE](state: NewsStore, payload: NewsStore) {
    state.newsList =
      payload.newsList?.length > 0 ? payload.newsList : state.newsList;
    state.loading = payload.loading ? payload.loading : state.loading;
  },
};
//local mutation 호출 시 네임스페이스를 붙이지 않음
const actions: ActionTree<NewsStore, any> = {
  [FETCH_STATE](state: ActionContext<NewsStore, any>) {
    fetchNewsList()
      .then((res) => {
        if (res.data) {
          state.commit(UPDATE_STATE, {
            newsList: res.data,
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

const NewsState: Module<NewsStore, any> = {
  namespaced: true,
  state: new NewsStore(),
  mutations,
  actions,
};

export default NewsState;
