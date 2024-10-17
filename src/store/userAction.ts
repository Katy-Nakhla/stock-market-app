import {UserPayload, SIGNUP} from './constants';

export const handleUserSignup = (user: UserPayload) => {
  return {type: SIGNUP, payload: user};
};
