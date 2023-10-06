import { Component, Input, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/core/rest-api.service';
import { ICardProduct } from 'src/types';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss'],
})
export class CardProductComponent implements OnInit {
  cardProducts: Array<ICardProduct>;
  constructor(public restApi: RestApiService) {}
  ngOnInit() {
    this.restApi
      .getAllProduct()
      .subscribe(item=>  this.cardProducts =item)
  }
}
