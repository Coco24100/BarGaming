export class Emprunt {
    constructor(public id?: number, public dateEmprunt?: Date, public client?: Client, public jeu?: Jeu){}
}

export class Evenement {
    constructor(public id?: number, public nom?: string, public date?: Date, public horaireDebut?: string, public horaireFin?: string) {}
}

export class Jeu {
    constructor(public id?: number, public nom?: string , public plateforme?: string) {};
}

export class JeuSociete extends Jeu {
    
}
export class JeuVideo extends Jeu {
}

export class Reservation {
    constructor(public id?: number, public client?: Client, public dateReservation?: Date, public evenement?: Evenement) {};
}

export class Compte {
    constructor(public type?: string, public id?: number, public username?: string,public email?:string, public password?: string, public nom?: string, public prenom?: string, public roles?: string[]) {

    }
}

export class Client extends Compte {}

export class Admin extends Compte {}