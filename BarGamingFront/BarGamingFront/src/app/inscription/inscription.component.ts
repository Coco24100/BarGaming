import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CompteService } from '../compte/compte.service';
import { Router } from '@angular/router';
import { Compte } from '../model';
import { ClientService } from '../client/client.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit{
  inscriptionForm!: FormGroup;

  nomCtrl!: FormControl;
  prenomCtrl!: FormControl;
  emailCtrl!: FormControl;
  usernameCtrl!: FormControl;
  passwordCtrl!: FormControl;

  infoEvents: boolean = false;
  bonPlans: boolean = false;
  conditionsAcceptees: boolean = false;

  constructor(private compteService: CompteService, private formBuilder: FormBuilder, private router: Router, private clientService: ClientService) {

  }

  ngOnInit(): void {
    this.nomCtrl = this.formBuilder.control("", Validators.required);
    this.prenomCtrl = this.formBuilder.control("");
    this.emailCtrl = this.formBuilder.control("");
    this.usernameCtrl = this.formBuilder.control("", Validators.required);
    this.passwordCtrl = this.formBuilder.control("", [Validators.required, Validators.minLength(5)]);

    this.inscriptionForm = this.formBuilder.group({
      nom: this.nomCtrl,
      prenom: this.prenomCtrl,
      email: this.emailCtrl,
      username: this.usernameCtrl,
      password: this.passwordCtrl
    });
  }

  inscription() {
    if (this.inscriptionForm.valid) {
      const newCompte: Compte = {
        nom: this.nomCtrl.value,
        prenom: this.prenomCtrl.value,
        username : this.usernameCtrl.value,
        password : this.passwordCtrl.value,
        email: this.emailCtrl.value,
        type : "client"
      }

      this.compteService.save(newCompte).subscribe(resp => {
        this.inscriptionForm.patchValue(resp);
        this.compteService.emitCompteAdded(resp); // Émettre l'événement
      });

    }

      this.router.navigate(['/login']);
  }
}