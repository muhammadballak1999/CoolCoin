import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { IUser, IVerifyUserPayload, IVerifyUserResponse } from '@/types';
import { ApiService, LocalStorageService } from '@/services';
import { CommonStoreState, actionWrapper } from '../common';

interface AuthStoreState extends CommonStoreState {
  user?: IUser | null;
  isLoggedIn: boolean;
  verifyUser: (payload: IVerifyUserPayload, id: number) => Promise<IVerifyUserResponse | undefined>;
}

export const useAuthStore = create<AuthStoreState>()(
  persist(
    (set) => ({
      user: null,
      isLoggedIn: false,

      verifyUser: async (payload: IVerifyUserPayload, id: number) => {
        return actionWrapper(set, async () => {
          const res = await ApiService.getInstance().verifyUser(payload);

          LocalStorageService.getInstance().setToken(res.data.access_token!);
          set(() => ({ isLoggedIn: !!res.data.access_token }));
          set((state) => ({
            user: {
              ...state.user!,
              id,
            }
          }));

          return res.data;
        });
      },
    }),
    {
       name: 'auth-storage',
       storage: createJSONStorage(() => localStorage),
    },
  ),
);
