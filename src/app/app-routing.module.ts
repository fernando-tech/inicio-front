import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotPageFoundComponent } from './not-page-found/not-page-found.component';
import { PagesRoutingModule } from './pages/pages-routing.module';


const routes: Routes = [
  { path: '**', component: NotPageFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
