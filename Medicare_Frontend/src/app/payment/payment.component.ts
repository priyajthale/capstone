import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { productmodel } from '../Model/Product.model';
import { UserModel } from '../Model/User.Model';
import { cartservice } from '../Service/cart.service';
import { productservice } from '../Service/product.service';
import { userservice } from '../Service/user.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit{
uid: any;
user : UserModel[]=[];
product : productmodel[]=[];


carts:any;
  constructor(private pservice : productservice, 
              private route : Router, 
              private activateroute : ActivatedRoute, 
              private cservice : cartservice, 
              private uservice : userservice){}
  
              ngOnInit(): void {
    this.uid=this.activateroute.snapshot.paramMap.get('id');
    console.log(this.uid);
    this.cservice.getCart(this.uid).subscribe(res=>{
      this.carts=res;
      console.log(this.carts);
      if(res!=null){
        console.log("Order Summary");
      }
    })
  }
  

}
