import { Injectable } from '@angular/core';
import {Http} from  '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class PersonneService {

    constructor(public http:Http) { }
   getPersonnes(){
    return this.http.get('http://localhost:8080/personnes')
               .map(res => res.json());
   }
}
