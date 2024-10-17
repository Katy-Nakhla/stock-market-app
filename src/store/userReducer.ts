import {UserAction, UserPayload, SIGNUP} from './constants';

interface InitialState {
  username: string | null;
  phone: string | null;
}
const initialState: InitialState = {
  username: null,
  phone: null,
};

const userReducer = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case SIGNUP:
      return {...state, ...action.payload};
    default:
      return state;
  }
};
export default userReducer;
