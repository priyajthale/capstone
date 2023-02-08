import { HttpClient } from '@angular/common/http';
import {Injectable, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { adminModel } from '../Model/Admin.Model';

@Injectable({
    providedIn: 'root'
}
)
export class AdminService implements OnInit{
    private url:string="http://localhost:8080/admin";
    constructor(private httpclient:HttpClient){

    }
    ngOnInit(): void {
    
    }

    addAdmin(admin : adminModel){
        return this.httpclient.post(this.url + "/add", admin);
    }
    
    getallAdmin():Observable<adminModel[]>{
        return this.httpclient.get<adminModel[]>(this.url + "/get-all");
    }
}