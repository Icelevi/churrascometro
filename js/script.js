
//INPUTS DE PESSOAS
const inputAdultos = document.getElementById("adultos")
const inputCriancas = document.getElementById("criancas")
const inputAdultosNaoB = document.getElementById("adultosnaobebem")

//CHECKBOX = DURAÇÃO VAI SER MAIS DE 6 HORAS OU NÃO
const duracaosim = document.getElementById("duracaosim")
const duracaonao = document.getElementById("duracaonao")

//CHECKBOX - CARNES
const carneBovina = document.getElementById("carnebovina")
const linguica = document.getElementById("linguica")
const coxinhaDaAsa = document.getElementById("coxinhadaasa")
const picanhaSuina = document.getElementById("picanhasuina")
const costelaSuina = document.getElementById("costelasuina")

//DIV DOS RESULTADOS
let resultado = document.getElementById("resultado")
let alerta_erro = document.getElementById("alerta_erro")

//ITENS QUE VAO FICAR OS RESULTADOS
let todosli = document.getElementsByClassName("itens")
//carnes
let header_da_lista_cortes = document.getElementById("header_da_lista_cortes")
let carnebovinali = document.getElementById("carnebovinali")
let linguicali = document.getElementById("linguicali")
let coxinhadaasali = document.getElementById("coxinhadaasali")
let picanhasuinali = document.getElementById("picanhasuinali")
let costelasuinali = document.getElementById("costelasuinali")
//bebidas
let header_da_lista_bebidas = document.getElementById("header_da_lista_bebidas")
let aguali = document.getElementById("aguali")
let sucoli = document.getElementById("sucoli")
let refrigeranteli = document.getElementById("refrigeranteli")
let cervejali = document.getElementById("cervejali")

//acompanhamentos
let header_da_lista_acompanhamentos = document.getElementById("header_da_lista_acompanhamentos")
let farofali = document.getElementById("farofali")
let vinagreteli = document.getElementById("vinagreteli")



let totalChecks
let checkboxs_carnes = document.querySelectorAll(".checkboxs_carnes")
function validarChecksCarnes() {
    totalChecks=0;
    checkboxs_carnes.forEach(function (el) {
        if(el.checked){
            totalChecks++
        }
    })
}



let totalchecksBebidas
let checkbox_bebidas = document.querySelectorAll(".checkboxs_bebidas")
function validarChecksBebidas() {
    totalchecksBebidas=0;
    checkbox_bebidas.forEach(function (el) {
        if(el.checked){
            totalchecksBebidas++
        }
    })
}

//CHECKBOX - ACOMPANHAMENTOS
const farofa = document.getElementById("farofa")
const vinagrete = document.getElementById("vinagrete")

//CHECKBOX - BEBIDAS
const agua = document.getElementById("agua")
const suco = document.getElementById("suco")
const refrigerante = document.getElementById("refrigerante")
const cerveja = document.getElementById("cerveja")


//função para adicionar a quantidade(gramas) de carnes// varia de acordo com a duração

//QUANTIDADES DE CARNE E BEBIDAS E ACOMPANHANTES/////////////////////////////////
//carnes

















