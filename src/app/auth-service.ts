import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuthService {

  private _loggedIn: boolean = false;

  private readonly baseUrl = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) {}

  public get isLoggedIn(): boolean {
    return this._loggedIn;
  }

  public async logIn(login: string, password: string): Promise<boolean> {
    try {
      await this.http.post(`${this.baseUrl}/login`, {login, password}).toPromise();
      this._loggedIn = true;
    } catch {
      this._loggedIn = false;
    }

    return this._loggedIn;
  }
}
