import { AppService } from './app.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AppModel {

    public products: any;
    public product: any = {};
    public positive: any = [];
    public negative: any = [];
    public neutral: any = [];
    constructor(public serviceData: AppService) { }

    public getReviews(productId) {
        const searchValue = productId;
        this.serviceData.getData().subscribe((data) => {
            this.products = data;
            this.products.map((product, index) => {
                if (product.productId === searchValue) {
                    this.product = product;
                }
            });
            this.product.reviews.map((review, index) => {
                if (review.reviewType === 1) {
                    this.positive.push(review);
                }
                if (review.reviewType === 2) {
                    this.negative.push(review);
                }
                if (review.reviewType === 3) {
                    this.neutral.push(review);
                }
            });

        });
    }

}
