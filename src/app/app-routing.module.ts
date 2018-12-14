import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './main/index/index.component';

const routes: Routes = [
  // { path: '', component: LoginComponent },
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  // {
  //   path: '',
  //   loadChildren: './login/login.module#LoginModule'
  // },
  // {
  //   path: 'index',
  //   loadChildren: './main/main.module#MainModule'
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
