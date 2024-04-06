const opciones = ['piedra', 'papel', 'tijera'];
const jugada = [];
let puntaje = 0;
let resultado;

const numeroJugadas = parseInt(prompt('Cuantas veces deseas jugar'))

for(let i = 0; i< numeroJugadas; i++) {
    let jugadas = prompt('Ingresa por favor tu jugada - (Tijera, Papel, Piedra)').toLowerCase();
    if(!opciones.includes(jugadas)){
        jugada.push(`Jugador ingresa jugada invalida - ${jugadas} - Juagada Invalida`)
        alert(`Jugada ${jugada} no es valida`)
        continue;
    }else{
        const indiceMaquina = Math.floor(Math.random() * opciones.length)
        const opcionMaquina = opciones[indiceMaquina]

        if(jugadas === opcionMaquina){
            jugada.push(`Empate - Jugador elige ${jugadas} - Maquina elige ${opcionMaquina}`)
        }
        else if(
            jugadas === 'papel' && opcionMaquina === 'piedra' ||
            jugadas === 'piedra' && opcionMaquina === 'tijera' ||
            jugadas === 'tijera' && opcionMaquina === 'papel'
            ){
            puntaje++;
            jugada.push(`Ganaste - Jugador elige ${jugadas} - Maquina elige ${opcionMaquina}`)
        }else {
            puntaje--;
            jugada.push(`Perdiste - Jugador elige ${jugadas} - Maquina elige ${opcionMaquina}`)
        }
    }
}

if(puntaje === 0){
    resultado = `Jugador y Maquina empatan`
}else if(puntaje > 0){
    resultado = `Jugador gana`
}else{
    resultado = `Maquina gana`
}

alert(resultado + '\n\n' + jugada.join('\n'));