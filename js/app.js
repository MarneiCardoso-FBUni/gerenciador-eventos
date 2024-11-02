
// Guarda o conteúdo do formulário
const formulario = document.getElementById('formulario');

// Envia os dados quando o usuário clica no botão Adicionar Evento
formulario.addEventListener('submit', function(evento) {
    // Previne a ação padrão do evento (submit/envio do form)
    evento.preventDefault();

    adicionarEvento();
});

function adicionarEvento() {
    // Busca os dados da LocalStorage (se houver), senão cria um array vazio
    const eventos = JSON.parse(localStorage.getItem('eventos')) || [];

    // Guarda os dados informados no formulário
    const nomeEvento = formulario.nomeEvento.value;
    const dataEvento = formulario.dataEvento.value;

    // Adiciona o evento na lista de eventos
    eventos.push(
        {
            nomeEvento,
            dataEvento
        }
    );

    // Guarda a lista atualizada no LocalStorage
    localStorage.setItem('eventos', JSON.stringify(eventos));

    mostrarEventos();
}

function mostrarEventos() {
    const eventos = JSON.parse(localStorage.getItem('eventos')) || [];
    const lista = document.getElementById('lista');
    lista.innerHTML = '';

    eventos.forEach(evento => {
        const item = document.createElement('li');
        item.textContent = evento.nomeEvento + " - " + evento.dataEvento;
        lista.appendChild(item);
    });
}

// Chama a função mostrarEventos() ao carregar a página
mostrarEventos();
