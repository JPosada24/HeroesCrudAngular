import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login-page',
	templateUrl: './login-page.component.html',
	styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
	constructor(private authService: AuthService, private router: Router) {}

	onLogin(): void {
		this.authService
			.login('julian_2120@hotmail.com', '123456')
			.subscribe((user) => {
				this.router.navigate(['/']);
			});
	}
}
