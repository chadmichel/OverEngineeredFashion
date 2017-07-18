import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  shirt = 0;
  pants = 0;
  outfit = 1;

  public outputUrl = "https://whateverbillhasstorage.blob.core.windows.net/whateverbillhasstatic/outfit_1.png";

  private calcOutfit() {
    this.outfit = this.pants * 4 + this.shirt + 1;
    this.outputUrl = "https://whateverbillhasstorage.blob.core.windows.net/whateverbillhasstatic/outfit_" + this.outfit + ".png";
  }

  public selectShirt(num) {
    this.shirt = num;    
    this.calcOutfit();
  }

  public selectPants(num) {
    this.pants = num;   
    this.calcOutfit();
  }

}
