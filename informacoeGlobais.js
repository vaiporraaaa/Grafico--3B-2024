const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json';

console.log(url);
/*função assincrona, espera até que toda a 
requisição seja executada, ou seja,
todos os dados sejam enviadoss*/
async function visualizarInformacoesGlobais(params) {
    //contante que armazena uma repossta  await=espera ////fetch=faz a requisição
    const res = await fetch(url);
    const dados = await res.json();//espera as reposta serem convertidas em JSON
    const pessoasConectadas = (dados.total_pessoas_conectadas/1e9)//Cria a variável pessoasConectadas, sendo o total_pessoas_conectadas por um bilhão
    const pessoasNoMundo=(dados.total_pessoas_mundo/1e9)//Cria a variável pessoasNoMundo, sendo o total_pessoas_mundo por um bilhao
    const horas = parseInt(dados.tempo_medio)//Cria uma variável que utiliza apenas a parte inteira do número
    const minutos = Math.round((dados.tempo_medio - horas) * 60);//Cria uma variável que utiliza só a parte decimal das horas, transforma em minutos e arredonda

console.log(dados);//visualizar as informações no console
const paragrafo=document.createElement('p');//criar um elemento de parágrafo

paragrafo.classList.add('graficos-container__texto');//adiciona uma classe do CSS ao parágrafo

paragrafo.innerHTML = `Você sabia que o mundo tem <span>${dados.pessoasNoMundo} bilhões </span> de pessoas e que aproximadamente <span>${dados.pessoasConectadas} bilhões</span>
estão conectadas em alguma rede social e passam em média <span>${dados.horas} horas e ${minutos} minutos</span> horas conectadas.`//Insere o texto "Você sabia que o mundo tem"+total_pessoas_mundo
 
const container=document.getElementById('graficos-container');//cria a variável "container", seleciona o ID(graficos-container) na section do HTML
container.appendChild(paragrafo);//Insere o parágrafo dentro do "container"
}
visualizarInformacoesGlobais();//chama a função