var titulo = d3.select("h2")
                .style("color", "blue")
                .text("");
        
d3.csv("teste.csv").then(function(data){  // Open file
    
    var total0 = 0; // OESTE
    var total1 = 0; // VENDA NOVA
    var total2 = 0; // PAMPULHA
    var total3 = 0; // CENTRO-SUL
    var total4 = 0; // LESTE
    var total5 = 0; // BARREIRO
    var total6 = 0; // NOROESTE
    var total7 = 0; // NORDESTE
    var total8 = 0; // NORTE

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

    console.log(total0);
    console.log(total1);
    console.log(total2);
    console.log(total3);
    console.log(total4);
    console.log(total5);
    console.log(total6);
    console.log(total7);
    console.log(total8);

    var soma0 = 0; // CHOQUE MECANICO COM VITIMA
    var soma1 = 0; // ABALROAMENTO COM VITIMA
    var soma2 = 0; // ATROPELAMENTO DE PESSOA SEM VITIMA FATAL
    var soma3 = 0; // QUEDA DE PESSOA DE VEICULO
    var soma4 = 0; // COLISAO DE VEICULOS COM VITIMA
    var soma5 = 0; // CAPOTAMENTO/TOMBAMENTO COM VITIMA
    var soma6 = 0; // OUTROS COM VITIMA

    var vendanova0 = 0;
    var vendanova1 = 0;
    var vendanova2 = 0;
    var vendanova3 = 0;
    var vendanova4 = 0;
    var vendanova5 = 0;
    var vendanova6 = 0;

    var pampulha0 = 0;
    var pampulha1 = 0;
    var pampulha2 = 0;
    var pampulha3 = 0;
    var pampulha4 = 0;
    var pampulha5 = 0;
    var pampulha6 = 0;

    var centrosul0 = 0;
    var centrosul1 = 0;
    var centrosul2 = 0;
    var centrosul3 = 0;
    var centrosul4 = 0;
    var centrosul5 = 0;
    var centrosul6 = 0;

    var leste0 = 0;
    var leste1 = 0;
    var leste2 = 0;
    var leste3 = 0;
    var leste4 = 0;
    var leste5 = 0;
    var leste6 = 0;

    var barreiro0 = 0;
    var barreiro1 = 0;
    var barreiro2 = 0;
    var barreiro3 = 0;
    var barreiro4 = 0;
    var barreiro5 = 0;
    var barreiro6 = 0;

    var noroeste0 = 0;
    var noroeste1 = 0;
    var noroeste2 = 0;
    var noroeste3 = 0;
    var noroeste4 = 0;
    var noroeste5 = 0;
    var noroeste6 = 0;

    var nordeste0 = 0;
    var nordeste1 = 0;
    var nordeste2 = 0;
    var nordeste3 = 0;
    var nordeste4 = 0;
    var nordeste5 = 0;
    var nordeste6 = 0;

    var norte0 = 0;
    var norte1 = 0;
    var norte2 = 0;
    var norte3 = 0;
    var norte4 = 0;
    var norte5 = 0;
    var norte6 = 0;

    for(var counter = 0; counter < data.length; counter++) { 
        if(data[counter].desc_regional == "OESTE" && data[counter].desc_tipo_acidente == "CHOQUEMECANICOCOMVITIMA"){                   // OESTE
            soma0 += 1;
        } else if(data[counter].desc_regional == "OESTE" && data[counter].desc_tipo_acidente == "ABALROAMENTOCOMVITIMA") {
            soma1 += 1;
        } else if(data[counter].desc_regional == "OESTE" && data[counter].desc_tipo_acidente == "ATROPELAMENTODEPESSOASEMVITIMAFATAL") {
            soma2 +=1;
        } else if(data[counter].desc_regional == "OESTE" && data[counter].desc_tipo_acidente == "QUEDADEPESSOADEVEICULO") {
            soma3 += 1;
        } else if(data[counter].desc_regional == "OESTE" && data[counter].desc_tipo_acidente == "COLISAODEVEICULOSCOMVITIMA") {
            soma4 += 1;
        } else if(data[counter].desc_regional == "OESTE" && data[counter].desc_tipo_acidente == "CAPOTAMENTO/TOMBAMENTOCOMVITIMA") {
            soma5 += 1;
        } else if(data[counter].desc_regional == "OESTE" && data[counter].desc_tipo_acidente == "OUTROSCOMVITIMA") {
            soma6 += 1;
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
            vandanova6 += 1;
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
    
    var soma = [soma0, soma1, soma2, soma3, soma4, soma5, soma6, soma7];
    var vendanova = [vendanova0, vendanova1, vendanova2, vendanova3, vendanova4, vendanova5, vendanova6];
    var pampulha = [pampulha0, pampulha1, pampulha2, pampulha3, pampulha4, pampulha5, pampulha6];
    var centrosul = [centrosul0, centrosul1, centrosul2, centrosul3, centrosul4, centrosul5, centrosul6];
    var leste = [leste0, leste1, leste2, leste3, leste4, leste5, leste6];
    var barreiro = [barreiro0, barreiro1, barreiro2, barreiro3, barreiro4, barreiro5, barreiro6];
    var noroeste = [noroeste0, noroeste1, noroeste2, noroeste3, noroeste4, noroeste5, noroeste6];
    var nordeste = [nordeste0, nordeste1, nordeste2, nordeste3, nordeste4, nordeste5, nordeste6];
    var norte = [norte0, norte1, norte2, norte3, norte4, norte5, norte6];

    console.log("TIPOS ZONA OESTE:")
    console.log(soma0);
    console.log(soma1);
    console.log(soma2);
    console.log(soma3);
    console.log(soma4);
    console.log(soma5);
    console.log(soma6);



})