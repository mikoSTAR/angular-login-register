import { AlertService } from './../../_services/alert.service';
import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'alert',
  templateUrl: './alert.component.html',
})

export class AlertComponent {
  message: any;

  constructor(private alertService: AlertService) {

  }

  ngOnInit() {
    console.log(this.alertService);
    this.alertService.getMessage().subscribe(message => { this.message = message; });
  }
}
