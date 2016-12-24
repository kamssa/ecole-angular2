export  class Adresse{

  private _codepostal: string;
  private _quartier:string;
 private _ville: string;
 private _email: string;
 private _contact:string;


  constructor(codepostal: string, quartier: string, ville: string, email: string, contact: string) {
    this._codepostal = codepostal;
    this._quartier = quartier;
    this._ville = ville;
    this._email = email;
    this._contact = contact;
  }


}
