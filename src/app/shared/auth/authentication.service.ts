import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { RegisterResponseDto } from '../../register/model/login-response-dto';
import { loginResponseDto } from '../../login/model/login-response-dto';

export const TOKEN = 'token';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private http = inject(HttpClient);

  register(name: string, surname: string, email: string, password: string) {
    const role = "user"
    return firstValueFrom(
      this.http.post<RegisterResponseDto>('/api/authentication/register', {
        name,
        email,
        role,
        surname,
        password,
      })
    );
  }

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
