import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { EXPERIENCE } from 'src/data/experience';

@Component({
  selector: 'app-experience-detail',
  templateUrl: './experience-detail.component.html',
  styleUrls: ['./experience-detail.component.css']
})
export class ExperienceDetailComponent implements OnInit {
  public name: string = "";
  public exp;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get("name");
    this.exp = EXPERIENCE[this.name];
  }

}
