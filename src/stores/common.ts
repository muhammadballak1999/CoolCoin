import { StoreApi } from 'zustand';
import { toast } from 'react-toastify';

export interface CommonStoreState {
  error?: Error | null;
  isLoading?: boolean;
}

export interface APIError {
  status?: number;
  message: string;
  data?: {
    code?: number;
    detail?: string;
  };
}

const getErrorMessage = (err: unknown) => {
  const apiError = err as APIError;

  if (apiError?.data) {
    return JSON.stringify(apiError.data);
  }

  if (apiError.message) {
    return apiError.message;
  }

  const statusCode = apiError.status || apiError.data?.code;
  if (statusCode) {
    return `Request failed with status code ${statusCode}`;
  }

  return JSON.stringify(apiError);
};

export const actionWrapper = async <A>(set: StoreApi<CommonStoreState>['setState'], action: () => Promise<A>, isLoading: boolean = true) => {
  try {
    set(() => ({ error: null, isLoading: isLoading }));

    return await action();
  } catch (err: unknown) {
    set(() => ({ error: err as Error }));

    toast(getErrorMessage(err), {
      type: 'error',
    });

    throw err;
  } finally {
    set(() => ({ isLoading: false }));
  }
};
