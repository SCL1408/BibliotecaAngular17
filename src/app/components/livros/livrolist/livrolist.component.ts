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
    let livro = new Livro();
    livro.id = 1;
    livro.nome = 'O Pequeno Príncipe';
    this.lista.push(livro);
    livro = new Livro();
    livro.id = 2;
    livro.nome = 'Dom Quixote';
    this.lista.push(livro);
    livro = new Livro();
    livro.id = 3;
    livro.nome = 'A Metamorfose';
    this.lista.push(livro);
  }
}
