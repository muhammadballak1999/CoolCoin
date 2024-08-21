import { create } from 'zustand';

import {
  MainSliceState,
} from './slices';

import {
  createMainSlice,
} from './slices';

export const useMainStore = create<MainSliceState>((...a) => ({
  ...createMainSlice(...a),
}));

