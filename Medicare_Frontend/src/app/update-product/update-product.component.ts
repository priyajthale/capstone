import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { productmodel } from '../Model/Product.model';
import { productservice } from '../Service/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit{
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
  
  id : any;
  
  constructor(private pservice : productservice, 
    private route : Router, 
    private activatedroute : ActivatedRoute){ }
    
    
  ngOnInit(): void {
    this.id=this.activatedroute.snapshot.paramMap.get('id');
    console.log(this.id);
    this.pservice.getProductbyid(this.id).subscribe(res=>{
      this.product=res;
    });
  }

 
  updateProducts(data : productmodel){
    this.product=data;
    this.product.id=this.id;
    this.pservice.updateProduct(this.product).subscribe((res)=>{
      if (res!=null){
        alert("Product Updated");
        console.log("Product Updated Successfully");
      }
    })

  }
  update(){
    alert("Item Updated Successfully");
    this.route.navigate([]);
  }
 
}
