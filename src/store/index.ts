import { createStore } from "vuex";
import type { Module } from "vuex";

import NewsState, { NewsStore } from "@/store/NewsState";
import AskState, { AskStore } from "@/store/AskState";
import JobsState, { JobsStore } from "@/store/JobsState";

// export interface State {
//   newsList: INews[];
//   askList: IAsk[];
//   jobsList: IJobs[];
// }

export interface RootState {
  modules: {
    NewsState: Module<NewsStore, any>;
    AskState: Module<AskStore, any>;
    JobsState: Module<JobsStore, any>;
  };
}

export const store = createStore<RootState>({
  modules: {
    NewsState,
    AskState,
    JobsState,
  },
});
