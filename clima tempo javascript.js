

/// titulo
var titulo=document.getElementById("titulo")
/// imagens padroes 
var imgDia=document.getElementById("img1")
var imgNoite=document.getElementById("img2")

///imagens de resposta ao clima
var clearnoite=document.getElementById("clearnoite").style.display="none"
var cleardia=document.getElementById("imgclear").style.display="none"
var cloudsdia=document.getElementById("cloudsdia").style.display="none"
var cloudsnoite=document.getElementById("cloudsnoite").style.display="none"
var raindia=document.getElementById("raindia").style.display="none"
var rainnoite=document.getElementById("rainnoite").style.display="none"
var thunderdia=document.getElementById("thunderdia").style.display="none"
var thundernoite=document.getElementById("thundernoite").style.display="none"
var perigodia=document.getElementById("diaperigo").style.display="none"
var perigonoite=document.getElementById("noiteperigo").style.display="none"
/// esconde icone de temperatura  do titulo
var icones=document.getElementById("icones").style.display="none"

/// mensagem de erro 
var ERRO=document.getElementById("invalid").style.display="none"

/// card
var card=document.getElementById("card")

/// esconde as informaces na tela antes de ter um retorno da API
var info=document.getElementById("esconder").style.display="none"

/// esconde as img ate a leitura da hora do usuario e libera 
imgDia.style.display="none"
imgNoite.style.display="none"

/// efeito de carregamento 
var loader=document.getElementById("loader").style.display="none"



/// variaveis  para altera as informacoes  do html para o js


var local=document.getElementById("local")
var Temperatura=document.getElementById("Temperatura")
var umidty=document.getElementById("umidty")
var Velocity=document.getElementById("Velocity")
var pais=document.getElementById("pais")
///

/// cancela o envio do formulario
botao.addEventListener("click",(e)=>{
    e.preventDefault();
   

   

})

