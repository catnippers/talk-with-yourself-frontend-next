import { createSlice } from '@reduxjs/toolkit';
import type { UserRegisterData } from '../../types';

export type InitialMainState = {
  main: {
    loading: boolean;
    modal: { show: boolean; type: string; message: string };
    isLogIn: boolean;
    user: UserRegisterData;
  };
};

export const slice = createSlice({
  name: 'main',
  initialState: {
    loading: false,
    modal: {
      show: false,
      type: '',
      message: '',
    },
    isLogIn: false,
    user: {
      name: '',
      email: '',
      password: '',
    },
  },
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    showModal: (state, { payload }) => {
      state.modal = {
        show: true,
        type: payload.type,
        message: payload.message,
      };
    },
    hideModal: (state) => {
      state.modal = { ...state.modal, show: false };
    },
    setIsLogin: (state, { payload }) => {
      state.isLogIn = payload;
    },
    setUser: (state, { payload }) => {
      state.user = payload;
    },
  },
});

export const { setLoading, showModal, hideModal, setIsLogin, setUser } =
  slice.actions;

export const getUser = (state: InitialMainState) => state.main.user;
export const getLoginStatus = (state: InitialMainState) => state.main.isLogIn;
export const getModalInfo = (state: InitialMainState) => state.main.modal;

export const mainReducer = slice.reducer;
