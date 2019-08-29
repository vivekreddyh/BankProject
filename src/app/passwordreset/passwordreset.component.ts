import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-passwordreset',
  templateUrl: './passwordreset.component.html',
  styleUrls: ['./passwordreset.component.css']
})
export class PasswordresetComponent implements OnInit {

  login_id:string='';
  pwd:string='';
  public popup:boolean=false;

  constructor(public http:HttpClient,public router:Router) {
       
   }

  ngOnInit() {
    this.popup=false;
  }

  getCalled()
  {
    this.popup=false;
    console.log(this.popup);
    this.http.put("http://localhost:8079/rest/update",
    {"login_id":this.login_id,
    "pwd":this.pwd}
    )
    .toPromise()
      .then(
            (data)=>{     

               if(data['response']=="Updated!"){
                 //debugger
                //redirect to otp component
                this.router.navigate(['/customerlogin']);
         }

         if(data['response']=="Invalid_Id"){
              //show popup
              this.popup=true;         
         }
              
              console.log(data)},
            (error)=>{console.error(error)}
        )
        .catch((err)=>{
          console.log("in catch block");
        })
        .finally(()=>{console.log("in finally block")});
    
  }

}
