import { Component } from '@angular/core';
import { Editora } from '../../../modules/editora';

@Component({
  selector: 'app-editoralist',
  standalone: true,
  imports: [],
  templateUrl: './editoralist.component.html',
  styleUrl: './editoralist.component.scss'
})
export class EditoralistComponent {
  lista: Editora[] = [];

  constructor(){
    this.findAll();
  }

  findAll(){
    let editora = new Editora(1, 'Agir');
    this.lista.push(editora);
    editora = new Editora(2, 'Editora 34');
    this.lista.push(editora);
    editora = new Editora(3, 'Companhia das Letras');
    this.lista.push(editora);
  }
}
