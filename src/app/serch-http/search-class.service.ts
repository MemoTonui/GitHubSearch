import { Injectable } from '@angular/core';
import { User } from '../user-class/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchClassService {

  user:User;
  userName: string;
  constructor(private http:HttpClient) { 
    this.user= new User('','','','',0,0);
  }
  login = 'MemoTonui'

  accessToken:"7d0ccdd8c2ed455f61f8c4684926f0c5ca078c76";


  
 
  updateUserName (userName:string){
    this.userName = userName;
  }
  
userNameRequest(){
  interface ApiResponse{
    login:string;
    name:string;
    location:string;
    avatar_url:any;
    followers:number;
    following:number;
  }
  let promise = new Promise((resolve,reject)=>{
    this.http.get<ApiResponse>(environment.apiUrl+this.login).toPromise().then(response=>{
      console.log(response)
      this.user.login = response.login
      this.user.name = response.name
      this.user.location = response.location
      this.user.avatar_url = response.avatar_url
      this.user.followers = response.followers
      this.user.following = response.following


      resolve();
    },
    error=>{
     this.user.login="MemoTonui";
     this.user.name="MemoTonui";
     this.user.location="Ongata Rongai";
     

      reject(error);
    })
  })
  return promise
}
}



