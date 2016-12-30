import { Component, OnInit } from '@angular/core';
import {PersonneService} from './personne.service'
import any = jasmine.any;
import {Personne} from "./personne.module";
import {Adresse} from "./adresse.module";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[PersonneService]
})
export class AppComponent implements  OnInit {

  displayDialog: boolean;

  newPersonne: boolean;

  personne: Personne = new  Personne();

  personnes: Personne[];

  selectedPersonne: Personne;





  constructor(public personneService: PersonneService) {
  }

  ngOnInit() {
    this.personneService
      .getPersonnes().subscribe((data) =>this.personnes = data.body);



  }
  showDialogToAdd(){
    this.newPersonne =true;
    this.personne = new Personne();
    this.displayDialog =true;
  }
  onRowSelect(event){
    this.newPersonne =false;
    this.personne = this.clonePersonne(event.data);
    this.displayDialog=true;

  }
  clonePersonne(p:Personne):Personne{
let personne = new  Personne();
for (let pers in p){
  personne[pers] = p[pers];
}
return personne;
  }
  savePersonne(){

    this.personneService.addPersonnes(this.personne).subscribe((data)=>this.personne=data.json());
    this.displayDialog=false;
  }
  deletePersonne(){
    this.displayDialog=false;
  }
}
