import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  register = new FormGroup( {
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })
  constructor() { }


  ngOnInit(){
    };

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.register.value);
  }

}
