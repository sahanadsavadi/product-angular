import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MyProductService } from 'src/app/core/my-product.service';
import { ICardProduct } from 'src/types';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent {
  cardProducts: Array<ICardProduct>;
  constructor(private myProduct: MyProductService, private router: Router) {
    if (this.myProduct.accessInCheckout) {
      this.cardProducts = this.myProduct.products;
    } else {
      this.router.navigate(['/'], { replaceUrl: true });
    }
  }
}
