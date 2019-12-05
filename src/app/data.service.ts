import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

   myUrl = '../assets/mydata.json'

  constructor(private httpClient:HttpClient) { }

  public getData(){
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }

  public displayName(){
    alert("Hello World")
  }


  public displayHello(){
    alert("Hello")
  }

  public getEmployees(){
    return this.httpClient.get(this.myUrl)
  }
  
  }


