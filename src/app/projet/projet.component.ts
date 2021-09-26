import { Component, OnInit } from '@angular/core';
import { PROJETS } from 'src/data/projets';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {
  public projets = PROJETS;

  constructor() { }

  ngOnInit(): void {
  }

}
