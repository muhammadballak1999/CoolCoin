import { AxiosService } from './axios.service';
import {
    IVerifyUserPayload,
    IVerifyUserResponse,
} from '@/types';

export class ApiService {
  private static instance: ApiService;

  constructor(private readonly axiosService: AxiosService) {}

  static getInstance() {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService(AxiosService.getInstance());
    }

    return ApiService.instance;
  }

  async verifyUser(payload: IVerifyUserPayload) {
    return this.axiosService.post<IVerifyUserResponse>('auth/telegram/', JSON.stringify(payload));
  }
}