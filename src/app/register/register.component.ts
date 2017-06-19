import { UserService } from './../_services/user.service';
import { AlertService } from './../_services/alert.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  loading = false;

  constructor(
    private userService: UserService,
    private alertService: AlertService,
    private router: Router,
  ) { }

  ngOnInit() {

  }

  register() {
    this.loading = true;
    this.userService.create(this.model)
      .subscribe(
        data => {
          this.alertService.success('Registration successful', false);
          this.router.navigate(['/login']);
        },
        error => {
          this.loading = false;
          this.alertService.error(error);
        });
  }

}
