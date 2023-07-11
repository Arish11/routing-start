import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent implements OnInit {
 errorMessage : string;

  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.errorMessage =  this.route.data['message']

    this.route.data.subscribe(
      (data) => {
        this.errorMessage = data['message']
      }
    )
  }

}
