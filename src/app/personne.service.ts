import { Injectable } from '@angular/core';
import {Http} from  '@angular/http';
import 'rxjs/add/operator/map';
import {Personne} from "./personne.module";
@Injectable()
export class PersonneService {

    constructor(public http:Http) { }
   getPersonnes(){
    return this.http.get('http://localhost:8080/personnes')
               .map(res => res.json());
   }
  addPersonnes(personne:Personne){
    return this.http.post('http://localhost:8080/personnes',personne)
      .map(res => res.json());
  }
}
