import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router: Router,
               private authService: AuthService ) { }

  ngOnInit(): void {
  }

  login(): void {

    this.authService.login()
    .subscribe( res => {
      if ( res.id ){
        this.router.navigate(['/heroes']);
      }
    });

  }

}
