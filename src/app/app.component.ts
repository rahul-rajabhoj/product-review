import { Component } from '@angular/core';
import { AppModel } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Id: any;
  productId: any = 0;
  constructor(public appModel: AppModel) {}

  searchProduct(id) {
    this.productId = this.Id;
    this.appModel.positive = [];
    this.appModel.negative = [];
    this.appModel.neutral = [];
    this.appModel.getReviews(this.Id);
  }
}
