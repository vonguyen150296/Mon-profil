import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-projet-detail',
  templateUrl: './projet-detail.component.html',
  styleUrls: ['./projet-detail.component.css']
})
export class ProjetDetailComponent implements OnInit {
  @Input() projet;

  constructor() { }

  ngOnInit(): void {
  }

}
