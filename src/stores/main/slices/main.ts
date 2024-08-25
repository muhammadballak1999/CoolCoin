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

  characters: IPaginatedResponse<ICharacter>,

  getGameStatus: () => Promise<IGameStatus | undefined>;
  getCharacters: (renew: boolean, params?: ICharacterQuery) => Promise<IPaginatedResponse<ICharacter | null>>;
  roll: () => Promise<ICharacter>;
  claim: (characterId: number) => Promise<ICharacter>;
  sell: (playerId: number, itemId: number) => Promise<ICharacter>;
  send: (playerId: number, itemId: number) => Promise<ICharacter>;
  getEarnActivities: () => Promise<ICharacter>;
  earn: (activityId: number) => Promise<ICharacter>;
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

  getCharacters: async (renew: boolean, params?: ICharacterQuery) => {
    return actionWrapper(set, async () => {
      const res = await ApiService.getInstance().getCharacters(params);
      if(renew) {
        set({ characters: res.data });
      } else {
        set((state) => ({
          characters: {
            ...state.characters,
            results: [...state.characters.results, ...res.data.results],
          }
        }));
      }
      return res.data
    });
  },

  roll: async () => {
    return actionWrapper(set, async () => {
      const res = await ApiService.getInstance().roll();

      return res.data
    });
  },
  
  claim: async (characterId: number) => {
    return actionWrapper(set, async () => {
      const res = await ApiService.getInstance().claim(characterId);

      return res.data
    });
  },

  sell: async (playerId: number, itemId: number) => {
    return actionWrapper(set, async () => {
      const res = await ApiService.getInstance().sell(playerId, itemId);

      return res.data
    });
  },

  send: async (playerId: number, itemId: number) => {
    return actionWrapper(set, async () => {
      const res = await ApiService.getInstance().send(playerId, itemId);

      return res.data
    });
  },

  getEarnActivities: async () => {
    return actionWrapper(set, async () => {
      const res = await ApiService.getInstance().getEarnActivities();

      return res.data
    });
  },
  earn: async (activityId: number) => {
    return actionWrapper(set, async () => {
      const res = await ApiService.getInstance().earn(activityId);

      return res.data
    });
  },
});