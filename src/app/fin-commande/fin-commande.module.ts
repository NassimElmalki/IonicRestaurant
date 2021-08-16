import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinCommandePageRoutingModule } from './fin-commande-routing.module';

import { FinCommandePage } from './fin-commande.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinCommandePageRoutingModule
  ],
  declarations: [FinCommandePage]
})
export class FinCommandePageModule {}
