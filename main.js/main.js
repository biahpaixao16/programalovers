
function Tocar () {
    document.querySelector('som_tecla_pom').play();
}

    const ListadeTeclas = document.querySelectorAll(' .tecla');

   let Contador 

let contador 0;                                                                                                                                

    while (contador < 9) {
        ListadeTeclas[0].onclick = TocaSomPom;
        contador = contador + 1;
        console.log(contador);
    }