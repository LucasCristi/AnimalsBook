import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = ''
  password = ''

ngOnInit(): void {
  
}

login(){
  console.log(this.user)
  console.log(this.password)
}

}