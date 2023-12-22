export class Emprunt {
    constructor(public id?: number, public dateEmprunt?: Date, public client?: Client, public jeuxSociete?: JeuSociete){}
}

export class Client {
    constructor(public id?: number, public nom?: string, public prenom?: string) {};
}

export class Event {
    constructor(public id?: number, public nom?: string, public date?: string, public horaireDebut?: string, public horaireFin?: string) {};
}

export class Jeu {
    constructor(public id?: number, public nom?: string) {};
}

export class JeuSociete {
    constructor(public id?: number, public nom?: string) {};
}

export class JeuVideo {
    constructor(public id?: number, public nom?: string, public plateforme?: string) {};
}

export class Reservation {
    constructor(public id?: number, public client?: Client, public dateReservation?: Date, public evenement?: Event) {};
}