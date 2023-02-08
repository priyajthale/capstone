import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../Service/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit{

  constructor (private adminservice : AdminService, 
    private route : Router, 
    private activatedRoute : ActivatedRoute){ }

    aname : string = '';
    pwd : string = '';
  ngOnInit(): void { }

  adminLogin(){

    this.adminservice.getallAdmin().subscribe(admindata=>{
      admindata.forEach(data=>{

        if(data.login==this.aname && data.password==this.pwd)
        {
          alert("admin login successfull");
          this.route.navigate(["/Admin"], {relativeTo:this.activatedRoute});
        }
       
      })
    })
  }

}
