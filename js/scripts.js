var comecouJogo = false;
var contJogada;
//variáveis globais


function escondeElemento(elemento) {
    document.getElementById(elemento).style.display = "none";
} 
function mostraElemento(elemento) {
    document.getElementById(String(elemento)).style.display = "block";
}

function apagar() {
    for(let i=1; i<=9; i++){
        document.getElementById(`c${String(i)}`).innerHTML = "";
    }
}

function aleatorio() {
    var aleatorio = Math.random();
    return aleatorio < 0.5 ? 1 : 2;
}
//mostrar e esconder elementos - apagar jogo - gerador aleatório


function doisJogadores() {
    escondeElemento('numJogadores');
    mostraElemento('nomesJogadores');
    mostraElemento('jogar');
    mostraElemento('menu');

    document.getElementById('nomeJogador1').value = "";
    document.getElementById('nomeJogador2').value = "";
}
//botões do número de jogadores


function jogar() {
    comecouJogo = true;
    contJogada = aleatorio();

    const nome1 = document.getElementById('nomeJogador1').value;
    const nome2 = document.getElementById('nomeJogador2').value;
    jogador1.innerHTML = nome1=="" ? 'Jogador 1' : nome1;
    jogador2.innerHTML = nome2=="" ? 'Jogador 2' : nome2;
    document.getElementById(`jogador${String((contJogada+1)%2+1)}`).style.color = "#096e22";
    document.getElementById(`jogador${String((contJogada+1)%2+1)}`).style.textDecoration = "underline";

    escondeElemento('jogar');
    mostraElemento('recomecar');
    escondeElemento('nomesJogadores');
    mostraElemento('jogadores');

    document.getElementById('tabela').style.filter = "none";
}

function recomecar() {
    apagar();
    comecouJogo = false;
    document.getElementById(`jogador${String((contJogada+1)%2+1)}`).style.color = "#222";
    document.getElementById(`jogador${String((contJogada+1)%2+1)}`).style.textDecoration = "none";

    mostraElemento('jogar');
    escondeElemento('recomecar');
    mostraElemento('nomesJogadores');
    escondeElemento('jogadores');

    document.getElementById('tabela').style.filter = "blur(4px)";
}

function menu() {
    apagar();
    comecouJogo = false;
    if (contJogada!=null){
        document.getElementById(`jogador${String((contJogada+1)%2+1)}`).style.color = "#222";
        document.getElementById(`jogador${String((contJogada+1)%2+1)}`).style.textDecoration = "none";
    }
    escondeElemento('jogar');
    escondeElemento('recomecar');
    escondeElemento('menu');
    mostraElemento('numJogadores');
    escondeElemento('nomesJogadores');
    escondeElemento('jogadores');

    document.getElementById('tabela').style.filter = "blur(4px)";
}
//botões de jogar, recomeçar e menu


function alteraEstiloNome() {
    document.getElementById(`jogador${String((contJogada+1)%2+1)}`).style.color = "#222";
    document.getElementById(`jogador${String((contJogada+1)%2+1)}`).style.textDecoration = "none";
    document.getElementById(`jogador${String(contJogada%2+1)}`).style.color = "#096e22";
    document.getElementById(`jogador${String(contJogada%2+1)}`).style.textDecoration = "underline";
}

function jogada(num) {
    if(comecouJogo==true){
        var tipo;
        if(document.getElementById(`c${String(num)}`).textContent == "") {
            if(contJogada%2==0) {
                tipo = "O";
                document.getElementById(`c${String(num)}`).style.color = "#1d3561";
                alteraEstiloNome();
            }
            else {
                tipo = "X";
                document.getElementById(`c${String(num)}`).style.color = "#217177";
                alteraEstiloNome();
            }
            document.getElementById(`c${String(num)}`).innerHTML = tipo;
            contJogada++;
        }
    }
}
//Comandos de execução durante o jogo
