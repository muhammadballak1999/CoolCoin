// dependencies
import axios, {
    AxiosHeaders,
    AxiosInstance,
    AxiosRequestConfig,
    CreateAxiosDefaults,
    Method,
    RawAxiosRequestHeaders,
  } from 'axios';
  
  // services
  import { LocalStorageService } from './local-storage.service';
  
  type MethodsHeaders = Partial<
    {
      [Key in Method as Lowercase<Key>]: AxiosHeaders;
    } & { common: AxiosHeaders }
  >;
  
  export class AxiosService {
    private static instance: AxiosService;
  
    constructor(
      private readonly localStorageService: LocalStorageService,
      private readonly axiosInstance: AxiosInstance,
    ) {
      this.axiosInstance.interceptors.response.use(
        (response) => response,
        (err) => {
          const error = err.response;
  
          if (error?.status === 401) {
            this.localStorageService.clear();
            // TODO: we can optionally switch to the login page or reset the store here
          }
  
          throw error;
        },
      );
    }
  
    static getInstance() {
      if (!AxiosService.instance) {
        const localStorageService = LocalStorageService.getInstance();
  
        const axiosConfig: CreateAxiosDefaults = {
          baseURL: 'https://coolcoin-services.onrender.com/api/',
          headers: {
            common: {
              'Content-Type': 'application/json',
              'Authorization': localStorageService.getToken(),
            },
          },
          timeout: 30000,
        };
        const axiosInstance = axios.create(axiosConfig);
  
        AxiosService.instance = new AxiosService(
          localStorageService,
          axiosInstance,
        );
      }
  
      return AxiosService.instance;
    }
  
    private getHeaders(customConfig: AxiosRequestConfig = {}) {
      const globalHeaders:
        | (RawAxiosRequestHeaders & MethodsHeaders)
        | AxiosHeaders = {};
  
      const accessToken = this.localStorageService.getToken();
      if (accessToken) {
        globalHeaders.Authorization = `JWT ${accessToken}`;
      }
  
      const { headers } = customConfig;
  
      return {
        ...customConfig,
        headers: {
          ...globalHeaders,
          ...headers,
        },
      };
    }
  
    // GET method
    async get<T>(endPoint: string, customConfig: AxiosRequestConfig = {}) {
      return this.axiosInstance.get<T>(endPoint, this.getHeaders(customConfig));
    }
  
    // POST method
    async post<T>(
      endPoint: string,
      data = {},
      customConfig: AxiosRequestConfig = {},
    ) {
      return this.axiosInstance.post<T>(
        endPoint,
        data,
        this.getHeaders(customConfig),
      );
    }
  
    // Patch method
    async patch<T>(
      endPoint: string,
      data = {},
      customConfig: AxiosRequestConfig = {},
    ) {
      return this.axiosInstance.patch<T>(
        endPoint,
        data,
        this.getHeaders(customConfig),
      );
    }
  
    // Put method - PLEASE USE PATCH INSTEAD
    async put<T>(
      endPoint: string,
      data = {},
      customConfig: AxiosRequestConfig = {},
    ) {
      return this.axiosInstance.put<T>(
        endPoint,
        data,
        this.getHeaders(customConfig),
      );
    }
  
    // Delete method
    async delete<T>(endPoint: string, customConfig: AxiosRequestConfig = {}) {
      return this.axiosInstance.delete<T>(
        endPoint,
        this.getHeaders(customConfig),
      );
    }
  }  