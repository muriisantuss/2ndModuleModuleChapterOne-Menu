var products = [
  { id: 1, name: "Bife com batata", price: 30.0 },
  { id: 2, name: "Coxa de Frango", price: 25.0 },
  { id: 3, name: "Carne de panela", price: 22.0 },
  { id: 4, name: "Farofa", price: 10.0 },
  { id: 5, name: "Salada", price: 8.0 },
  { id: 6, name: "Bife com batata", price: 12.0 },
];

const formatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

function calc() {
  output = document.getElementById("output");
  const quantities = document.getElementsByName("quantity");
  var finalPrice = document.getElementsByClassName("finalPrice")[0];
  output.innerHTML = "";
  var total = 0;

  output.innerHTML += `Caro(a)</br>`;
  output.innerHTML += `Segue os dados do seu pedido:</br></br>`;

  output.innerHTML += `<ul id="orderList"></ul>`;
  const orderList = document.getElementById("orderList");

  for (var input of quantities) {
    const id = input.id;

    const listItem = document.createElement("li");
    listItem.innerHTML = `Prato: ${products[id-1].name} - Preço: ${formatter.format(products[id-1].price)} - Quantidade: ${input.value}`;

    orderList.appendChild(listItem);
    total += products[id - 1].price * parseFloat(input.value);
    console.log(total);
  }
  finalPrice.innerHTML = `Preço Final: ${formatter.format(total)} </br></br>`;
}
