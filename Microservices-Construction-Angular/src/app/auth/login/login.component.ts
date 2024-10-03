import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonService } from '../../service/person/person.service';
import { DecodejwtServiceService } from '../../service/jwt-decode/decodejwt-service.service';
import { Erole } from '../../model/Construction.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  RegistreForm!: FormGroup;
  showSignup = false;
  transformStyle = 'translateX(0%)';  // Par défaut, la boîte rose est à gauche

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private srv: PersonService,
    private srp: DecodejwtServiceService
  ) {}

  ngOnInit(): void {
    // Initialisation des formulaires
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.RegistreForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      role: ['', Validators.required],
    });
  }

  // Méthode pour basculer entre les formulaires
  toggleForms(showSignup: boolean): void {
    this.showSignup = showSignup;
    this.transformStyle = showSignup ? 'translateX(80%)' : 'translateX(0%)';
  }

  loginMethod(): void {
    const login = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    };
    this.srv.Login(login).subscribe((res: any) => {
      if (res && res.token) {
        console.log('Login successful');
        localStorage.setItem('jwt', res.token);
        const role = this.srp.getRoleFromToken(res.token);
        if (role === 'ADMIN') {
          this.route.navigateByUrl('dashboard/projet');
        } else {
          this.route.navigateByUrl('dashboard-user/projet-user');
        }
      }
    });
  }

  RegistreMethod(): void {
    const person = {
      id: 0,
      username: this.RegistreForm.value.username,
      password: this.RegistreForm.value.password,
      email: this.RegistreForm.value.email,
      role:Erole.CUSTOMER
    };
    this.srv.addUser(person).subscribe(() => {
      this.route.navigateByUrl('');
    });
  }
}
