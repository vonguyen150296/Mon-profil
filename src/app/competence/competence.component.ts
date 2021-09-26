import { Component, OnInit } from '@angular/core';
import { COMPETENCE } from 'src/data/competence';

// import icon
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as starE } from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.css']
})
export class CompetenceComponent implements OnInit {
  public front = COMPETENCE["Frontend"];
  public back = COMPETENCE["Backend"];

  // icons
  public starF = faStar;
  public starHalf = faStarHalfAlt;
  public starE = starE;
  public arrIcons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor() { }

  ngOnInit(): void {
  }

}
