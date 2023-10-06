import { Component } from '@angular/core';
import { MyProductService } from 'src/app/core/my-product.service';

@Component({
  selector: 'app-product-checkout-info',
  templateUrl: './product-checkout-info.component.html',
  styleUrls: ['./product-checkout-info.component.scss']
})
export class ProductCheckoutInfoComponent {
  constructor(private myProduct:MyProductService){}
  totalPrice:string = this.myProduct.priceFormat(this.myProduct.allPriceCheckout)
  discount:string = this.myProduct.priceFormat(this.myProduct.discount(this.myProduct.allPriceCheckout));
  discountUsed:string = this.myProduct.discountShow;
  countProducts:number = this.myProduct.products.length
}
