import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: object = { email: '', password: '' } ;

  constructor(
    private studentService: StudentService
  ) { }

  ngOnInit(){
    this.login = { email: '', password: '' };
  }

  submit(): void {
    let match = this.studentService.authenticate(this.login);

    if (match != null){
      console.log('Logged In');
      console.log(match);
    }
    else {
      console.log('Unauthorized');
    }
  }

}
