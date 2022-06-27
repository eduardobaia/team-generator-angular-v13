import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  newMemberName = '';

  members: string[] = [];
  errorMessage='';
  numberOfTeams: number | '' = '';
  teams: string[][]= [];

  onInput(member: string ){
    this.newMemberName= member;
    console.log(member)
  }

  onNumberOfTeamsInput(value: string){
    this.numberOfTeams= Number(value);
  }
addMember(){

  if(!this.newMemberName){
  this.errorMessage="Name can't be empty.";
    return;
  }
  this.members.push(this.newMemberName);
  this.newMemberName='';
  this.errorMessage='';

}

generateTeams(){
  console.log("entrou em generate")
  this.teams=[];

  if(!this.numberOfTeams ||  this.numberOfTeams <= 0){
    this.errorMessage = "invalid number of teams"
    return;
  }


  if(this.members.length < this.numberOfTeams){
    this.errorMessage='Not enought members'
    return;
  }

  this.errorMessage='';
  const allMembers = [...this.members];

  console.log("numbes of temas ", this.numberOfTeams)

    while(allMembers.length){
        for(let i = 0; i < this.numberOfTeams; i++ ){
          console.log("entrou em fooor ")
          const randomIndex = Math.floor(Math.random() * allMembers.length);
          // splice getting the position of the item and remove it from the list
          const member = allMembers.splice(randomIndex,1)[0];

          //if member are null, break, do not add.
          if(!member)break;
          //if teams are not empty it add new member, if no  add a first member inside array
          if(this.teams[i]){
            this.teams[i].push(member);
          }else{
            this.teams[i] = [member];
          }

        }
    }


  this.members = [];
  this.numberOfTeams='';

  console.log(this.teams)
}
}
