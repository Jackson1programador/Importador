// (function(window, document) {

//     'use strict'

// Filtro do nome da parametrização para o LANÇAMENTO

    var lancamentoCompleto = document.querySelector(".lancamento-completo");
    var tabelaLancamento = document.querySelector(".tabela-lancamento");
    var trParametrização = document.querySelectorAll(".parametrizaçãoTr");
    var formLancamentoAutomatico = document.querySelector(".lancamento-automatico");

    console.log(lancamentoCompleto)
    console.log(tabelaLancamento)
    console.log(formLancamentoAutomatico)


    lancamentoCompleto[0].addEventListener("input", function(event){        
        var trParametrização = document.querySelectorAll(".parametrizaçãoTr");
        if(this.value.length > 0) {
              
              for(var i = 0; i < trParametrização.length; i++) {

                 var parametrizacaoAtual = trParametrização[i]
                 var nome = parametrizacaoAtual.querySelector(".nome-parametrização").textContent

                 var expressao = new RegExp(this.value,);

                 !expressao.test(nome) ? parametrizacaoAtual.classList.add("invisivel") :parametrizacaoAtual.classList.remove("invisivel")           
            }
       } 
       else {
            for(var i = 0; i < trParametrização.length; i++) {
              var parametrizacaoAtual = trParametrização[i]
              parametrizacaoAtual.classList.remove("invisivel") 
            }
       }
    })


// Traazendo informações de lançamento automático
tabela.addEventListener("click", function(event){

    var laçamentoAutomatico = {
        debito: event.target.parentNode.querySelector(".debito-parametrização"),
        credito: event.target.parentNode.querySelector(".credito-parametrização"),
        historico: event.target.parentNode.querySelector(".historico-parametrização"),
        nome: event.target.parentNode.querySelector(".nome-parametrização")

    }

    formLancamentoAutomatico[0].value = laçamentoAutomatico.debito.textContent
    formLancamentoAutomatico[1].value = laçamentoAutomatico.credito.textContent
    formLancamentoAutomatico[2].value = laçamentoAutomatico.historico.textContent

    lancamentoCompleto[0].value = laçamentoAutomatico.nome.textContent


})

// enviando lançamento

lancamentoCompleto[4].addEventListener("click", function(event){

    var objetoLançamentoCompleto = {
        nome: lancamentoCompleto[0].value,
        debito: formLancamentoAutomatico[0].value,
        credito: formLancamentoAutomatico[1].value,
        hisotico: formLancamentoAutomatico[2].value,
        valor: lancamentoCompleto[1].value,
        data: lancamentoCompleto[2].value,
        complementoHistorico: lancamentoCompleto[3].value
        
    }
    var erroData = document.querySelector("#erro-data");
    var erroValor = document.querySelector("#erro-valor");
    var erroDebito = document.querySelector("#erro-debito");
    var erroCredito = document.querySelector("#erro-credito");
    var erroNome = document.querySelector("#erro-nome");
    var erroHistorico = document.querySelector("#erro-historico");
     
    var validandoData = new RegExp (/\d\d\/\d\d\/\d\d\d\d/);
    var validandoValor = new RegExp (/(\d)+.?(\d)+/)
    if(!validandoData.test(objetoLançamentoCompleto.data)) {

        return erroData.classList.remove("invisivel")
    }
    if(!validandoValor.test(objetoLançamentoCompleto.valor)) {
        return erroValor.classList.remove("invisivel")
    }
    if(!objetoLançamentoCompleto.nome.length > 0 ) {
        return erroNome.classList.remove("invisivel")
    }
    if(!objetoLançamentoCompleto.debito.length > 0 ) {
        return erroDebito.classList.remove("invisivel")
    }
    if(!objetoLançamentoCompleto.credito.length > 0 ) {
        return erroCredito.classList.remove("invisivel")
    }
    if(!objetoLançamentoCompleto.hisotico.length > 0 ) {
        return erroHistorico.classList.remove("invisivel")
    }
    

     var lançamentoTr = document.createElement("tr");
     lançamentoTr.classList.add("lançamentoTr");

        var nomeTd = document.createElement("th");
        nomeTd.classList.add("nome-lançamento"); 
       
        var debitoTd = document.createElement("td");
        debitoTd.classList.add("debito-lançamento");

        var creditoTd = document.createElement("td");
        creditoTd.classList.add("credito-lançamento");

        var historicoTd = document.createElement("td");
        historicoTd.classList.add("historico-lançamento");

        var valorTd = document.createElement("td");
        valorTd.classList.add("valor-lançamento");

        var dataTd = document.createElement("td");
        dataTd.classList.add("data-lançamento");


        nomeTd.textContent = objetoLançamentoCompleto.nome;
        debitoTd.textContent = objetoLançamentoCompleto.debito;
        creditoTd.textContent = objetoLançamentoCompleto.credito;
        historicoTd.textContent = `${objetoLançamentoCompleto.hisotico} ${objetoLançamentoCompleto.complementoHistorico}`;
        valorTd.textContent = objetoLançamentoCompleto.valor;
        dataTd.textContent = objetoLançamentoCompleto.data;


        lançamentoTr.appendChild(nomeTd);
        lançamentoTr.appendChild(dataTd);
        lançamentoTr.appendChild(valorTd);
        lançamentoTr.appendChild(debitoTd);
        lançamentoTr.appendChild(creditoTd);
        lançamentoTr.appendChild(historicoTd);


        tabelaLancamento.appendChild(lançamentoTr);
    
    
        lancamentoCompleto.reset();
        formLancamentoAutomatico.reset();


        erroData.classList.add("invisivel")
        erroValor.classList.add("invisivel")
        erroNome.classList.add("invisivel")
        erroDebito.classList.add("invisivel")
        erroCredito.classList.add("invisivel")
        erroHistorico.classList.add("invisivel")
   
})





// })(window, document);
