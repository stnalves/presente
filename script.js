const fotos = [
    "fotos/foto1.jpg",
    "fotos/foto2.jpg",
    "fotos/foto3.jpg",
    "fotos/foto4.jpg",
    "fotos/foto5.jpg",
    "fotos/foto6.jpg",
    "fotos/foto7.jpg",
    "fotos/foto8.jpg",
    "fotos/foto9.jpg",
    "fotos/foto10.jpg",
    "fotos/foto11.jpg",
    "fotos/foto12.jpg"
];

const imagens = [
    document.getElementById("foto1"),
    document.getElementById("foto2"),
    document.getElementById("foto3")
];

let indice = 0;

function trocarFotos() {

    imagens.forEach(img => {
        img.classList.add("trocando");
    });

    setTimeout(() => {

        indice++;

        imagens[0].src = fotos[indice % fotos.length];
        imagens[1].src = fotos[(indice + 1) % fotos.length];
        imagens[2].src = fotos[(indice + 2) % fotos.length];

        imagens.forEach(img => {
            img.classList.remove("trocando");
        });

    }, 500);
}

setInterval(trocarFotos, 2000);