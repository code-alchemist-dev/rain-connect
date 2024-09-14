import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { loginResponseDto } from '../../login/model/login-response-dto';
import { firstValueFrom } from 'rxjs';

export const TOKEN = 'token';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private http = inject(HttpClient);

  login(email: string, password: string) {
    return firstValueFrom(
      this.http.post<loginResponseDto>('/api/authentication/login', {
        email,
        password,
      })
    );
  }

  logout() {
    localStorage.removeItem(TOKEN);
  }

  isLoggedIn() {
    return !!localStorage.getItem(TOKEN);
  }
}
