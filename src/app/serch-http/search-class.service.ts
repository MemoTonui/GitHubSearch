import { Injectable } from '@angular/core';
import { User } from '../user-class/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchClassService {

  user:User;

  constructor(private http:HttpClient) { 
    this.user= new User('','');
  }
userNameRequest(){
  interface ApiResponse{
    userName:string;
    name:string;
  }
  let promise = new Promise((resolve,reject)=>{
    this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=>{
      this.user.userName = response.userName
      this.user.name = response.name

      resolve();
    },
    error=>{
     this.user.userName="MemoTonui";
     this.user.name="MemoTonui";

      reject(error);
    })
  })
  return promise
}
}


