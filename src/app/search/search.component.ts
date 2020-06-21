import { Component, OnInit } from '@angular/core';
import { User } from '../user-class/user';
import { SearchClassService } from '../serch-http/search-class.service';
import { Repos } from '../Repo-class/repos';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  user:User;
  repos:Repos;
  userName: string;

  

  constructor(private searchClassService:SearchClassService) {
   
    
    
     
   }
   findUserName(){
     this.searchClassService.updateUserName(this.userName)
   }

  ngOnInit(): void {
    this.searchClassService.userNameRequest();
    this.user=this.searchClassService.user;
    this.repos=this.searchClassService.repos
   
    
  }

}
