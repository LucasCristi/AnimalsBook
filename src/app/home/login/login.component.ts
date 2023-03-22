import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user = '';
  password = '';

  constructor(private authServer: AuthenticationService,
    private router: Router
    ) {}

  ngOnInit(): void {}

  login() {
    this.authServer.authenticate(this.user, this.password).subscribe(
      () => {
        this.router.navigate(['animals'])
      },
      (error) => {
        alert('Usuário ou senha inválido.');
        console.log(error);
      }
    );
  }
}
