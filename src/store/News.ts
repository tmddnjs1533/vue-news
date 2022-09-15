import { fetchNewsList } from "@/api";
import type { ActionContext, ActionTree, Module, MutationTree } from "vuex";

export class NewsState {
  public loading = false;
  public newsList = [];
}

const UPDATE_STATE = "UPDATE_STATE";
const FETCH_STATE = "FETCH_STATE";

export const UPDATE_NEWS_STATE = `News/${UPDATE_STATE}`;
export const FETCH_NEWS_STATE = `News/${FETCH_STATE}`;

const mutations: MutationTree<NewsState> = {
  [UPDATE_STATE](state: NewsState, payload: NewsState) {
    state.newsList =
      payload.newsList?.length > 0 ? payload.newsList : state.newsList;
    state.loading = payload.loading ? payload.loading : state.loading;
  },
};
//local mutation 호출 시 네임스페이스를 붙이지 않음
const actions: ActionTree<NewsState, any> = {
  [FETCH_STATE](state: ActionContext<NewsState, any>) {
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

const News: Module<NewsState, any> = {
  namespaced: true,
  state: new NewsState(),
  mutations,
  actions,
};

export default News;
