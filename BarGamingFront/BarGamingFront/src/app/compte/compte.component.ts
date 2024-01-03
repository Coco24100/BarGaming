import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Compte } from '../model';
import { CompteService } from './compte.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {
  userForm!: FormGroup;

  idCtrl!: FormControl;
  nomCtrl!: FormControl;
  prenomCtrl!: FormControl;
  usernameCtrl!: FormControl;
  passwordCtrl!: FormControl;

  showForm: boolean = false;

  comptes$!: Observable<Compte[]>;

  constructor(private compteService: CompteService, private formBuilder: FormBuilder) {
    this.load();
  }

  ngOnInit(): void {
    this.idCtrl = this.formBuilder.control('');
    this.nomCtrl = this.formBuilder.control('');
    this.prenomCtrl = this.formBuilder.control('');
    this.usernameCtrl = this.formBuilder.control('',Validators.required);
    this.passwordCtrl = this.formBuilder.control('');

    this.userForm = this.formBuilder.group( {
      id: this.idCtrl,
      nom: this.nomCtrl,
      prenom: this.prenomCtrl,
      username: this.usernameCtrl,
      password: this.passwordCtrl
    });
  }

  load() {
    this.comptes$ = this.compteService.findAll();
  }

  list() {
    return this.comptes$;
  }

  add() {
    this.userForm.reset();
    this.showForm = true;
  }

  edit(id?: number) {
    this.compteService.findById(id).subscribe(resp => {
      this.userForm.patchValue(resp);
      this.showForm = true;
    });
  }

  save() {
    this.compteService.save(this.userForm.value).subscribe(resp => this.load());
    this.cancel();
  }

  remove(id?: number) {
    this.compteService.delete(id).subscribe(resp => this.load());
  }

  cancel() {
    this.showForm = false;
    this.userForm.reset();
  }
}
