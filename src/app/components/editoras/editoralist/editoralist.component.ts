import { Component, TemplateRef, ViewChild, inject } from '@angular/core';
import { Editora } from '../../../modules/editora';
import { MdbModalModule, MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { EditoradetailComponent } from '../editoradetail/editoradetail.component';


@Component({
  selector: 'app-editoralist',
  standalone: true,
  imports: [MdbModalModule, EditoradetailComponent],
  templateUrl: './editoralist.component.html',
  styleUrl: './editoralist.component.scss'
})
export class EditoralistComponent {
  lista: Editora[] = [];
  editoraEdit!: Editora;

  modalService = inject(MdbModalService); //eu conseguir abrir a modal... pelo TS
  @ViewChild("modalDetalhe") modalDetalhe!: TemplateRef<any>; //enxergar o bloco de html da modal
  modalRef!: MdbModalRef<any>; //conseguir fechar a modal aberta pelo TS

  constructor(){
    this.findAll();
  }

  findAll(){
    let editora = new Editora();
    editora.id = 1;
    editora.nome = 'Agir'
    this.lista.push(editora);
    editora = new Editora();
    editora.id = 2;
    editora.nome = 'Editora 34'
    this.lista.push(editora);
    editora = new Editora();
    editora.id = 3;
    editora.nome = 'Companhia das Letras'
    this.lista.push(editora);
  }

  new(){
    this.editoraEdit = new Editora();
    this.modalRef = this.modalService.open(this.modalDetalhe);//usa modalService para abrir o trecho observado por modalDetalher e salva uma referência ao modal em modalRef
  }
  edit(editora: Editora){
    // this.editoraEdit = Object.assign({}, editora);
    this.editoraEdit = editora;
    this.modalRef = this.modalService.open(this.modalDetalhe);//usa modalService para abrir o trecho observado por modalDetalher e salva uma referência ao modal em modalRef
  }
}
