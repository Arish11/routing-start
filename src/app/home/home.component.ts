import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route : Router,
              private navRoute : Router) { }

  ngOnInit() {
  }

  toServers(){
    this.route.navigate(['/servers'])
  }

  toUsers(){
    this.route.navigate(['/users'])
  }

  onLoadServer(id){
    this.navRoute.navigate(['/servers',id,'edit'], {queryParams:{allowEdit:1}, fragment : "string"} )
    //console.log(this.route.queryParams)
  }

}
