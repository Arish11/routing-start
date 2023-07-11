import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth-service.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate.service';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { ServerResolver } from './servers/server/server-resolver.service';

const appRoutes : Routes = [
  {path:'',component:HomeComponent},
  {path:"users",component:UsersComponent, children:[
    {path:":id/:name",component:UserComponent}
  ]},
  {path:"servers", 
  //canActivate: [AuthGuard],
  canActivateChild:[AuthGuard],
  component:ServersComponent, children:[
    {path:":id",component:ServerComponent, resolve : {server : ServerResolver}},
    {path:":id/edit",component:EditServerComponent, canDeactivate:[CanDeactivateGuard]},
  ]},
  {path:"not-found", component:ErrorMessageComponent, data: {message : 'This is not valid'}},
  {path:"**", redirectTo:"not-found"}

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    NotFoundComponent,
    ErrorMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {useHash:true})//When an application is deployed on the web server all the routes are first handled by
    //the deploying server. By using the useHash property we tell the server to only test the route path before # and ignore the rest
    //as angular will take care of those. This is used to support applications on older browsers
  ],
  providers: [ServersService,AuthGuard,AuthService, CanDeactivateGuard, ServerResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
