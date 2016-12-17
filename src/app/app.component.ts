import { Component } from '@angular/core';
import {PersonneService} from './personne.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[PersonneService]
})
export class AppComponent implements  OnInit{
  title = 'app works!';
  personnes:any[];
  constructor(public personneService:PersonneService){}
  ngOnInit(){
    this.personneService.getUsers().subscribe((data)=> this.personnes=data);
  }
}
