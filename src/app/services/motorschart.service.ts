import { Injectable } from '@angular/core';
import { MotorsChart } from '../shared/interfaces/motorschart.model';

@Injectable({
  providedIn: 'root'
})
export class MotorschartService {
  motorChart: MotorsChart[] = [
    {
      id: 1, path: '../assets/imgs/bar.png',chartId:3, data: [{ name: "Mobiles", value: 105000 },
      { name: "Laptop", value: 55000 },
      { name: "AC", value: 15000 },
      { name: "Headset", value: 150000 },
      { name: "Fridge", value: 20000 }]
    },
    {
      id: 2, path: '../assets/imgs/pie.png',chartId:2, data: [{ name: "Mobiles", value: 105000 },
      { name: "Laptop", value: 55000 },
      { name: "AC", value: 15000 },
      { name: "Headset", value: 150000 },
      { name: "Fridge", value: 20000 }]
    },
    {
      id: 3, path: '../assets/imgs/bar.png',chartId:1, data: [{ name: "Mobiles", value: 105000 },
      { name: "Laptop", value: 55000 },
      { name: "AC", value: 15000 },
      { name: "Headset", value: 150000 },
      { name: "Fridge", value: 20000 }]
    },
  ]
  constructor() { }

}
