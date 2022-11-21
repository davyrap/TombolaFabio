function tombola_writeln()
{
    var orizzontale, verticale, Nrighe;
    for(verticale=0; verticale<9; verticale++)
    {
        document.writeln('<tr>');
        for(orizzontale=0; orizzontale<10; orizzontale++)
        { 
            Nrighe = verticale*10 + orizzontale + 1;
            document.writeln('<td id="Nrighe'+Nrighe+'">'+Nrighe+'</td>');
            document.getElementById("Nrighe"+Nrighe+"").style.backgroundColor="#ECE9e8";
        }
        document.writeln('</tr>');
    }
}

function successione_writeln()
{
    var Natt, Npre, Nprepre;
    document.writeln(' <td id="Natt"> N. Attuale </td>');
    document.writeln(' <td id="Natt"> N. Precedente </td>');
    document.writeln(' <td id="Natt"> N. Pre-precedente </td>');

}

function cartella()
{
    var orizzontale, verticale, Nrighe;
    for(verticale=0; verticale<3; verticale++)
    {
        document.writeln('<tr>');
        for(orizzontale=0; orizzontale<5; orizzontale++)
        { 
            Nrighe = verticale*5 + orizzontale + 1;

            document.writeln('<td id="cella'+Nrighe+'">'+Nrighe+'</td>');
        }
        document.writeln('</tr>');
    } 
}

/******************************************************/
var y=0, z=0;
let sacco = new Array();
let nuovo, trovato=false, controllo=0;

function estrai()
{
    do{        
        x=Math.floor(Math.random() * 90) + 1;
        if(sacco[x-1] == x) nuovo=false;
        else nuovo=true;
    } while (nuovo==false);
    sacco[x-1] = x;
    document.getElementById("Nrighe"+x).style.backgroundColor="#F9D87F";
    
    document.getElementById("estrazione3").innerHTML = z;
    document.getElementById("estrazione2").innerHTML = y;
    document.getElementById("estrazione1").innerHTML = x;
    z= y;
    y= x;
    document.getElementById("LBLsmorfia").innerHTML = napoletana[x-1].text;
    scolora();

    
    for(var k = 1; k < 61; k++)
    {
        for (var j=0; j<15; j++)
        {
            //contemporaneamente 2 cose
            if (x == uscite[k][j]) uscite[k][j] = -1;
            if (controllo==0) controll_ambo(k);
            else if (controllo==1) controll_terno(k);
            else if (controllo==2) controll_quaterno(k);
            else if (controllo==3) controll_cinquina(k);
            else if (controllo==4) controll_tombola(k);
            else document.getElementById
        }
        colora(k);
    }
}
/* bug fix */