////////////////////////////////////////////////////////////////////////////////////////////////////////
//CARNE BOVINA
let qtdCarneBovina
function addQtdCarneBovina(duracaocheck) {

    //ADICIONAR CARNE COM MAIS DE 6 HORAS
    if (duracaocheck.checked && carneBovina.checked && totalChecks == 5) {
        qtdCarneBovina = 200
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdCarneBovina * adultos) + (qtdCarneBovina / 2 * criancas)
        carnebovinali.innerHTML = `<p> ${(total / 1000).toFixed(2)}kg de Carne Bovina </p>`
        carnebovinali.style.display="block"
        console.log(qtdCarneBovina)
    }
    else if (duracaocheck.checked && carneBovina.checked && totalChecks == 4) {
        qtdCarneBovina = 225
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdCarneBovina * adultos) + (qtdCarneBovina / 2 * criancas)
        carnebovinali.innerHTML = `<p> ${(total / 1000).toFixed(2)}kg de Carne Bovina </p>`
        carnebovinali.style.display="block"
        console.log(qtdCarneBovina)

    }
    else if (duracaocheck.checked && carneBovina.checked && totalChecks == 3) {
        qtdCarneBovina = 255
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdCarneBovina * adultos) + (qtdCarneBovina / 2 * criancas)
        carnebovinali.innerHTML = `<p> ${(total / 1000).toFixed(2)}kg de Carne Bovina </p>`
        carnebovinali.style.display="block"
        console.log(qtdCarneBovina)
    }
    else if (duracaocheck.checked && carneBovina.checked && totalChecks == 2) {
        qtdCarneBovina = 375
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdCarneBovina * adultos) + (qtdCarneBovina / 2 * criancas)
        carnebovinali.innerHTML = `<p> ${(total / 1000).toFixed(2)}kg de Carne Bovina </p>`
        carnebovinali.style.display="block"
        console.log(qtdCarneBovina)
    }

    else if (duracaocheck.checked && carneBovina.checked) {
        qtdCarneBovina = 700
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdCarneBovina * adultos) + (qtdCarneBovina / 2 * criancas)
        carnebovinali.innerHTML = `<p> ${(total / 1000).toFixed(2)}kg de Carne Bovina </p>`
        carnebovinali.style.display="block"
        console.log(qtdCarneBovina)
    }

    //ADICIONAR QUANTIDADE DE CARNE COM A DURAÇÃO COM MENOS DE 6 HORAS
    else if (carneBovina.checked && totalChecks == 5) {
        qtdCarneBovina = 135;
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdCarneBovina * adultos) + (qtdCarneBovina / 2 * criancas)
        carnebovinali.innerHTML = `<p> ${(total / 1000).toFixed(2)}kg de Carne Bovina </p>`
        carnebovinali.style.display="block"
        console.log(qtdCarneBovina)
    }

    else if (carneBovina.checked && totalChecks == 4) {
        qtdCarneBovina = 165;
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdCarneBovina * adultos) + (qtdCarneBovina / 2 * criancas)
        carnebovinali.innerHTML = `<p> ${(total / 1000).toFixed(2)}kg de Carne Bovina </p>`
        carnebovinali.style.display="block"
        console.log(qtdCarneBovina)
    }

    else if (carneBovina.checked && totalChecks == 3) {
        qtdCarneBovina = 215;
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdCarneBovina * adultos) + (qtdCarneBovina / 2 * criancas)
        carnebovinali.innerHTML = `<p> ${(total / 1000).toFixed(2)}kg de Carne Bovina </p>`
        carnebovinali.style.display="block"
        console.log(qtdCarneBovina)
    }

    else if (carneBovina.checked && totalChecks == 2) {
        qtdCarneBovina = 315;
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdCarneBovina * adultos) + (qtdCarneBovina / 2 * criancas)
        carnebovinali.innerHTML = `<p> ${(total / 1000).toFixed(2)}kg de Carne Bovina </p>`
        carnebovinali.style.display="block"
        console.log(qtdCarneBovina)
    }

    else if (carneBovina.checked) {
        qtdCarneBovina = 615;
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdCarneBovina * adultos) + (qtdCarneBovina / 2 * criancas)
        carnebovinali.innerHTML = `<p> ${(total / 1000).toFixed(2)}kg de Carne Bovina </p>`
        carnebovinali.style.display="block"
        console.log(qtdCarneBovina)
    }
}












///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//LINGUIÇA
let qtdLinguica
function addQtdLinguica(duracaocheck) {
    //ADICIONAR QUANTIDADE DE  LINGUIÇA COM MAIS DE 6 HORAS


    if (duracaocheck.checked && linguica.checked && totalChecks == 5) {
        qtdLinguica = 100
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdLinguica * adultos) + (qtdLinguica / 2 * criancas)
        linguicali.innerHTML = `<p> ${(total / 1000).toFixed(2)}kg de Linguiça</p>`
        linguicali.style.display="block"
        console.log(qtdLinguica)
    }
    else if (duracaocheck.checked && linguica.checked && totalChecks == 4) {
        qtdLinguica = 125
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdLinguica * adultos) + (qtdLinguica / 2 * criancas)
        linguicali.innerHTML = `<p> ${(total / 1000).toFixed(2)}kg de Linguiça </p>`
        linguicali.style.display="block"
        console.log(qtdLinguica)

    }
    else if (duracaocheck.checked && linguica.checked && totalChecks == 3) {
        qtdLinguica = 230
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdLinguica * adultos) + (qtdLinguica / 2 * criancas)
        linguicali.innerHTML = `<p> ${(total / 1000).toFixed(2)}kg de Linguiça </p>`
        linguicali.style.display="block"
        console.log(qtdLinguica)
    }
    else if (duracaocheck.checked && linguica.checked && totalChecks == 2) {
        qtdLinguica = 350
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdLinguica * adultos) + (qtdLinguica / 2 * criancas)
        linguicali.innerHTML = `<p> ${(total / 1000).toFixed(2)}kg de Linguiça </p>`
        linguicali.style.display="block"
        console.log(qtdLinguica)
    }

    else if (duracaocheck.checked && linguica.checked) {
        qtdLinguica = 700
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdLinguica * adultos) + (qtdLinguica / 2 * criancas)
        linguicali.innerHTML = `<p> ${(total / 1000).toFixed(2)}kg de Linguiça </p>`
        linguicali.style.display="block"
        console.log(qtdLinguica)
    }

    //ADICIONAR QUANTIDADE DE LINGUIÇA COM A DURAÇÃO COM MENOS DE 6 HORAS

    else if (linguica.checked && totalChecks == 5) {
        qtdLinguica = 120;
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdLinguica * adultos) + (qtdLinguica / 2 * criancas)
        linguicali.innerHTML = `<p> ${(total / 1000).toFixed(2)}kg de Linguiça </p>`
        linguicali.style.display="block"
        console.log(qtdLinguica)
    }


    else if (linguica.checked && totalChecks == 4) {
        qtdLinguica = 150;
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdLinguica * adultos) + (qtdLinguica / 2 * criancas)
        linguicali.innerHTML = `<p> ${(total / 1000).toFixed(2)}kg de Linguiça </p>`
        linguicali.style.display="block"
        console.log(qtdLinguica)
    }

    else if (linguica.checked && totalChecks == 3) {
        qtdLinguica = 200;
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdLinguica * adultos) + (qtdLinguica / 2 * criancas)
        linguicali.innerHTML = `<p> ${(total / 1000).toFixed(2)}kg de Linguiça </p>`
        linguicali.style.display="block"
        console.log(qtdLinguica)
    }


    else if (linguica.checked && totalChecks == 2) {
        qtdLinguica = 350;
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdLinguica * adultos) + (qtdLinguica / 2 * criancas)
        linguicali.innerHTML = `<p> ${(total / 1000).toFixed(2)}kg de Linguiça </p>`
        linguicali.style.display="block"
        console.log(qtdLinguica)
    }

    else if (linguica.checked) {
        qtdLinguica = 600;
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdLinguica * adultos) + (qtdLinguica / 2 * criancas)
        linguicali.innerHTML = `<p> ${(total / 1000).toFixed(2)}kg de Linguiça </p>`
        linguicali.style.display="block"
        console.log(qtdLinguica)
    }
}


















///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ADD COXINHA DA ASA
let qtdCoxinhaDaAsa

function addQtdCoxinhaDaAsa(duracaocheck) {
    //ADICIONAR QUANTIDADE DE  LINGUIÇA COM MAIS DE 6 HORAS


    if (duracaocheck.checked && coxinhaDaAsa.checked && totalChecks == 5) {
        qtdCoxinhaDaAsa = 140
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdCoxinhaDaAsa * adultos) + (qtdCoxinhaDaAsa / 2 * criancas)
        coxinhadaasali.innerHTML = `<p> ${(total / 1000).toFixed(2)}kg de Coxinha da Asa</p>`
        coxinhadaasali.style.display="block"
        console.log(qtdCoxinhaDaAsa)
    }
    else if (duracaocheck.checked && coxinhaDaAsa.checked && totalChecks == 4) {
        qtdCoxinhaDaAsa = 200
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdCoxinhaDaAsa * adultos) + (qtdCoxinhaDaAsa / 2 * criancas)
        coxinhadaasali.innerHTML = `<p> ${(total / 1000).toFixed(2)}kg de Coxinha da Asa</p>`
        coxinhadaasali.style.display="block"
        console.log(qtdCoxinhaDaAsa)

    }
    else if (duracaocheck.checked && coxinhaDaAsa.checked && totalChecks == 3) {
        qtdCoxinhaDaAsa = 255
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdCoxinhaDaAsa * adultos) + (qtdCoxinhaDaAsa / 2 * criancas)
        coxinhadaasali.innerHTML = `<p> ${(total / 1000).toFixed(2)}kg de Coxinha da Asa</p>`
        coxinhadaasali.style.display="block"
        console.log(qtdCoxinhaDaAsa)
    }
    else if (duracaocheck.checked && coxinhaDaAsa.checked && totalChecks == 2) {
        qtdCoxinhaDaAsa = 375
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdCoxinhaDaAsa * adultos) + (qtdCoxinhaDaAsa / 2 * criancas)
        coxinhadaasali.innerHTML = `<p> ${(total / 1000).toFixed(2)}kg de Coxinha da Asa</p>`
        coxinhadaasali.style.display="block"
        console.log(qtdCoxinhaDaAsa)
    }

    else if (duracaocheck.checked && coxinhaDaAsa.checked) {
        qtdCoxinhaDaAsa = 700
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdCoxinhaDaAsa * adultos) + (qtdCoxinhaDaAsa / 2 * criancas)
        coxinhadaasali.innerHTML = `<p> ${(total / 1000).toFixed(2)}kg de Coxinha da Asa</p>`
        coxinhadaasali.style.display="block"
        console.log(qtdCoxinhaDaAsa)
    }

    //ADICIONAR QUANTIDADE DE LINGUIÇA COM A DURAÇÃO COM MENOS DE 6 HORAS
    else if (coxinhaDaAsa.checked && totalChecks == 5) {
        qtdCoxinhaDaAsa = 120;
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdCoxinhaDaAsa * adultos) + (qtdCoxinhaDaAsa / 2 * criancas)
        coxinhadaasali.innerHTML = `<p> ${(total / 1000).toFixed(2)}kg de Coxinha da Asa</p>`
        coxinhadaasali.style.display="block"
        console.log(qtdCoxinhaDaAsa)
    }

    else if (coxinhaDaAsa.checked && totalChecks == 4) {
        qtdCoxinhaDaAsa = 150;
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdCoxinhaDaAsa * adultos) + (qtdCoxinhaDaAsa / 2 * criancas)
        coxinhadaasali.innerHTML = `<p> ${(total / 1000).toFixed(2)}kg de Coxinha da Asa</p>`
        coxinhadaasali.style.display="block"
        console.log(qtdCoxinhaDaAsa)
    }
    else if (coxinhaDaAsa.checked && totalChecks == 3) {
        qtdCoxinhaDaAsa = 200;
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdCoxinhaDaAsa * adultos) + (qtdCoxinhaDaAsa / 2 * criancas)
        coxinhadaasali.innerHTML = `<p> ${(total / 1000).toFixed(2)}kg de Coxinha da Asa</p>`
        coxinhadaasali.style.display="block"
        console.log(qtdCoxinhaDaAsa)
    }

    else if (coxinhaDaAsa.checked && totalChecks == 2) {
        qtdCoxinhaDaAsa = 350;
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdCoxinhaDaAsa * adultos) + (qtdCoxinhaDaAsa / 2 * criancas)
        coxinhadaasali.innerHTML = `<p> ${(total / 1000).toFixed(2)}kg de Coxinha da Asa</p>`
        coxinhadaasali.style.display="block"
        console.log(qtdCoxinhaDaAsa)
    }

    else if (coxinhaDaAsa.checked) {
        qtdCoxinhaDaAsa = 600;
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdCoxinhaDaAsa * adultos) + (qtdCoxinhaDaAsa / 2 * criancas)
        coxinhadaasali.innerHTML = `<p> ${(total / 1000).toFixed(2)}kg de Coxinha da Asa</p>`
        coxinhadaasali.style.display="block"
        console.log(qtdCoxinhaDaAsa)
    }

}















//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ADD PICANHA SUINA
let qtdPicanhaSuina


