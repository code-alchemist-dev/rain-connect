import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthenticationService } from '../auth/authentication.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  router = inject(Router);
  authService = inject(AuthenticationService);

  signOut() {
    this.authService.logout();
    this.router.navigate(['home']);
  }
}
