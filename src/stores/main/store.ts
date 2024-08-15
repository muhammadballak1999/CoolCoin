import { create } from 'zustand';

import {
  ExampleSliceState,
} from './slices';

import {
  createExampleSlice,
} from './slices';

export const useExampleStore = create<ExampleSliceState>((...a) => ({
  ...createExampleSlice(...a),
}));

