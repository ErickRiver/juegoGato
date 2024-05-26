document.addEventListener('DOMContentLoaded', (event) => {
    let jugador = 'X';
    const cuadros = Array.from(document.querySelectorAll('.cuadro'));
    const txtJugador = document.getElementById('txtJugador');
    const btnReiniciar = document.getElementById('btnReiniciar');
    
    cuadros.forEach((cuadro, index) => {
        cuadro.textContent = '.';
        cuadro.addEventListener('click', () => clicCuadros(cuadro));
    });

    btnReiniciar.addEventListener('click', reiniciarJuego);

    function clicCuadros(cuadro) {
        if (cuadro.textContent === '.') {
            cuadro.textContent = jugador.toLowerCase();
            if (validarGanador()) {
                txtJugador.textContent = `Jugador ${jugador} ha ganado!`;
                txtJugador.style.backgroundColor = 'rgb(83, 170, 28)';
                txtJugador.style.color = 'white';
            } else {
                jugador = jugador === 'X' ? 'O' : 'X';
                txtJugador.textContent = `Turno jugador ${jugador}`;
            }
        }
    }

    function validarGanador() {
        const combinacionesGanadoras = [
            [0, 1, 2], // Filas
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6], // Columnas
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8], // Diagonales
            [2, 4, 6]
        ];

        return combinacionesGanadoras.some(combinacion => {
            const [a, b, c] = combinacion;
            return (
                cuadros[a].textContent === cuadros[b].textContent &&
                cuadros[a].textContent === cuadros[c].textContent &&
                cuadros[a].textContent !== '.'
            );
        });
    }

    function reiniciarJuego() {
        jugador = 'X';
        cuadros.forEach(cuadro => {
            cuadro.textContent = '.';
        });
        txtJugador.textContent = 'Turno jugador X';
        txtJugador.style.backgroundColor = 'white';
        txtJugador.style.color = 'black';
    }
});
