import {Adresse} from "./adresse.module";
export class Personne {
  private _id: number;
    private _titre: string;
    private _cni: string;
    private _nom:string;
    private _prenom: string;
    private _adresse:Adresse;


  constructor() {
  }




  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get titre(): string {
    return this._titre;
  }

  set titre(value: string) {
    this._titre = value;
  }

  get cni(): string {
    return this._cni;
  }

  set cni(value: string) {
    this._cni = value;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get prenom(): string {
    return this._prenom;
  }

  set prenom(value: string) {
    this._prenom = value;
  }

  get adresse(): Adresse {
    return this._adresse;
  }

  set adresse(value: Adresse) {
    this._adresse = value;
  }
}
