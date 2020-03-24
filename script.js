const TECLAS_BLANCAS = ['<', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '-'];
const TECLAS_NEGRAS = ['a', 's', 'f', 'g', 'h', 'k', 'l', '´'];
const teclas = document.querySelectorAll('.tecla');
const teclasBlancas = document.querySelectorAll('.tecla.blanca');
const teclasNegras = document.querySelectorAll('.tecla.negra');

teclas.forEach(tecla => {
    tecla.addEventListener('mousedown', () => playNota(tecla));
    tecla.addEventListener('mouseup', () => tecla.classList.remove('active'));
});

document.addEventListener('keydown', e => {
    if (e.repeat) return
    const key = e.key;
    const teclaBlancaIndex = TECLAS_BLANCAS.indexOf(key);
    const teclaNegraIndex = TECLAS_NEGRAS.indexOf(key);

    if (teclaBlancaIndex > -1) playNota(teclasBlancas[teclaBlancaIndex]);
    if (teclaNegraIndex > -1) playNota(teclasNegras[teclaNegraIndex]);
});
document.addEventListener('keyup', e => {
    teclasBlancas.forEach(t => t.classList.remove('active'));
    teclasNegras.forEach(t => t.classList.remove('active'));
});


function playNota(tecla) {
    tecla.classList.add('active');
    const nota = document.getElementById(tecla.dataset.nota);
    nota.currentTime = 0;
    nota.play();
}