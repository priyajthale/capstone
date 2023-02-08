import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from '../Model/User.Model';
import { userservice } from '../Service/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

  constructor(private uservice : userservice, private route : Router){}
  ngOnInit(): void {}


  users:UserModel={
    id:0,
    username:'',
    email:'',
    password:'',
    phone:0
  }

  onSubmit(data:any){
    this.users=data;
    console.log(this.users);
    this.uservice.addUser(this.users).subscribe(res=>{
      alert("Users Added Successfully");
      this.route.navigate(['Userlogin']);
    });
  }
}
