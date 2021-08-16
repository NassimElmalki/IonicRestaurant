import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinCommandePage } from './fin-commande.page';

const routes: Routes = [
  {
    path: '',
    component: FinCommandePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinCommandePageRoutingModule {}
