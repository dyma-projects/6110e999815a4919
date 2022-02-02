import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice1",
  templateUrl: "./exercice1.component.html",
  styleUrls: ["./exercice1.component.css"],
})
export class Exercice1Component implements OnInit {
  colorName: string;
  colorList: string[];
  index: number = 0;
  constructor() {
    this.colorList = ["rouge", "bleu", "vert", "noir", "mauve", "orange"];
    this.colorName = this.colorList[this.colorList.length - 1];
  }

  ngOnInit(): void {}

  changeColor() {
    this.colorName = this.colorList[this.index];
    this.index++;
    if (this.index == this.colorList.length) {
      this.index = 0;
    }
  }
}
