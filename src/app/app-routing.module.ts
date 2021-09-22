import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'MotorsChart',loadChildren:()=> import('./modules/motors/motors.module').then(m => m.MotorsModule)},
  {path:'',redirectTo:'MotorsChart',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
