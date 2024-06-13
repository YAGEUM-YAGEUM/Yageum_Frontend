import { RegisterProps, LoginProps } from '@/model/user.model';
import { httpClient } from './https';

export const tenantRegister = async (data: RegisterProps) => {
  const response = await httpClient.post('/tenant/register', data);
  return response.data;
};

export const lessorRegister = async (data: RegisterProps) => {
  const response = await httpClient.post('/lessor/register', data);
  return response.data;
};

export const tenantLogin = async (data: LoginProps) => {
  const response = await httpClient.post('/tenant/login', data);
  return response.data;
};

export const lessorLogin = async (data: LoginProps) => {
  const response = await httpClient.post('/lessor/login', data);
  return response.data;
};

export const sendEmailVerificationCode = async (email: string) => {
  const response = await httpClient.post('/emails/verification-requests', {
    email,
  });
  return response.data;
};

export const verifyEmailVerificationCode = async (
  email: string,
  code: string,
) => {
  const response = await httpClient.post('/emails/verifications', {
    email,
    auth_code: code,
  });
  return response.data;
};

export const logout = async () => {
  const response = await httpClient.post('/logout');
  return response.data;
};

export const refreshToken = async () => {
  const response = await httpClient.patch('/reissue');
  return response.data;
};
