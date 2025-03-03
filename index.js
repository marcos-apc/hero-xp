// Variáveis
let nickname = "Trarkinhos";
let nivel = 10.001;

function hero_elo(nivel){
    if(nivel <= 1.000){
        return "Ferro"
    }
    else if(nivel >= 1.001 && nivel <= 2.000){
        return "Bronze"
    }
    else if(nivel >= 2.001 && nivel <= 5.000){
        return "Prata"
    }
    else if(nivel >= 5.001 && nivel <= 7.000){
        return "Ouro"
    }
    else if(nivel >= 7.001 && nivel <= 8.000){
        return "Platina"
    }
    else if(nivel >= 8.001 && nivel <= 9.000){
        return "Ascendente"
    }
    else if(nivel >= 9.001 && nivel <= 10.000){
        return "Imortal"
    }
    else if(nivel >= 10.001){
        return "Radiante"
    }
}

function hero_output(nickname, nivel){
    console.log(`O Herói de nome ${nickname} está no nível de ${hero_elo(nivel)}`)
}

hero_output(nickname, nivel)