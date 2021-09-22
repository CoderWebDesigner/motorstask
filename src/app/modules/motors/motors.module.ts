import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MotorsRoutingModule } from './motors-routing.module';
import { DatasourseComponent } from './pages/datasourse/datasourse.component';
import { GraphtypeComponent } from './pages/graphtype/graphtype.component';
import { PropertiesComponent } from './pages/properties/properties.component';
import { MotorsCategoriesComponent } from './components/motors-categories/motors-categories.component';
import { MotorschartComponent } from './pages/motorschart/motorschart.component';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    DatasourseComponent,
    GraphtypeComponent,
    PropertiesComponent,
    MotorsCategoriesComponent,
    MotorschartComponent
  ],
  imports: [
    CommonModule,
    MotorsRoutingModule,
    FormsModule,
    NgxChartsModule
  ],
  exports:[MotorschartComponent]
})
export class MotorsModule { }
