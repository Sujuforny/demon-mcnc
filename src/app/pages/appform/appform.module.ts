import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppformPageRoutingModule } from './appform-routing.module';

import { AppformPage } from './appform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppformPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AppformPage]
})
export class AppformPageModule {}
