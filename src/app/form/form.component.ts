import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  employee

  constructor(private dataservice : DataService) { }

  ngOnInit() {

    this.dataservice.getEmployees().subscribe(res=>{
      console.log(res)
      this.employee = res
    })

    this.dataservice.displayName()

  }

}
