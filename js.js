var products = [
  { id: 1, name: "Bife com batata", price: 30.0 },
  { id: 2, name: "Coxa de Frango", price: 25.0 },
  { id: 3, name: "Carne de panela", price: 22.0 },
  { id: 4, name: "Farofa", price: 10.0 },
  { id: 5, name: "Salada", price: 8.0 },
  { id: 6, name: "Bife com batata", price: 12.0 },
];

const formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

function calc() {
  output = document.getElementById("output");
  const quantities = document.getElementsByName("quantity")
  output.innerHTML = "";
  var total = 0

  for(var input of quantities){
    const id = input.id
    output.innerHTML += `Caro</br>`;
    output.innerHTML += `Segue os dados do seu pedido</br>`;

    output.innerHTML += `Produto: ${products[id-1].name} - Preço: ${formatter.format(products[id-1].price)} - Quantidade: ${input.value} </br>`;
    total += formatter.format(products[id-1].price) * parseInt(input.value)

  }
  output.innerHTML += `Preço Final: ${total}</br></br>`;

}
