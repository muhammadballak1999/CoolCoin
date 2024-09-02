export interface IVerifyUserPayload {
    initData: string;
}
  
export interface IVerifyUserResponse {
    access_token: string;
}

export interface IUser {
    id: number;
    first_name: string;
    last_name: string;
    username: string;
}
 