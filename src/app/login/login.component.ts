import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: object = { email: '', password: '' } ;

  constructor(
    private studentService: StudentService,
    private router: Router
  ) { }

  ngOnInit(){
    this.login = { email: '', password: '' };
  }

  submit(): void {
    let match = this.studentService.authenticate(this.login);

    if (match != null){
      this.router.navigate(['/students']);
    }
    else {
      console.log('Unauthorized');
    }
  }

}
