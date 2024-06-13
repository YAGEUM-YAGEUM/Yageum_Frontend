export interface LoginProps {
  username: string;
  password: string;
}

export interface RegisterProps extends LoginProps {
  name: string;
  phone: string;
  email: string;
}
