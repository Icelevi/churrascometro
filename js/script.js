
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

//CHECKBOX - ACOMPANHAMENTOS
const farofa = document.getElementById("farofa")
const vinagrete = document.getElementById("vinagrete")

//CHECKBOX - BEBIDAS
const agua = document.getElementById("agua")
const suco = document.getElementById("suco")
const refrigerante = document.getElementById("refrigerante")
const cerveja = document.getElementById("cerveja")

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


//VALIDAR CHECKS
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


let qtdCarneBovina
let qtdCoxinhaDaAsa
let qtdLinguica
let qtdPicanhaSuina
let qtdCostelaSuina
function addQtd(duracaocheck, cortecheck, quantidade, itemLista, tipoDeCarne, qtd1, qtd2, qtd3, qtd4, qtd5, qt6, qtd7, qtd8, qtd9, qtd10) {

    //ADICIONAR CARNE COM MAIS DE 6 HORAS
    if (duracaocheck.checked && cortecheck.checked && totalChecks == 5) {
        quantidade = qtd1
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (quantidade * adultos) + (quantidade / 2 * criancas)
        itemLista.innerHTML = `<p> ${(total / 1000).toFixed(2)}kg de ${tipoDeCarne} </p>`
        itemLista.style.display="block"
    }
    else if (duracaocheck.checked && cortecheck.checked && totalChecks == 4) {
        quantidade = qtd2
        let adultos = parseInt(inputAdultos.value);
        let criancas = parseInt(inputCriancas.value);
        let total = (quantidade * adultos) + (quantidade / 2 * criancas);
        itemLista.innerHTML = `<p> ${(total / 1000).toFixed(2)}kg de ${tipoDeCarne} </p>`;
        itemLista.style.display="block";

    }
    else if (duracaocheck.checked && cortecheck.checked && totalChecks == 3) {
        quantidade = qtd3
        let adultos = parseInt(inputAdultos.value);
        let criancas = parseInt(inputCriancas.value);
        let total = (quantidade * adultos) + (quantidade / 2 * criancas);
        itemLista.innerHTML = `<p> ${(total / 1000).toFixed(2)}kg de${tipoDeCarne} </p>`;
        itemLista.style.display="block";
    }
    else if (duracaocheck.checked && cortecheck.checked && totalChecks == 2) {
        quantidade = qtd4
        let adultos = parseInt(inputAdultos.value);
        let criancas = parseInt(inputCriancas.value);
        let total = (quantidade * adultos) + (quantidade / 2 * criancas);
        itemLista.innerHTML = `<p> ${(total / 1000).toFixed(2)}kg de ${tipoDeCarne} </p>`;
        itemLista.style.display="block";
    }

    else if (duracaocheck.checked && cortecheck.checked) {
        quantidade = qtd5
        let adultos = parseInt(inputAdultos.value);
        let criancas = parseInt(inputCriancas.value);
        let total = (quantidade * adultos) + (quantidade / 2 * criancas);
        itemLista.innerHTML = `<p> ${(total / 1000).toFixed(2)}kg de ${tipoDeCarne} </p>`;
        itemLista.style.display="block";
    }

    //ADICIONAR QUANTIDADE DE CARNE COM A DURAÇÃO COM MENOS DE 6 HORAS
    else if (cortecheck.checked && totalChecks == 5) {
        quantidade = qt6;
        let adultos = parseInt(inputAdultos.value);
        let criancas = parseInt(inputCriancas.value);
        let total = (quantidade * adultos) + (quantidade / 2 * criancas);
        itemLista.innerHTML = `<p> ${(total / 1000).toFixed(2)}kg de ${tipoDeCarne} </p>`;
        itemLista.style.display="block";
    }

    else if (cortecheck.checked && totalChecks == 4) {
        quantidade = qtd7;
        let adultos = parseInt(inputAdultos.value);
        let criancas = parseInt(inputCriancas.value);
        let total = (quantidade * adultos) + (quantidade / 2 * criancas);
        itemLista.innerHTML = `<p> ${(total / 1000).toFixed(2)}kg de ${tipoDeCarne} </p>`;
        itemLista.style.display="block";
    }

    else if (cortecheck.checked && totalChecks == 3) {
        quantidade = qtd8;
        let adultos = parseInt(inputAdultos.value);
        let criancas = parseInt(inputCriancas.value);
        let total = (quantidade * adultos) + (quantidade / 2 * criancas);
        itemLista.innerHTML = `<p> ${(total / 1000).toFixed(2)}kg de ${tipoDeCarne} </p>`;
        itemLista.style.display="block";
    }

    else if (cortecheck.checked && totalChecks == 2) {
        quantidade = qtd9;
        let adultos = parseInt(inputAdultos.value);
        let criancas = parseInt(inputCriancas.value);
        let total = (quantidade * adultos) + (quantidade / 2 * criancas);
        itemLista.innerHTML = `<p> ${(total / 1000).toFixed(2)}kg de ${tipoDeCarne} </p>`;
        itemLista.style.display="block";
    }

    else if (cortecheck.checked) {
        quantidade = qtd10;
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (quantidade * adultos) + (quantidade / 2 * criancas)
        itemLista.innerHTML = `<p> ${(total / 1000).toFixed(2)}kg de ${tipoDeCarne} </p>`
        itemLista.style.display="block"
    }
}

