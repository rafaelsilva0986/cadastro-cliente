const nome = document.querySelector('#nome');
const telefone = document.querySelector('#telefone');
const btcad = document.querySelector('#btcad');
const btencerrar = document.querySelector('#btencerrar');
const lista_de_clientes = document.querySelector('#lista_de_clientes');
const sorteio = document.querySelector('#sorteio');
const cadastro = document.querySelector('.caixa_cad');
const bt_sortear = document.querySelector('#bt_sortear');
const sorteador = document.querySelector('#sorteador');

const lista_clientes = []
console.log(sorteado)
function cadastrar(){
	lista_clientes.push([nome.value, telefone.value])
	lista_de_clientes.innerHTML += nome.value + ' - ' + telefone.value + '<br>'
	nome.value = ''
	telefone.value = ''
	nome.focus()
}

function encerrar(){
	sorteio.classList.add('ativo')
	cadastro.classList.add('desativo')
}

function sortear(){
	const numero_aleatorio = Math.floor(Math.random() * lista_clientes.length)
	// console.log(numero_aleatorio)
	sorteado.innerHTML = "Nome: " + lista_clientes[numero_aleatorio][0] + "<br>" + "Telefone: " + lista_clientes[numero_aleatorio][1]
}

btcad.addEventListener('click', cadastrar)
btencerrar.addEventListener('click', encerrar)
bt_sortear.addEventListener('click', sortear)

