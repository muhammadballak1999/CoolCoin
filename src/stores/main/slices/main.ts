import { StateCreator } from 'zustand';

import { CommonStoreState, actionWrapper } from '../../common';
import { ApiService } from '@/services';
import { ICharacter, ICharacterQuery, IGameStatus, IPaginatedResponse } from '@/types';

export interface MainSliceState extends CommonStoreState {
  nextClaimTimeSecond: number;
  playerId: number;
  profitPerHour: number;
  rollsLeft: number;
  totalCoins: number;

  characters: IPaginatedResponse<ICharacter | null>,

  getGameStatus: () => Promise<IGameStatus | undefined>;
  getCharacters: () => Promise<IPaginatedResponse<ICharacter | null>>;
}

export const createMainSlice: StateCreator<MainSliceState, [], [], MainSliceState> = (
  set,
) => ({
  nextClaimTimeSecond: 0,
  playerId: 0,
  profitPerHour: 0,
  rollsLeft: 0,
  totalCoins: 0,
  characters: null!,

  getGameStatus: async () => {
    return actionWrapper(set, async () => {
      const res = await ApiService.getInstance().getGameStatus();
      set({
        nextClaimTimeSecond: res.data.next_claim_time_second,
        playerId: res.data.player_id,
        rollsLeft: res.data.rolls_left,
        profitPerHour: res.data.profit_per_hour,
        totalCoins: res.data.total_coins,
      })
      return res.data
    });
  },

  getCharacters: async (params?: ICharacterQuery) => {
    return actionWrapper(set, async () => {
      const res = await ApiService.getInstance().getCharacters(params);
      set({ characters: res.data })
      return res.data
    });
  },
});