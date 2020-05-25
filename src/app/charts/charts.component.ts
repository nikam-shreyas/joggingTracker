import { Component, OnInit, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  public chart:any;
  ngOnInit():void{
    this.createChart();
    }

    constructor(private elementRef: ElementRef){
    }


    createChart(){
      
      let htmlRef = this.elementRef.nativeElement.querySelector(`#canvas`);
      console.log("htmlref",document.getElementById("canvas"));
     
    
    }
}