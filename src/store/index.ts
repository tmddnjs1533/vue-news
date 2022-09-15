import { createStore } from "vuex";
import type { Module } from "vuex";

import News, { NewsState } from "@/store/News";
import Ask, { AskState } from "@/store/Ask";
import Jobs, { JobsState } from "@/store/Jobs";
import User, { UserState } from "@/store/User";
import Item, { ItemState } from "@/store/Item";

// export interface State {
//   newsList: INews[];
//   askList: IAsk[];
//   jobsList: IJobs[];
// }

export interface RootState {
  modules: {
    News: Module<NewsState, any>;
    Ask: Module<AskState, any>;
    Jobs: Module<JobsState, any>;
    User: Module<UserState, any>;
    Item: Module<ItemState, any>;
  };
}

export const store = createStore<RootState>({
  modules: {
    News,
    Ask,
    Jobs,
    User,
    Item,
  },
});
