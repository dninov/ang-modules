import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModsHomeComponent } from './mods-home/mods-home.component';
const routes: Routes = [
  { path: '',
    component: ModsHomeComponent
    // children: [
    //   {path: '', component: BiographyComponent},
    //   {path: 'companies', component: CompaniesComponent},
    //   {path: 'partners', component: PartnersComponent},
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModsRoutingModule { }
