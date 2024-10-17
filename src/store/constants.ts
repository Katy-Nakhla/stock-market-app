export interface UserPayload {
  userData: unknown;
  username: string;
  phone: string;
}
export interface UserAction {
  userData: unknown;
  type: string;
  payload: {
    username: string;
    phone: string;
  };
}
export const SIGNUP = 'SIGNUP';
