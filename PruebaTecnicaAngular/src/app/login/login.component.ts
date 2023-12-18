import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
 selector: 'app-login',
 templateUrl: './login.component.html',
 styleUrls: ['./login.component.css']
})
export class LoginComponent {
 username!: string;
 password!: string;

 constructor(private router: Router, private http: HttpClient) { }

 onClick() { this.router.navigate(['/home']); }
}
