export  class Adresse{

  private _codepostal: string;
  private _quartier:string;
 private _ville: string;
 private _email: string;
 private _contact:string;


  constructor() {
  }

  get codepostal(): string {
    return this._codepostal;
  }

  set codepostal(value: string) {
    this._codepostal = value;
  }

  get quartier(): string {
    return this._quartier;
  }

  set quartier(value: string) {
    this._quartier = value;
  }

  get ville(): string {
    return this._ville;
  }

  set ville(value: string) {
    this._ville = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get contact(): string {
    return this._contact;
  }

  set contact(value: string) {
    this._contact = value;
  }
}
