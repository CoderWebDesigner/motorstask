import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatasourseComponent } from './pages/datasourse/datasourse.component';
import { GraphtypeComponent } from './pages/graphtype/graphtype.component';
import { PropertiesComponent } from './pages/properties/properties.component';

const routes: Routes = [
  {path:'',component:DatasourseComponent},
  {path:'Graphtype',component:GraphtypeComponent},
  {path:'Properties',component:PropertiesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MotorsRoutingModule { }
