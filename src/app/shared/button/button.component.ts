import { Component } from '@angular/core';

@Component({
  // selector: 'app-button',
  selector: 'button[appButton], a[appButton]', //* atribute selector
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {}
