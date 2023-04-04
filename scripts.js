

function cliqueiNoBotao(){
    let cidade = document.querySelector(".input-cidade").value
 
    buscarCidade(cidade)
}


//meu id openweather: 7a4bdad0411956d6bbb9978f90414db7 


let chave = "7a4bdad0411956d6bbb9978f90414db7"

function colocarNaTela(dados){
    
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + '°C'
    document.querySelector('.descricao').innerHTML = dados.weather[0].description
    document.querySelector('.umidade').innerHTML = 'Umidade ' + dados.main.humidity + '%'
    document.querySelector('.icone').src = 'https://openweathermap.org/img/wn/' + dados.weather[0].icon + '.png'

}

async function buscarCidade(cidade){

    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=" + chave + '&lang=pt_br' + '&units=metric')
        .then(resposta => resposta.json())


        colocarNaTela(dados)
        console.log(dados)
}



//function cliqueiNoBotao(){ //meu id openweather: 2f86f786eeaedee3f570fb3c18996585
//
  //  let cidade = document.querySelector('.input-cidade').value

 //   buscarCidade()
 //   console.log(cidade)
//}

