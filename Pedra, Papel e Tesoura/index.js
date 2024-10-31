let hack = false
let pontosUsuario = 0
let pontosInimigo = 0

function jogo(pergunta) {
    let fantasmaInimigo = false, caldeiraoInimigo = false, aboboraInimigo = false
    let fantasma = false, caldeirao = false, abobora = false

    //esse comando serve para pegar um elemento específico do HTML pelo seu id, colocando o id no paranteses para acessar esse botão e manipular suas propriedades
    const imagemUsuario = document.getElementById("escolhaUsuario")
    const imagemInimigo = document.getElementById("escolhaInimigo")
    const resultadoTexto = document.getElementById("resultado")
    const pontosUsuarioTexto = document.getElementById("pontosUsuario")
    const pontosInimigoTexto = document.getElementById("pontosInimigo")

    switch(pergunta) {
        case 'fantasma':
            fantasma = true
            imagemUsuario.src = 'pngwing.com.png'
            break;
        case 'caldeirão':
            caldeirao = true
            imagemUsuario.src = 'pngwing.com (2).png'
            break;
        case 'abóbora':
            abobora = true
            imagemUsuario.src = 'pngwing.com (1).png'
            break;
    }

    let randomNumber = Math.floor(Math.random() * 3) + 1

    switch(randomNumber) {
        case 1:
            fantasmaInimigo = true
            imagemInimigo.src = 'pngwing.com.png'
        break

        case 2:
            caldeiraoInimigo = true
            imagemInimigo.src = 'pngwing.com (2).png'
            break
        case 3:
            aboboraInimigo = true
            imagemInimigo.src = 'pngwing.com (1).png'
            break
    }

    if (hack) {
        randomNumber = Math.floor(Math.random() * 6) + 1
        if (randomNumber >= 3) {
            if (fantasma) {
                imagemInimigo.src = 'pngwing.com.png'
                resultadoTexto.innerText = "fantasma x caldeirao \nO usuário perdeu"
                pontosInimigo ++

            } else if (caldeirao) {
                imagemInimigo.src = 'pngwing.com (1).png'
                resultadoTexto.innerText = "caldeirao x abobora \nO usuário perdeu"
                pontosInimigo ++

            } else {
                imagemInimigo.src = 'pngwing.com (2).png'
                resultadoTexto.innerText = "abobora x fantasma \nO usuário perdeu"
                pontosInimigo ++
            }

        } else if (randomNumber == 2) {
            if (fantasma) {
                imagemInimigo.src = 'pngwing.com (2).png'
                resultadoTexto.innerText = "fantasma x fantasma \nAmbos empataram"

            } else if (caldeirao) {
                imagemInimigo.src = 'pngwing.com.png'
                resultadoTexto.innerText = "caldeirao x caldeirao \nAmbos empataram"

            } else {
                imagemInimigo.src = 'pngwing.com (1).png'
                resultadoTexto.innerText = "abobora x abobora \nAmbos empataram"

            }

        } else {
            if (fantasma) {
                imagemInimigo.src = 'pngwing.com (1).png'
                resultadoTexto.innerText = "fantasma x abobora \nO usuário venceu"
                pontosUsuario ++

            } else if (caldeirao) {
                imagemInimigo.src = 'pngwing.com (2).png'
                resultadoTexto.innerText = "caldeirao x fantasma \nO usuário venceu"
                pontosUsuario ++

            } else {
                imagemInimigo.src = 'pngwing.com.png'
                resultadoTexto.innerText = "Abóbora x Caldeirão \nO usuário venceu"
                pontosUsuario ++
            }   
        }
    } else if (fantasma && fantasmaInimigo) {
        resultadoTexto.innerText = "Fantasma x Fantasma \nAmbos empataram"

    } else if (fantasma && caldeiraoInimigo) {
       resultadoTexto.innerText = "fantasma x Caldeirão \nO usuário perdeu"
       pontosInimigo ++

    } else if (fantasma && aboboraInimigo) {
        resultadoTexto.innerText = "Fantasma x abobora \nO usuário venceu"
        pontosUsuario ++

    } else if (caldeirao && fantasmaInimigo) {
        resultadoTexto.innerText = "Caldeirão x Fantasma \nO usuário venceu"
        pontosUsuario ++

    } else if (caldeirao && caldeiraoInimigo) {
        resultadoTexto.innerText = "Caldeirão x Caldeirão \nAmbos empataram"

    } else if (caldeirao && aboboraInimigo) {
        resultadoTexto.innerText = "Caldeirão x Abóbora \nO usuário perdeu"
        pontosInimigo ++

    } else if (abobora && fantasmaInimigo) {
        resultadoTexto.innerText = "Abóbora x Fantasma \nO usuário perdeu"
        pontosInimigo ++

    } else if (abobora && caldeiraoInimigo) {
        resultadoTexto.innerText = "Abóbora x Caldeirão \nO usuário venceu"
        pontosUsuario ++

    } else if (abobora && aboboraInimigo) {
        resultadoTexto.innerText = "Abóbora x Abóbora \nAmbos empataram"

    }
    pontosUsuarioTexto.innerText = `Usuario: \n${pontosUsuario}`
    pontosInimigoTexto.innerText = `Inimigo: \n${pontosInimigo}`
}

document.getElementById('hack').addEventListener('click', function() {
    hack = !hack
    if (hack) {

    } else {

    }
})