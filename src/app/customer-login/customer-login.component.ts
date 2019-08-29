import { Component, OnInit, ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {

  
  login_id:string='';
  pwd:string='';

  constructor(public http:HttpClient,public router:Router) { }

  ngOnInit() {
  }

 public popup:boolean=false;

  getCalled()
  {
    this.popup=false;
    this.http.get(`http://localhost:8079/rest/customer/${this.login_id}/${this.pwd}`)
    .toPromise()
      .then(
            (data)=>{     

               if(data['response']=='success'){
                 //debugger
                //redirect to otp component
                this.router.navigate(['/otp']);
         }

         if(data['response']=='failure'){
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