function controll_ambo(k)
{
    if (uscite[k][0] == uscite[k][1] || uscite[k][1] == uscite[k][2] ||
        uscite[k][2] == uscite[k][3] || uscite[k][3] == uscite[k][4] ||
        uscite[k][5] == uscite[k][6] || uscite[k][6] == uscite[k][7] || 
        uscite[k][7] == uscite[k][8] || uscite[k][8] == uscite[k][9] || 
        uscite[k][10] == uscite[k][11] || uscite[k][11] == uscite[k][12] ||
        uscite[k][12] == uscite[k][13] || uscite[k][13] == uscite[k][14] )
    {
        console.log("ambo cartella:"+k+"");
        console.log(uscite [k]);
        alert("Ambo per la cartella N° "+k+"");
        controllo++;
    }
    
}
function controll_terno(k)
{
    if (uscite[k][0] == uscite[k][1] && uscite[k][1] == uscite[k][2] || 
        uscite[k][1] == uscite[k][2] && uscite[k][2] == uscite[k][3] || 
        uscite[k][2] == uscite[k][3] && uscite[k][3] == uscite[k][4] || 
        uscite[k][5] == uscite[k][6] && uscite[k][6] == uscite[k][7] || 
        uscite[k][6] == uscite[k][7] && uscite[k][7] == uscite[k][8] || 
        uscite[k][7] == uscite[k][8] && uscite[k][8] == uscite[k][9] || 
        uscite[k][10] == uscite[k][11] && uscite[k][11] == uscite[k][12] || 
        uscite[k][11] == uscite[k][12] && uscite[k][12] == uscite[k][13] || 
        uscite[k][12] == uscite[k][13] && uscite[k][13] == uscite[k][14] )
    {
        console.log("Terno cartella:"+k+"");
        console.log(uscite [k]);
        alert("Terno per la cartella N° "+k+"");
        controllo++;
    }
}
function controll_quaterno(k)
{
    if (uscite[k][0] == uscite[k][1] && uscite[k][1] == uscite[k][2] && uscite[k][2] == uscite[k][3] || 
        uscite[k][1] == uscite[k][2] && uscite[k][2] == uscite[k][3] && uscite[k][3] == uscite[k][4] || 
        uscite[k][5] == uscite[k][6] && uscite[k][6] == uscite[k][7] && uscite[k][7] == uscite[k][8] || 
        uscite[k][6] == uscite[k][7] && uscite[k][7] == uscite[k][8] && uscite[k][8] == uscite[k][9] || 
        uscite[k][10] == uscite[k][11] && uscite[k][11] == uscite[k][12] && uscite[k][12] == uscite[k][13] || 
        uscite[k][11] == uscite[k][12] && uscite[k][12] == uscite[k][13] && uscite[k][13] == uscite[k][14] )
    {
        console.log("Quaterno cartella:"+k+"");
        console.log(uscite [k]);
        alert("Quaterno per la cartella N° "+k+"");
        controllo++;
    }
}
function controll_cinquina(k)
{
    if ( uscite[k][0] == uscite[k][1] && uscite[k][1] == uscite[k][2] && uscite[k][2] == uscite[k][3] && uscite[k][3] == uscite[k][4] || 
        uscite[k][5] == uscite[k][6] && uscite[k][6] == uscite[k][7] && uscite[k][7] == uscite[k][8] && uscite[k][8] == uscite[k][9] || 
        uscite[k][10] == uscite[k][11] && uscite[k][11] == uscite[k][12] && uscite[k][12] == uscite[k][13] && uscite[k][13] == uscite[k][14])
    {
        console.log("Cinquina cartella:"+k+"");
        console.log(uscite [k]);
        alert("Cinquina per la cartella N° "+k+"");
        controllo++;
    }
    
}
function controll_tombola(k)
{
    if ( uscite[k][0] == uscite[k][1] && uscite[k][1] == uscite[k][2] && uscite[k][2] == uscite[k][3] && uscite[k][3] == uscite[k][4] && uscite[k][4] == uscite[k][5] &&
        uscite[k][5] == uscite[k][6] && uscite[k][6] == uscite[k][7] && uscite[k][7] == uscite[k][8] && uscite[k][8] == uscite[k][9] && uscite[k][9] == uscite[k][10] &&
        uscite[k][10] == uscite[k][11] && uscite[k][11] == uscite[k][12] && uscite[k][12] == uscite[k][13] && uscite[k][13] == uscite[k][14])
    {
        console.log("Tombola cartella:"+k+"");
        console.log(uscite [k]);
        alert("Tombola per la cartella N° "+k+"");
        controllo++;
    }
}


function colora(k)
{
    var n= document.getElementById("numero").value;
    var orizzontale, verticale, Nrighe;
    for(verticale=0; verticale<3; verticale++)
    {
        for(orizzontale=0; orizzontale<5; orizzontale++)
        { 
            Nrighe = verticale*5 + orizzontale+1;
            for (c=0; c<=90; c++)
            {
                if (sacco[c] == cartelle[n][Nrighe-1]) document.getElementById("cella"+Nrighe+"").style.backgroundColor= "#00f";
            }
        }
    }
}

