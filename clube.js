let coffeeQuantity = 0;  // Quantidade de cafés que o usuário escolhe
let moagemType = "";     // Tipo de moagem escolhido pelo usuário
let torraType = "";      // Tipo de torra escolhido pelo usuário
let planName = "";       // Nome do plano de assinatura
let planPrice = "";      // Preço total do plano

// Preço de acordo com a quantidade de cafés selecionados
const prices = {
  3: 131.50,
  4: 172.00,
  5: 212.50,
  6: 293.50,
  7: 293.50,
  8: 334.50,
  9: 374.50,
  10: 415.00,
  11: 455.50,
  12: 496.00
};

// Função chamada quando o usuário clica no botão "Próximo"
document.getElementById("nextStepBtn").addEventListener("click", function(event) {
  // Previne o comportamento padrão de envio de formulário
  event.preventDefault();

  // Coleta as escolhas do usuário a partir dos inputs do formulário
  coffeeQuantity = parseInt(document.getElementById("coffeeQuantity").value); // Obtém a quantidade de cafés
  moagemType = document.getElementById("moagem").value; // Obtém o tipo de moagem
  torraType = document.getElementById("torra").value; // Obtém o tipo de torra

  // Verifica se a quantidade de cafés está dentro do limite permitido (mínimo de 3 cafés e máximo de 12)
  if (coffeeQuantity < 3 || coffeeQuantity > 12) {
    alert("A quantidade de cafés deve ser entre 3 e 12.");
    return; // Impede o processo de continuar caso a quantidade seja inválida
  }

  // Obtém o preço com base na quantidade de cafés selecionados
  const totalPrice = prices[coffeeQuantity];

  // Atualiza o nome e preço do plano com as informações coletadas
  planName = `Clube de Assinatura Lêmen Koffie - ${coffeeQuantity} Cafés`;
  planPrice = `R$ ${totalPrice.toFixed(2)}/mês`;

  // Exibe as informações do plano na seção da página
  const planSection = document.getElementById("planSection");
  const planInfo = document.getElementById("planInfo");

  // Insere as informações coletadas (quantidade, moagem, torra e preço) na página
  planInfo.innerHTML = `
    <p>Quantidade de cafés: ${coffeeQuantity} x 250g</p>
    <p>Moagem: ${moagemType === 'grao' ? 'Em grão' : 'Já moído'}</p> 
    <p>Torra: ${torraType === 'media' ? 'Torra média' : torraType === 'clara' ? 'Torra clara' : 'Torra escura'}</p> 
    <p><strong>Preço total: ${planPrice}</strong></p>
  `;

  // Exibe a seção do plano de assinatura
  planSection.style.display = "block";
});

// Função chamada quando o usuário clica no botão "Assinar"
function subscribe() {
  const modal = document.getElementById("modal");
  const confirmationText = document.getElementById("confirmation-text");

  // Atualiza o texto dentro do modal com as informações do plano escolhido
  confirmationText.innerHTML = `Você escolheu o ${planName}. O preço é ${planPrice}.<br><br>Deseja confirmar a assinatura?`;
  modal.style.display = "flex"; // Exibe o modal de confirmação
}

// Função para fechar o modal de confirmação
function closeModal() {
  document.getElementById("modal").style.display = "none"; // Fecha o modal de confirmação
}

// Função para exibir o modal de opções de pagamento
function showPaymentMethods() {
  document.getElementById("modal").style.display = "none"; // Fecha o modal de confirmação
  const paymentModal = document.getElementById("paymentModal");
  paymentModal.style.display = "flex"; // Exibe o modal de pagamento
}

// Função para fechar o modal de pagamento
function closePaymentModal() {
  document.getElementById("paymentModal").style.display = "none"; // Fecha o modal de pagamento
}

// Função para simular a confirmação do pagamento e exibir uma mensagem de sucesso
function confirmPayment(paymentMethod) {
  alert(`Pagamento confirmado via ${paymentMethod}. Obrigado por escolher o Lêmen Koffie!`);
  closePaymentModal(); // Fecha o modal de pagamento
  window.location.href = "success.html"; // Redireciona para a página de sucesso
}
