let fundo = document.getElementById('fundo');
let corTitulo = document.getElementById('corTitulo');
let corParagrafo = document.getElementById('corParagrafo');
let fonteTitulo = document.getElementById('fonteTitulo');
let fonteParagrafo = document.getElementById('fonteParagrafo');
let tudo = document.getElementById('tudo');

function gerarCor () {
    const cores = '0123456789ABCDEF';
    let cor = '#';
    for(var cont = 0; cont < 6; cont++) {
        cor += cores[Math.floor(Math.random() * 16)];
    }
    return cor;
}

fundo.addEventListener('click',  function() {
    var corAleatoria = gerarCor();
    document.body.style.backgroundColor = corAleatoria;
});

corTitulo.addEventListener('click', function() {
    let titulo = document.getElementById('titulo');
    var corAleatoria = gerarCor();
    titulo.style.color = corAleatoria;
})

corParagrafo.addEventListener('click', function() {
    let paragrafo = document.getElementById('paragrafo');
    var corAleatoria = gerarCor();
    paragrafo.style.color = corAleatoria;
})

function gerarFonte() {
    let opcoesFontes = [
    'Oswald', 'Inconsolata', 'Libre Baskerville', 
    'Libre Baskerville', 'Pacifico','Abril Fatface',
    'Righteous', 'IBM Plex Mono', 'Lilita One',
    'Amatic SC', 'VT323','Fredericka the Great',
    'Sedgwick Ave', 'IM Fell English SC', 'Libre Barcode 39'
    ]
    // let fonte = "font-family: ";

    return opcoesFontes[Math.floor(Math.random() * opcoesFontes.length)];
    //return fonte;
}

fonteTitulo.addEventListener('click', function() {
    let titulo = document.getElementById('titulo');
    var fonteAleatoria = gerarFonte();
    titulo.style.fontFamily = fonteAleatoria;
})

fonteParagrafo.addEventListener('click', function() {
    let paragrafo = document.getElementById('paragrafo');
    var fonteAleatoria = gerarFonte();
    paragrafo.style.fontFamily = fonteAleatoria;
})

//----------------------------------------------------------------TUDO--------------

tudo.addEventListener('click', function() {
    let titulo = document.getElementById('titulo');
    var fonteAleatoria = gerarFonte();
    titulo.style.fontFamily = fonteAleatoria;

    let paragrafo = document.getElementById('paragrafo');
    var fonteAleatoria = gerarFonte();
    paragrafo.style.fontFamily = fonteAleatoria;

    var corAleatoria = gerarCor();
    document.body.style.backgroundColor = corAleatoria;

    let tituloo = document.getElementById('titulo');
    var corAleatoria = gerarCor();
    tituloo.style.color = corAleatoria;

    let paragrafoo = document.getElementById('paragrafo');
    var corAleatoria = gerarCor();
    paragrafoo.style.color = corAleatoria;
})