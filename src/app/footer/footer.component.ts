import { Component, OnInit } from '@angular/core';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public faLinkedin : Object = faLinkedin;
  public faGithub : Object = faGithub;
  public faEnvelope : Object = faEnvelope;

  constructor() { }

  ngOnInit(): void {
  }

}
