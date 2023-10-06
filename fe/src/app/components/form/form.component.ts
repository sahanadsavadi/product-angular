import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  constructor( private activeRoute: ActivatedRoute) {}
  formSelect: 'login' | 'register';
  ngOnInit() {
    this.activeRoute.data.subscribe(({formSelect}): void => {
      this.formSelect = formSelect
    });
  }
}
