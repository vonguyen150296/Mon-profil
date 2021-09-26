import { Component, OnInit } from '@angular/core';
import { faQuoteLeft,faQuoteRight} from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public faQuoteLeft: Object = faQuoteLeft;
  public faQuoteRight: Object = faQuoteRight;

  constructor() { }

  ngOnInit(): void {
  }

}
