// import { create } from 'zustand';
// import { persist, createJSONStorage } from 'zustand/middleware';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// import { IGenerateOtpPayload, IVerifyOtpPayload, IOtp, IUser } from '@/types';
// import { ApiService, AsyncStorageService } from '@/services';
// import { CommonStoreState, actionWrapper } from '../common';

// interface AuthStoreState extends CommonStoreState {
//   user?: IUser | null;
//   isLoggedIn: boolean;
//   generateOtp: (payload: IGenerateOtpPayload) => Promise<IOtp | undefined>;
//   verifyOtp: (payload: IVerifyOtpPayload) => Promise<IOtp | undefined>;
//   getMe: () => Promise<IUser>;
//   logout: () => Promise<void>;
// }

// export const useAuthStore = create<AuthStoreState>()(
//   persist(
//     (set) => ({
//       user: null,
//       isLoggedIn: false,

//       generateOtp: async (payload: IGenerateOtpPayload) => {
//         return actionWrapper(set, async () => {
//           const res = await ApiService.getInstance().generateOtp(payload);
//           return res.data;
//         });
//       },
//       verifyOtp: async (payload: IVerifyOtpPayload) => {
//         return actionWrapper(set, async () => {
//           const res = await ApiService.getInstance().verifyOtp(payload);

//           await AsyncStorageService.getInstance().setToken({
//             access: res.data.access_token!,
//           });
//           set(() => ({ isLoggedIn: !!res.data.access_token }));

//           return res.data;
//         });
//       },
//       getMe: async () => {
//         return actionWrapper(set, async () => {
//           const res = await ApiService.getInstance().getMe();

//           set(() => ({ user: res.data }));

//           return res.data;
//         });
//       },
//       logout: async () => {
//         return actionWrapper(set, async () => {
//           await AsyncStorageService.getInstance().clear();

//           set(() => ({ user: null, isLoggedIn: false }));
//         });
//       },
//     }),
//     {
//       name: 'auth-storage',
//       storage: createJSONStorage(() => AsyncStorage),
//     },
//   ),
// );
