import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { httpFactory } from '@angular/http/src/http_module';

var api_key = "ace86fb7"
var movie_db_url = "http://www.omdbapi.com/?S="

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  
  itemCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  movie = [];
  constructor(private obj:HttpClient) { }
  
  ngOnInit() {
    
  }
  
  searchData(name:string)
  {
    
    var movie_name = name;
    console.log(movie_name)

    // Creating a get request to hit the api with the movie name
    var movie_request = movie_db_url + movie_name + "&" + "apikey=" + api_key 
    console.log(movie_request)

    // Sending a GET request 
    this.obj.get(movie_request).subscribe(
      data=>{
          // console.log(data["Search"])
           if(data != undefined){
            this.movie = data["Search"]
           }
           else{
             console.log("Not found")
           }
           
          // this.itemCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
      });
 }
}

