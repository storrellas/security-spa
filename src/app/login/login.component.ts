import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  faShieldAlt = faShieldAlt;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() : void {
    this.router.navigate(['/dashboard/']);
  }

}
