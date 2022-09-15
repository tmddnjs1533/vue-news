import { fetchJobsList } from "@/api";
import type { ActionContext, ActionTree, Module, MutationTree } from "vuex";

export class JobsState {
  public loading = false;
  public jobsList = [];
}
const UPDATE_STATE = "UPDATE_STATE";
const FETCH_STATE = "FETCH_STATE";

export const UPDATE_JOBS_STATE = `Jobs/${UPDATE_STATE}`;
export const FETCH_JOBS_STATE = `Jobs/${FETCH_STATE}`;

const mutations: MutationTree<JobsState> = {
  [UPDATE_STATE](state: JobsState, payload: JobsState) {
    state.jobsList =
      payload.jobsList?.length > 0 ? payload.jobsList : state.jobsList;
    state.loading = payload.loading ? payload.loading : state.loading;
  },
};

const actions: ActionTree<JobsState, any> = {
  [FETCH_STATE](state: ActionContext<JobsState, any>) {
    fetchJobsList()
      .then((res) => {
        if (res.data) {
          state.commit(UPDATE_STATE, {
            jobsList: res.data,
          });
        }
      })
      .catch((e) => console.dir(e));
    state.commit(UPDATE_STATE, {
      loading: false,
    });
  },
};

const Jobs: Module<JobsState, any> = {
  namespaced: true,
  state: new JobsState(),
  mutations,
  actions,
};

export default Jobs;
