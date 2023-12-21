export class Emprunt {
    constructor(public id?: number, public dateEmprunt?: string, public client?: string, public jeuxSociete?: string){}
}

export class Client {
    constructor(public id?: number, public nom?: string, public prenom?: string) {}
}