function scolora()
{
    for (var i=1; i<=15; i++)
    {
        document.getElementById("cella"+i+"").style.backgroundColor = '#fff';
    }
}

function cerca(n)
{
    scolora();
    var n= document.getElementById("numero").value;
    colora(n);
    var orizzontale, verticale, Nrighe;
    for(verticale=0; verticale<3; verticale++)
    {
        for(orizzontale=0; orizzontale<5; orizzontale++)
        { 
            Nrighe = verticale*5 + orizzontale+1;
            document.getElementById("cella"+Nrighe+"").innerHTML=cartelle[n][Nrighe-1];
        }
    } 
}





var napoletana = [
    {"number": 1, "text": "L'Italja", "translation": "L'Italia"},
    {"number": 2, "text": "'A criatura", "translation": "il bimbo"},
    {"number": 3, "text": "'A jatta", "translation": "il gatto"},
    {"number": 4, "text": "'O puorco", "translation": "il maiale"},
    {"number": 5, "text": "'A mano", "translation": "la mano"},
    {"number": 6, "text": "Chella che guarda 'nterra", "translation": "organo sessuale femminile"},
    {"number": 7, "text": "'A scuppetta", "translation": "il fucile"},
    {"number": 8, "text": "'A maronna", "translation": "la madonna"},
    {"number": 9, "text": "'A figliata", "translation": "la prole"},
    {"number": 10, "text": "'E fasule", "translation": "i fagioli"},
    {"number": 11, "text": "'E surice", "translation": "i topi"},
    {"number": 12, "text": "'E surdate", "translation": "i soldati"},
    {"number": 13, "text": "Sant'Antonio", "translation": ""},
    {"number": 14, "text": "'O mbriaco", "translation": "l'ubriaco"},
    {"number": 15, "text": "'O guaglione", "translation": "il ragazzo"},
    {"number": 16, "text": "'O culo", "translation": "il deretano"},
    {"number": 17, "text": "'A disgrazia", "translation": "la disgrazia"},
    {"number": 18, "text": "'O sanghe", "translation": " il sangue"},
    {"number": 19, "text": "'A resata", "translation": "la risata"},
    {"number": 20, "text": "'A festa", "translation": "la festa"},
    {"number": 21, "text": "'A femmena annura", "translation": "la donna nuda"},
    {"number": 22, "text": "'O pazzo", "translation": "il pazzo"},
    {"number": 23, "text": "'O scemo", "translation": "lo scemo"},
    {"number": 24, "text": "'E gguardie", "translation": "le guardie"},
    {"number": 25, "text": "Natale", "translation": ""},
    {"number": 26, "text": "Nanninella", "translation": "diminuitivo del nome Anna"},
    {"number": 27, "text": "'O cantero", "translation": "il vaso da notte"},
    {"number": 28, "text": "'E zzizze", "translation": "il seno"},
    {"number": 29, "text": "'O pate d''e criature", "translation": "organo sessuale maschile"},
    {"number": 30, "text": "'E palle d''o tenente", "translation": "le palle del tenente"},
    {"number": 31, "text": "'O padrone ' e casa", "translation": "il proprietario di casa"},
    {"number": 32, "text": "'O capitone", "translation": "il capitone"},
    {"number": 33, "text": "Ll'anne ' e Cristo", "translation": "gli anni di Cristo"},
    {"number": 34, "text": "'A capa", "translation": "la testa"},
    {"number": 35, "text": "L'aucielluzzo", "translation": "l'uccellino"},
    {"number": 36, "text": "'E castagnelle", "translation": "sorta di petardi"},
    {"number": 37, "text": "'O monaco", "translation": "il frate"},
    {"number": 38, "text": "'E mmazzate", "translation": "le botte"},
    {"number": 39, "text": "'A funa 'nganna", "translation": "la corda la collo"},
    {"number": 40, "text": "'A paposcia", "translation": "ernia inguinale"},
    {"number": 41, "text": "'O curtiello", "translation": "il coltello"},
    {"number": 42, "text": "'O ccafè", "translation": "il caffè"},
    {"number": 43, "text": "'A femmena 'ncopp'' o balcone", "translation": "la donna al balcone"},
    {"number": 44, "text": "'E ccancelle", "translation": "il carcere"},
    {"number": 45, "text": "'O vino", "translation": "il vino"},
    {"number": 46, "text": "'E denare", "translation": "i denari"},
    {"number": 47, "text": "'O muorto", "translation": "il morto"},
    {"number": 48, "text": "'O muorto che parla", "translation": "il morto che parla"},
    {"number": 49, "text": "'O piezzo ' e carne", "translation": "il pezzo di carne"},
    {"number": 50, "text": "'O ppane", "translation": "il pane"},
    {"number": 51, "text": "'O ciardino", "translation": "il giardino"},
    {"number": 52, "text": "'A mamma", "translation": "la mamma"},
    {"number": 53, "text": "'O viecchio", "translation": "il vecchio"},
    {"number": 54, "text": "'O cappiello", "translation": "il cappello"},
    {"number": 55, "text": "'A museca", "translation": "la musica"},
    {"number": 56, "text": "'A caruta", "translation": "la caduta"},
    {"number": 57, "text": "'O scartellato", "translation": "il gobbo"},
    {"number": 58, "text": "'O paccotto", "translation": "l'imbroglio"},
    {"number": 59, "text": "'E pile", "translation": "i peli"},
    {"number": 60, "text": "Se lamenta", "translation": "si lamenta"},
    {"number": 61, "text": "'O cacciatore", "translation": "il cacciatore"},
    {"number": 62, "text": "'O muorto acciso", "translation": "il morto ammazzato"},
    {"number": 63, "text": "'A sposa", "translation": "la sposa"},
    {"number": 64, "text": "'A sciammeria", "translation": "la marsina"},
    {"number": 65, "text": "'O chianto", "translation": "il pianto"},
    {"number": 66, "text": "'E ddoie zetelle", "translation": "le due zitelle"},
    {"number": 67, "text": "'O totano int''a chitarra", "translation": "il totano nella chitarra"},
    {"number": 68, "text": "'A zuppa cotta", "translation": "la zuppa cotta"},
    {"number": 69, "text": "Sott'e'ncoppo", "translation": "sottosopra"},
    {"number": 70, "text": "'O palazzo", "translation": "il palazzo"},
    {"number": 71, "text": "L'ommo 'e merda", "translation": "l'uomo senza princìpi"},
    {"number": 72, "text": "'A meraviglia", "translation": "la meraviglia"},
    {"number": 73, "text": "'O spitale", "translation": "l'ospedale"},
    {"number": 74, "text": "'A rotta", "translation": "la grotta"},
    {"number": 75, "text": "Pullecenella", "translation": "Pulcinella"},
    {"number": 76, "text": "'A funtana", "translation": "la fontana"},
    {"number": 77, "text": "'E diavule", "translation": "i diavoli"},
    {"number": 78, "text": "'A bella figliola", "translation": "la bella ragazza"},
    {"number": 79, "text": "'O mariuolo", "translation": "il ladro"},
    {"number": 80, "text": "'A vocca", "translation": "la bocca"},
    {"number": 81, "text": "'E sciure", "translation": "i fiori"},
    {"number": 82, "text": "'A tavula 'mbandita", "translation": "la tavola imbandita"},
    {"number": 83, "text": "'O maletiempo", "translation": "il maltempo"},
    {"number": 84, "text": "'A cchiesa", "translation": "la chiesa"},
    {"number": 85, "text": "Ll'aneme 'o priatorio", "translation": "le anime del purgatorio"},
    {"number": 86, "text": "'A puteca", "translation": "il negozio"},
    {"number": 87, "text": "'E perucchie", "translation": "i pidocchi"},
    {"number": 88, "text": "'E casecavalle", "translation": "i caciocavalli"},
    {"number": 89, "text": "'A vecchia", "translation": "la vecchia"},
    {"number": 90, "text": "'A paura", "translation": "la paura"}
];


