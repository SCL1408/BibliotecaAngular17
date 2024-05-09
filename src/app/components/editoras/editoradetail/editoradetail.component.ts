import { Component, Input, input } from '@angular/core';
import { Editora } from '../../../modules/editora';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editoradetail',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './editoradetail.component.html',
  styleUrl: './editoradetail.component.scss'
})
export class EditoradetailComponent {
  @Input('editora') editora: Editora = new Editora();
  
  constructor(){
    console.log(this.editora.id);
    console.log(this.editora.nome);
  }
}
