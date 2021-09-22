import { Component, OnInit } from '@angular/core';
import { MotorschartService } from 'src/app/services/motorschart.service';
import { MotorsChart } from 'src/app/shared/interfaces/motorschart.model';

@Component({
  selector: 'app-graphtype',
  templateUrl: './graphtype.component.html',
  styleUrls: ['./graphtype.component.scss']
})
export class GraphtypeComponent implements OnInit {
  radioData:any;
  chartsArray :MotorsChart[]=[];
  chartId:any;
  data:any[]=[]
  constructor(private motorcharts:MotorschartService) { }

  ngOnInit(): void {
    this.chartsArray = this.motorcharts.motorChart;
  }
  radioChangeHandler(event: any){
    this.radioData = event.target.value;
    this.chartId = this.chartsArray.find(x=>x.id == this.radioData)?.chartId;
    this.data = this.chartsArray[this.radioData].data;

  }
}
