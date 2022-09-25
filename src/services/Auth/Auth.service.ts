import { LoginPayload } from './Login.interfaces';
import { api } from '../../config/site.config';

const authLogin = async (userLoginAttempt: LoginPayload) => {
  return await api.post('auth/login', userLoginAttempt);
};
const authLogout = () => {};
export { authLogin, authLogout };
