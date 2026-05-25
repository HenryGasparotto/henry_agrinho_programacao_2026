// Mapeando os elementos da página
const chkTecnologia = document.getElementById('chk-tecnologia');
const chkAgua = document.getElementById('chk-Agua');
const chkReflorestamento = document.getElementById('chk-Reflorestamento');

const txtProducao = document.getElementById('score-producao');
const txtAmbiente = document.getElementById('score-ambiente');
const txtFeedback = document.getElementById('mensagem-feedback');

// Função que calcula o impacto das escolhas
function atualizarSimulador() {
    // Valores iniciais (caso nenhuma prática sustentável seja adotada)
    let producao = 100;
    let ambiente = 40;

    // Se ligar a tecnologia: aumenta muito a produção e ajuda um pouco o ambiente
    if (chkTecnologia.checked) {
        producao += 20;
        ambiente += 15;
    }

    // Se ligar o manejo de água: economiza recursos (melhora muito o ambiente)
    if (chkAgua.checked) {
        ambiente += 20;
    }

    // Se fizer reflorestamento/rotação: garante o futuro da terra
    if (chkReflorestamento.checked) {
        producao += 5; // Solo fértil produz mais a longo prazo
        ambiente += 25;
    }

    // Atualiza os textos na tela
    txtProducao.innerText = `${producao}%`;
    txtAmbiente.innerText = `${ambiente}%`;

    // Lógica das mensagens de Feedback dinâmico
    if (chkTecnologia.checked && chkAgua.checked && chkReflorestamento.checked) {
        txtFeedback.innerText = "Excelente! Você alcançou o equilíbrio perfeito: Alta produção com proteção máxima!";
        txtFeedback.style.color = "#2e7d32"; // Verde
    } else if (!chkTecnologia.checked && !chkAgua.checked && !chkReflorestamento.checked) {
        txtFeedback.innerText = "Alerta: Práticas antigas esgotam o solo e os recursos a longo prazo.";
        txtFeedback.style.color = "#d32f2f"; // Vermelho
    } else {
        txtFeedback.innerText = "Bom caminho! Adicione mais práticas para equilibrar ainda mais sua fazenda.";
        txtFeedback.style.color = "#8d6e63"; // Marrom/Terra
    }
}

// Escutando os cliques nas caixas de seleção
chkTecnologia.addEventListener('change', atualizarSimulador);
chkAgua.addEventListener('change', atualizarSimulador);
chkReflorestamento.addEventListener('change', atualizarSimulador);

// Inicializa a mensagem correta ao carregar a página
atualizarSimulador();