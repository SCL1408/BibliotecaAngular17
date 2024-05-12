import { Component, EventEmitter, Input, Output, inject, input } from '@angular/core';
import { Editora } from '../../../modules/editora';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editoradetail',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './editoradetail.component.html',
  styleUrl: './editoradetail.component.scss'
})
export class EditoradetailComponent {
  @Input('editora') editora: Editora = new Editora();
  @Output('retorno') retorno: EventEmitter<any> = new EventEmitter();

  router = inject(Router);
  
  constructor(){
  }

  save(){
    this.retorno.emit(this.editora);
    this.router.navigate(['admin/editora'])
  }
}
