export class Emprunt {
    constructor(public id?: number, public dateEmprunt?: string, public client?: string, public jeuxSociete?: string){}
}

export class Client {
    constructor(public id?: number, public nom?: string, public prenom?: string) {}
}

export class Event {
    constructor(public id?: number, public nom?: string, public date?: string, public horaireDebut?: string, public horaireFin?: string) {}
}

export class Jeux {
    constructor(public id?: number, public nom?: string) {};
}