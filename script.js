const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "afirmação"
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "afirmação"
            }
        ]
    },
    // Aqui estariam as outras perguntas do jogo, seguindo a mesma estrutura.
    // Por exemplo:
    // {
    //     enunciado: "Com a descoberta desta nova tecnologia, qual o seu próximo passo?",
    //     alternativas: [
    //         {
    //             texto: "Pesquisar mais sobre como ela funciona.",
    //             afirmacao: "afirmação"
    //         },
    //         {
    //             texto: "Compartilhar a novidade com amigos e familiares.",
    //             afirmacao: "afirmação"
    //         }
    //     ]
    // }
];

// 2. Função mostraAlternativas() completa
// Esta função é responsável por criar, preencher com texto, adicionar um ouvinte de evento e exibir cada botão de alternativa na tela.
function mostraAlternativas(){
    // O loop for...of percorre cada objeto de alternativa na lista de alternativas da pergunta atual.
    for(const alternativa of perguntaAtual.alternativas) {
        // Cria um novo elemento HTML de botão.
        const botaoAlternativa = document.createElement("button");
        // Define o texto que aparecerá no botão, usando a propriedade 'texto' do objeto alternativa.
        botaoAlternativa.textContent = alternativa.texto;
        // Adiciona um ouvinte de evento de clique ao botão.
        // Quando o botão é clicado, a função anônima é executada.
        botaoAlternativa.addEventListener("click", function(){
            // Incrementa a variável 'atual' para avançar para a próxima pergunta.
            atual++;
            // Chama a função mostraPergunta() novamente para exibir a próxima pergunta e suas alternativas.
            mostraPergunta();
        })
        // Adiciona o botão criado como um filho dentro do elemento 'caixaAlternativas' no HTML.
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

// 3. Função mostraPergunta() com a chamada para mostraAlternativas()
// Esta função é responsável por exibir o enunciado da pergunta e agora também chama mostraAlternativas() para exibir os botões correspondentes.
function mostraPergunta() {
    // Define a pergunta atual com base no índice 'atual'.
    perguntaAtual = perguntas[atual];
    // Define o texto do enunciado da pergunta na caixa de perguntas.
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    // Chama a função para exibir os botões de alternativa da pergunta atual.
    mostraAlternativas();
}

// Chamada inicial da função para começar o jogo (geralmente no final do script ou após as declarações)
// Exemplo:
// mostraPergunta();
