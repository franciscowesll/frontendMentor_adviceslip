const adviceID = document.getElementById('idAdvice');
const mensagem = document.getElementById('mensagem');

function receberDados(){
  adviceID.innerHTML = '';
  mensagem.innerHTML = ''; 
  $.get("https://api.adviceslip.com/advice", function (data) {
    console.log(data);
    const conteudo =JSON.parse(data);
    if(conteudo.slip.id =='206'){
        $("#idAdvice").append('206');
        $("#mensagem").append('All we have to decide is what to do with the time that is given us');
    } else {
    $("#idAdvice").append(JSON.stringify(conteudo.slip.id));
    $("#mensagem").append(JSON.stringify(conteudo.slip.advice));
  }})
}