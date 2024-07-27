import { create } from 'zustand';

import {
  ExampleSliceState,
} from '@/stores/main/slices';

import {
  createExampleSlice,
} from '@/stores/main/slices';

export const useExampleStore = create<ExampleSliceState>((...a) => ({
  ...createExampleSlice(...a),
}));

