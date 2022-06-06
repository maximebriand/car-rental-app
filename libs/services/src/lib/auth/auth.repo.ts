import {Injectable} from "@angular/core";
import {createState, select, Store, withProps} from '@ngneat/elf';
import {LoginResponse, ROLES} from "@dream-car/api-interfaces";
import {map, Observable} from "rxjs";


interface AuthProps {
  user: LoginResponse | null;
}

@Injectable({providedIn: 'root'})
export class AuthRepository {
  private authStore!: Store;
  private readonly _user$!: Observable<LoginResponse>;

  constructor() {
    const {state, config} = createState(withProps<AuthProps>({
      user: {
        token: '',
        email: '',
        role: ROLES.Customer
      }
    }));
    this.authStore = new Store({name: 'user', state, config});
    this._user$ = this.authStore.pipe(select((state) => state.user))
  }


  get user$() {
    return this._user$;
  }

  get token$(): Observable<string> {
    return this._user$.pipe(
      map((user: LoginResponse) => user.token)
    );
  }

  get token() {
    return this.token$.subscribe();
  }

  public updateUser(user: AuthProps['user']) {
    this.authStore.update((state) => ({
      ...state,
      user,
    }));
  }


}


