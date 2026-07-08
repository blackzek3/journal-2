import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    status: 'checking', // 'checking', 'autheticated'
    uid: null,
    email: null,
    displayName: null,
    photoUrl: null,
    errorMensaje: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: ( state, { payload } ) => {
    state.status = 'authenticated', // 'checking', 'autheticated'
    state.uid = payload.uid;
    state.email = payload.email;
    state.displayName = payload.displayName;
    state.photoUrl = payload.photoURL;
    state.errorMensaje = null;
    },
    logout: (state, { payload } ) => {
    state.status = 'not-authenticated', // 'checking', 'autheticated'
    state.uid = null;
    state.email = null;
    state.displayName = null;
    state.photoUrl = null;
    state.errorMensaje = payload?.errorMessage;
    },
    checkingCredentials: ( state ) => {
      state.status = 'checking';
    },
  }
});

export const { login, logout, checkingCredentials } = authSlice.actions;