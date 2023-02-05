var formularioCompleto = document.querySelector(".formulario-completo")
var tabela = document.querySelector(".tabela-parametrizacao");



formularioCompleto[4].addEventListener("click", function(event){
    event.preventDefault(formularioCompleto[4])
    
    var parametrizacao = criandoParametrizacao (formularioCompleto[0], formularioCompleto[1], formularioCompleto[2], formularioCompleto[3])

  
    var parametrizacaoTr = incluindoParametrizacaoTabela(parametrizacao.nome, parametrizacao.debito, parametrizacao.credito, parametrizacao.historico)

    
    tabela.appendChild(parametrizacaoTr)
   

    formularioCompleto.reset();
    return console.log(parametrizacao)
})












function criandoParametrizacao (inputNome, inputDebito, inputCredito, inputHistorico) {
    var parametrizacao = {
        nome: inputNome.value,
        debito: inputDebito.value,
        credito: inputCredito.value,
        historico: inputHistorico.value
    }

    var erroDebitoParametrizacao = document.querySelector("#erro-debito-parametrizacao");
    var erroCreditoParametrizacao = document.querySelector("#erro-credito-parametrizacao");
    var erroNomeParametrizacao = document.querySelector("#erro-nome-parametrizacao");
    var erroHistoricoParametrizacao = document.querySelector("#erro-historico-parametrizacao");
     

    if(!parametrizacao.nome.length > 0 ) {
        return erroNomeParametrizacao.classList.remove("invisivel")
    }
    if(!parametrizacao.debito.length > 0 ) {
        return erroDebitoParametrizacao.classList.remove("invisivel")
    }
    if(!parametrizacao.credito.length > 0 ) {
        return erroCreditoParametrizacao.classList.remove("invisivel")
    }
    if(!parametrizacao.historico.length > 0 ) {
        return erroHistoricoParametrizacao.classList.remove("invisivel")
    }

    erroNomeParametrizacao.classList.add("invisivel")
    erroDebitoParametrizacao.classList.add("invisivel")
    erroCreditoParametrizacao.classList.add("invisivel")
    erroHistoricoParametrizacao.classList.add("invisivel")

     return parametrizacao

}

function incluindoParametrizacaoTabela (nome, debito, credito, historico) {

    var parametrizacaoTr = document.createElement("tr");
    parametrizacaoTr.classList.add("parametrizaçãoTr");

        var nomeTh = document.createElement("th");
        nomeTh.classList.add("nome-parametrização"); 
       
        var debitoTd = document.createElement("td");
        debitoTd.classList.add("debito-parametrização");

        var creditoTd = document.createElement("td");
        creditoTd.classList.add("credito-parametrização");

        var historicoTd = document.createElement("td");
        historicoTd.classList.add("historico-parametrização");


        nomeTh.textContent = nome;
        debitoTd.textContent = debito;
        creditoTd.textContent = credito;
        historicoTd.textContent = historico;

    parametrizacaoTr.appendChild(nomeTh);
    parametrizacaoTr.appendChild(debitoTd);
    parametrizacaoTr.appendChild(creditoTd);
    parametrizacaoTr.appendChild(historicoTd);



    return parametrizacaoTr

}






