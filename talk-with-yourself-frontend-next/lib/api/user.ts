import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { fetcher } from '../utils/fetcher';
import {
  setLoading,
  showModal,
  setIsLogin,
  setUser,
} from '../../store/mainSlice';
import type {
  UserLoginData,
  UserRegisterData,
  User,
} from '../../../types/index';
import type { InitialMainState } from '../../store/mainSlice';

type FuncType = ThunkAction<void, InitialMainState, unknown, Action<string>>;

export const UserAPI = {
  register:
    ({ email, password }: UserRegisterData): FuncType =>
    async (dispatch) => {
      dispatch(setLoading(true));
      try {
        await fetcher('/api/users/register', 'POST', {
          email,
          password,
        });
        dispatch(
          showModal({
            type: 'success',
            message: 'Thanks to register. Log in!',
          }),
        );
      } catch (error) {
        dispatch(showModal({ type: 'error', message: error.message }));
      } finally {
        dispatch(setLoading(false));
      }
    },
};
