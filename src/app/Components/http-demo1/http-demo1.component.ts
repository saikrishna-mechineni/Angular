import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-http-demo1',
  imports: [],
  templateUrl: './http-demo1.component.html',
  styleUrl: './http-demo1.component.css'
})
export class HttpDemo1Component {
  user_url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient : HttpClient){
  
  }

  ngOnInit(){
    // this.fetchUserData_angular();
     this.fetchUserData_javascript();
   }

   fetchUserData_angular(){
     this.httpClient.get(this.user_url).subscribe(response => {
       console.log(response);
     })
   }
    fetchUserData_javascript(){
    }
}
