import {Adresse} from "./adresse.module";
export  class Personne{

  private _id: number;
  private _titre:string;
 private _cni: string;
 private _nom: string;
 private _prenom:string;
  private _adresse:Adresse;


  constructor(id: number, cni: string, nom: string, prenom: string, adresse: Adresse) {
    this._id = id;
    this._cni = cni;
    this._nom = nom;
    this._prenom = prenom;
    this._adresse = adresse;
  }


}
