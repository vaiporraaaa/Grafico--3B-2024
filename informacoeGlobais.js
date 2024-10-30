const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

console.log(url);
/*função assincrona, espera até que toda a 
requisição seja executada, ou seja,
todos os dados sejam enviadoss*/
async function visualizarInformacoesGlobais(params) {
    //contante que armazena uma repossta  await=espera ////fetch=faz a requisição
    const res = await fetch(url);
    const dados = await res.json();//espera as reposta erem convertidas em JSON
    const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9).toFixed(1);//cria uma variável, pega os "dados.total_pessoas_conectadas" e divide um bilhão
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9).toFixed(1);
    const horas = parseInt(dados.tempo_medio)//cria uma variável que utiliza apenas a parte inteira do numero de horas
    //cria ua variável que utiliza apenas os minuto das horas faz o arredondamento com a função "Math.round()"
    const minutos = Math.round((dados.tempo_medio - horas) * 60);
    //cria uma variável que calcula o percentual de pessoas conectadas no mundo e fixa para exibir com duas casas decimais
    const porcentagem = ((pessoasConectadas / pessoasNoMundo) * 100).toFixed(1);

    console.log(dados);//visualizar as informações no cosole
    const paragrafo = document.createElement('p');//criar um elemento de parágrafo

    paragrafo.classList.add('graficos-container__texto');//adiciona uma clase do CSS ao parégrafo

    /*insere o texto "Você sabia que o mundo tem "+total_pessoas_mundo ...*/
    paragrafo.innerHTML = `Você sabia que o mundo tem <span> ${pessoasNoMundo} bilhões </span> de pesoas
e que aproximadamente <span>${pessoasConectadas} bilhões </span>  estão conectadas em alguma
rede social e passam em média <span>${horas} horas</span> e <span> ${minutos} minutos</span> conectadas.<br>
Isso significa que aproximadamente <span>${porcentagem}%</span> 
de pessoas estão conctadas em alguma rede social

`
    //cria a variável "container", seleciona o ID "graficos-container" na section do HTML 
    const container = document.getElementById('graficos-container');
    container.appendChild(paragrafo);//insere o paragrafo dentro do "container"

}
visualizarInformacoesGlobais();//chama a função 