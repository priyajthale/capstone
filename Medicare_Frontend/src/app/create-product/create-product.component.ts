import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { productmodel } from '../Model/Product.model';
import { productservice } from '../Service/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit{

  constructor(private pservice : productservice, 
    private route : Router, 
    private activatedroute : ActivatedRoute){ }
    
    ngOnInit(): void {
    }
  
    product : productmodel={
      id: 0,
      pName: '',
      pPrice: 0,
      pSeller: '',
      pDescription: '',
      pOffer: '',
      url: '',
      qty: 0
    }


  addProducts(data : any){
    
    alert(data.name)
    this.product=data
    
    this.pservice.addProduct(this.product).subscribe((res)=>
    {
      if(res!=null){
        alert("Product Registered Successfully!")
      }
    });
    this.route.navigate(['/Product'], {relativeTo:this.activatedroute});
  }

}
