import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder} from "@angular/forms";
import {RegisterService} from "../../service/register.service";

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
  constructor(private registerService: RegisterService) { }


  ngOnInit(){
    };

  submit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.register.getRawValue());
    this.registerService.register(this.register.getRawValue()).subscribe(() => {
      //TODO successful register
    }, () => {})
  }

}
