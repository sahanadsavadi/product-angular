import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map} from 'rxjs';
import { ICardProduct } from 'src/types';

@Injectable({
  providedIn: 'root',
})
export class MyProductService {
  private _discountUsed: number = 0.5;
  private _myProduct: BehaviorSubject<ICardProduct[]> = new BehaviorSubject<
    ICardProduct[]
  >([]);
  set add(product: ICardProduct) {
    this._myProduct.next([...this._myProduct.getValue(), product]);
  }
  get products(): Array<ICardProduct> {
    return this._myProduct.getValue();
  }
  get allPriceCheckout(): number {
    let totalPrice: number = 0;
    this._myProduct.getValue().map((item) => (totalPrice += item.price));
    return totalPrice;
  }
  discount(price: number) {
    const discountedPrice = price * (1 - this._discountUsed);
    return discountedPrice;
  }
  get discountShow() {
    return `${this._discountUsed * 100}%`;
  }
  get accessInCheckout(): boolean {
    return this.products.length === 0 ? false : true;
  }
  get getTotalCheckoutProducts(): Observable<number> {
    return this._myProduct.pipe(
      map((item) => item.length)
    );
  }
  priceFormat(number: number): string {
    return new Intl.NumberFormat('en', {
      currency: 'IRR',
    }).format(number);
  }
}
