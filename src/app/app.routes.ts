import { Routes } from '@angular/router';
import { LoginComponent } from './components/layout/login/login.component';
import { PrincipalComponent } from './components/layout/principal/principal.component';
import { LivrolistComponent } from './components/livros/livrolist/livrolist.component';
import { AutorlistComponent } from './components/autores/autorlist/autorlist.component';
import { EditoralistComponent } from './components/editoras/editoralist/editoralist.component';
import { LivrodetailComponent } from './components/livros/livrodetail/livrodetail.component';
import { AutordetailComponent } from './components/autores/autordetail/autordetail.component';
import { EditoradetailComponent } from './components/editoras/editoradetail/editoradetail.component';

export const routes: Routes = [
    {path: "", redirectTo: "login", pathMatch:"full"},
    {path: "login", component:LoginComponent},
    {path: 'admin', component: PrincipalComponent, children: [
        {path: 'livros', component:LivrolistComponent},
        {path: 'autores', component:AutorlistComponent},
        {path: 'editoras', component:EditoralistComponent},
        {path: 'livros/new', component: LivrodetailComponent},
        {path: 'autores/new', component: AutordetailComponent},
        {path: 'editoras/new', component: EditoradetailComponent}
    ]}
];
