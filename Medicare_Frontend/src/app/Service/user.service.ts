import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { UserModel } from "../Model/User.Model";

@Injectable({
    providedIn:"root"
})
export class userservice implements OnInit{

    private url:string = "http://localhost:8080/Users";
    constructor(private httpclient:HttpClient){
        
    }

    ngOnInit(): void {
    }

    addUser(userdata : UserModel){
        return this.httpclient.post(this.url+"/add-user", userdata);
    }
    getallUsers(){
        return this.httpclient.get<UserModel[]>(this.url + "/getall");
    }

    getuserbyid(id : any){
            return this.httpclient.get<any>(this.url+"/getuser/" + id);
    }
}