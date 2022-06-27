import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams-card',
  templateUrl: './teams-card.component.html',
  styleUrls: ['./teams-card.component.css']
})
export class TeamsCardComponent implements OnInit {

  // @Input()  teams: string[][]= [];
 @Input() team:string [] =[]
 @Input() index=0;
 currentDate = new Date();
 
  constructor() { }

  ngOnInit(): void {
  }

}
