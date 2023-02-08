import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { productmodel } from '../Model/Product.model';
import { productservice } from '../Service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private service : productservice, private router : Router, private activateroute : ActivatedRoute){
  }

  product : productmodel[]=[];

  pName : any = '';

  ngOnInit(): void {
    this.service.getsortedProduct().subscribe((res)=>{
      this.product=res;
    });
     };

     search(){
      if(this.pName==""){
        this.ngOnInit();
      }else{
        this.product = this.product.filter(res=>{
          return res.pName.toLocaleLowerCase().match(this.pName.toLocaleLowerCase());
        })
      }

     }
     addtoCart(){
      alert("Login First");
     }

     lowtohigh(){
      this.product=this.product.sort((low, high)=> low.pPrice - high.pPrice); 
      }
      hightolow(){
        this.product=this.product.sort((low, high)=> high.pPrice - low.pPrice);
      }
     }

  
  
 


