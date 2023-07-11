import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute,Router} from '@angular/router'
import { ServerResolver } from './server-resolver.service';
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  searchId

  constructor(private serversService: ServersService,
              private router : Router,
              private route : ActivatedRoute,) { }

  ngOnInit() {
    this.route.data.subscribe(
      (data)=>{
        this.server = data['server']
      }
    )
    // this.searchId = +this.route.snapshot.params["id"] //attaching the + is mandatory as the params will always
    //  //parse the id as string but we are using that as a number in the server service so we need to escape that 
    //  //by adding a plus sign in the begining
    // this.server = this.serversService.getServer(this.searchId)

    // this.route.params.subscribe(
    //   (params) => {
    //     this.searchId = +params['id'] //attaching the + sign here as well 
    //     this.server = this.serversService.getServer(this.searchId)
    //   }
    // )
  }

  onEditServer(){
    this.router.navigate(['edit'],{ relativeTo : this.route, queryParamsHandling:'preserve'})
  }

}
