import { StateCreator } from 'zustand';

import { CommonStoreState, actionWrapper } from '../../common';
import { ApiService } from '@/services';
import { IGameStatus } from '@/types';

export interface MainSliceState extends CommonStoreState {
  count: number;
  getGameStatus: () => Promise<IGameStatus | undefined>;
}

export const createMainSlice: StateCreator<MainSliceState, [], [], MainSliceState> = (
  set,
) => ({
  count: 0,

  getGameStatus: async () => {
    return actionWrapper(set, async () => {
      const res = await ApiService.getInstance().getGameStatus();
      console.log('res game status', res)
      return res.data
    });
  },
});