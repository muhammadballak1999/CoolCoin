import { StateCreator } from 'zustand';

import { CommonStoreState, actionWrapper } from '../../common';
import { ApiService } from '@/services';
import { ICharacter, ICharacterQuery, IGameStatus, ILoot, IPaginatedResponse, ISendCharacter } from '@/types';

export interface MainSliceState extends CommonStoreState {
  nextClaimTimeSecond: number;
  nextRollTimeSecond: number;
  playerId: number;
  profitPerHour: number;
  rollsLeft: number;
  totalCoins: number;
  collectionCount: number;

  characters: IPaginatedResponse<ICharacter>,
  lootCharacters: ILoot[],

  getGameStatus: () => Promise<IGameStatus | undefined>;
  getCharacters: (renew: boolean, params?: ICharacterQuery) => Promise<IPaginatedResponse<ICharacter | null>>;
  getLootCharacters: (params?: ICharacterQuery) => Promise<ILoot[]>;
  roll: () => Promise<ICharacter>;
  claim: (characterId: number) => Promise<ICharacter>;
  sell: (itemId: number) => Promise<ICharacter>;
  send: (itemId: number) => Promise<ISendCharacter>;
  getEarnActivities: () => Promise<ICharacter>;
  earn: (activityId: number) => Promise<ICharacter>;
  updateTimedClaim: (index: number) => void;
  redeem: (guid: string) => Promise<ICharacter>;
}

export const createMainSlice: StateCreator<MainSliceState, [], [], MainSliceState> = (
  set,
) => ({
  nextClaimTimeSecond: 0,
  nextRollTimeSecond: 0,
  playerId: 0,
  profitPerHour: 0,
  rollsLeft: 0,
  totalCoins: 0,
  collectionCount: 0,
  characters: null!,
  lootCharacters: [],

  getGameStatus: async () => {
    return actionWrapper(set, async () => {
      const res = await ApiService.getInstance().getGameStatus();
      set({
        nextClaimTimeSecond: res.data.next_claim_time_second,
        nextRollTimeSecond: res.data.next_roll_time_second,
        playerId: res.data.player_id,
        rollsLeft: res.data.rolls_left,
        profitPerHour: res.data.profit_per_hour,
        totalCoins: res.data.total_coins,
        collectionCount: res.data.collection_count,
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

  getLootCharacters: async (params?: ICharacterQuery) => {
    return actionWrapper(set, async () => {
      const res = await ApiService.getInstance().getLootCharacters(params);

      set({lootCharacters:  res.data });
      
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

  updateTimedClaim: async (index: number) => {
    return actionWrapper(set, async () => {
      set((state) => ({
        lootCharacters: state.lootCharacters.map((loot, i) => index === i ? { ...loot, claimed_by_player: state.playerId} : loot)
      }))
    return true;
    });
  },

  sell: async (itemId: number) => {
    return actionWrapper(set, async () => {
      const res = await ApiService.getInstance().sell(itemId);

      return res.data
    });
  },

  send: async (itemId: number) => {
    return actionWrapper(set, async () => {
      const res = await ApiService.getInstance().send(itemId);

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
  redeem: async (guid: string) => {
    return actionWrapper(set, async () => {
      const res = await ApiService.getInstance().redeem(guid);

      return res.data
    });
  },
});