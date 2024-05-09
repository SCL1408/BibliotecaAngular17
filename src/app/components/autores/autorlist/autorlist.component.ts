import { Component } from '@angular/core';
import { Autor } from '../../../modules/autor';

@Component({
  selector: 'app-autorlist',
  standalone: true,
  imports: [],
  templateUrl: './autorlist.component.html',
  styleUrl: './autorlist.component.scss'
})
export class AutorlistComponent {
  lista: Autor[] = [];

  constructor(){
    this.findAll();
  }

  findAll(){
    let autor = new Autor();
    autor.id = 1;
    autor.nome = 'Antoine de Saint-Exupéry';
    this.lista.push(autor);
    autor = new Autor();
    autor.id = 1;
    autor.nome = 'Miguel de Cervantes';
    this.lista.push(autor);
    autor = new Autor();
    autor.id = 1;
    autor.nome = 'Franz Kafka';
    this.lista.push(autor);
  }

}
