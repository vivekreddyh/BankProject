import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  username:string='';
  password:string='';

  constructor(public http:HttpClient) { }

  ngOnInit() {
  }

getCalled()
  {
    this.http.get(`http://localhost:8079/rest/user/${this.username}/${this.password}`)
    .toPromise()
      .then(
        (data)=>{
          // if(data['response']=='failure'){
                
          // }
          // let x ={}
          //   x['status']='success'
          //   console.log(x)
  
          console.log(data)},
            (error)=>{console.error(error)}
        )
        .catch((err)=>{
          console.log("in catch block");
        })
        .finally(()=>{console.log("in finally block")});
    
  }

}
