import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { productmodel } from '../Model/Product.model';
import { productservice } from '../Service/product.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {

  constructor(private service : productservice, private route : Router, private activatedroute : ActivatedRoute){}

  products : productmodel[]=[];

  ngOnInit(): void {
    this.getallproducts();
  }

  getallproducts(){
    this.service.getallProducts().subscribe((res)=>{
      
      res.forEach((data)=>{
          this.products.push(data);
      })
    });
  }

  updateProducts(id : number){
console.log(id);
    this.route.navigate(['UpdateProduct', id]);
  }

  deleteProducts(id : number){
     this.service.deleteProduct(id).subscribe((res)=>{
      if(res){
        alert(id + 'deleted');
      }
     });
  }

}
