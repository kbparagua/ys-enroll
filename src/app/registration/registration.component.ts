import { Component, OnInit } from '@angular/core';
import { Router  } from '@angular/router';

import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  student: Student;

  constructor(
    private studentService: StudentService,
    private router: Router
  ){}

  ngOnInit(){
    this.student = new Student();
  }

  submit(): void {
    this.studentService.add(this.student);
    this.router.navigate(['/login']);
  }
}
