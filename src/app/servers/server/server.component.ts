import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute,Router} from '@angular/router'
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private route : ActivatedRoute,) { }

  ngOnInit() {
    const searchId = +this.route.snapshot.params["id"] //attaching the + is mandatory as the params will always
     //parse the id as string but we are using that as a number in the server service so we need to escape that 
     //by adding a plus sign in the begining
    this.server = this.serversService.getServer(searchId)
  }

}
