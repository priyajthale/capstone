import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { productmodel } from '../Model/Product.model';
import { UserModel } from '../Model/User.Model';
import { cartservice } from '../Service/cart.service';
import { productservice } from '../Service/product.service';
import { userservice } from '../Service/user.service';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit{

  uid : any;
  pid : any;
  
  constructor(private router : Router, private activateroute : ActivatedRoute, 
    private pservice : productservice, private uservice : userservice, private cservice : cartservice){}
  ngOnInit(): void {
    this.uid=this.activateroute.snapshot.paramMap.get('id');
    this.pservice.getallProducts().subscribe(res=>{
      if (res!=null){  console.log("Product Added")
    this.product=res;}
    
    })
  
  }
  product : productmodel[]=[];
  pName : any = '';

  search(){
    if(this.pName==""){
      this.ngOnInit();
    }else{
      this.product = this.product.filter(res=>{
        return res.pName.toLocaleLowerCase().match(this.pName.toLocaleLowerCase());
      })
    }

   }

   addtoCart(pid : any){
    this.pid=pid;
    console.log(this.pid);
    console.log(this.uid);
    this.cservice.addtocart(this.uid, pid).subscribe(res=>{
      console.log(res);
      if (res!=null){alert("Item to cart");}
    })
    
   }

   cartdata(){
    this.router.navigate(["cart", this.uid]);
   }

   logout(){
    this.router.navigate(['']);
    alert("user Logout Successfully");

   }
   lowtohigh(){
    this.product=this.product.sort((low, high)=> low.pPrice - high.pPrice); 
    }
    hightolow(){
      this.product=this.product.sort((low, high)=> high.pPrice - low.pPrice);
    }
}
