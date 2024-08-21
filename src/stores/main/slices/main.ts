import { StateCreator } from 'zustand';

import { CommonStoreState, actionWrapper } from '../../common';
import { ApiService } from '@/services';
import { IGameStatus } from '@/types';

export interface MainSliceState extends CommonStoreState {
  gameId: number;
  nextClaimTimeSecond: number;
  playerId: number;
  profitPerHour: number;
  rollsLeft: number;
  totalCoins: number;
  getGameStatus: () => Promise<IGameStatus | undefined>;
}

export const createMainSlice: StateCreator<MainSliceState, [], [], MainSliceState> = (
  set,
) => ({
  gameId: 0,
  nextClaimTimeSecond: 0,
  playerId: 0,
  profitPerHour: 0,
  rollsLeft: 0,
  totalCoins: 0,

  getGameStatus: async () => {
    return actionWrapper(set, async () => {
      const res = await ApiService.getInstance().getGameStatus();
      set({
        gameId: res.data.game_id,
        nextClaimTimeSecond: res.data.next_claim_time_second,
        playerId: res.data.player_id,
        rollsLeft: res.data.rolls_left,
        totalCoins: res.data.total_coins,
      })
      return res.data
    });
  },
});