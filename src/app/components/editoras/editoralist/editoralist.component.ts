import { Component, TemplateRef, ViewChild, inject } from '@angular/core';
import { Editora } from '../../../modules/editora';
import { MdbModalModule, MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';


@Component({
  selector: 'app-editoralist',
  standalone: true,
  imports: [MdbModalModule],
  templateUrl: './editoralist.component.html',
  styleUrl: './editoralist.component.scss'
})
export class EditoralistComponent {
  lista: Editora[] = [];
  modalService = inject(MdbModalService); //eu conseguir abrir a modal... pelo TS
  @ViewChild("modalDetalhe") modalDetalhe!: TemplateRef<any>; //enxergar o bloco de html da modal
  modalRef!: MdbModalRef<any>; //conseguir fechar a modal aberta pelo TS

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
