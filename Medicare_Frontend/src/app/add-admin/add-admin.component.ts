import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { adminModel } from '../Model/Admin.Model';
import { AdminService } from '../Service/admin.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit{

  constructor(private service : AdminService, private route : Router){}

  admin : adminModel={
    id : 0,
    login : '',
    password : ''
  }

  ngOnInit(): void {}

  addAdmin(data : any){
    alert("New Admin Created");
    this.admin=data;
    this.service.addAdmin(this.admin).subscribe((res)=>{
      
      if (res!=null){
        console.log("New Admin Created")
      }
    });

  }

}
