import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { cart } from '../Model/Cart.model';
import { productmodel } from '../Model/Product.model';
import { UserModel } from '../Model/User.Model';
import { cartservice } from '../Service/cart.service';
import { productservice } from '../Service/product.service';
import { userservice } from '../Service/user.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  user:UserModel={
    id:0,
    username:'',
    email:'',
    password:'',
    phone:0
  }
  products : productmodel[]=[];
  u_id:any
  p_id:any
  c_id:any;
  grandTotal: any;
  carts : any;
  qty : any;
ngOnInit(): void {
  this.u_id=this.activateroute.snapshot.paramMap.get("id");
  this.getcart();
  };
  
  getcart(){
    this.uservice.getuserbyid(this.u_id).subscribe(data=>{
      this.user=data;
      console.log(data);
      this.cservice.getCart(this.u_id).subscribe(res=>{
        this.carts=res;
        console.log(res);
      })
    })
  }

  totalprice(){
    this.grandTotal=0;
    this.cservice.getCart(this.user.id).subscribe(res=>{
      console.log(this.user.id);
      for (let cart of res)
      {this.grandTotal += cart.tPrice;
      console.log(this.grandTotal)}
    })
}

Payment(){
  this.route.navigate(['payment', this.u_id]);
}
  
  constructor(private pservice : productservice, private route : Router, 
    private activateroute : ActivatedRoute, private cservice : cartservice, private uservice : userservice){

  }

    deleteitems(id : any) {
      this.cservice.deletecart(id).subscribe(res=>{
       console.log(res);
          alert("deleted")
   
      })
      }

      decreaseQuantity(cart : any, id: any) {
        cart.tQty-=1;
        cart.tPrice=cart.tQty*cart.products.pPrice;
        this.qty=cart.tQty
        console.log(this.qty); 
        console.log(cart.tPrice);
        this.updatedcart(cart, id);
      }

      increaseQuantity(cart : any, id: any) {
        cart.tQty+=1;
        cart.tPrice=cart.tQty*cart.products.pPrice;
        this.updatedcart(cart, id);
        }
        updatedcart(cart : any, id:any){
          this.c_id=id;
          console.log(this.c_id);
          this.cservice.updatecart(cart, this.c_id).subscribe(cart=>{
            console.log(cart);
          this.getcart();
          })

        }

       
      
      }
     
  
  



 
 



