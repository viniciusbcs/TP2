var titulo = d3.select("h2")
                .style("color", "blue")
                .text("BELO HORIZONTE");


        
d3.csv("teste.csv").then(function(data){  // Abre o arquivo
    
    // Quantidade de acidente por regiao:
    var total0 = 0; // OESTE
    var total1 = 0; // VENDA NOVA
    var total2 = 0; // PAMPULHA
    var total3 = 0; // CENTRO-SUL
    var total4 = 0; // LESTE
    var total5 = 0; // BARREIRO
    var total6 = 0; // NOROESTE
    var total7 = 0; // NORDESTE
    var total8 = 0; // NORTE

    var totaisvec = [total0, total1, total2, total3, total4, total5, total6, total7, total8]; // Total de acidentes por regiao

    // Conta quantidade de acidentes por regiao:
    for(var counter = 0; counter < data.length; counter++) {
        if(data[counter].desc_regional == "OESTE"){
            total0 += 1;  
        } else if(data[counter].desc_regional == "VENDANOVA"){
            total1 += 1;
        } else if(data[counter].desc_regional == "PAMPULHA"){
            total2 += 1;
        } else if(data[counter].desc_regional == "CENTRO-SUL"){
            total3 += 1;
        } else if(data[counter].desc_regional == "LESTE"){
            total4 += 1;
        } else if(data[counter].desc_regional == "BARREIRO"){
            total5 += 1;
        } else if(data[counter].desc_regional == "NOROESTE"){
            total6 += 1;
        } else if(data[counter].desc_regional == "NORDESTE"){
            total7 += 1;
        } else if(data[counter].desc_regional == "NORTE"){
            total8 += 1;
        }
    }

    // Imprime a quantidade de acidentes no console (serve apenas para o desenvolvimento)
    console.log(total0);
    console.log(total1);
    console.log(total2);
    console.log(total3);
    console.log(total4);
    console.log(total5);
    console.log(total6);
    console.log(total7);
    console.log(total8);

    // Tipos de acidente por regiao:
    var oeste0 = 0; // CHOQUE MECANICO COM VITIMA
    var oeste1 = 0; // ABALROAMENTO COM VITIMA
    var oeste2 = 0; // ATROPELAMENTO DE PESSOA SEM VITIMA FATAL
    var oeste3 = 0; // QUEDA DE PESSOA DE VEICULO
    var oeste4 = 0; // COLISAO DE VEICULOS COM VITIMA
    var oeste5 = 0; // CAPOTAMENTO/TOMBAMENTO COM VITIMA
    var oeste6 = 0; // OUTROS COM VITIMA

    var vendanova0 = 0; // CHOQUE MECANICO COM VITIMA
    var vendanova1 = 0; // ABALROAMENTO COM VITIMA
    var vendanova2 = 0; // ATROPELAMENTO DE PESSOA SEM VITIMA FATAL
    var vendanova3 = 0; // QUEDA DE PESSOA DE VEICULO
    var vendanova4 = 0; // COLISAO DE VEICULOS COM VITIMA
    var vendanova5 = 0; // CAPOTAMENTO/TOMBAMENTO COM VITIMA
    var vendanova6 = 0; // OUTROS COM VITIMA

    var pampulha0 = 0; // CHOQUE MECANICO COM VITIMA
    var pampulha1 = 0; // ABALROAMENTO COM VITIMA
    var pampulha2 = 0; // ATROPELAMENTO DE PESSOA SEM VITIMA FATAL
    var pampulha3 = 0; // QUEDA DE PESSOA DE VEICULO
    var pampulha4 = 0; // COLISAO DE VEICULOS COM VITIMA
    var pampulha5 = 0; // CAPOTAMENTO/TOMBAMENTO COM VITIMA
    var pampulha6 = 0; // OUTROS COM VITIMA

    var centrosul0 = 0; // CHOQUE MECANICO COM VITIMA
    var centrosul1 = 0; // ABALROAMENTO COM VITIMA
    var centrosul2 = 0; // ATROPELAMENTO DE PESSOA SEM VITIMA FATAL
    var centrosul3 = 0; // QUEDA DE PESSOA DE VEICULO
    var centrosul4 = 0; // COLISAO DE VEICULOS COM VITIMA
    var centrosul5 = 0; // CAPOTAMENTO/TOMBAMENTO COM VITIMA
    var centrosul6 = 0; // OUTROS COM VITIMA

    var leste0 = 0; // CHOQUE MECANICO COM VITIMA
    var leste1 = 0; // ABALROAMENTO COM VITIMA
    var leste2 = 0; // ATROPELAMENTO DE PESSOA SEM VITIMA FATAL
    var leste3 = 0; // QUEDA DE PESSOA DE VEICULO
    var leste4 = 0; // COLISAO DE VEICULOS COM VITIMA
    var leste5 = 0; // CAPOTAMENTO/TOMBAMENTO COM VITIMA
    var leste6 = 0; // OUTROS COM VITIMA

    var barreiro0 = 0; // CHOQUE MECANICO COM VITIMA
    var barreiro1 = 0; // ABALROAMENTO COM VITIMA
    var barreiro2 = 0; // ATROPELAMENTO DE PESSOA SEM VITIMA FATAL
    var barreiro3 = 0; // QUEDA DE PESSOA DE VEICULO
    var barreiro4 = 0; // COLISAO DE VEICULOS COM VITIMA
    var barreiro5 = 0; // CAPOTAMENTO/TOMBAMENTO COM VITIMA
    var barreiro6 = 0; // OUTROS COM VITIMA

    var noroeste0 = 0; // CHOQUE MECANICO COM VITIMA
    var noroeste1 = 0; // ABALROAMENTO COM VITIMA
    var noroeste2 = 0; // ATROPELAMENTO DE PESSOA SEM VITIMA FATAL
    var noroeste3 = 0; // QUEDA DE PESSOA DE VEICULO
    var noroeste4 = 0; // COLISAO DE VEICULOS COM VITIMA
    var noroeste5 = 0; // CAPOTAMENTO/TOMBAMENTO COM VITIMA
    var noroeste6 = 0; // OUTROS COM VITIMA

    var nordeste0 = 0; // CHOQUE MECANICO COM VITIMA
    var nordeste1 = 0; // ABALROAMENTO COM VITIMA
    var nordeste2 = 0; // ATROPELAMENTO DE PESSOA SEM VITIMA FATAL
    var nordeste3 = 0; // QUEDA DE PESSOA DE VEICULO
    var nordeste4 = 0; // COLISAO DE VEICULOS COM VITIMA
    var nordeste5 = 0; // CAPOTAMENTO/TOMBAMENTO COM VITIMA
    var nordeste6 = 0; // OUTROS COM VITIMA

    var norte0 = 0; // CHOQUE MECANICO COM VITIMA
    var norte1 = 0; // ABALROAMENTO COM VITIMA
    var norte2 = 0; // ATROPELAMENTO DE PESSOA SEM VITIMA FATAL
    var norte3 = 0; // QUEDA DE PESSOA DE VEICULO
    var norte4 = 0; // COLISAO DE VEICULOS COM VITIMA
    var norte5 = 0; // CAPOTAMENTO/TOMBAMENTO COM VITIMA
    var norte6 = 0; // OUTROS COM VITIMA


    // Conta quantos tipos de acidente houve em cada regiao
    for(var counter = 0; counter < data.length; counter++) { 
        if(data[counter].desc_regional == "OESTE" && data[counter].desc_tipo_acidente == "CHOQUEMECANICOCOMVITIMA"){                   // OESTE
            oeste0 += 1;
        } else if(data[counter].desc_regional == "OESTE" && data[counter].desc_tipo_acidente == "ABALROAMENTOCOMVITIMA") {
            oeste1 += 1;
        } else if(data[counter].desc_regional == "OESTE" && data[counter].desc_tipo_acidente == "ATROPELAMENTODEPESSOASEMVITIMAFATAL") {
            oeste2 +=1;
        } else if(data[counter].desc_regional == "OESTE" && data[counter].desc_tipo_acidente == "QUEDADEPESSOADEVEICULO") {
            oeste3 += 1;
        } else if(data[counter].desc_regional == "OESTE" && data[counter].desc_tipo_acidente == "COLISAODEVEICULOSCOMVITIMA") {
            oeste4 += 1;
        } else if(data[counter].desc_regional == "OESTE" && data[counter].desc_tipo_acidente == "CAPOTAMENTO/TOMBAMENTOCOMVITIMA") {
            oeste5 += 1;
        } else if(data[counter].desc_regional == "OESTE" && data[counter].desc_tipo_acidente == "OUTROSCOMVITIMA") {
            oeste6 += 1;
        } else if(data[counter].desc_regional == "VENDANOVA" && data[counter].desc_tipo_acidente == "CHOQUEMECANICOCOMVITIMA"){        // VENDA NOVA
            vendanova0 += 1;
        } else if(data[counter].desc_regional == "VENDANOVA" && data[counter].desc_tipo_acidente == "ABALROAMENTOCOMVITIMA") {
            vendanova1 += 1;
        } else if(data[counter].desc_regional == "VENDANOVA" && data[counter].desc_tipo_acidente == "ATROPELAMENTODEPESSOASEMVITIMAFATAL") {
            vendanova2 +=1;
        } else if(data[counter].desc_regional == "VENDANOVA" && data[counter].desc_tipo_acidente == "QUEDADEPESSOADEVEICULO") {
            vendanova3 += 1;
        } else if(data[counter].desc_regional == "VENDANOVA" && data[counter].desc_tipo_acidente == "COLISAODEVEICULOSCOMVITIMA") {
            vendanova4 += 1;
        } else if(data[counter].desc_regional == "VENDANOVA" && data[counter].desc_tipo_acidente == "CAPOTAMENTO/TOMBAMENTOCOMVITIMA") {
            vendanova5 += 1;
        } else if(data[counter].desc_regional == "VENDANOVA" && data[counter].desc_tipo_acidente == "OUTROSCOMVITIMA") {
            vendanova6 += 1;
        } else if(data[counter].desc_regional == "PAMPULHA" && data[counter].desc_tipo_acidente == "CHOQUEMECANICOCOMVITIMA"){         // PAMPULHA
            pampulha0 += 1;
        } else if(data[counter].desc_regional == "PAMPULHA" && data[counter].desc_tipo_acidente == "ABALROAMENTOCOMVITIMA") {
            pampulha1 += 1;
        } else if(data[counter].desc_regional == "PAMPULHA" && data[counter].desc_tipo_acidente == "ATROPELAMENTODEPESSOASEMVITIMAFATAL") {
            pampulha2 +=1;
        } else if(data[counter].desc_regional == "PAMPULHA" && data[counter].desc_tipo_acidente == "QUEDADEPESSOADEVEICULO") {
            pampulha3 += 1;
        } else if(data[counter].desc_regional == "PAMPULHA" && data[counter].desc_tipo_acidente == "COLISAODEVEICULOSCOMVITIMA") {
            pampulha4 += 1;
        } else if(data[counter].desc_regional == "PAMPULHA" && data[counter].desc_tipo_acidente == "CAPOTAMENTO/TOMBAMENTOCOMVITIMA") {
            pampulha5 += 1;
        } else if(data[counter].desc_regional == "PAMPULHA" && data[counter].desc_tipo_acidente == "OUTROSCOMVITIMA") {
            pampulha6 += 1;
        } else if(data[counter].desc_regional == "CENTRO-SUL" && data[counter].desc_tipo_acidente == "CHOQUEMECANICOCOMVITIMA"){        // CENTRO-SUL
            centrosul0 += 1;
        } else if(data[counter].desc_regional == "CENTRO-SUL" && data[counter].desc_tipo_acidente == "ABALROAMENTOCOMVITIMA") {
            centrosul1 += 1;
        } else if(data[counter].desc_regional == "CENTRO-SUL" && data[counter].desc_tipo_acidente == "ATROPELAMENTODEPESSOASEMVITIMAFATAL") {
            centrosul2 +=1;
        } else if(data[counter].desc_regional == "CENTRO-SUL" && data[counter].desc_tipo_acidente == "QUEDADEPESSOADEVEICULO") {
            centrosul3 += 1;
        } else if(data[counter].desc_regional == "CENTRO-SUL" && data[counter].desc_tipo_acidente == "COLISAODEVEICULOSCOMVITIMA") {
            centrosul4 += 1;
        } else if(data[counter].desc_regional == "CENTRO-SUL" && data[counter].desc_tipo_acidente == "CAPOTAMENTO/TOMBAMENTOCOMVITIMA") {
            centrosul5 += 1;
        } else if(data[counter].desc_regional == "CENTRO-SUL" && data[counter].desc_tipo_acidente == "OUTROSCOMVITIMA") {
            centrosul6 += 1;
        } else if(data[counter].desc_regional == "LESTE" && data[counter].desc_tipo_acidente == "CHOQUEMECANICOCOMVITIMA"){             // LESTE
            leste0 += 1;
        } else if(data[counter].desc_regional == "LESTE" && data[counter].desc_tipo_acidente == "ABALROAMENTOCOMVITIMA") {
            leste1 += 1;
        } else if(data[counter].desc_regional == "LESTE" && data[counter].desc_tipo_acidente == "ATROPELAMENTODEPESSOASEMVITIMAFATAL") {
            leste2 +=1;
        } else if(data[counter].desc_regional == "LESTE" && data[counter].desc_tipo_acidente == "QUEDADEPESSOADEVEICULO") {
            leste3 += 1;
        } else if(data[counter].desc_regional == "LESTE" && data[counter].desc_tipo_acidente == "COLISAODEVEICULOSCOMVITIMA") {
            leste4 += 1;
        } else if(data[counter].desc_regional == "LESTE" && data[counter].desc_tipo_acidente == "CAPOTAMENTO/TOMBAMENTOCOMVITIMA") {
            leste5 += 1;
        } else if(data[counter].desc_regional == "LESTE" && data[counter].desc_tipo_acidente == "OUTROSCOMVITIMA") {
            leste6 += 1;
        } else if(data[counter].desc_regional == "BARREIRO" && data[counter].desc_tipo_acidente == "CHOQUEMECANICOCOMVITIMA"){          // BARREIRO
            barreiro0 += 1;
        } else if(data[counter].desc_regional == "BARREIRO" && data[counter].desc_tipo_acidente == "ABALROAMENTOCOMVITIMA") {
            barreiro1 += 1;
        } else if(data[counter].desc_regional == "BARREIRO" && data[counter].desc_tipo_acidente == "ATROPELAMENTODEPESSOASEMVITIMAFATAL") {
            barreiro2 +=1;
        } else if(data[counter].desc_regional == "BARREIRO" && data[counter].desc_tipo_acidente == "QUEDADEPESSOADEVEICULO") {
            barreiro3 += 1;
        } else if(data[counter].desc_regional == "BARREIRO" && data[counter].desc_tipo_acidente == "COLISAODEVEICULOSCOMVITIMA") {
            barreiro4 += 1;
        } else if(data[counter].desc_regional == "BARREIRO" && data[counter].desc_tipo_acidente == "CAPOTAMENTO/TOMBAMENTOCOMVITIMA") {
            barreiro5 += 1;
        } else if(data[counter].desc_regional == "BARREIRO" && data[counter].desc_tipo_acidente == "OUTROSCOMVITIMA") {
            barreiro6 += 1;
        } else if(data[counter].desc_regional == "NOROESTE" && data[counter].desc_tipo_acidente == "CHOQUEMECANICOCOMVITIMA"){          // NOROESTE
            noroeste0 += 1;
        } else if(data[counter].desc_regional == "NOROESTE" && data[counter].desc_tipo_acidente == "ABALROAMENTOCOMVITIMA") {
            noroeste1 += 1;
        } else if(data[counter].desc_regional == "NOROESTE" && data[counter].desc_tipo_acidente == "ATROPELAMENTODEPESSOASEMVITIMAFATAL") {
            noroeste2 +=1;
        } else if(data[counter].desc_regional == "NOROESTE" && data[counter].desc_tipo_acidente == "QUEDADEPESSOADEVEICULO") {
            noroeste3 += 1;
        } else if(data[counter].desc_regional == "NOROESTE" && data[counter].desc_tipo_acidente == "COLISAODEVEICULOSCOMVITIMA") {
            noroeste4 += 1;
        } else if(data[counter].desc_regional == "NOROESTE" && data[counter].desc_tipo_acidente == "CAPOTAMENTO/TOMBAMENTOCOMVITIMA") {
            noroeste5 += 1;
        } else if(data[counter].desc_regional == "NOROESTE" && data[counter].desc_tipo_acidente == "OUTROSCOMVITIMA") {
            noroeste6 += 1;
        } else if(data[counter].desc_regional == "NORDESTE" && data[counter].desc_tipo_acidente == "CHOQUEMECANICOCOMVITIMA"){          // NORDESTE
            nordeste0 += 1;
        } else if(data[counter].desc_regional == "NORDESTE" && data[counter].desc_tipo_acidente == "ABALROAMENTOCOMVITIMA") {
            nordeste1 += 1;
        } else if(data[counter].desc_regional == "NORDESTE" && data[counter].desc_tipo_acidente == "ATROPELAMENTODEPESSOASEMVITIMAFATAL") {
            nordeste2 += 1;
        } else if(data[counter].desc_regional == "NORDESTE" && data[counter].desc_tipo_acidente == "QUEDADEPESSOADEVEICULO") {
            nordeste3 += 1;
        } else if(data[counter].desc_regional == "NORDESTE" && data[counter].desc_tipo_acidente == "COLISAODEVEICULOSCOMVITIMA") {
            nordeste4 += 1;
        } else if(data[counter].desc_regional == "NORDESTE" && data[counter].desc_tipo_acidente == "CAPOTAMENTO/TOMBAMENTOCOMVITIMA") {
            nordeste5 += 1;
        } else if(data[counter].desc_regional == "NORDESTE" && data[counter].desc_tipo_acidente == "OUTROSCOMVITIMA") {
            nordeste6 += 1;
        } else if(data[counter].desc_regional == "NORTE" && data[counter].desc_tipo_acidente == "CHOQUEMECANICOCOMVITIMA"){              // NORTE
            norte0 += 1;
        } else if(data[counter].desc_regional == "NORTE" && data[counter].desc_tipo_acidente == "ABALROAMENTOCOMVITIMA") {
            norte1 += 1;
        } else if(data[counter].desc_regional == "NORTE" && data[counter].desc_tipo_acidente == "ATROPELAMENTODEPESSOASEMVITIMAFATAL") {
            norte2 +=1;
        } else if(data[counter].desc_regional == "NORTE" && data[counter].desc_tipo_acidente == "QUEDADEPESSOADEVEICULO") {
            norte3 += 1;
        } else if(data[counter].desc_regional == "NORTE" && data[counter].desc_tipo_acidente == "COLISAODEVEICULOSCOMVITIMA") {
            norte4 += 1;
        } else if(data[counter].desc_regional == "NORTE" && data[counter].desc_tipo_acidente == "CAPOTAMENTO/TOMBAMENTOCOMVITIMA") {
            norte5 += 1;
        } else if(data[counter].desc_regional == "NORTE" && data[counter].desc_tipo_acidente == "OUTROSCOMVITIMA") {
            norte6 += 1;
        }
    }
    
    var oeste = [oeste0, oeste1, oeste2, oeste3, oeste4, oeste5, oeste6];
    var vendanova = [vendanova0, vendanova1, vendanova2, vendanova3, vendanova4, vendanova5, vendanova6];
    var pampulha = [pampulha0, pampulha1, pampulha2, pampulha3, pampulha4, pampulha5, pampulha6];
    var centrosul = [centrosul0, centrosul1, centrosul2, centrosul3, centrosul4, centrosul5, centrosul6];
    var leste = [leste0, leste1, leste2, leste3, leste4, leste5, leste6];
    var barreiro = [barreiro0, barreiro1, barreiro2, barreiro3, barreiro4, barreiro5, barreiro6];
    var noroeste = [noroeste0, noroeste1, noroeste2, noroeste3, noroeste4, noroeste5, noroeste6];
    var nordeste = [nordeste0, nordeste1, nordeste2, nordeste3, nordeste4, nordeste5, nordeste6];
    var norte = [norte0, norte1, norte2, norte3, norte4, norte5, norte6];

    // Imprime no console (apenas teste)
    console.log("Norte")
    console.log(pampulha1);

    //criando um svg, área na qual o gráfico será feito
    var width = "1000";
    var height = "1000";
    var canvas = d3.select("body")
                    .append("svg")
                    .attr("background-color", "cyan")
                    .attr("margin-left", "auto")
                    .attr("width", width)
                    .attr("height", height);

    // Adicionando a imagem SVG
    var mapa = canvas.append("image")
                        .attr("xlink:href", "bh2.svg");

    // Atribuindo os nomes das regioes nos mapas
    var line1 = canvas.append("text")
                        .attr("x", "105")
                        .attr("y", "60")
                        .attr("fill", "blue")
                        .text("Venda Nova");
    
    var line2 = canvas.append("text")
                        .attr("x", "110")
                        .attr("y", "150")
                        .attr("fill", "blue")
                        .text("Pampulha");
                     
    var line3 = canvas.append("text")
                        .attr("x", "90")
                        .attr("y", "240")
                        .attr("fill", "blue")
                        .text("Noroeste");

    var line4 = canvas.append("text")
                        .attr("x", "110")
                        .attr("y", "295")
                        .attr("fill", "white")
                        .text("Oeste");
                        
    var line5 = canvas.append("text")
                        .attr("x", "60")
                        .attr("y", "380")
                        .attr("fill", "blue")
                        .text("Barreiro");

    var line6 = canvas.append("text")
                        .attr("x", "180")
                        .attr("y", "295")
                        .attr("fill", "blue")
                        .text("Centro-Sul");

    var line7 = canvas.append("text")
                        .attr("x", "240")
                        .attr("y", "240")
                        .attr("fill", "blue")
                        .text("Leste");

    var line8 = canvas.append("text")
                        .attr("x", "205")
                        .attr("y", "90")
                        .attr("fill", "blue")
                        .text("Norte");

    var line9 = canvas.append("text")
                        .attr("x", "245")
                        .attr("y", "138")
                        .attr("fill", "blue")
                        .text("Nordeste");

    // Criando o Grafico

})