export interface IVerifyUserPayload {
    initData: string;
}
  
export interface IVerifyUserResponse {
    token: string;
}

export interface IUser {
    first_name: string;
    last_name: string;
    username: string;
}
 