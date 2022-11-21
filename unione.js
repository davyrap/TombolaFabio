var prese = new Array();
var soldi=0;

function getPrese() { return prese }
function compra()
{
    var puntata = document.getElementById("soldi").value;
    document.getElementById("soldi").setAttribute("disabled", true);
    prese[prese.length + 1] = document.getElementById("cartella").value;
    alert("Hai acquistato la cartella n°"+document.getElementById("cartella").value+"");
    soldi= soldi+ (puntata*1);
    var totale= (soldi*1);
    soldi = totale;
    var ambo, terno, quaterna, cinquina, tombola;
    
    ambo = ( (soldi/100)*3 );  //3
    terno =  ( (soldi/100)*7 );  //7
    quaterna = ( (soldi/100)*15 ); //15
    cinquina =  ( (soldi/100)*30 ); //30
    tombola =  ( (soldi/100)*45 ); //45

    ambo = ambo.toFixed(2);
    terno = terno.toFixed(2);
    quaterna = quaterna.toFixed(2);
    cinquina = cinquina.toFixed(2);
    tombola = tombola.toFixed(2);

    document.getElementById("INpuntata_1").value = ambo;
    document.getElementById("INpuntata_2").value = terno;
    document.getElementById("INpuntata_3").value = quaterna;
    document.getElementById("INpuntata_4").value = cinquina;
    document.getElementById("INpuntata_5").value = tombola;
}