let uscite = {
    0: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    1: [17, 21, 43, 67, 84, 9, 14, 58, 74, 85, 28, 37, 45, 54, 75],
    2: [8, 38, 53, 64, 86, 6, 15, 26, 33, 73, 18, 49, 51, 79, 88],
    3: [24, 30, 41, 57, 68, 16, 39, 65, 78, 87, 1, 19, 29, 46, 52],
    4: [13, 32, 44, 55, 83, 7, 12, 20, 47, 69, 5, 36, 66, 76, 80],
    5: [2, 25, 56, 61, 77, 11, 31, 59, 72, 82, 4, 22, 48, 63, 81],
    6: [3, 23, 35, 62, 89, 10, 42, 50, 60, 71, 27, 34, 40, 70, 90],
    7: [11, 28, 49, 62, 85, 3, 18, 55, 70, 81, 22, 34, 47, 57, 75],
    8: [2, 31 ,56 ,68 ,90 ,4 ,19 ,25 ,32 ,78 ,14 ,43 ,51 ,71, 82],
    9: [29 ,37 ,42 ,58 ,67 ,13 ,33 ,65 ,77 ,86 ,5 ,17 ,26 ,48 ,50],
    10:[16 ,36 ,45 ,52 ,88 ,1 ,12 ,24 ,41, 61, 9, 30 ,66 ,74 ,80,],
    11:[6 ,20 ,59 ,69 ,73 ,10 ,39 ,53 ,76 ,89 ,8 ,23 ,46 ,63 ,87],
    12:[7 ,27 ,38 ,60 ,84 ,15 ,44 ,54 ,64 ,79 ,21 ,35 ,40 ,72 ,83],
    13:[13, 20, 41, 67, 87, 5, 10, 57, 72, 83, 24, 36, 47, 55, 77],
    14:[4, 33, 52, 69, 84, 2, 11, 28, 34, 70, 16, 42, 54, 73, 90],
    15:[21, 39, 43, 59, 60, 14, 35, 63, 79, 88, 6, 12, 26, 49, 53],
    16:[15, 38, 44, 58, 81, 7, 19, 27, 46, 68, 3, 32, 61, 76, 89],
    17:[1, 22, 51, 65, 75, 18, 37, 56, 78, 86, 8, 25, 45, 64, 82],
    18:[9, 29, 31, 62, 85, 17, 48, 50, 66, 71, 23, 30, 40, 74, 80],
    19:[12, 23, 49, 64, 82, 4, 10, 55, 77, 83, 22, 30, 41, 58, 70],
    20:[3, 36, 59, 69, 80, 1, 15, 29, 32, 71, 13, 44, 57, 75, 90],
    21:[21, 35, 47, 52, 67, 11, 33, 68, 78, 89, 5, 14, 25, 40, 54], 
    22:[19, 34, 45, 51, 86, 2, 18, 26, 46, 63, 6, 38, 61, 73, 81],
    23:[8, 24, 53, 60, 76, 17, 37, 50, 74, 88, 7, 27, 43, 62, 87],
    24:[9, 28, 31, 66, 84, 16, 48, 56, 65, 79, 20, 39, 42, 72, 85],
    25:[2, 11, 18, 23, 24, 39, 46, 47, 52, 58, 69, 71, 75, 81, 89],
    26:[3, 9, 15, 19, 22, 33, 37, 40, 56, 57, 64, 77, 78, 82, 83],
    27:[4, 12, 16, 20, 27, 32, 38, 42, 43, 50, 54, 66, 67, 76, 84],
    28:[1, 6, 13, 14, 29, 31, 34, 45, 49, 55, 62, 63, 74, 80, 88],
    29:[7, 8, 10, 26, 28, 35, 48, 51, 59, 65, 68, 70, 79, 85, 87],
    30:[5, 17, 21, 25, 30, 36, 41, 44, 53, 60, 61, 72, 73, 86, 90],
    31:[5, 13, 10, 24, 27, 36, 40, 47, 59, 58, 65, 79, 70, 87, 86],
    32:[4, 2 ,11 ,16 ,21 ,33 ,34 ,41 ,53 ,56 ,61 ,77 ,73 ,88 ,90],
    33:[6 ,12 ,15 ,20 ,28 ,39 ,35 ,42 ,43 ,54 ,51 ,64 ,69 ,78 ,81],
    34:[7 ,3 ,19 ,18 ,26 ,38 ,32 ,49 ,44 ,52 ,63 ,67 ,71 ,82, 89],
    35:[1 ,8 ,14 ,22 ,25 ,37 ,46 ,57 ,50 ,62 ,68 ,75 ,74 ,84 ,85],
    36:[9 ,17 ,29 ,23 ,31 ,30 ,45 ,48 ,55 ,66 ,60 ,72 ,76 ,80 ,83],
    37:[13, 24, 40, 65, 87, 10, 36, 59, 79, 86, 5, 27, 47, 58, 70],
    38:[4, 11, 33, 61, 88, 2, 21, 34, 53, 77, 16, 41, 56, 73, 90],
    39:[6, 20, 39, 54, 64, 12, 35, 42, 69, 78, 15, 28, 43, 51, 81],
    40:[19, 38, 49, 52, 82, 7, 18, 44, 63, 89, 3, 26, 32, 67, 71],
    41:[1, 22, 57, 62, 75, 14, 37, 50, 74, 84, 8, 25, 46, 68, 85],
    42:[9, 31, 45, 66, 80, 17, 29, 55, 60, 72, 23, 30, 48, 76, 83],
    43:[11 ,23 ,42 ,67 ,83 ,14 ,35 ,55 ,73 ,86 ,5 ,26 ,48 ,51 ,74],
    44:[2, 13, 37, 66, 87, 6, 27, 36, 50, 71, 16, 49, 58, 77, 85],
    45:[4, 25, 39, 59, 68, 12, 33, 40, 61, 72, 15, 20, 45, 54, 80],
    46:[19, 32, 46, 52, 90, 3, 18, 43, 62, 82, 7, 22, 30, 69, 79],
    47:[1, 29, 53, 64, 78, 17, 38, 57, 75, 89, 9, 28, 41, 65, 88],
    48:[8, 31, 44, 60, 81, 10, 21, 56, 63, 76, 24, 34, 47, 70, 84],
    49:[13, 23, 41, 65, 87, 16, 34, 58, 70, 85, 8, 27, 42, 53, 76],
    50:[7, 14, 35, 60, 88, 5, 21, 36, 55, 78, 19, 43, 57, 71, 90],
    51:[9, 24, 31, 56, 64, 17, 32, 46, 66, 73, 15, 29, 49, 52, 84], 
    52:[18, 33, 47, 50, 82, 4, 12, 44, 63, 81, 2, 26, 37, 62, 77],
    53:[1, 25, 51, 69, 74, 11, 39, 54, 72, 83, 3, 28, 45, 68, 86],
    54:[6, 30, 40, 61, 89, 10, 22, 59, 67, 75, 20, 38, 48, 79, 80],
    55:[12, 29, 40, 63, 88, 19, 33, 56, 75, 84, 4, 23, 46, 57, 72],
    56:[3, 15, 38, 69, 83, 1, 26, 35, 59, 79, 11, 48, 53, 73, 90],
    57:[5, 20, 34, 54, 68, 14, 37, 49, 66, 71, 18, 27, 43, 50, 81],
    58:[17, 37, 44, 58, 80, 6, 10, 42, 62, 87, 2, 25, 30, 67, 74],
    59:[7, 21, 52, 60, 78, 13, 39, 51, 77, 82, 9, 24, 47, 61, 89],
    60:[8, 36, 45, 64, 86, 16, 28, 55, 65, 76, 22, 37, 41, 70, 85],
};

