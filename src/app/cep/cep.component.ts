import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cep, ceps } from '../ceps';


@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})
export class CepComponent implements OnInit {
  cep: Cep | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
   
    const routeParams = this.route.snapshot.paramMap;
    const numeroCepFromRoute = String(routeParams.get('numeroCep'));

    
    this.cep = ceps.find((cep) => cep.cep === numeroCepFromRoute);


  }

}