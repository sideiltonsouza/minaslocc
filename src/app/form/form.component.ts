import { Component } from '@angular/core';
import { Formulario } from '../formulario';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent extends Formulario{

}