let cartelle = {
    0: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    1: [17, 21, 43, 67, 84, 9, 14, 58, 74, 85, 28, 37, 45, 54, 75],
    2: [8, 38, 53, 64, 86, 6, 15, 26, 33, 73, 18, 49, 51, 79, 88],
    3: [24, 30, 41, 57, 68, 16, 39, 65, 78, 87, 1, 19, 29, 46, 52],
    4: [13, 32, 44, 55, 83, 7, 12, 20, 47, 69, 5, 36, 66, 76, 80],
    5: [2, 25, 56, 61, 77, 11, 31, 59, 72, 82, 4, 22, 48, 63, 81],
    6: [3, 23, 35, 62, 89, 10, 42, 50, 60, 71, 27, 34, 40, 70, 90],
    7: [11, 28, 49, 62, 85, 3, 18, 55, 70, 81, 22, 34, 47, 57, 75],
    8: [2, 31 ,56 ,68 ,90 ,4 ,19 ,25 ,32 ,78 ,14 ,43 ,51 ,71, 82],
    9: [29 ,37 ,42 ,58 ,67 ,13 ,33 ,65 ,77 ,86 ,5 ,17 ,26 ,48 ,50],
    10:[16 ,36 ,45 ,52 ,88 ,1 ,12 ,24 ,41, 61, 9, 30 ,66 ,74 ,80,],
    11:[6 ,20 ,59 ,69 ,73 ,10 ,39 ,53 ,76 ,89 ,8 ,23 ,46 ,63 ,87],
    12:[7 ,27 ,38 ,60 ,84 ,15 ,44 ,54 ,64 ,79 ,21 ,35 ,40 ,72 ,83],
    13:[13, 20, 41, 67, 87, 5, 10, 57, 72, 83, 24, 36, 47, 55, 77],
    14:[4, 33, 52, 69, 84, 2, 11, 28, 34, 70, 16, 42, 54, 73, 90],
    15:[21, 39, 43, 59, 60, 14, 35, 63, 79, 88, 6, 12, 26, 49, 53],
    16:[15, 38, 44, 58, 81, 7, 19, 27, 46, 68, 3, 32, 61, 76, 89],
    17:[1, 22, 51, 65, 75, 18, 37, 56, 78, 86, 8, 25, 45, 64, 82],
    18:[9, 29, 31, 62, 85, 17, 48, 50, 66, 71, 23, 30, 40, 74, 80],
    19:[12, 23, 49, 64, 82, 4, 10, 55, 77, 83, 22, 30, 41, 58, 70],
    20:[3, 36, 59, 69, 80, 1, 15, 29, 32, 71, 13, 44, 57, 75, 90],
    21:[21, 35, 47, 52, 67, 11, 33, 68, 78, 89, 5, 14, 25, 40, 54], 
    22:[19, 34, 45, 51, 86, 2, 18, 26, 46, 63, 6, 38, 61, 73, 81],
    23:[8, 24, 53, 60, 76, 17, 37, 50, 74, 88, 7, 27, 43, 62, 87],
    24:[9, 28, 31, 66, 84, 16, 48, 56, 65, 79, 20, 39, 42, 72, 85],
    25:[2, 11, 18, 23, 24, 39, 46, 47, 52, 58, 69, 71, 75, 81, 89],
    26:[3, 9, 15, 19, 22, 33, 37, 40, 56, 57, 64, 77, 78, 82, 83],
    27:[4, 12, 16, 20, 27, 32, 38, 42, 43, 50, 54, 66, 67, 76, 84],
    28:[1, 6, 13, 14, 29, 31, 34, 45, 49, 55, 62, 63, 74, 80, 88],
    29:[7, 8, 10, 26, 28, 35, 48, 51, 59, 65, 68, 70, 79, 85, 87],
    30:[5, 17, 21, 25, 30, 36, 41, 44, 53, 60, 61, 72, 73, 86, 90],
    31:[5, 13, 10, 24, 27, 36, 40, 47, 59, 58, 65, 79, 70, 87, 86],
    32:[4, 2 ,11 ,16 ,21 ,33 ,34 ,41 ,53 ,56 ,61 ,77 ,73 ,88 ,90],
    33:[6 ,12 ,15 ,20 ,28 ,39 ,35 ,42 ,43 ,54 ,51 ,64 ,69 ,78 ,81],
    34:[7 ,3 ,19 ,18 ,26 ,38 ,32 ,49 ,44 ,52 ,63 ,67 ,71 ,82, 89],
    35:[1 ,8 ,14 ,22 ,25 ,37 ,46 ,57 ,50 ,62 ,68 ,75 ,74 ,84 ,85],
    36:[9 ,17 ,29 ,23 ,31 ,30 ,45 ,48 ,55 ,66 ,60 ,72 ,76 ,80 ,83],
    37:[13, 24, 40, 65, 87, 10, 36, 59, 79, 86, 5, 27, 47, 58, 70],
    38:[4, 11, 33, 61, 88, 2, 21, 34, 53, 77, 16, 41, 56, 73, 90],
    39:[6, 20, 39, 54, 64, 12, 35, 42, 69, 78, 15, 28, 43, 51, 81],
    40:[19, 38, 49, 52, 82, 7, 18, 44, 63, 89, 3, 26, 32, 67, 71],
    41:[1, 22, 57, 62, 75, 14, 37, 50, 74, 84, 8, 25, 46, 68, 85],
    42:[9, 31, 45, 66, 80, 17, 29, 55, 60, 72, 23, 30, 48, 76, 83],
    43:[11 ,23 ,42 ,67 ,83 ,14 ,35 ,55 ,73 ,86 ,5 ,26 ,48 ,51 ,74],
    44:[2, 13, 37, 66, 87, 6, 27, 36, 50, 71, 16, 49, 58, 77, 85],
    45:[4, 25, 39, 59, 68, 12, 33, 40, 61, 72, 15, 20, 45, 54, 80],
    46:[19, 32, 46, 52, 90, 3, 18, 43, 62, 82, 7, 22, 30, 69, 79],
    47:[1, 29, 53, 64, 78, 17, 38, 57, 75, 89, 9, 28, 41, 65, 88],
    48:[8, 31, 44, 60, 81, 10, 21, 56, 63, 76, 24, 34, 47, 70, 84],
    49:[13, 23, 41, 65, 87, 16, 34, 58, 70, 85, 8, 27, 42, 53, 76],
    50:[7, 14, 35, 60, 88, 5, 21, 36, 55, 78, 19, 43, 57, 71, 90],
    51:[9, 24, 31, 56, 64, 17, 32, 46, 66, 73, 15, 29, 49, 52, 84], 
    52:[18, 33, 47, 50, 82, 4, 12, 44, 63, 81, 2, 26, 37, 62, 77],
    53:[1, 25, 51, 69, 74, 11, 39, 54, 72, 83, 3, 28, 45, 68, 86],
    54:[6, 30, 40, 61, 89, 10, 22, 59, 67, 75, 20, 38, 48, 79, 80],
    55:[12, 29, 40, 63, 88, 19, 33, 56, 75, 84, 4, 23, 46, 57, 72],
    56:[3, 15, 38, 69, 83, 1, 26, 35, 59, 79, 11, 48, 53, 73, 90],
    57:[5, 20, 34, 54, 68, 14, 37, 49, 66, 71, 18, 27, 43, 50, 81],
    58:[17, 37, 44, 58, 80, 6, 10, 42, 62, 87, 2, 25, 30, 67, 74],
    59:[7, 21, 52, 60, 78, 13, 39, 51, 77, 82, 9, 24, 47, 61, 89],
    60:[8, 36, 45, 64, 86, 16, 28, 55, 65, 76, 22, 37, 41, 70, 85],
};