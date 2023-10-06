import { Component, Input } from '@angular/core';
import { ICardProduct } from 'src/types';
@Component({
  selector: 'app-card-info-icon',
  templateUrl: './card-info-icon.component.html',
  styleUrls: ['./card-info-icon.component.scss'],
})
export class CardInfoIconComponent {
  @Input() cardInfoIconClassParent:string;
  @Input() productCard:ICardProduct;
}
