import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { BtnComponent } from "./btn/btn.component";
import { S2Component } from "./s2/s2.component";
import { S3Component } from "./s3/s3.component";
import { S4Component } from "./s4/s4.component";
import { S5Component } from "./s5/s5.component";
import { S6Component } from "./s6/s6.component";
import { FooterComponent } from "./footer/footer.component";
import { FormComponent } from "./form/form.component";
import { RdComponent } from "./rd/rd.component";
import { Formulario } from './formulario';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, BtnComponent, S2Component, S3Component, S4Component, S5Component, S6Component, FooterComponent, FormComponent, RdComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent extends Formulario{
  

  public formularioA = () =>{
    // document.querySelector('app-s6')!.scrollIntoView({
    //     behavior: "smooth",
    //     block: "start",
    //     inline: "nearest"
    //     });
    // var form = <HTMLElement>document.querySelector('#contForm')!

    // form.classList.toggle("oculta")

    this.formulario()

}


}
