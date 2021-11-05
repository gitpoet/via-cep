export interface Cep {
  id: number;
  cep: string;
  logradouro: string;
  cidade: string;
  bairro: string;
  uf: string;
}

export const ceps = [
  {
    id: 1,
    cep: '60831220',
    logradouro: 'rua santa isabel',
    cidade: 'fortaleza',
    bairro: 'lagoa redonda',
    uf: 'ceará'
  },
  {
    id: 2,
    cep: '60831078',
    logradouro: 'galdencio moreira',
    cidade: 'fortaleza',
    bairro:'lagoa redonda',
    uf: 'ceará'
  },
  {
    id: 3,
    cep: '60822570',
    logradouro: 'josé alves cavalcante',
    cidade: 'fortaleza',
    bairro:'cidade dos funcionários',
    uf: 'ceará'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/