function addQtdPicanhaSuina(duracaocheck) {
    //ADICIONAR QUANTIDADE DE PICANHA COM MAIS DE 6 HORAS


    if (duracaocheck.checked && picanhaSuina.checked && totalChecks == 5) {
        qtdPicanhaSuina = 125
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdPicanhaSuina * adultos) + (qtdPicanhaSuina / 2 * criancas)
        picanhasuinali.innerHTML = `<p> ${(total / 1000).toFixed(2)}kg de Picanha da Suina</p>`
        picanhasuinali.style.display="block"
        console.log(qtdPicanhaSuina)
    }
    else if (duracaocheck.checked && picanhaSuina.checked && totalChecks == 4) {
        qtdPicanhaSuina = 150
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdPicanhaSuina * adultos) + (qtdPicanhaSuina / 2 * criancas)
        picanhasuinali.innerHTML = `<p> ${(total / 1000).toFixed(2)}kg de Picanha da Suina</p>`
        picanhasuinali.style.display="block"
        console.log(qtdPicanhaSuina)

    }
    else if (duracaocheck.checked && picanhaSuina.checked && totalChecks == 3) {
        qtdPicanhaSuina = 205
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdPicanhaSuina * adultos) + (qtdPicanhaSuina / 2 * criancas)
        picanhasuinali.innerHTML = `<p> ${(total / 1000).toFixed(2)}kg de Picanha da Suina</p>`
        picanhasuinali.style.display="block"
        console.log(qtdPicanhaSuina)
    }
    else if (duracaocheck.checked && picanhaSuina.checked && totalChecks == 2) {
        qtdPicanhaSuina = 350
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdPicanhaSuina * adultos) + (qtdPicanhaSuina / 2 * criancas)
        picanhasuinali.innerHTML = `<p> ${(total / 1000).toFixed(2)}kg de Picanha da Suina</p>`
        picanhasuinali.style.display="block"
        console.log(qtdPicanhaSuina)
    }

    else if (duracaocheck.checked && picanhaSuina.checked) {
        qtdPicanhaSuina = 700
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdPicanhaSuina * adultos) + (qtdPicanhaSuina / 2 * criancas)
        picanhasuinali.innerHTML = `<p> ${(total / 1000).toFixed(2)}kg de Picanha da Suina</p>`
        picanhasuinali.style.display="block"
        console.log(qtdPicanhaSuina)
    }

    //ADICIONAR QUANTIDADE DE PICANHA SUINA COM A DURAÇÃO COM MENOS DE 6 HORAS
    else if (picanhaSuina.checked && totalChecks == 5) {
        qtdPicanhaSuina = 120;
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdPicanhaSuina * adultos) + (qtdPicanhaSuina / 2 * criancas)
        picanhasuinali.innerHTML = `<p> ${(total / 1000).toFixed(2)}kg de Picanha da Suina</p>`
        picanhasuinali.style.display="block"
        console.log(qtdPicanhaSuina)
    }

    else if (picanhaSuina.checked && totalChecks == 4) {
        qtdPicanhaSuina = 150;
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdPicanhaSuina * adultos) + (qtdPicanhaSuina / 2 * criancas)
        picanhasuinali.innerHTML = `<p> ${(total / 1000).toFixed(2)}kg de Picanha da Suina</p>`
        picanhasuinali.style.display="block"
        console.log(qtdPicanhaSuina)
    }

    else if (picanhaSuina.checked && totalChecks == 3) {
        qtdPicanhaSuina = 200;
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdPicanhaSuina * adultos) + (qtdPicanhaSuina / 2 * criancas)
        picanhasuinali.innerHTML = `<p> ${(total / 1000).toFixed(2)}kg de Picanha da Suina</p>`
        picanhasuinali.style.display="block"
        console.log(qtdPicanhaSuina)
    }

    else if (picanhaSuina.checked && totalChecks == 2) {
        qtdPicanhaSuina = 350;
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdPicanhaSuina * adultos) + (qtdPicanhaSuina / 2 * criancas)
        picanhasuinali.innerHTML = `<p> ${(total / 1000).toFixed(2)}kg de Picanha da Suina</p>`
        picanhasuinali.style.display="block"
        console.log(qtdPicanhaSuina)
    }

    else if (picanhaSuina.checked) {
        qtdPicanhaSuina = 600;
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdPicanhaSuina * adultos) + (qtdPicanhaSuina / 2 * criancas)
        picanhasuinali.innerHTML = `<p> ${(total / 1000).toFixed(2)}kg de Picanha da Suina</p>`
        picanhasuinali.style.display="block"
        console.log(qtdPicanhaSuina)
    }
}











///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ADICIONAR COSTELA SUINA
let qtdCostelaSuina

