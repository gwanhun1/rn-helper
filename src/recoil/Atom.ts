import { atom } from 'recoil';

export const login = atom({
  key: 'login',
  default: false,
});

export const signUp = atom({
  key: 'signUp',
  default: false,
});

export const isUser = atom({
  key: 'user',
  default: {
    id: '',
    username: '',
    password: '',
    grade: '',
    lastLogin: '',
    count: 3,
    uId: '',
  },
});
