import { StateCreator } from 'zustand';

import { CommonStoreState, actionWrapper } from '../../common';

export interface ExampleSliceState extends CommonStoreState {
  count: number;
  increaseCounter: () => void;
}

export const createExampleSlice: StateCreator<ExampleSliceState, [], [], ExampleSliceState> = (
  set,
) => ({
  count: 0,

  increaseCounter: async () => {
    return actionWrapper(set, async () => {
      set((state) => ({ count: ++state.count }));
    });
  },
});