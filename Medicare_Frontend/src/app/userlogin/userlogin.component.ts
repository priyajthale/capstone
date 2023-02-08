
import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { userservice } from '../Service/user.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit{

  constructor(private userserive : userservice, private route:Router, private activateroute : ActivatedRoute){
  }
  uname : string = '';
  pwd : string = '';
  
  ngOnInit(): void {
  }


  userLogin(){
      this.userserive.getallUsers().subscribe(userdata => {
        console.log(userdata);
        userdata.forEach(data => {
          console.log(data);
          if (data.email==this.uname && data.password==this.pwd)
            {alert("login successfull");
          this.route.navigate(["user", data.id]);}
       })
        }
      )
      }
  }

