import { Component, Input } from '@angular/core';
import { ICardProduct } from 'src/types';

@Component({
  selector: 'app-card-product-checkout',
  templateUrl: './card-product-checkout.component.html',
  styleUrls: ['./card-product-checkout.component.scss']
})
export class CardProductCheckoutComponent {
  cardInfoIconClassParent:string = 'cardInfoIcon-checkout';
  @Input() productCard: ICardProduct;
}
