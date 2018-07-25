import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable()
export class StudentService {

  students: Student[] = [];

  constructor(){}

  add(student: Student){
    this.students.push(student);
  }
}
