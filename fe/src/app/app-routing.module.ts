import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CardProductComponent } from './components/card-product/card-product.component';

const routes: Routes = [
  { path: '', component: CardProductComponent },
  { path: 'checkout', component: CheckoutComponent },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: FormComponent,
        data: { formSelect: 'login' },
      },
      {
        path: 'register',
        component: FormComponent,
        data: { formSelect: 'register' },
      },
    ],
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
