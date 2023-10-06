import { Component, Input } from '@angular/core';
import { MyProductService } from 'src/app/core/my-product.service';
import { ICardProduct } from 'src/types';

@Component({
  selector: 'app-card-product-detail',
  templateUrl: './card-product-detail.component.html',
  styleUrls: ['./card-product-detail.component.scss'],
})
export class CardProductDetailComponent {
  constructor(private myProduct:MyProductService){}
  cardInfoIconClassParent: string = 'cardInfoIcon-base';
  @Input() productCard: ICardProduct;
  priceRial(price: number,) {
   return this.myProduct.priceFormat(price)
  }
  addCheckout(product:ICardProduct){
    this.myProduct.add = product
  }
}