function addQtdCostelaSuina(duracaocheck) {
    //ADICIONAR QUANTIDADE DE PICANHA COM MAIS DE 6 HORAS


    if (duracaocheck.checked && costelaSuina.checked && totalChecks == 5) {
        qtdCostelaSuina = 125
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdCostelaSuina * adultos) + (qtdCostelaSuina / 2 * criancas)
        costelasuinali.innerHTML = `<p> ${(total / 1000).toFixed(2)}kg de Costela da Suina</p>`
        costelasuinali.style.display="block"
        console.log(qtdCostelaSuina)
    }
    else if (duracaocheck.checked && costelaSuina.checked && totalChecks == 4) {
        qtdCostelaSuina = 150
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdCostelaSuina * adultos) + (qtdCostelaSuina / 2 * criancas)
        costelasuinali.innerHTML = `<p> ${(total / 1000).toFixed(2)}kg de Costela da Suina</p>`
        costelasuinali.style.display="block"
        console.log(qtdCostelaSuina)

    }
    else if (duracaocheck.checked && costelaSuina.checked && totalChecks == 3) {
        qtdCostelaSuina = 205
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdCostelaSuina * adultos) + (qtdCostelaSuina / 2 * criancas)
        costelasuinali.innerHTML = `<p> ${(total / 1000).toFixed(2)}kg de Costela da Suina</p>`
        costelasuinali.style.display="block"
        console.log(qtdCostelaSuina)
    }
    else if (duracaocheck.checked && costelaSuina.checked && totalChecks == 2) {
        qtdCostelaSuina = 350
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdCostelaSuina * adultos) + (qtdCostelaSuina / 2 * criancas)
        costelasuinali.innerHTML = `<p> ${(total / 1000).toFixed(2)}kg de Costela da Suina</p>`
        costelasuinali.style.display="block"
        console.log(qtdCostelaSuina)
    }

    else if (duracaocheck.checked && costelaSuina.checked) {
        qtdCostelaSuina = 700
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdCostelaSuina * adultos) + (qtdCostelaSuina / 2 * criancas)
        costelasuinali.innerHTML = `<p> ${(total / 1000).toFixed(2)}kg de Costela da Suina</p>`
        costelasuinali.style.display="block"
        console.log(qtdCostelaSuina)
    }

    //ADICIONAR QUANTIDADE DE COSTELA SUINA COM A DURAÇÃO COM MENOS DE 6 HORAS


    else if (costelaSuina.checked && totalChecks == 5) {
        qtdCostelaSuina = 120;
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdCostelaSuina * adultos) + (qtdCostelaSuina / 2 * criancas)
        costelasuinali.innerHTML = `<p> ${(total / 1000).toFixed(2)}kg de Costela da Suina</p>`
        costelasuinali.style.display="block"
        console.log(qtdCostelaSuina)
    }
    else if (costelaSuina.checked && totalChecks == 4) {
        qtdCostelaSuina = 150;
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdCostelaSuina * adultos) + (qtdCostelaSuina / 2 * criancas)
        costelasuinali.innerHTML = `<p> ${(total / 1000).toFixed(2)}kg de Costela da Suina</p>`
        costelasuinali.style.display="block"
        console.log(qtdCostelaSuina)
    }
    else if (costelaSuina.checked && totalChecks == 3) {
        qtdCostelaSuina = 200;
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdCostelaSuina * adultos) + (qtdCostelaSuina / 2 * criancas)
        costelasuinali.innerHTML = `<p> ${(total / 1000).toFixed(2)}kg de Costela da Suina</p>`
        costelasuinali.style.display="block"
        console.log(qtdCostelaSuina)
    }

    else if (costelaSuina.checked && totalChecks == 2) {
        qtdCostelaSuina = 350;
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdCostelaSuina * adultos) + (qtdCostelaSuina / 2 * criancas)
        costelasuinali.innerHTML = `<p> ${(total / 1000).toFixed(2)}kg de Costela da Suina</p>`
        costelasuinali.style.display="block"
        console.log(qtdCostelaSuina)
    }

    else if (costelaSuina.checked) {
        qtdCostelaSuina = 600;
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdCostelaSuina * adultos) + (qtdCostelaSuina / 2 * criancas)
        costelasuinali.innerHTML = `<p> ${(total / 1000).toFixed(2)}kg de Costela da Suina</p>`
        costelasuinali.style.display="block"
        console.log(qtdCostelaSuina)
    }
}


//ÁGUA
let qtdAgua
function addQtdAgua(duracaocheck) {

    //ADICIONAR AGUA COM MAIS DE 6 HORAS
    if (duracaocheck.checked && agua.checked) {
        qtdAgua = 1000
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdAgua * adultos) + (qtdAgua / 2 * criancas)
        aguali.innerHTML = `<p> ${(total / 1000).toFixed(2)}L de Agua </p>`
        aguali.style.display = "block"
        console.log(qtdAgua)
    }
    else if (agua.checked) {
        qtdAgua = 700   
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdAgua * adultos) + (qtdAgua / 2 * criancas)
        aguali.innerHTML = `<p>${(total / 1000).toFixed(2)}L de Agua </p>`
        aguali.style.display = "block"
        console.log(qtdAgua)
    }
}



