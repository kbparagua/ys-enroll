import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  registration: Object = {
    email: 'test@mail.com',
    password: ''
  }

  constructor() { }

  ngOnInit() {
  }

  submit(): void {
    console.log(this.registration);
  }
}
