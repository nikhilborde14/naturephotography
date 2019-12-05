import { Component, OnInit } from '@angular/core';
import { link } from 'fs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  firstName = ''
  lastName = ''
  contact = ''
  city =''

  saveData(){
    alert(" welcome Onboard Mr "+ this.firstName +" "+ this.lastName)
  
  }

  constructor() { }

  ngOnInit() {
  }

}