//SUCO
let QtdSuco
function addQtdSuco() {
    //ADICIONAR SUCO

    if (suco.checked && totalchecksBebidas == 4) {
        QtdSuco = 400
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (QtdSuco * adultos) + (QtdSuco / 2 * criancas)
        sucoli.innerHTML = `<p>${(total / 1000).toFixed(2)}L de Suco </p>`
        sucoli.style.display = "block"
        console.log(QtdSuco)
    }

    else if (suco.checked && totalchecksBebidas == 3) {
        QtdSuco = 500
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (QtdSuco * adultos) + (QtdSuco / 2 * criancas)
        sucoli.innerHTML = `<p>${(total / 1000).toFixed(2)}L de Suco </p>`
        sucoli.style.display = "block"
        console.log(QtdSuco)
    }
    else if (suco.checked && totalchecksBebidas == 2) {
        QtdSuco = 700
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (QtdSuco * adultos) + (QtdSuco / 2 * criancas)
        sucoli.innerHTML = `<p>${(total / 1000).toFixed(2)}L de Suco </p>`
        sucoli.style.display = "block"
        console.log(QtdSuco)
    }
    else if (suco.checked) {
        QtdSuco = 1000
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (QtdSuco * adultos) + (QtdSuco / 2 * criancas)
        sucoli.innerHTML = `<p> ${(total / 1000).toFixed(2)}L de Suco </p>`
        sucoli.style.display = "block"
        console.log(QtdSuco)
    }
}


//REFRIGERANTE
let QtdRefrigerante
function addQtdRefrigerante() {

    //ADICIONAR REFRIGERANTE

    if (refrigerante.checked && totalchecksBebidas == 4) {
        QtdRefrigerante = 600
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (QtdRefrigerante * adultos) + (QtdRefrigerante / 2 * criancas)
        refrigeranteli.innerHTML = `<p>${Math.ceil(total / 2000)}pets de 2L de Refrigerante </p>`
        refrigeranteli.style.display = "block"
        console.log(QtdRefrigerante)
    }

    else if (refrigerante.checked && totalchecksBebidas == 3) {
        QtdRefrigerante = 700
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (QtdRefrigerante * adultos) + (QtdRefrigerante / 2 * criancas)
        refrigeranteli.innerHTML = `<p>${Math.ceil(total / 2000)}pets de 2L de Refrigerante </p>`
        refrigeranteli.style.display = "block"
        console.log(QtdRefrigerante)
    }
    else if (refrigerante.checked && totalchecksBebidas == 2) {
        QtdRefrigerante = 800
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (QtdRefrigerante * adultos) + (QtdRefrigerante / 2 * criancas)
        refrigeranteli.innerHTML = `<p>${Math.ceil(total / 1000)}pets de 2L de Refrigerante </p>`
        refrigeranteli.style.display = "block"
        console.log(QtdRefrigerante)
    }
    else if (refrigerante.checked) {
        QtdRefrigerante = 1000
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (QtdRefrigerante * adultos) + (QtdRefrigerante / 2 * criancas)
        refrigeranteli.innerHTML = `<p> ${Math.ceil(total / 2000)}pets de 2L de Refrigerante</p>`
        refrigeranteli.style.display = "block"
        console.log(QtdRefrigerante)
    }
}



//CERVEJA
let QtdCerveja
function addQtdCerveja() {

    //ADICIONAR REFRIGERANTE
    let adultosNaoBebem = parseInt(inputAdultosNaoB.value)

    if(adultosNaoBebem > adultos.value || adultosNaoBebem == adultos.value){ 
        cervejali.innerHTML = `<p>Ocorreu um erro ao calcular a quantidade de cerveja</p>`
        cervejali.style.display = "block"

    }

    else if (cerveja.checked && totalchecksBebidas == 4) {
        QtdCerveja = 600
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let adultosNaoBebem = parseInt(inputAdultosNaoB.value)
        let total = QtdCerveja * (adultos - adultosNaoBebem)
        cervejali.innerHTML = `<p>${Math.ceil(total / 350)}Latas de Cerveja </p>`
        cervejali.style.display = "block"
        console.log(QtdCerveja)
    }

    else if (cerveja.checked && totalchecksBebidas == 3) {
        QtdCerveja = 700
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let adultosNaoBebem = parseInt(inputAdultosNaoB.value)
        let total = QtdCerveja * (adultos - adultosNaoBebem) 
        cervejali.innerHTML = `<p>${Math.ceil(total / 350)}Latas de Cerveja </p>`
        cervejali.style.display = "block"
        console.log(QtdCerveja)
    }
    else if (cerveja.checked && totalchecksBebidas == 2) {
        QtdCerveja = 800
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let adultosNaoBebem = parseInt(inputAdultosNaoB.value)
        let total = QtdCerveja * (adultos - adultosNaoBebem)
        cervejali.innerHTML = `<p>${Math.ceil(total / 350)}Latas de Cerveja </p>`
        cervejali.style.display = "block"
        console.log(QtdCerveja)
    }
    else if (cerveja.checked) {
        QtdCerveja = 1000
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let adultosNaoBebem = parseInt(inputAdultosNaoB.value)
        let total = QtdCerveja * (adultos - adultosNaoBebem)
        cervejali.innerHTML = `<p>${Math.ceil(total / 350)}Latas de Cerveja</p>`
        cervejali.style.display = "block"
        console.log(QtdCerveja)
    }

}



