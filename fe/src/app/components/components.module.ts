import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProductComponent } from './card-product/card-product.component';
import { CardInfoIconComponent } from './card-product/card-info-icon/card-info-icon.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CardProductCheckoutComponent } from './checkout/card-product-checkout/card-product-checkout.component';
import { ProductCheckoutInfoComponent } from './checkout/product-checkout-info/product-checkout-info.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './form/login/login.component';
import { RegisterComponent } from './form/register/register.component';
import { CardProductDetailComponent } from './card-product/card-product-detail/card-product-detail.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [CardProductComponent, CardInfoIconComponent, CheckoutComponent, CardProductCheckoutComponent, ProductCheckoutInfoComponent, FormComponent, LoginComponent, RegisterComponent, CardProductDetailComponent],
  imports: [CommonModule,HttpClientModule,FormsModule, ReactiveFormsModule],
  exports: [CardProductComponent,CheckoutComponent,FormComponent],
})
export class ComponentsModule {}
