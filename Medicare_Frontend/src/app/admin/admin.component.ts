import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { adminModel } from '../Model/Admin.Model';
import { AdminService } from '../Service/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  admins:adminModel[];
  constructor(private adminservice : AdminService, private route:Router, private activateroute:ActivatedRoute){
  }

  ngOnInit(): void {
    this.adminservice.getallAdmin().subscribe((admins:adminModel[])=>{
      this.admins=admins;
    }
    )
  }

  logout(){
    alert("logout successfully");

    return this.route.navigate(["/Adminlogin"], {relativeTo:this.activateroute});
  }
}