/////////////////////////////////////////////////////////////////////////////
//FUNÇÃO PARA ADD QUANTIDADE DE ACOMPANHAMENTOS DE ACORDO COM A DURAÇÃO
//acompanhamentos


let qtdFarofa
function addQtdFarofa(duracaocheck) {

    //ADICIONAR FAROFA COM MAIS DE 6 HORAS
    if (duracaocheck.checked && farofa.checked) {
        qtdFarofa = 80
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdFarofa * adultos) + (qtdFarofa / 2 * criancas)
        farofali.innerHTML = `<p> ${total}g de farofa</p>`
        farofali.style.display = "block"
        console.log(qtdFarofa)
    }
    else if (farofa.checked) {
        qtdFarofa = 50
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdFarofa * adultos) + (qtdFarofa / 2 * criancas)
        farofali.innerHTML = `<p>${total}g de farofa </p>`
        farofali.style.display = "block"
        console.log(qtdFarofa)
    }
}

let qtdVinagrete
function addQtdVinagrete(duracaocheck) {

    //ADICIONAR VINAGRETE COM MAIS DE 6 HORAS
    if (duracaocheck.checked && vinagrete.checked) {
        qtdVinagrete = 100
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdVinagrete * adultos) + (qtdVinagrete / 2 * criancas)
        vinagreteli.innerHTML = `<p> ${total}g de vinagrete</p>`
        vinagreteli.style.display = "block"
        console.log(qtdVinagrete)
    }
    else if (vinagrete.checked) {
        qtdVinagrete = 80
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdVinagrete * adultos) + (qtdVinagrete / 2 * criancas)
        vinagreteli.innerHTML = `<p>${total}g de vinagrete </p>`
        vinagreteli.style.display = "block"
        console.log(qtdVinagrete)
    }
}


const adultoscerveja = document.getElementById("adultoscerveja")
function validarAdultosCerveja() {
    if(cerveja.checked){
        adultoscerveja.style.display = "block"
    }
    else{
        adultoscerveja.style.display = "none"
    }
}

cerveja.addEventListener("click", validarAdultosCerveja)





function CalcularTudo() {
    validarChecksCarnes()  
    if(adultos.value > 0 && totalChecks > 0){

    header_da_lista_cortes.style.display = "inline-block"
    header_da_lista_acompanhamentos.style.display = "inline-block"
    header_da_lista_bebidas.style.display = "inline-block"



    alerta_erro.style.display="none"
    carnebovinali.style.display="none"
    linguicali.style.display="none"
    coxinhadaasali.style.display="none"
    picanhasuinali.style.display="none"
    costelasuinali.style.display="none"
    aguali.style.display="none"
    sucoli.style.display="none"
    refrigeranteli.style.display="none"
    cervejali.style.display="none"
    farofali.style.display="none"
    vinagreteli.style.display="none"

    validarChecksBebidas()
    addQtdCarneBovina(duracaosim)
    addQtdLinguica(duracaosim)
    addQtdCoxinhaDaAsa(duracaosim)
    addQtdCostelaSuina(duracaosim)
    addQtdPicanhaSuina(duracaosim)
    addQtdAgua(duracaosim)
    addQtdSuco()
    addQtdRefrigerante()
    addQtdCerveja()
    addQtdFarofa(duracaosim)
    addQtdVinagrete(duracaosim)

}
else{
    alerta_erro.style.display="block"
    carnebovinali.style.display="none"
    linguicali.style.display="none"
    coxinhadaasali.style.display="none"
    picanhasuinali.style.display="none"
    costelasuinali.style.display="none"
    aguali.style.display="none"
    sucoli.style.display="none"
    refrigeranteli.style.display="none"
    cervejali.style.display="none"
    farofali.style.display="none"
    vinagreteli.style.display="none"
}
}