import { Component } from '@angular/core';
import { Livro } from '../../../modules/livro';

@Component({
  selector: 'app-livrolist',
  standalone: true,
  imports: [],
  templateUrl: './livrolist.component.html',
  styleUrl: './livrolist.component.scss'
})
export class LivrolistComponent {
  lista: Livro[] = [];

  constructor(){
    this.findAll();
  }

  findAll(){
    let livro = new Livro(1, 'Palio');
    this.lista.push(livro);
    livro = new Livro(2, 'Gol');
    this.lista.push(livro);
    livro = new Livro(3, 'Corolla');
    this.lista.push(livro);
  }
}
