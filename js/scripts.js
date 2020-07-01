function umJogador() {
    document.getElementById('numJogadores').style.display = "none";
    document.getElementById('nomesJogadores').style.display = "block";

    document.getElementById('jogar').style.display = "block";
    document.getElementById('menu').style.display = "block";

    document.getElementById('nomeJogador1').value = "";
    document.getElementById('nomeJogador2').value = "";
}
//botões do número de jogadores


function aleatorio() {
    var aleatorio = (Math.random());
    if(aleatorio<0.5){
        return 1;
    }
    else {
        return 2;
    }
}
var contJogada = aleatorio();
var comecouJogo = false;
//gerador aleatório e variáveis globais


function apagar() {
    for(let i=1; i<=9; i++){
        document.getElementById(`c${String(i)}`).innerHTML = "";
    }
}

function jogar() {
    comecouJogo = true;
    document.getElementById(`jogador${String((contJogada+1)%2+1)}`).style.color = "#096e22";
    document.getElementById(`jogador${String((contJogada+1)%2+1)}`).style.textDecoration = "underline";

    document.getElementById('jogar').style.display = "none";
    document.getElementById('recomecar').style.display = "block";

    document.getElementById('nomesJogadores').style.display = "none";
    document.getElementById('jogadores').style.display = "block";

    document.getElementById('tabela').style.filter = "none";
}

function recomecar() {
    apagar();
    comecouJogo = false;
    document.getElementById(`jogador${String((contJogada+1)%2+1)}`).style.color = "#222";
    document.getElementById(`jogador${String((contJogada+1)%2+1)}`).style.textDecoration = "none";

    document.getElementById('jogar').style.display = "block";
    document.getElementById('recomecar').style.display = "none";

    document.getElementById('nomesJogadores').style.display = "block";
    document.getElementById('jogadores').style.display = "none";

    document.getElementById('tabela').style.filter = "blur(3px)";

    contJogada = aleatorio();
}

function menu() {
    apagar();
    comecouJogo = false;
    document.getElementById('jogar').style.display = "none";
    document.getElementById('recomecar').style.display = "none";
    document.getElementById('menu').style.display = "none";

    document.getElementById('numJogadores').style.display = "block";
    document.getElementById('nomesJogadores').style.display = "none";
    document.getElementById('jogadores').style.display = "none";

    document.getElementById('tabela').style.filter = "blur(3px)";
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
