
//Guarda o conteúdo do formulário
const formulario = document.querySelector('#formulario');
// const formulario = document.getElementById('formulario');

// Envia os dados quando o usuário clica no botão Adicionar Evento
formulario.addEventListener("submit", (evento) => {
    // Previne a ação padrão do evento (submit/envio do form)
    evento.preventDefault();

    adicionarEvento();
    mostrarEventos();
});

function adicionarEvento() {
    // Busca os dados da LocalStorage (se houver), senão cria um array vazio
    const eventos = JSON.parse(localStorage.getItem("eventos")) || [];

    // Guarda os dados informados no formulário
    const nomeEvento = formulario.nomeEvento.value;
    const dataEvento = formulario.dataEvento.value;

    // Adiciona o evento na lista de eventos (array)
    eventos.push(
        {
            // Key          Value
            // nomeEvento:  nomeEvento,
            nomeEvento,
            dataEvento
        }
    );

    // Guarda a lista atualizada no LocalStorage
    localStorage.setItem("eventos", JSON.stringify(eventos));
}

function mostrarEventos() {
    // Busca os dados da LocalStorage (se houver), senão cria um array vazio
    const eventos = JSON.parse(localStorage.getItem("eventos")) || [];
    const lista = document.querySelector("#lista");
    lista.textContent = "";

    eventos.forEach(evento => {
        // Cria o elemento <li> para o evento
        const item = document.createElement("li");
        item.textContent = evento.nomeEvento + " - " + evento.dataEvento;

        // PARTE 2
        // const dataEvento = new Date(evento.dataEvento);  // PARTE 2
        // Converte a data do evento para o formato brasileiro
        // item.textContent = `
        //     ${evento.nomeEvento}
        //     (${dataEvento.toLocaleDateString('pt-BR')})
        // `;

        // Adiciona o item à lista (HTML)
        lista.appendChild(item);
    });
}

mostrarEventos();
