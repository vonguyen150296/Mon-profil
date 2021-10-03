import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  faBars = faBars;
  faClose = faWindowClose;
  public statusMenu: string = "hidden";
  public faIcon: Object = faBars;

  constructor() { }

  ngOnInit(): void {
  }
  showMenu(){
    if(this.statusMenu === "hidden"){
      this.faIcon = this.faClose;
      this.statusMenu = "show";
      document.getElementById("mainNav").style.height = "82px";
    }else {
      this.faIcon = this.faBars;
      this.statusMenu = "hidden";
      document.getElementById("mainNav").style.height = "0";
    }
  }
  

}