//SUBTRAIR ADULTOS QUE NÃO BEBEM DO TOTAL
let adultos
let AdultosQueNaoBebem 
function SubtrairAdultosQueNãoBebem(){
adultos = parseInt(inputAdultos.value)
let adultosNaoBebem = parseInt(inputAdultosNaoB.value)
AdultosQueNaoBebem = adultos - adultosNaoBebem
}



let QtdSuco
let QtdRefrigerante
let QtdCerveja
function addQtdBebida(Beber, bebida, qtdBebida, bebidali, tipoDebebida, divisorTotal, qtd1, qtd2, qtd3, qtd4) {

    if (bebida.checked && totalchecksBebidas == 4) {
        qtdBebida = qtd1
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdBebida * Beber) + (qtdBebida / 2 * criancas)
        bebidali.innerHTML = `<p>${Math.ceil(total / divisorTotal)}${tipoDebebida} </p>`
        bebidali.style.display = "block"
    }

    else if (bebida.checked && totalchecksBebidas == 3) {
        qtdBebida = qtd2
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdBebida * Beber) + (qtdBebida / 2 * criancas)
        bebidali.innerHTML = `<p>${Math.ceil(total / divisorTotal)} ${tipoDebebida} </p>`
        bebidali.style.display = "block"
    }
    else if (bebida.checked && totalchecksBebidas == 2) {
        qtdBebida = qtd3
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdBebida * Beber) + (qtdBebida / 2 * criancas)
        bebidali.innerHTML = `<p>${Math.ceil(total / divisorTotal)}${tipoDebebida} </p>`
        bebidali.style.display = "block"
    }
    else if (bebida.checked) {
        qtdBebida = qtd4
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdBebida * Beber) + (qtdBebida / 2 * criancas)
        bebidali.innerHTML = `<p> ${Math.ceil(total / divisorTotal)}${tipoDebebida} </p>`
        bebidali.style.display = "block"

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
    }
    else if (agua.checked) {
        qtdAgua = 700   
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdAgua * adultos) + (qtdAgua / 2 * criancas)
        aguali.innerHTML = `<p>${(total / 1000).toFixed(2)}L de Agua </p>`
        aguali.style.display = "block"
    }
}

//FUNÇÃO PARA ADD QUANTIDADE DE ACOMPANHAMENTOS

let qtdFarofa
function addQtdFarofa(duracaocheck) {

    if (duracaocheck.checked && farofa.checked) {
        qtdFarofa = 80
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdFarofa * adultos) + (qtdFarofa / 2 * criancas)
        farofali.innerHTML = `<p> ${total}g de farofa</p>`
        farofali.style.display = "block"
    }
    else if (farofa.checked) {
        qtdFarofa = 50
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdFarofa * adultos) + (qtdFarofa / 2 * criancas)
        farofali.innerHTML = `<p>${total}g de farofa </p>`
        farofali.style.display = "block"
    }
}

let qtdVinagrete
function addQtdVinagrete(duracaocheck) {

    if (duracaocheck.checked && vinagrete.checked) {
        qtdVinagrete = 100
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdVinagrete * adultos) + (qtdVinagrete / 2 * criancas)
        vinagreteli.innerHTML = `<p> ${total}g de vinagrete</p>`
        vinagreteli.style.display = "block"
    }
    else if (vinagrete.checked) {
        qtdVinagrete = 80
        let adultos = parseInt(inputAdultos.value)
        let criancas = parseInt(inputCriancas.value)
        let total = (qtdVinagrete * adultos) + (qtdVinagrete / 2 * criancas)
        vinagreteli.innerHTML = `<p>${total}g de vinagrete </p>`
        vinagreteli.style.display = "block"
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
    SubtrairAdultosQueNãoBebem( )
    validarChecksCarnes()  

    if(adultos > 0 && totalChecks > 0){

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

    addQtd(duracaosim, carneBovina, qtdCarneBovina, carnebovinali, "Carne Bovina", 200, 225, 255, 375, 700, 135, 165, 215, 315, 615)
    addQtd(duracaosim, coxinhaDaAsa, qtdCoxinhaDaAsa, coxinhadaasali, "Coxinha da Asa", 140, 200, 255, 375, 700, 120, 150, 200, 350, 600)
    addQtd(duracaosim, linguica, qtdLinguica, linguicali, "Linguiça", 100, 125, 230, 350, 700, 120, 150, 200, 350, 600)
    addQtd(duracaosim, picanhaSuina, qtdPicanhaSuina, picanhasuinali, "Picanha Suína", 125, 150, 205, 350, 700, 120, 150, 200, 350, 600)
    addQtd(duracaosim, costelaSuina, qtdCostelaSuina, costelasuinali, "Costela Suína", 125, 150, 205, 350, 700, 120, 150, 200, 350, 600)


    validarChecksBebidas()

    addQtdBebida(adultos, suco, QtdSuco, sucoli, "Litros Suco", 1000, 400, 500, 700, 1000)
    addQtdBebida(adultos, refrigerante, QtdRefrigerante, refrigeranteli, " pets 2L de Refrigerante", 2000, 600, 700, 800, 1000)
    addQtdBebida(AdultosQueNaoBebem, cerveja, QtdCerveja, cervejali, "Latas de Cerveja", 350, 600, 700, 800, 1000)


    addQtdAgua(duracaosim)
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
