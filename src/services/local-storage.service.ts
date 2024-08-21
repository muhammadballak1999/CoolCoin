// types
// import { IToken } from '@/types';

export class LocalStorageService {
  private static instance: LocalStorageService;

  constructor() {}

  static getInstance() {
    if (!LocalStorageService.instance) {
      LocalStorageService.instance = new LocalStorageService();
    }

    return LocalStorageService.instance;
  }

  getToken(): string {
    const token = localStorage.getItem('access_token');
    return token && JSON.parse(token);
  }

  setToken(token: string) {
    localStorage.setItem('access_token', JSON.stringify(token));
  }

  // getAccessToken() {
  //   const token = this.getToken();
  //   return token?.access;
  // }

  // getRefreshToken() {
  //   const token = this.getToken();
  //   return token?.refresh;
  // }

  setCurrentPatientId(currentPatientId: string) {
    localStorage.setItem('currentPatientId', currentPatientId);
  }

  getCurrentPatientId() {
    return localStorage.getItem('currentPatientId');
  }

  setCurrentFacilityId(currentFacilityId: string) {
    localStorage.setItem('currentFacilityId', currentFacilityId);
  }

  getCurrentFacilityId() {
    return localStorage.getItem('currentFacilityId');
  }

  // setUserInfo(userInfo: IUserInfo) {
  //   return localStorage.setItem('userInfo', JSON.stringify(userInfo));
  // }

  getUserInfo() {
    const userInfo = localStorage.getItem('userInfo');
    return userInfo ? JSON.parse(userInfo) : {};
  }

  getUserSubscription() {
    const userInfo = localStorage.getItem('userInfo');
    return userInfo ? JSON.parse(userInfo).subscription : {};
  }

  getUserRole() {
    const userInfo = localStorage.getItem('userInfo');
    return userInfo ? JSON.parse(userInfo).role : {};
  }

  clear() {
    localStorage.clear();
  }
}