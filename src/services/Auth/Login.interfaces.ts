import { UserAuth } from './User.interfaces';

interface LoginPayload {
  email: string;
  password: string;
}
interface LoginResponse {
  token: string;
  user: UserAuth;
}
export type { LoginPayload, LoginResponse };
