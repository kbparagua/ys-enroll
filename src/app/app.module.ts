import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { StudentService } from './student.service';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
