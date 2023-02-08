import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { productmodel } from "../Model/Product.model";

@Injectable({
    providedIn:"root"
})
export class productservice implements OnInit{
        url:string="http://localhost:8080/Products";
        constructor(private httpclient : HttpClient){}

    ngOnInit(): void {}


        getallProducts(){
            return this.httpclient.get<productmodel[]>(this.url + "/get-all");
        }
        addProduct(pmodel : productmodel){
            console.log(pmodel);
            return this.httpclient.post(this.url + "/add-product", pmodel);
        }

        updateProduct(pmodel : productmodel){
            console.log(pmodel);
            return this.httpclient.put(this.url + "/update-product", pmodel);
        }

        getProductbyid(id : any){
            return this.httpclient.get<any>(this.url + '/get-product/' + id);
        }
    
        deleteProduct(id : number){
            return this.httpclient.delete(this.url + '/deleteProduct/' + id);
        }

        getsortedProduct(){
            return this.httpclient.get<productmodel[]>(this.url + '/sorted-product');
        }
}