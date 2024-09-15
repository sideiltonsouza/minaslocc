export class Formulario {

    public formulario = () =>{
        // document.querySelector('app-s6')!.scrollIntoView({
        //     behavior: "smooth",
        //     block: "start",
        //     inline: "nearest"
        //     });
        var form = <HTMLElement>document.querySelector('#contForm')!

        form.classList.toggle("oculta")


    }

}
