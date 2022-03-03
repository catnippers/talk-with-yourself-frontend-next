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
  login:
    ({ email, password }: UserLoginData): FuncType =>
    async (dispatch) => {
      dispatch(setLoading(true));
      try {
        await fetcher('/api/users/session', 'POST', {
          email,
          password,
        });
        dispatch(setIsLogin(true));
      } catch (error) {
        dispatch(showModal({ type: 'error', message: error.message }));
      } finally {
        dispatch(setLoading(false));
      }
    },
  register:
    ({ email, password }: UserRegisterData): FuncType =>
    async (dispatch) => {
      dispatch(setLoading(true));
      try {
        await fetcher('/api/users', 'POST', {
          email,
          password,
        });
        dispatch(
          showModal({
            type: 'success',
            message: 'An e-mail with an activation link was sent.',
          }),
        );
      } catch (error) {
        dispatch(showModal({ type: 'error', message: error.message }));
      } finally {
        dispatch(setLoading(false));
      }
    },
  isLogin: (): FuncType => async (dispatch) => {
    try {
      await fetcher('/api/users/session/me', 'GET');
      dispatch(setIsLogin(true));
    } catch (error) {
      console.log(error.message);
    }
  },
  activateAccount:
    (token: string): FuncType =>
    async (dispatch) => {
      dispatch(setIsLogin(true));
      try {
        const { data }: { data: { message: string } } = await fetcher(
          '/api/users/activate',
          'POST',
          {
            token,
          },
        );
        dispatch(showModal({ type: 'success', message: data.message }));
      } catch (error) {
        dispatch(showModal({ type: 'error', message: error.message }));
      } finally {
        dispatch(setLoading(false));
      }
    },
};
