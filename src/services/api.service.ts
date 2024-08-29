import { ICharacter, ICharacterQuery, IGameStatus, ILoot, IPaginatedResponse, ISendCharacter } from '@/types';
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

  async getGameStatus() {
    return this.axiosService.get<IGameStatus>('game/status/');
  }

  async getCharacters(params?: ICharacterQuery) {
    return this.axiosService.get<IPaginatedResponse<ICharacter>>('character/', { params });
  }

  async getLootCharacters(params?: ICharacterQuery) {
    return this.axiosService.get<ILoot[]>('game/recent-rolls/', { params });
  }

  async roll() {
    return this.axiosService.post<ICharacter>('game/roll/');
  }

  async claim(characterId: number) {
    return this.axiosService.post<ICharacter>(`character/${characterId}/claim/`);
  }

  async sell(itemId: number) {
    return this.axiosService.post<ICharacter>(`player/collection/${itemId}/sell/`);
  }

  async send(itemId: number) {
    return this.axiosService.post<ISendCharacter>(`player/collection/${itemId}/send/`);
  }

  async getEarnActivities() {
    return this.axiosService.get<ICharacter>('earn/');
  }

  async earn(activityId: number) {
    return this.axiosService.post<ICharacter>(`earn/activity/${activityId}/complete/`);
  }

  async redeem(guid: string) {
    return this.axiosService.post<ICharacter>('trading/redeem-code/',  { redeem_code: guid });
  }
}