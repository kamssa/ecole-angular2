import { Component, OnInit } from '@angular/core';
import {PersonneService} from './personne.service'
import any = jasmine.any;
import {Personne} from "./personne.module";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[PersonneService]
})
export class AppComponent implements  OnInit {
  personnes: Personne[];

  constructor(public personneService: PersonneService) {
  }

  ngOnInit() {
    this.personneService
      .getPersonnes().subscribe((data) =>this.personnes = data.body);
      console.log(this.personnes);


  }
}
