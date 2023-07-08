import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this.user= {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    }

    //Since we are loading this from users component without intializing the component again we have to subscribe to params
    //to get the latest changes in the URL and react accordingly
    this.route.params.subscribe(
      (params)=>{
        this.user.id = params['id'],
        this.user.name = params['name'] 
      }
    )
  }

}
