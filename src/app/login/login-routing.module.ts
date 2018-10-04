import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Etape1Component } from './etape1/etape1.component';
import { Etape2Component } from './etape2/etape2.component';


const routes: Routes = [
  {
    path: '',
    redirectTo : 'etape1',
    pathMatch: 'full'
  },
  {
    path: 'etape1',
    component: Etape1Component
  },
  {
    path: 'etape2',
    component: Etape2Component
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class LoginRoutingModule { }
