import { Component, OnInit } from '@angular/core';
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
    private studentService: StudentService
  ){}

  ngOnInit(){
    this.student = new Student();
  }

  submit(): void {
    this.studentService.add(this.student);
  }
}
