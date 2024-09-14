import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { loginResponseDto } from './model/login-response-dto';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  formBuilder = inject(FormBuilder);
  http = inject(HttpClient);
  router = inject(Router);

  loginForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  async submit() {
    if (this.loginForm.valid) {
      try {
        const { token } = await firstValueFrom(
          this.http.post<loginResponseDto>(
            '/api/authentication/login',
            this.loginForm.value
          )
        );

        localStorage.setItem('token', token);
      } catch (err: any) {
        console.log(err);
      }
    }
  }
}