// funcao que e chamada quanto clico no botao
function dadosUser(){

    /// esconde alguns itens da tela inicial quanto clico no botao
    var ERRO=document.getElementById("invalid").style.display="none"
    /// habilita o efeito de carregamento
    var loader=document.getElementById("loader").style.display=""
    /// esconde os informacoes do html ate o retorno da api
    var info=document.getElementById("esconder").style.display="none"




    ///chave de api
    const API_KEY = '';

   /// pega o valor do input e passa para a url 
    const InputUser=document.getElementById("CampoDePesquisa").value;
    const CITY_NAME = InputUser;
 /// url da api
 const url = `http://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}&units=metric&lang=pt_br`;
 
 fetch(url)
   .then(response => response.json())
   .then(data => {
     if (data.cod === 200) {
       
       


       const weatherCondition = data.weather[0].main;
       

       titulo.innerHTML=weatherCondition;
        /// desliga o efeito de carregamento e mostra as informacoes de retorno da api
       var loader=document.getElementById("loader").style.display="none"
       var info=document.getElementById("esconder").style.display=""



       /// alguns dados da api
       const temperature = data.main.temp;
       const humidity = data.main.humidity;
       const windSpeed = data.wind.speed;
       const windDirection = data.wind.deg;
       const weatherDescription = data.weather[0].description;
       const iconCode = data.weather[0].icon;
       const sunrise = new Date(data.sys.sunrise * 1000);
       const sunset = new Date(data.sys.sunset * 1000);
       const cityName = data.name;
       const state = data.sys.country;
       
       
    /// tras e coloca o icone do lado do titulo de acordo com o clima 
    var icones=document.getElementById("icones").style.display=""
    var iconesapi=document.getElementById("icon111")
    iconesapi.setAttribute("src",`http://openweathermap.org/img/wn/${iconCode}.png`)
    

        /// local,pais,temperatura,umidade,velocidade,horas,dias
       local.innerHTML=`${cityName}-`;
       
        pais.innerHTML=state;
        


       Temperatura.innerHTML=Math.floor(temperature)
       
       umidty.innerHTML=`${humidity}%`;
       


      Velocity.innerHTML=Math.floor(`${windSpeed}`);
    
       


        /// pega as variaveis do html
        var DIA=document.getElementById("DIA");
        var MES=document.getElementById("MES");
        var ANO=document.getElementById("ANO");
        
        /// pega data e horar em tempo real///
     
        
        var dataAtual = new Date();
        var dia = dataAtual.getDate();
        var mes = dataAtual.getMonth() + 1; 
        var ano = dataAtual.getFullYear();
    
        ////
       /// adiciona um 0 nos dias e meses menores que 10
        if(dia <10){
            DIA.innerHTML=`0${dia}/`
        }
        else{
            DIA.innerHTML=`${dia}/`
        }
        if(mes<10){
            MES.innerHTML=`0${mes}/`
        }
        else{
            MES.innerHTML=`${mes}/`
        }
    
        ANO.innerHTML=ano
    
    
    ////
    
    /// adiciona um zero na hora,minuto,secundo0 menor que 10 
      
        var horas1=  dataAtual.getHours();
        var minutos1 = dataAtual.getMinutes();
        var segundos1 = dataAtual.getSeconds();
    
        var hour=document.getElementById("hour")
        var minute=document.getElementById("minute")
        var second=document.getElementById("second")
      
    
       if(horas1<10){
        hour.innerHTML=`0${horas1}:`;
        console.log("oi")
    
    }
    else{
        hour.innerHTML=`${horas1}:`;
    }
    if(minutos1<10){
        minute.innerHTML=`0${minutos1}:`
    
    }
    else{
        minute.innerHTML=`${minutos1}:`
    }
    if(segundos1<10){
    second.innerHTML=`0${segundos1}`
    }
    else{
        second.innerHTML=`${segundos1}`
    }
    

    //// mudando imagens padroes de acordo com o clima
    ///clear
    if(weatherCondition=="Clear"){
        imgDia.style.display="none"
        imgNoite.style.display="none"
         var cleardia=document.getElementById("imgclear").style.display=""
        
           
        
        if(horas1>18){
           
            var cleardia=document.getElementById("imgclear").style.display="none"
            var clearnoite=document.getElementById("clearnoite").style.display=""
            
        }
    }
    else{
        var cleardia=document.getElementById("imgclear").style.display="none"
            var clearnoite=document.getElementById("clearnoite").style.display="none"
        
    }
    ///clouds

    if(weatherCondition=="Clouds"){
        imgDia.style.display="none"
        imgNoite.style.display="none"
         var cloudsdia=document.getElementById("cloudsdia").style.display=""
         if(horas1>18){
            var cloudsdia=document.getElementById("cloudsdia").style.display="none"
            var cloudsnoite=document.getElementById("cloudsnoite").style.display=""
 
         }
    }
    else{
        var cloudsdia=document.getElementById("cloudsdia").style.display="none"
        var cloudsnoite=document.getElementById("cloudsnoite").style.display="none"

    }

    /// rain

    if(weatherCondition=="Rain"){
        imgDia.style.display="none"
        imgNoite.style.display="none"
        var raindia=document.getElementById("raindia").style.display=""

        if(horas1>18){
            var raindia=document.getElementById("raindia").style.display="none"
            var rainnoite=document.getElementById("rainnoite").style.display=""
        }

    }else{
        var raindia=document.getElementById("raindia").style.display="none"
        var rainnoite=document.getElementById("rainnoite").style.display="none"  
    }

    /// thunderstorm
    if(weatherCondition=="Thunderstorm"){
        imgDia.style.display="none"
        imgNoite.style.display="none"
        var thunderdia=document.getElementById("thunderdia").style.display=""

        if(horas1>18){
            var thunderdia=document.getElementById("thunderdia").style.display="none"
            var thundernoite=document.getElementById("thundernoite").style.display=""
        }
    }else{
        var thunderdia=document.getElementById("thunderdia").style.display="none"
        var thundernoite=document.getElementById("thundernoite").style.display="none"
    }

    /// tornado
    if(weatherCondition=="Tornado"){
        imgDia.style.display="none"
        imgNoite.style.display="none"
        var perigodia=document.getElementById("diaperigo").style.display="none"

        if(horas1>18){
            var perigodia=document.getElementById("diaperigo").style.display="none"
            var perigonoite=document.getElementById("noiteperigo").style.display=""
        }

    }else{
        
        var perigodia=document.getElementById("diaperigo").style.display="none"
        var perigonoite=document.getElementById("noiteperigo").style.display="none"
    }

    //// esses climas estao sem imagens especificas para ele ate o momento
    if(weatherCondition=="Mist"){
        imgDia.style.display=""
        imgNoite.style.display="none"
        if(horas1>18){
            imgDia.style.display="none"
        imgNoite.style.display=""
        }       

    }

    if(weatherCondition=="Snow"){
        imgDia.style.display=""
        imgNoite.style.display="none"
        if(horas1>18){
            imgDia.style.display="none"
        imgNoite.style.display=""
        }
    }

    if(weatherCondition=="Fog"){
        imgDia.style.display=""
        imgNoite.style.display="none"
        if(horas1>18){
            imgDia.style.display="none"
        imgNoite.style.display=""
        }
    }
    
    if(weatherCondition=="Haze"){
        imgDia.style.display=""
        imgNoite.style.display="none"
        if(horas1>18){
            imgDia.style.display="none"
        imgNoite.style.display=""
        }
    }

    if(weatherCondition=="Smoke"){
        imgDia.style.display=""
        imgNoite.style.display="none"
        if(horas1>18){
            imgDia.style.display="none"
        imgNoite.style.display=""
        }
    }

    if(weatherCondition=="Dust"){
        imgDia.style.display=""
        imgNoite.style.display="none"
        if(horas1){
            imgDia.style.display="none"
        imgNoite.style.display=""
        }
    }

    if(weatherCondition=="Sand"){
        imgDia.style.display=""
        imgNoite.style.display="none"
        if(horas1>18){
            imgDia.style.display="none"
        imgNoite.style.display=""
        }
    }

    if(weatherCondition=="Ash"){
        imgDia.style.display=""
        imgNoite.style.display="none"
        if(horas1>18){
            imgDia.style.display="none"
        imgNoite.style.display=""
        }
    }

    if(weatherCondition=="Squall"){
        imgDia.style.display=""
        imgNoite.style.display="none"
        if(horas1>18){
            imgDia.style.display="none"
        imgNoite.style.display=""
        }
    }

      
     } else {
       console.log(`Error: ${data.message}`);

      var ERRO=document.getElementById("invalid").style.display=""
      var info=document.getElementById("esconder").style.display="none"
      var loader=document.getElementById("loader").style.display="none"
      titulo.innerHTML="Clima em Tempo Real"
      var icones=document.getElementById("icones").style.display="none"

      

       
     }
   })
   .catch(error => {
     console.error(`An error occurred: ${error}`);
    
     var ERRO=document.getElementById("invalid").style.display=""
     var info=document.getElementById("esconder").style.display="none"
     var loader=document.getElementById("loader").style.display="none"
     titulo.innerHTML="Clima em Tempo Real"
     var icones=document.getElementById("icones").style.display="none"
 

   });





   horario()
   
}



/// verifica a hora local do usuario para mostra uma imagem antes da pesquisa

function horario(){
var dataAtual = new Date();
var horas1=  dataAtual.getHours();
var minutos1 = dataAtual.getMinutes();
var segundos1 = dataAtual.getSeconds();
/// verifica hora e libera uma das img padroes 

if(horas1 >= 18){
    imgNoite.style.display=""
    
    
    
} else{
    imgNoite.style.display="none"
}

if(horas1 <=17){
    imgDia.style.display=""
} else{
    imgDia.style.display="none"
}
}

horario()


 




 
