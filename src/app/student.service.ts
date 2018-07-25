import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable()
export class StudentService {

  students: Student[] = [];

  constructor(){}

  add(student: Student){
    this.students.push(student);
  }

  authenticate(login): Student {
    return this.students.find((student) => (
      student.email == login.email && student.password == login.password
    ));
  }
}
