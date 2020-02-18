import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-simples',
  templateUrl: './simples.component.html',
  styleUrls: ['./simples.component.scss']
})
export class SimplesComponent implements OnInit {

  estiloBorda = '';
  cozinha;

  constructor(bil: FormBuilder) {
    this.cozinha = bil.group({
      mesa: '',
      cadeira: '',
      pia: '',
      fogao: '',
      geladeira: ''
    });
  }

  ngOnInit() {
    console.log(this.estiloBorda);
  }

  funcaoForm(qualquerCoisaAqui) {
    console.log(qualquerCoisaAqui);
  }

  mudaBorda(estilo) {
    this.estiloBorda = estilo;
    console.log(this.estiloBorda);
  }

}
