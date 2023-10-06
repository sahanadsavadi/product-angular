import { Component, Input, OnInit } from '@angular/core';
import { MyProductService } from 'src/app/core/my-product.service';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-nav-items',
  templateUrl: './nav-items.component.html',
  styleUrls: ['./nav-items.component.scss'],
})
export class NavItemsComponent implements OnInit {
  @Input() styleModeContainer: 'nav-item-default' | 'nav-item-drawer' =
    'nav-item-default';
  @Input() styleModeText: 'nav-item-default-text' | 'nav-item-drawer-text' =
    'nav-item-default-text';
    styleModeTextActive:string = this.styleModeText == "nav-item-default-text" ? "text-p-md-bold" :"text-p-lg-bold"
  countCheckoutProduct: number = 0;
  constructor(
    public userService: UserService,
    public myProduct: MyProductService
  ) {}
  ngOnInit(): void {
    this.myProduct.getTotalCheckoutProducts.subscribe((count) => {
      this.countCheckoutProduct = count;
    });
  }
}
