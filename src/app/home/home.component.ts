import { Component } from '@angular/core';
import { HomeService } from '../Services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public key = 1;
  public firstArray: any;
  public lastArray: any;
  public check = false;
  constructor(private serive: HomeService) {
    this.firstArray = [];
    this.lastArray = [];
  };
  sort() {
    this.serive.sort(this.key, this.firstArray).subscribe((data => {
      this.lastArray = data;
    }));
  }

  generate() {
    this.serive.generate().subscribe((data => {
      this.firstArray = data;
    }));
    this.check = true;
  }

  clear() {
    this.lastArray = [];
  }
}
