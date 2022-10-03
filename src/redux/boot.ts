import { store } from './app/store';
import { checkAuthorization } from './features/auth/auth-slice';

export default function Boot(): Promise<any> {
  return new Promise(() => {
    store.dispatch(checkAuthorization());
  });
}
