function mostrar(seccion) {
  document.querySelectorAll("section").forEach(s => s.classList.remove("visible"));
  document.getElementById(seccion).classList.add("visible");
}

const form = document.getElementById("formTicket");
const lista = document.getElementById("listaTickets");
const total = document.getElementById("totalTickets");
const ultimo = document.getElementById("ultimoTicket");

let tickets = [];

form.addEventListener("submit", e => {
  e.preventDefault();
  const asunto = document.getElementById("asunto").value;
  const categoria = document.getElementById("categoria").value;
  const descripcion = document.getElementById("descripcion").value;

  const ticket = { id: tickets.length + 1, asunto, categoria, descripcion };
  tickets.push(ticket);

  const li = document.createElement("li");
  li.textContent = `${ticket.id}. [${categoria}] ${asunto}`;
  lista.appendChild(li);

  total.textContent = tickets.length;
  ultimo.textContent = asunto;

  form.reset();
  alert("✅ Ticket creado correctamente");
});

