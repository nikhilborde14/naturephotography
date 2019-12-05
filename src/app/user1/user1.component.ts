import { Component, OnInit } from '@angular/core';
import{DataService} from '../data.service'

@Component({
  selector: 'app-user1',
  templateUrl: './user1.component.html',
  styleUrls: ['./user1.component.css']
})
export class User1Component implements OnInit {

  firstName="Nikhil";
  lastName="Borde";
  contact:number=9404485777;
  city:string="Pune";
 
  employees;

  constructor(private dataservice:DataService) { }

  ngOnInit() {
  
    this.dataservice.getData().subscribe(res=>{
      console.log("res", res)
      this.employees = res
    })
  
    this.dataservice.displayName()
    
  }

}
