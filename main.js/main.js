
function Tocar () {
    document.querySelector('som_tecla_pom').play();
}

    const ListadeTeclas = document.querySelectorAll(' .tecla');

   let Contador 

let contador 0;                                                                                                                                

    while (contador < ListadeTeclas.length) {
        ListadeTeclas[Contador].onclick = function () {
            tocar('#som_tecla_pom');
        contador = contador + 1;
        console.log(contador);
    }