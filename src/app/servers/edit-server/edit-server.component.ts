import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router'

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';

  isAllowedEdit = false
  searchId

  constructor(private serversService: ServersService,
              private route : ActivatedRoute,
              private router : Router) { }

  ngOnInit() {
    this.searchId = +this.route.snapshot.params['id']
    this.server = this.serversService.getServer(this.searchId);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;

    this.route.params.subscribe(
      (params)=>{
        this.searchId = +params['id']
        this.server = this.serversService.getServer(this.searchId);
      }
    )

    this.route.queryParams.subscribe(
      (queryParams)=>{
        this.isAllowedEdit = queryParams['allowEdit'] ==1 ? true : false
      }
    )
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.router.navigate(['../'], {relativeTo:this.route, queryParams:{allowEdit:1}, fragment:"loaded"})
  }

}
