import { fetchJobsList } from "@/api";
import type { ActionContext, ActionTree, Module, MutationTree } from "vuex";

export class JobsStore {
  public loading = false;
  public jobsList = [];
}
const UPDATE_STATE = "UPDATE_STATE";
const FETCH_STATE = "FETCH_STATE";

export const UPDATE_JOBS_STATE = `JobsState/${UPDATE_STATE}`;
export const FETCH_JOBS_STATE = `JobsState/${FETCH_STATE}`;

const mutations: MutationTree<JobsStore> = {
  [UPDATE_STATE](state: JobsStore, payload: JobsStore) {
    state.jobsList =
      payload.jobsList?.length > 0 ? payload.jobsList : state.jobsList;
    state.loading = payload.loading ? payload.loading : state.loading;
  },
};

const actions: ActionTree<JobsStore, any> = {
  [FETCH_STATE](state: ActionContext<JobsStore, any>) {
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

const JobsState: Module<JobsStore, any> = {
  namespaced: true,
  state: new JobsStore(),
  mutations,
  actions,
};

export default JobsState;
