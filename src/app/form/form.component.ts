import { Component } from '@angular/core';
import { Formulario } from '../formulario';
import { RdComponent } from "../rd/rd.component";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [RdComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent extends Formulario{

}
