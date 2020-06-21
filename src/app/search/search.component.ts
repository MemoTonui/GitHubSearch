import { Component, OnInit } from '@angular/core';
import { User } from '../user-class/user';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  user:User;

  constructor() { }

  ngOnInit(): void {

    interface ApiResponse{
      userName:string;
      name:string;
    }
  }

}
