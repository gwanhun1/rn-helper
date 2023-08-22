import { atom } from 'recoil';

export const login = atom({
  key: 'login',
  default: false,
});

export const signUp = atom({
  key: 'signUp',
  default: false,
});
