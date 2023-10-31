import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    // Redirect to the external URL
    window.location.href = 'https://dev-73460610.okta.com/oauth2/default/v1/authorize?client_id=0oad0p980sZdfMbdt5d7&response_type=code&response_mode=query&scope=openid%20email%20profile&redirect_uri=http://localhost:4200/handle-code&state=200&nonce=500'; // Replace with your desired URL
  }
}
