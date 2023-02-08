import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { cart } from "../Model/Cart.model";
import { productservice } from "./product.service";
import { userservice } from "./user.service";

@Injectable({
    providedIn: 'root'
  })
export class cartservice{
    url : string = "http://localhost:8080/Cart";

    constructor(private httpclient : HttpClient, private uservice : userservice, private pservice : productservice){}
    
    addtocart(uid:any, pid:any){
        return this.httpclient.get(this.url + "/addtocart/" + uid + "/"+ pid)
    }

    getCart(id : any){
        return  this.httpclient.get<any>(this.url + "/getall/" + id);
    }

    updatecart(cart : cart, id : any){
        return this.httpclient.put<any>(this.url + "/updatecart/" + id, cart);
    }

    deletecart(cid:any){
        return this.httpclient.delete<any>(this.url+ "/deletefromcart/" + cid);
    }
    

}