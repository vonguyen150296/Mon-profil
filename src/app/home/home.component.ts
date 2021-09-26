import { Component, OnInit } from '@angular/core';
import { INSA, HUE } from "../../data/formation";
import { EXPERIENCE } from 'src/data/experience';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public insa = INSA;
  public hue = HUE;
  public checkVisit = EXPERIENCE.checkVisit;
  public terenui = EXPERIENCE.terenui;

  constructor() { }

  ngOnInit(): void {
  }

}
