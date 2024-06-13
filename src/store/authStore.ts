import { atom } from 'jotai';

export const userNameAtom = atom<string | null>(null);
export const isLoggedInAtom = atom<boolean>(false);

export const getUserName = () => localStorage.getItem('userName');
export const setUSerName = (name: string) =>
  localStorage.setItem('userName', name);
export const getToken = () => localStorage.getItem('token');
export const setToken = (token: string) => localStorage.setItem('token', token);
export const removeToken = () => localStorage.removeItem('token');
export const removeUserName = () => localStorage.removeItem('userName');
