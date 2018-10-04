import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { 
    path: '',
    redirectTo: '/login/etape1',
    pathMatch: 'full' 
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})


export class AppRoutingModule { 


}
