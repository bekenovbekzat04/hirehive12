import { Component } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../user.service";
import {AuthInterceptor} from "../interceptor/auth.interceptor";
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form!: FormGroup;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private userServices: UserService,
  ) {
    this.form = this.formBuilder.group({
      'email': '',
      'password': '',
    });
  }
  togglePasswordVisibility(): void {
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    const eyeIcons = document.querySelectorAll('.input-eye i');
  
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      (eyeIcons[0] as HTMLInputElement).style.display = 'none';
      (eyeIcons[1] as HTMLInputElement).style.display = 'block';
    } else {
      passwordInput.type = 'password';
      (eyeIcons[0] as HTMLInputElement).style.display = 'block';
      (eyeIcons[1] as HTMLInputElement).style.display = 'none';
    }
  }
  

  submit() {
    this.userServices.createToken(this.form).subscribe((response: any) => {
        localStorage.setItem('access_token', response.access);
        localStorage.setItem('refresh_token', response.refresh);
        this.router.navigate(['/home']);
      });

  }

}
