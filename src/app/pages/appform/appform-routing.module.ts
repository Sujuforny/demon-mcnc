import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppformPage } from './appform.page';

const routes: Routes = [
  {
    path: '',
    component: AppformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppformPageRoutingModule {}
